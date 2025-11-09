#!/usr/bin/env node

/**
 * Script to guide through LinkedIn OAuth flow
 *
 * Usage:
 *   node scripts/complete-oauth.js
 *
 * This will guide you through getting your LinkedIn access token
 */

const fs = require("fs");
const path = require("path");

// Try to read .env.local if it exists
let clientId = "";
let redirectUri =
  "https://cybersecuritystack.co.uk/api/linkedin/oauth/callback";

try {
  const envPath = path.join(__dirname, "..", ".env.local");
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, "utf8");
    const clientIdMatch = envContent.match(/LINKEDIN_CLIENT_ID=(.+)/);
    const redirectMatch = envContent.match(/LINKEDIN_REDIRECT_URI=(.+)/);

    if (clientIdMatch) clientId = clientIdMatch[1].trim();
    if (redirectMatch) redirectUri = redirectMatch[1].trim();
  }
} catch (error) {
  // Silently fail if we can't read .env.local
}

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("🔐 LINKEDIN OAUTH FLOW GUIDE");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("⚠️  IMPORTANT PREREQUISITES:\n");
console.log(
  "✅ You must be an ADMIN of the Cyber Security Stack LinkedIn page"
);
console.log(
  "✅ Your LinkedIn app must be approved for r_organization_social scope"
);
console.log("✅ Development server must be running (npm run dev)\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("📋 STEP-BY-STEP INSTRUCTIONS:\n");

console.log("STEP 1: Verify Your LinkedIn App Settings");
console.log("──────────────────────────────────────────");
console.log("1. Go to: https://www.linkedin.com/developers/apps");
console.log(
  "2. Click on your app (Client ID: " + (clientId || "NOT SET") + ")"
);
console.log('3. Go to "Products" tab');
console.log('4. Verify "Share on LinkedIn" is added');
console.log('5. Go to "Auth" tab');
console.log("6. Verify redirect URL is set to:");
console.log(`   ${redirectUri}\n`);

console.log("STEP 2: Start Development Server");
console.log("──────────────────────────────────────────");
console.log("Open a new terminal and run:");
console.log("   npm run dev\n");
console.log('Wait for: "Ready on http://localhost:3000"\n');

console.log("STEP 3: Initiate OAuth Flow");
console.log("──────────────────────────────────────────");
console.log("In your browser, visit:");
console.log("   http://localhost:3000/api/linkedin/oauth/start\n");
console.log("This will redirect you to LinkedIn to authorize the app.\n");

console.log("STEP 4: Authorize the App");
console.log("──────────────────────────────────────────");
console.log("1. Log in to LinkedIn (use admin account for company page)");
console.log("2. Review the permissions requested");
console.log('3. Click "Allow" to authorize\n');

console.log("STEP 5: Get Your Access Token");
console.log("──────────────────────────────────────────");
console.log("After authorization, you'll be redirected to the callback URL.");
console.log("The page will display your access token.\n");
console.log("COPY THIS TOKEN - you'll need it!\n");

console.log("STEP 6: Add Token to .env.local");
console.log("──────────────────────────────────────────");
console.log("1. Open .env.local");
console.log("2. Find this line:");
console.log("   # LINKEDIN_ACCESS_TOKEN=your_access_token_here");
console.log("\n3. Uncomment and replace with your actual token:");
console.log("   LINKEDIN_ACCESS_TOKEN=AQV8I2Z...[your actual token]");
console.log("\n4. Save the file\n");

console.log("STEP 7: Test It Works");
console.log("──────────────────────────────────────────");
console.log("Run the test script:");
console.log("   npm run test:linkedin\n");
console.log("You should see: ✅ Method 1: LinkedIn API - Success!\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("🔄 ALTERNATIVE: Manual OAuth URL");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

if (clientId) {
  const state = Math.random().toString(36).substring(7);
  const scope = "r_organization_social";
  const oauthUrl =
    `https://www.linkedin.com/oauth/v2/authorization?` +
    `response_type=code&` +
    `client_id=${clientId}&` +
    `redirect_uri=${encodeURIComponent(redirectUri)}&` +
    `state=${state}&` +
    `scope=${scope}`;

  console.log("If the /api/linkedin/oauth/start route doesn't work,");
  console.log("you can use this direct URL:\n");
  console.log(oauthUrl);
  console.log("\n");
} else {
  console.log("⚠️  Client ID not found in .env.local");
  console.log("Please make sure LINKEDIN_CLIENT_ID is set.\n");
}

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("⚠️  TROUBLESHOOTING:\n");
console.log('❌ "Application does not have access to organization"');
console.log("   → You're not an admin of the company page");
console.log("   → Contact the page admin to add you\n");

console.log('❌ "invalid_scope"');
console.log("   → Your app doesn't have r_organization_social permission");
console.log('   → Add "Share on LinkedIn" product in app settings\n');

console.log('❌ "redirect_uri_mismatch"');
console.log("   → Redirect URI doesn't match app settings");
console.log("   → Update in LinkedIn app settings\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("💡 ACCESS TOKEN NOTES:\n");
console.log("• Tokens typically last 60 days");
console.log("• You'll need to refresh periodically");
console.log("• For production, implement token refresh flow");
console.log("• See LINKEDIN_SETUP.md for refresh token details\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("📚 NEED MORE HELP?\n");
console.log("See: LINKEDIN_SETUP.md (Method 1 section)");
console.log("See: LINKEDIN_TROUBLESHOOTING.md\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
