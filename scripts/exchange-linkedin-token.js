#!/usr/bin/env node

/**
 * Exchange LinkedIn authorization code for access token
 *
 * Usage: node scripts/exchange-linkedin-token.js <authorization_code>
 */

const https = require("https");
const querystring = require("querystring");

// Get the authorization code from command line argument
const authCode = process.argv[2];

if (!authCode) {
  console.error("\n❌ Error: Authorization code is required\n");
  console.log(
    "Usage: node scripts/exchange-linkedin-token.js <authorization_code>\n"
  );
  console.log("Example:");
  console.log(
    "  node scripts/exchange-linkedin-token.js AQRIQlMloSggRRWiacjw...\n"
  );
  process.exit(1);
}

// LinkedIn credentials from .env.local
const CLIENT_ID = "78wetdeb4cgwjl";
const CLIENT_SECRET = "WPL_AP1.w2Op7A1hGWzC1xBl.YLf03w==";
const REDIRECT_URI =
  "https://cybersecuritystack.co.uk/api/linkedin/oauth/callback";

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("🔄 Exchanging LinkedIn Authorization Code for Access Token");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

const postData = querystring.stringify({
  grant_type: "authorization_code",
  code: authCode,
  redirect_uri: REDIRECT_URI,
  client_id: CLIENT_ID,
  client_secret: CLIENT_SECRET,
});

const options = {
  hostname: "www.linkedin.com",
  port: 443,
  path: "/oauth/v2/accessToken",
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
    "Content-Length": Buffer.byteLength(postData),
  },
};

const req = https.request(options, (res) => {
  let data = "";

  res.on("data", (chunk) => {
    data += chunk;
  });

  res.on("end", () => {
    console.log(`📡 Response Status: ${res.statusCode}\n`);

    if (res.statusCode === 200) {
      try {
        const json = JSON.parse(data);
        const accessToken = json.access_token;
        const expiresIn = json.expires_in;

        console.log("✅ SUCCESS! Access Token Retrieved\n");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log("📋 ACCESS TOKEN:");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
        console.log(accessToken);
        console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
        console.log(
          `⏱️  Expires in: ${expiresIn} seconds (${Math.round(
            expiresIn / 86400
          )} days)`
        );
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

        console.log("📝 NEXT STEPS:\n");
        console.log("1. Copy the access token above");
        console.log("2. Open .env.local file");
        console.log(
          "3. Find the line: # LINKEDIN_ACCESS_TOKEN=your_access_token_from_oauth_flow"
        );
        console.log("4. Uncomment and paste your token:\n");
        console.log(`   LINKEDIN_ACCESS_TOKEN=${accessToken}\n`);
        console.log("5. Save the file");
        console.log("6. Restart your dev server (npm run dev)\n");
        console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
      } catch (e) {
        console.error("❌ Error parsing response:", e.message);
        console.log("\nRaw response:", data);
      }
    } else {
      console.error("❌ Token Exchange Failed\n");
      console.log("Response:", data);
      console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
      console.log("💡 TROUBLESHOOTING:\n");
      console.log(
        "• Authorization codes expire quickly (usually within 10 minutes)"
      );
      console.log("• Make sure you copied the FULL code from the URL");
      console.log("• Try getting a new authorization code from the start URL");
      console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
    }
  });
});

req.on("error", (e) => {
  console.error("❌ Request Error:", e.message);
});

req.write(postData);
req.end();
