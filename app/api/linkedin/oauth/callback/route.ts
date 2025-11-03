import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// Handles LinkedIn redirect, exchanges code for access token, and shows it to the admin securely
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const err = searchParams.get("error");

  if (err) {
    const desc =
      searchParams.get("error_description") || "Authorization failed";
    return htmlResponse(`<h1>LinkedIn Authorization Failed</h1><p>${desc}</p>`);
  }

  const expectedState = cookies().get("li_oauth_state")?.value;
  if (!state || !expectedState || state !== expectedState) {
    return htmlResponse(
      `<h1>Authorization Error</h1><p>State validation failed. Please try again from the start link.</p>`,
      400
    );
  }

  if (!code) {
    return htmlResponse(
      `<h1>Authorization Error</h1><p>Missing authorization code.</p>`,
      400
    );
  }

  const CLIENT_ID = process.env.LINKEDIN_CLIENT_ID;
  const CLIENT_SECRET = process.env.LINKEDIN_CLIENT_SECRET;
  const REDIRECT_URI = process.env.LINKEDIN_REDIRECT_URI; // must match the start route config

  if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
    return htmlResponse(
      `<h1>Server Not Configured</h1><p>Missing LINKEDIN_CLIENT_ID, LINKEDIN_CLIENT_SECRET, or LINKEDIN_REDIRECT_URI.</p>`,
      500
    );
  }

  try {
    const tokenRes = await fetch(
      "https://www.linkedin.com/oauth/v2/accessToken",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: CLIENT_SECRET,
        }),
        // prevent any caching of token exchanges
        cache: "no-store",
      }
    );

    if (!tokenRes.ok) {
      const text = await tokenRes.text();
      return htmlResponse(
        `<h1>Token Exchange Failed</h1><pre>Status ${
          tokenRes.status
        }: ${escapeHtml(text)}</pre>`,
        500
      );
    }

    const json = await tokenRes.json();
    const accessToken: string | undefined = json.access_token;
    const expiresIn: number | undefined = json.expires_in;

    if (!accessToken) {
      return htmlResponse(
        `<h1>Token Exchange Failed</h1><p>No access_token returned.</p>`,
        500
      );
    }

    // Clear one-time state cookie
    cookies().set("li_oauth_state", "", { maxAge: 0, path: "/" });

    // Show the token to the admin with instructions.
    const masked = maskToken(accessToken);
    const message = `Copy the access token below and share it securely with your developer to enable automatic LinkedIn updates. Do not email passwords. Token typically expires in ${
      expiresIn || "(provider default)"
    } seconds.`;

    return htmlResponse(`
      <h1 style="font-family:system-ui, -apple-system, Segoe UI, Roboto;">LinkedIn Access Granted ✅</h1>
      <p>${escapeHtml(message)}</p>
      <p><strong>Masked token:</strong> <code>${escapeHtml(masked)}</code></p>
      <p><button id="reveal" style="padding:8px 12px;border:1px solid #999;border-radius:6px;cursor:pointer;">Reveal full token</button></p>
      <textarea id="token" style="width:100%;height:140px;font-family:monospace;display:none;">${escapeHtml(
        accessToken
      )}</textarea>
      <script>
        document.getElementById('reveal').addEventListener('click', function(){
          const ta = document.getElementById('token');
          ta.style.display = 'block';
          this.remove();
        });
      </script>
      <hr/>
      <p>Next steps:</p>
      <ol>
        <li>Copy the token above.</li>
        <li>Send it securely to your developer (or paste into your hosting provider's environment variable as LINKEDIN_ACCESS_TOKEN).</li>
        <li>Also share your LinkedIn Organization ID (numeric) or owner URN.</li>
        <li>Your website will start pulling the latest posts automatically.</li>
      </ol>
    `);
  } catch (e: any) {
    return htmlResponse(
      `<h1>Unexpected Error</h1><pre>${escapeHtml(
        e?.message || String(e)
      )}</pre>`,
      500
    );
  }
}

function htmlResponse(html: string, status = 200) {
  return new NextResponse(html, {
    status,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function maskToken(token: string) {
  if (token.length <= 12) return "***";
  return token.slice(0, 6) + "…" + token.slice(-6);
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
