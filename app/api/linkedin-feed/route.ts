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
      },
      { status: 200 }
    );
  }

  try {
    // LinkedIn Shares API (may require special app permissions)
    const url = new URL("https://api.linkedin.com/v2/shares");
    url.searchParams.set("q", "owners");
    url.searchParams.set("owners", OWNER_URN);
    url.searchParams.set("sortBy", "LAST_MODIFIED");
    url.searchParams.set("sharesPerOwner", "10");

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
      throw new Error(`LinkedIn API error ${res.status}: ${text}`);
    }

    const json: any = await res.json();
    const elements: any[] = json.elements || [];

    // Map to lightweight feed items
    const items = elements.map((el: any) => {
      const id = el.id || el.activity || Math.random().toString(36).slice(2);

      // Attempt to parse text from different shapes
      const text =
        el.text?.text ||
        el.commentary?.text ||
        el.specificContent?.["com.linkedin.ugc.ShareContent"]?.shareCommentary
          ?.text ||
        undefined;

      // Construct a URL to the activity when possible
      let url = "https://www.linkedin.com/company/cybersecuritystack/";
      if (el.activity) {
        url = `https://www.linkedin.com/feed/update/${el.activity}`;
      }

      // Image extraction (best effort)
      const media = el.content?.contentEntities?.[0];
      const imageUrl =
        media?.thumbnails?.[0]?.imageSpecificContent?.url ||
        media?.thumbnails?.[0]?.resolvedUrl ||
        media?.entityLocation ||
        undefined;

      const createdAt = el.lastModified?.time || el.created?.time || undefined;

      return {
        id: String(id),
        text,
        url,
        createdAt: createdAt ? new Date(createdAt).toISOString() : undefined,
        imageUrl,
      };
    });

    return NextResponse.json({ items });
  } catch (err: any) {
    // Never leak token or full errors to client
    console.error("/api/linkedin-feed error:", err?.message || err);
    return NextResponse.json(
      {
        items: [],
        error: "Unable to fetch LinkedIn feed right now.",
      },
      { status: 200 }
    );
  }
}
