# 🚀 LinkedIn OAuth Quick Start Guide

**Goal:** Get your Organization ID and Access Token to enable automatic LinkedIn post fetching.

---

## 🎯 Quick Summary

You need TWO things:

1. **Organization ID** - Identifies your LinkedIn company page
2. **Access Token** - Allows your app to read posts from that page

---

## 📍 PART 1: Get Organization ID (5 minutes)

### Option A: From Page Source (Easiest)

1. Open: https://www.linkedin.com/company/cyber-security-stack/
2. Press `Cmd+Option+U` (View Page Source)
3. Press `Cmd+F` and search: `"organizationId"`
4. Copy the number you find (e.g., `12345678`)

### Option B: From URL

If your company URL looks like:

```
https://www.linkedin.com/company/12345678/
```

The number `12345678` IS your Organization ID!

### Update .env.local

```bash
# Open .env.local
# Find this line:
LINKEDIN_ORGANIZATION_ID=your_organization_id_here

# Replace with your actual ID:
LINKEDIN_ORGANIZATION_ID=12345678
```

✅ **Done with Part 1!**

---

## 🔐 PART 2: Get Access Token via OAuth (10 minutes)

### Prerequisites

- ✅ You must be an **ADMIN** of the Cyber Security Stack LinkedIn page
- ✅ LinkedIn app must have "Share on LinkedIn" product added

### Step 1: Start Dev Server

```bash
npm run dev
```

Wait for: `✓ Ready on http://localhost:3000`

### Step 2: Start OAuth Flow

Open in your browser:

```
http://localhost:3000/api/linkedin/oauth/start
```

**OR use the direct URL (if above doesn't work):**

```
https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78wetdeb4cgwjl&redirect_uri=https%3A%2F%2Fcybersecuritystack.co.uk%2Fapi%2Flinkedin%2Foauth%2Fcallback&state=random123&scope=r_organization_social
```

### Step 3: Authorize

1. Log in to LinkedIn (use admin account)
2. Review permissions
3. Click **"Allow"**

### Step 4: Copy Access Token

After authorization, you'll see a page displaying your access token.

**COPY THE ENTIRE TOKEN** - it looks like:

```
AQV8I2Z_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Step 5: Update .env.local

```bash
# Open .env.local
# Find this commented line:
# LINKEDIN_ACCESS_TOKEN=your_access_token_here

# Uncomment and replace with your token:
LINKEDIN_ACCESS_TOKEN=AQV8I2Z_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

✅ **Done with Part 2!**

---

## ✅ Test Everything Works

```bash
npm run test:linkedin
```

You should see:

```
✅ Method 1: LinkedIn API - Success!
✅ Found X posts from LinkedIn
```

---

## 📝 Final .env.local Should Look Like:

```env
# Google Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-S4G7V6W3H4

# LinkedIn API Configuration
LINKEDIN_CLIENT_ID=78wetdeb4cgwjl
LINKEDIN_CLIENT_SECRET=WPL_AP1.w2Op7A1hGWzC1xBl.YLf03w==
LINKEDIN_ORGANIZATION_ID=12345678
LINKEDIN_ACCESS_TOKEN=AQV8I2Z_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
LINKEDIN_REDIRECT_URI=https://cybersecuritystack.co.uk/api/linkedin/oauth/callback

# Formspree Contact Form
# Formspree endpoint: xzzypgly
```

---

## 🆘 Common Issues

### "Application does not have access to organization"

**Problem:** You're not an admin of the LinkedIn company page

**Solution:**

1. Go to your company page
2. Click "Admin tools"
3. Add your account as admin

### "invalid_scope"

**Problem:** Your LinkedIn app doesn't have the right permissions

**Solution:**

1. Go to https://www.linkedin.com/developers/apps
2. Click your app
3. Go to "Products" tab
4. Add "Share on LinkedIn" product
5. Wait for approval (usually instant)

### "redirect_uri_mismatch"

**Problem:** Redirect URL doesn't match app settings

**Solution:**

1. Go to your LinkedIn app settings
2. Go to "Auth" tab
3. Add redirect URL: `https://cybersecuritystack.co.uk/api/linkedin/oauth/callback`
4. Save changes

### Token Expired

**Problem:** Access tokens expire after ~60 days

**Solution:**

1. Simply redo Part 2 (OAuth flow)
2. Get a new token
3. Update .env.local
4. For production, implement refresh token flow (see LINKEDIN_SETUP.md)

---

## 🎉 You're Done!

Your LinkedIn feed will now automatically fetch real posts from your company page!

### What happens now?

1. Every 5 minutes, your site fetches latest posts from LinkedIn API
2. If API fails, falls back to Google Sheets (if configured)
3. If Sheets fail, falls back to static JSON
4. Your visitors always see LinkedIn posts! 🚀

---

## 📚 Need More Help?

- **Full Setup Guide:** `LINKEDIN_SETUP.md`
- **Troubleshooting:** `LINKEDIN_TROUBLESHOOTING.md`
- **Architecture:** `LINKEDIN_ARCHITECTURE.md`
- **All Docs:** `LINKEDIN_INDEX.md`

---

## 🛠️ Helpful Commands

```bash
# View Organization ID guide
npm run linkedin:get-org-id

# View OAuth guide
npm run linkedin:oauth

# Test LinkedIn integration
npm run test:linkedin

# Interactive setup wizard
npm run setup:linkedin
```

---

**Questions?** Check `LINKEDIN_INDEX.md` for all documentation!
