import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Redirects the user to LinkedIn to approve access for reading organization posts
export async function GET() {
  const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
  const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI; // e.g. https://your-domain.com/api/linkedin/oauth/callback
  const SCOPE = process.env.LINKEDIN_SCOPE || "r_organization_social";

  if (!CLIENT_ID || !REDIRECT_URI) {
    return NextResponse.json(
      {
        error:
          "LinkedIn OAuth not configured. Set LINKEDIN_CLIENT_ID and LINKEDIN_REDIRECT_URI environment variables.",
      },
      { status: 500 }
    );
  }

  // Simple CSRF protection via state cookie
  const state = crypto.randomUUID();
  cookies().set("li_oauth_state", state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 10, // 10 minutes
    path: "/",
  });

  const url = new URL("https://www.linkedin.com/oauth/v2/authorization");
  url.searchParams.set("response_type", "code");
  url.searchParams.set("client_id", CLIENT_ID);
  url.searchParams.set("redirect_uri", REDIRECT_URI);
  url.searchParams.set("scope", SCOPE);
  url.searchParams.set("state", state);

  return NextResponse.redirect(url.toString());
}
