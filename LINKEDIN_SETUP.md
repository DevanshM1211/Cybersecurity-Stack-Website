# LinkedIn Feed Integration Guide

This website features an automated LinkedIn feed that displays your latest company posts on the homepage. The system uses a **three-tier fallback approach** to ensure posts are always displayed, even if one method fails.

## 🎯 Overview

The LinkedIn feed component fetches posts using three methods in order:

1. **LinkedIn API** (Primary) - Automatic real-time updates
2. **Google Sheets** (Fallback) - Easy manual updates via spreadsheet
3. **Static JSON** (Final Fallback) - Hardcoded posts in the codebase

---

## 📋 Method 1: LinkedIn API (Recommended)

### Benefits

- ✅ Fully automated - no manual updates needed
- ✅ Real-time post synchronization
- ✅ Fetches latest 10 posts automatically
- ✅ Includes images and full post text

### Setup Steps

#### Step 1: Create LinkedIn App

1. Go to [LinkedIn Developers](https://www.linkedin.com/developers/apps)
2. Click "Create app"
3. Fill in the required fields:
   - **App name**: "Cyber Security Stack Website"
   - **LinkedIn Page**: Select your company page
   - **Privacy policy URL**: https://cybersecuritystack.co.uk/privacy
   - **App logo**: Upload your company logo
4. Agree to terms and create the app

#### Step 2: Configure App Products

1. In your app dashboard, go to the "Products" tab
2. Request access to these products:
   - ✅ **Sign In with LinkedIn using OpenID Connect**
   - ✅ **Share on LinkedIn** (or "Marketing Developer Platform" if available)
3. Wait for approval (usually instant for basic products)

#### Step 3: Set Redirect URLs

1. Go to "Auth" tab in your app settings
2. Under "Redirect URLs", add:
   ```
   https://cybersecuritystack.co.uk/api/linkedin/oauth/callback
   ```
3. For local testing, also add:
   ```
   http://localhost:3000/api/linkedin/oauth/callback
   ```

#### Step 4: Get Your Credentials

1. In the "Auth" tab, note your:
   - **Client ID** (public)
   - **Client Secret** (private - keep secure!)

#### Step 5: Find Your Organization ID

**Method A - From LinkedIn URL:**

1. Go to your company LinkedIn page
2. Look at the URL: `https://www.linkedin.com/company/cyber-security-stack/`
3. The ID is in the URL or you can find the numeric ID by:
   - Right-click the page → View Page Source
   - Search for `"organizationId"` or `"companyId"`

**Method B - Using LinkedIn API:**

```bash
curl -X GET 'https://api.linkedin.com/v2/organizationAcls?q=roleAssignee' \
  -H 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```

#### Step 6: Configure Environment Variables

Add to your `.env.local` file:

```bash
# LinkedIn API Configuration
LINKEDIN_CLIENT_ID=your_actual_client_id_here
LINKEDIN_CLIENT_SECRET=your_actual_client_secret_here
LINKEDIN_REDIRECT_URI=https://cybersecuritystack.co.uk/api/linkedin/oauth/callback
LINKEDIN_ORGANIZATION_ID=123456789
```

#### Step 7: Authenticate & Get Access Token

1. **Start the OAuth flow:**

   - Visit: `https://cybersecuritystack.co.uk/api/linkedin/oauth/start`
   - You'll be redirected to LinkedIn to authorize the app

2. **Authorize the app:**

   - Log in with an account that has **admin access** to your LinkedIn company page
   - Review and accept the permissions

3. **Copy the access token:**

   - After authorization, you'll be redirected to a page showing your access token
   - Click "Reveal full token" and copy the entire token
   - **IMPORTANT**: Store this securely - it's like a password!

4. **Add token to environment:**

   ```bash
   LINKEDIN_ACCESS_TOKEN=your_super_long_access_token_here
   ```

5. **Deploy or restart:**
   - If using Vercel/Netlify, add the environment variable to your hosting dashboard
   - For local development, restart your dev server: `npm run dev`

### Testing

Test the API endpoint directly:

```bash
curl https://cybersecuritystack.co.uk/api/linkedin-feed
```

Expected response:

```json
{
  "items": [
    {
      "id": "urn:li:share:1234567890",
      "text": "Your post content here...",
      "url": "https://www.linkedin.com/feed/update/urn:li:share:1234567890",
      "createdAt": "2025-11-08T12:00:00.000Z",
      "imageUrl": "https://media.licdn.com/..."
    }
  ]
}
```

### Troubleshooting

**"LinkedIn authentication failed"**

- Check that your `LINKEDIN_ACCESS_TOKEN` is correct and not expired
- LinkedIn access tokens typically expire after 60 days
- Re-run the OAuth flow to get a fresh token

**"Unable to fetch LinkedIn feed"**

- Verify `LINKEDIN_ORGANIZATION_ID` matches your actual company page
- Ensure the authenticated account has admin rights to the company page
- Check that "Share on LinkedIn" product is approved in your app

**Rate Limits**

- LinkedIn API has rate limits (varies by product)
- The feed caches responses for 5 minutes to minimize API calls
- If you hit rate limits, consider using Method 2 (Google Sheets) as fallback

---

## 📊 Method 2: Google Sheets (Easy Alternative)

### Benefits

- ✅ No complex LinkedIn API setup needed
- ✅ Easy to update by non-technical team members
- ✅ Can be edited from anywhere (including mobile)
- ✅ Free and simple

### Setup Steps

#### Step 1: Create Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "LinkedIn Posts Feed"
4. Create a sheet tab named "Posts" (or customize `GOOGLE_SHEET_TAB`)

#### Step 2: Set Up Columns

Add these column headers in row 1:

| id  | title | preview | author | date | url |
| --- | ----- | ------- | ------ | ---- | --- |

**Column descriptions:**

- `id`: Unique identifier (e.g., post-1, post-2, post-3)
- `title`: Post headline/title
- `preview`: Brief excerpt or description
- `author`: Post author name
- `date`: Display date (e.g., "November 2025")
- `url`: Full LinkedIn post URL

#### Step 3: Add Your Posts

Example data:

| id     | title                       | preview                          | author     | date     | url                                |
| ------ | --------------------------- | -------------------------------- | ---------- | -------- | ---------------------------------- |
| post-1 | Innovation in Cybersecurity | Exploring new frontiers...       | Luke C.    | Nov 2025 | https://www.linkedin.com/posts/... |
| post-2 | CSO Summit Insights         | Key takeaways from the summit... | CIO Online | Nov 2025 | https://www.linkedin.com/posts/... |

#### Step 4: Publish to Web

1. Click **File** → **Share** → **Publish to web**
2. Select the "Posts" sheet
3. Choose format: **Web page** or **CSV**
4. Click "Publish"
5. Copy the published URL (not needed for OpenSheet method)

#### Step 5: Get Your Sheet ID

From your Google Sheets URL:

```
https://docs.google.com/spreadsheets/d/1ABC123XYZ456/edit
                                      ^^^^^^^^^^^^^^^^
                                      This is your Sheet ID
```

#### Step 6: Configure Environment

**Option A - Using OpenSheet (No API Key Needed):**

```bash
GOOGLE_SHEET_ID=1ABC123XYZ456
GOOGLE_SHEET_TAB=Posts
```

OpenSheet automatically converts your public Google Sheet to JSON at:

```
https://opensheet.elk.sh/SHEET_ID/TAB_NAME
```

**Option B - Using Direct URL:**

```bash
SHEET_JSON_URL=https://opensheet.elk.sh/1ABC123XYZ456/Posts
```

#### Step 7: Make Sheet Public

1. Click the "Share" button in Google Sheets
2. Change access to **"Anyone with the link"** → **Viewer**
3. Copy the link (optional - just for verification)

### Testing

Visit directly in browser:

```
https://opensheet.elk.sh/YOUR_SHEET_ID/Posts
```

Should return JSON array of your posts.

Test the API endpoint:

```bash
curl https://cybersecuritystack.co.uk/api/linkedin-sheet
```

### Updating Posts

Simply edit the Google Sheet - changes appear on your website within 2 minutes (caching).

---

## 📝 Method 3: Static JSON (Default Fallback)

### Benefits

- ✅ Works immediately without any setup
- ✅ No external dependencies
- ✅ Complete control over content
- ✅ Fast and reliable

### How to Update

Edit `/data/linkedin-posts.json`:

```json
{
  "items": [
    {
      "id": "post-1",
      "title": "Your Post Title",
      "preview": "A brief description of the post content...",
      "author": "Author Name",
      "date": "November 2025",
      "url": "https://www.linkedin.com/posts/your-actual-post-url"
    },
    {
      "id": "post-2",
      "title": "Another Post",
      "preview": "More great content...",
      "author": "Another Author",
      "date": "November 2025",
      "url": "https://www.linkedin.com/posts/another-post"
    }
  ]
}
```

### Deployment

After editing:

```bash
git add data/linkedin-posts.json
git commit -m "Update LinkedIn posts"
git push
```

Changes will be live after your next deployment.

---

## 🔄 Fallback Behavior

The system tries each method in order:

```
1. Try LinkedIn API
   ↓ (if fails or returns empty)
2. Try Google Sheets
   ↓ (if fails or returns empty)
3. Use Static JSON
   ↓
4. Display posts to users
```

### Caching

Each method has different cache times:

- **LinkedIn API**: 5 minutes (300 seconds)
- **Google Sheets**: 2 minutes (120 seconds)
- **Static JSON**: 1 minute (60 seconds)

This means:

- Fresh content without overwhelming external APIs
- Fast page loads for users
- Reduced bandwidth and API costs

---

## 🎨 Customization

### Change Number of Posts Displayed

Edit `/components/LinkedInFeed.tsx` line 102:

```tsx
{(items || []).slice(0, 3).map((item, i) => (
                      // ↑ Change this number
```

### Change Company LinkedIn URL

Edit `/components/LinkedInFeed.tsx` line 160:

```tsx
href = "https://www.linkedin.com/company/cyber-security-stack/";
```

### Modify Styling

The component uses:

- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

Key classes to customize:

- Card background: `bg-black/5 dark:bg-white/[0.02]`
- Border colors: `border-black/10 dark:border-white/10`
- Hover effects: `hover:border-cyber-blue/30`
- Text colors: `text-gray-900 dark:text-white`

---

## 🚀 Recommended Setup Path

For most users:

1. **Start with Method 3 (Static JSON)** - Works immediately
2. **Add Method 2 (Google Sheets)** - Easy for your team to manage
3. **Upgrade to Method 1 (LinkedIn API)** - When you want full automation

---

## 📞 Support

If you encounter issues:

1. Check the browser console for error messages
2. Test each API endpoint individually in your browser
3. Verify environment variables are set correctly
4. Check that tokens haven't expired
5. Review the Next.js build logs for server-side errors

### Common Issues

**"LinkedIn feed not configured"**

- Missing environment variables
- Check `.env.local` exists and has the required variables

**"Unable to load feed"**

- Network issues or API downtime
- Check fallback methods are configured
- Verify Sheet ID or access token is correct

**Posts not updating**

- Cache needs to clear (wait 2-5 minutes)
- Force refresh: add `?nocache=1` to URL
- Clear browser cache

**Images not showing**

- LinkedIn images may have CORS restrictions
- Google Sheets: Use direct image URLs from LinkedIn CDN
- Static JSON: Use publicly accessible image URLs

---

## 🔐 Security Notes

- ✅ Never commit `.env.local` to Git (it's in `.gitignore`)
- ✅ Access tokens should be treated like passwords
- ✅ Use environment variables in your hosting provider's dashboard
- ✅ Rotate tokens periodically (every 60 days for LinkedIn)
- ✅ Only grant minimum required permissions
- ✅ OAuth state validation prevents CSRF attacks
- ✅ All API routes validate inputs and handle errors gracefully

---

## 📈 Performance

The LinkedIn feed is optimized for performance:

- **Server-side caching** reduces API calls
- **ISR (Incremental Static Regeneration)** for fast page loads
- **Lazy loading** for images
- **Fallback strategy** ensures 100% uptime
- **Error boundaries** prevent crashes
- **Graceful degradation** if all methods fail

---

## 🎉 That's It!

Your LinkedIn feed should now be displaying on your homepage. Posts will automatically update based on your chosen method.

**Questions?** Check the Next.js and Tailwind CSS documentation, or review the component source code in `/components/LinkedInFeed.tsx`.

**Happy automating! 🚀**
