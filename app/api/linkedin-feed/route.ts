import { NextResponse } from "next/server";

// Optional: ISR-like caching for this route
export const revalidate = 300; // seconds

export async function GET() {
  const ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN;
  const ORG_ID = process.env.LINKEDIN_ORGANIZATION_ID; // e.g., 123456789
  const OWNER_URN = ORG_ID
    ? `urn:li:organization:${ORG_ID}`
    : process.env.LINKEDIN_OWNER_URN; // fallback to member URN if provided

  if (!ACCESS_TOKEN || !OWNER_URN) {
    // Graceful empty response with hint
    return NextResponse.json(
      {
        items: [],
        message:
          "LinkedIn feed not configured. Set LINKEDIN_ACCESS_TOKEN and LINKEDIN_ORGANIZATION_ID or LINKEDIN_OWNER_URN in your environment.",
        code: "NOT_CONFIGURED",
      },
      { status: 200 }
    );
  }

  try {
    // LinkedIn UGC Posts API (Community Management)
    // Note: This requires r_organization_social scope
    const url = new URL("https://api.linkedin.com/v2/ugcPosts");
    url.searchParams.set("q", "authors");
    url.searchParams.set("authors", `List(${OWNER_URN})`);
    url.searchParams.set("sortBy", "LAST_MODIFIED");
    url.searchParams.set("count", "10");

    const res = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "X-Restli-Protocol-Version": "2.0.0",
      },
      // Cache on the server for a short time
      next: { revalidate: 300 },
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("LinkedIn API error:", {
        status: res.status,
        statusText: res.statusText,
        response: text,
      });
      throw new Error(
        `LinkedIn API returned ${res.status} ${res.statusText}. Please check your credentials and permissions.`
      );
    }

    const json: any = await res.json();
    const elements: any[] = json.elements || [];

    // Map to lightweight feed items (updated for new API structure)
    const items = elements.map((el: any) => {
      const id = el.id || Math.random().toString(36).slice(2);

      // Extract text from commentary
      const text = el.commentary || el.text?.text || undefined;

      // Construct LinkedIn post URL
      let url = "https://www.linkedin.com/company/cybersecuritystack/";
      if (id) {
        // Modern format: urn:li:share:1234567890 or activity:1234567890
        const activityId = id
          .replace("urn:li:share:", "")
          .replace("urn:li:activity:", "");
        url = `https://www.linkedin.com/feed/update/${activityId}`;
      }

      // Image extraction from content array
      let imageUrl = undefined;
      if (el.content && Array.isArray(el.content)) {
        const mediaContent = el.content.find((c: any) => c.media);
        imageUrl = mediaContent?.media?.thumbnails?.[0]?.url || undefined;
      }

      const createdAt = el.publishedAt || el.createdAt || undefined;

      return {
        id: String(id),
        text,
        url,
        createdAt: createdAt ? new Date(createdAt).toISOString() : createdAt,
        imageUrl,
      };
    });

    return NextResponse.json({ items });
  } catch (err: any) {
    // Never leak token or full errors to client
    console.error("/api/linkedin-feed error:", {
      message: err?.message || "Unknown error",
      stack: process.env.NODE_ENV === "development" ? err?.stack : undefined,
    });

    // Determine error type for better client messaging
    const isAuthError =
      err?.message?.includes("401") || err?.message?.includes("403");
    const isRateLimitError = err?.message?.includes("429");

    return NextResponse.json(
      {
        items: [],
        error: isAuthError
          ? "LinkedIn authentication failed. Please check credentials."
          : isRateLimitError
          ? "LinkedIn API rate limit exceeded. Please try again later."
          : "Unable to fetch LinkedIn feed right now. Please try again later.",
        code: isAuthError
          ? "AUTH_ERROR"
          : isRateLimitError
          ? "RATE_LIMIT"
          : "FETCH_ERROR",
      },
      { status: 200 }
    );
  }
}
