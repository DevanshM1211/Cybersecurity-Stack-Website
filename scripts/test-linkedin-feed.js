#!/usr/bin/env node

/**
 * LinkedIn Feed Testing Script
 *
 * This script helps you test all three LinkedIn feed methods locally
 * without needing to run the full Next.js server.
 *
 * Usage:
 *   node scripts/test-linkedin-feed.js [method]
 *
 * Methods:
 *   api    - Test LinkedIn API (requires LINKEDIN_ACCESS_TOKEN)
 *   sheet  - Test Google Sheets integration
 *   static - Test static JSON file
 *   all    - Test all methods (default)
 */

require("dotenv").config({ path: ".env.local" });
const fs = require("fs");
const path = require("path");

const COLORS = {
  reset: "\x1b[0m",
  bright: "\x1b[1m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  red: "\x1b[31m",
  cyan: "\x1b[36m",
  blue: "\x1b[34m",
};

function log(message, color = "reset") {
  console.log(`${COLORS[color]}${message}${COLORS.reset}`);
}

function section(title) {
  console.log("\n" + "=".repeat(60));
  log(title, "bright");
  console.log("=".repeat(60));
}

// Test Method 1: LinkedIn API
async function testLinkedInAPI() {
  section("Testing Method 1: LinkedIn API");

  const accessToken = process.env.LINKEDIN_ACCESS_TOKEN;
  const orgId = process.env.LINKEDIN_ORGANIZATION_ID;
  const ownerUrn = orgId
    ? `urn:li:organization:${orgId}`
    : process.env.LINKEDIN_OWNER_URN;

  if (!accessToken || !ownerUrn) {
    log("❌ NOT CONFIGURED", "red");
    log(
      "   Missing: LINKEDIN_ACCESS_TOKEN and/or LINKEDIN_ORGANIZATION_ID",
      "yellow"
    );
    log("   See LINKEDIN_SETUP.md for setup instructions", "cyan");
    return { success: false, reason: "not_configured" };
  }

  log("✓ Access Token: " + maskToken(accessToken), "green");
  log("✓ Owner URN: " + ownerUrn, "green");

  try {
    // Use LinkedIn v2 ugcPosts endpoint (Community Management API)
    const url = new URL("https://api.linkedin.com/v2/ugcPosts");
    url.searchParams.set("q", "authors");
    url.searchParams.set("authors", `List(${ownerUrn})`);
    url.searchParams.set("sortBy", "LAST_MODIFIED");
    url.searchParams.set("count", "10");

    log("\nFetching from LinkedIn API...", "cyan");
    log("URL: " + url.toString(), "blue");

    const response = await fetch(url.toString(), {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "X-Restli-Protocol-Version": "2.0.0",
      },
    });

    if (!response.ok) {
      const text = await response.text();
      log(`❌ API Error: ${response.status} ${response.statusText}`, "red");
      log("Response: " + text.substring(0, 200), "yellow");

      if (response.status === 401) {
        log(
          "\n💡 Tip: Access token may be expired. Re-run OAuth flow.",
          "yellow"
        );
      } else if (response.status === 403) {
        log(
          '\n💡 Tip: Check app permissions. May need "Share on LinkedIn" product.',
          "yellow"
        );
      }

      return { success: false, reason: "api_error", status: response.status };
    }

    const data = await response.json();
    const elements = data.elements || [];

    log(`✅ SUCCESS: Fetched ${elements.length} posts`, "green");

    if (elements.length > 0) {
      log("\nFirst post preview:", "cyan");
      const first = elements[0];
      const text = first.commentary || first.text?.text || "(no text)";
      log("  Text: " + text.substring(0, 100) + "...", "blue");
      log("  ID: " + (first.id || "unknown"), "blue");
    } else {
      log(
        "\n⚠️  No posts found. Company page may not have any posts.",
        "yellow"
      );
    }

    return { success: true, count: elements.length };
  } catch (error) {
    log("❌ FAILED: " + error.message, "red");
    log("Stack: " + error.stack, "yellow");
    return { success: false, reason: "exception", error: error.message };
  }
}

// Test Method 2: Google Sheets
async function testGoogleSheets() {
  section("Testing Method 2: Google Sheets");

  const sheetId = process.env.GOOGLE_SHEET_ID || process.env.SHEET_ID;
  const sheetTab =
    process.env.GOOGLE_SHEET_TAB || process.env.SHEET_TAB || "Posts";
  const jsonUrl = process.env.SHEET_JSON_URL;

  const url = jsonUrl
    ? jsonUrl
    : sheetId
    ? `https://opensheet.elk.sh/${sheetId}/${encodeURIComponent(sheetTab)}`
    : null;

  if (!url) {
    log("❌ NOT CONFIGURED", "red");
    log("   Missing: GOOGLE_SHEET_ID or SHEET_JSON_URL", "yellow");
    log("   See LINKEDIN_SETUP.md for setup instructions", "cyan");
    return { success: false, reason: "not_configured" };
  }

  log("✓ Sheet URL: " + url, "green");

  try {
    log("\nFetching from Google Sheets...", "cyan");

    const response = await fetch(url);

    if (!response.ok) {
      const text = await response.text();
      log(`❌ API Error: ${response.status} ${response.statusText}`, "red");
      log("Response: " + text.substring(0, 200), "yellow");

      if (response.status === 404) {
        log("\n💡 Tip: Sheet ID or tab name may be incorrect.", "yellow");
      } else if (response.status === 403) {
        log(
          "\n💡 Tip: Sheet may not be published or shared publicly.",
          "yellow"
        );
      }

      return { success: false, reason: "api_error", status: response.status };
    }

    const rows = await response.json();

    if (!Array.isArray(rows)) {
      log("❌ Invalid response: Expected array, got " + typeof rows, "red");
      return { success: false, reason: "invalid_response" };
    }

    log(`✅ SUCCESS: Fetched ${rows.length} rows`, "green");

    if (rows.length > 0) {
      log("\nFirst row preview:", "cyan");
      const first = rows[0];
      log("  Columns: " + Object.keys(first).join(", "), "blue");
      log(
        "  Data: " + JSON.stringify(first, null, 2).substring(0, 200),
        "blue"
      );

      // Validate expected columns
      const hasUrl = "url" in first || "URL" in first || "Link" in first;
      if (!hasUrl) {
        log('\n⚠️  Warning: No "url" column found!', "yellow");
        log(
          "   Expected columns: id, title, preview, author, date, url",
          "yellow"
        );
      }
    } else {
      log("\n⚠️  No rows found. Sheet may be empty.", "yellow");
    }

    return { success: true, count: rows.length };
  } catch (error) {
    log("❌ FAILED: " + error.message, "red");
    return { success: false, reason: "exception", error: error.message };
  }
}

// Test Method 3: Static JSON
function testStaticJSON() {
  section("Testing Method 3: Static JSON");

  const filePath = path.join(__dirname, "../data/linkedin-posts.json");

  if (!fs.existsSync(filePath)) {
    log("❌ FILE NOT FOUND: " + filePath, "red");
    return { success: false, reason: "file_not_found" };
  }

  log("✓ File exists: " + filePath, "green");

  try {
    const content = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(content);

    if (!data.items || !Array.isArray(data.items)) {
      log("❌ Invalid format: Expected { items: [...] }", "red");
      return { success: false, reason: "invalid_format" };
    }

    log(`✅ SUCCESS: ${data.items.length} posts in JSON file`, "green");

    if (data.items.length > 0) {
      log("\nFirst post preview:", "cyan");
      const first = data.items[0];
      log("  ID: " + (first.id || "missing"), "blue");
      log("  Title: " + (first.title || "missing"), "blue");
      log("  URL: " + (first.url || "missing"), "blue");

      // Validate structure
      const requiredFields = ["id", "url"];
      const missing = requiredFields.filter((field) => !(field in first));
      if (missing.length > 0) {
        log("\n⚠️  Warning: Missing fields: " + missing.join(", "), "yellow");
      }
    }

    return { success: true, count: data.items.length };
  } catch (error) {
    log("❌ FAILED: " + error.message, "red");
    if (error instanceof SyntaxError) {
      log("   File contains invalid JSON", "yellow");
    }
    return { success: false, reason: "exception", error: error.message };
  }
}

// Helper: Mask sensitive tokens
function maskToken(token) {
  if (!token || token.length <= 12) return "***";
  return token.slice(0, 6) + "..." + token.slice(-6);
}

// Main execution
async function main() {
  const method = process.argv[2] || "all";

  log("\n🔍 LinkedIn Feed Testing Tool", "bright");
  log(
    "Testing environment: " + (process.env.NODE_ENV || "development"),
    "cyan"
  );

  const results = {};

  if (method === "all" || method === "api") {
    results.api = await testLinkedInAPI();
  }

  if (method === "all" || method === "sheet") {
    results.sheet = await testGoogleSheets();
  }

  if (method === "all" || method === "static") {
    results.static = testStaticJSON();
  }

  // Summary
  section("Summary");

  const counts = Object.entries(results).map(([name, result]) => {
    const status = result.success ? "✅" : "❌";
    const count = result.count !== undefined ? `(${result.count} items)` : "";
    const reason = result.reason ? `[${result.reason}]` : "";

    return { name, status, count, reason, success: result.success };
  });

  counts.forEach(({ name, status, count, reason, success }) => {
    const color = success ? "green" : "red";
    log(`${status} ${name.toUpperCase()}: ${count} ${reason}`, color);
  });

  const anySuccess = counts.some((c) => c.success);
  const allSuccess = counts.every((c) => c.success);

  console.log("");

  if (allSuccess) {
    log(
      "🎉 All methods working! Your LinkedIn feed is fully configured.",
      "green"
    );
  } else if (anySuccess) {
    log(
      "⚠️  Some methods working. Your feed will use the available fallback.",
      "yellow"
    );
    log("   Configure all methods for maximum reliability.", "cyan");
  } else {
    log("❌ No methods working. Please configure at least one method.", "red");
    log("   See LINKEDIN_SETUP.md for detailed instructions.", "cyan");
  }

  console.log("");
  log("📚 For setup help, see: LINKEDIN_SETUP.md", "cyan");
  log("");

  // Exit code
  process.exit(anySuccess ? 0 : 1);
}

// Run if called directly
if (require.main === module) {
  main().catch((error) => {
    log("\n💥 Unhandled error: " + error.message, "red");
    console.error(error);
    process.exit(1);
  });
}

module.exports = { testLinkedInAPI, testGoogleSheets, testStaticJSON };
