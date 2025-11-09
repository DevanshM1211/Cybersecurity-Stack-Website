#!/usr/bin/env node

/**
 * Script to fetch LinkedIn Organization ID
 *
 * Usage:
 *   node scripts/get-org-id.js
 *
 * This will help you find your organization ID using the LinkedIn API
 */

const COMPANY_PAGE_URL =
  "https://www.linkedin.com/company/cyber-security-stack/";

console.log("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("🔍 LINKEDIN ORGANIZATION ID FINDER");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("📝 METHOD 1: Manual (Recommended)\n");
console.log("1. Open your company page:");
console.log(`   ${COMPANY_PAGE_URL}`);
console.log('\n2. Right-click → "View Page Source" (or Cmd+Option+U)');
console.log('\n3. Press Cmd+F and search for: "organizationId"');
console.log('\n4. Look for: "organizationId":"12345678"');
console.log("\n5. Copy the numeric ID\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("📝 METHOD 2: From Company Page URL\n");
console.log("If your company URL looks like:");
console.log("   https://www.linkedin.com/company/12345678/");
console.log("\nThe number (12345678) IS your Organization ID!\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("📝 AFTER YOU FIND IT:\n");
console.log("1. Open .env.local");
console.log("2. Update this line:");
console.log("   LINKEDIN_ORGANIZATION_ID=your_organization_id_here");
console.log("\n3. Replace with your actual ID:");
console.log("   LINKEDIN_ORGANIZATION_ID=12345678");
console.log("\n4. Save the file\n");

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");

console.log("💡 TIP: Keep this number handy - you'll need it!\n");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n");
