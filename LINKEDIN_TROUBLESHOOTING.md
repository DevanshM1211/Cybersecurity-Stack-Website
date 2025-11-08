# LinkedIn Feed - Troubleshooting Guide

Quick solutions to common issues with the LinkedIn feed feature.

---

## 🔍 Diagnostic Command

**Run this first to identify the problem:**

```bash
npm run test:linkedin
```

This will test all three methods and show you exactly what's working and what's not.

---

## ❌ Common Issues & Solutions

### Issue: "Posts not showing on homepage"

**Quick checks:**

```bash
# 1. Check if component is imported
grep -r "LinkedInFeed" app/page.tsx

# 2. Check browser console for errors
# Open DevTools → Console tab

# 3. Test API endpoints directly
curl http://localhost:3000/api/linkedin-static
```

**Solutions:**

- Make sure `<LinkedInFeed />` is in `app/page.tsx`
- Check browser console for JavaScript errors
- Verify at least one method is configured
- Hard refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)

---

### Issue: "LinkedIn API not configured"

**Error message:** `"LinkedIn feed not configured"`

**Check environment variables:**

```bash
# View your current env vars
cat .env.local | grep LINKEDIN

# Should see:
# LINKEDIN_CLIENT_ID=...
# LINKEDIN_CLIENT_SECRET=...
# LINKEDIN_ACCESS_TOKEN=...
# LINKEDIN_ORGANIZATION_ID=...
```

**Solutions:**

1. Create `.env.local` if it doesn't exist:

   ```bash
   cp .env.example .env.local
   ```

2. Run setup wizard:

   ```bash
   npm run setup:linkedin
   ```

3. Or add manually to `.env.local`:

   ```env
   LINKEDIN_ACCESS_TOKEN=your_token_here
   LINKEDIN_ORGANIZATION_ID=123456789
   ```

4. Restart dev server:
   ```bash
   npm run dev
   ```

---

### Issue: "Access token expired" (LinkedIn API)

**Error message:** `"LinkedIn authentication failed"` or `401 Unauthorized`

**Solution:**

```bash
# 1. Re-run OAuth flow
# Visit in browser:
http://localhost:3000/api/linkedin/oauth/start

# 2. Authorize with your LinkedIn admin account

# 3. Copy the new access token

# 4. Update .env.local:
LINKEDIN_ACCESS_TOKEN=new_token_here

# 5. Restart server
npm run dev
```

**Prevention:**

- Set calendar reminder for every 60 days
- LinkedIn tokens typically expire after 60 days

---

### Issue: "Google Sheets not working"

**Error message:** `"Unable to load sheet"` or empty items array

**Test the URL:**

```bash
# Replace with your Sheet ID
curl "https://opensheet.elk.sh/YOUR_SHEET_ID/Posts"

# Should return JSON array
```

**Common problems:**

1. **Sheet not public:**

   - Go to your Google Sheet
   - Click "Share" → "Anyone with the link" → "Viewer"

2. **Wrong Sheet ID:**

   ```bash
   # Get ID from URL:
   # https://docs.google.com/spreadsheets/d/ABC123XYZ/edit
   #                                          ^^^^^^^^^^
   #                                          This is your ID

   # Update .env.local:
   GOOGLE_SHEET_ID=ABC123XYZ
   ```

3. **Wrong tab name:**

   ```bash
   # Check tab name in Google Sheets (bottom of page)
   # Update .env.local to match:
   GOOGLE_SHEET_TAB=Posts  # or whatever your tab is named
   ```

4. **Missing columns:**
   - Ensure sheet has these columns: `id`, `title`, `preview`, `author`, `date`, `url`
   - Column names are case-insensitive
   - `url` column is required

---

### Issue: "Static JSON not working"

**Check the file:**

```bash
# 1. Verify file exists
ls -la data/linkedin-posts.json

# 2. Check JSON is valid
cat data/linkedin-posts.json | python -m json.tool

# Or using Node:
node -e "console.log(JSON.parse(require('fs').readFileSync('data/linkedin-posts.json')))"
```

**Common problems:**

1. **Invalid JSON syntax:**

   - Missing comma between objects
   - Trailing comma after last item
   - Unescaped quotes in strings
   - Use a JSON validator: https://jsonlint.com/

2. **Wrong structure:**

   ```json
   {
     "items": [          ← Must have "items" array
       {
         "id": "1",     ← Required
         "url": "..."   ← Required
       }
     ]
   }
   ```

3. **File not committed to Git:**
   ```bash
   git add data/linkedin-posts.json
   git commit -m "Add LinkedIn posts"
   ```

---

### Issue: "Posts not updating"

**Cause:** ISR caching

**Solutions:**

1. **Wait for cache to expire:**

   - LinkedIn API: 5 minutes
   - Google Sheets: 2 minutes
   - Static JSON: 1 minute

2. **Force revalidation:**

   ```bash
   # Hard refresh in browser
   # Mac: Cmd + Shift + R
   # Windows: Ctrl + Shift + R

   # Or add cache buster to URL
   http://localhost:3000/?nocache=1
   ```

3. **Clear Next.js cache:**

   ```bash
   rm -rf .next
   npm run dev
   ```

4. **In production (Vercel):**
   - Redeploy from dashboard
   - Or use Vercel's "Clear cache" option

---

### Issue: "Environment variables not working in production"

**Check hosting platform settings:**

**Vercel:**

1. Go to your project dashboard
2. Settings → Environment Variables
3. Add each variable:
   - Name: `LINKEDIN_ACCESS_TOKEN`
   - Value: `your_token`
   - Environment: Production, Preview, Development
4. Redeploy

**Netlify:**

1. Site settings → Build & deploy → Environment
2. Add variables
3. Trigger new deploy

**Solutions:**

- Variables must be added in hosting dashboard, not just in code
- Don't commit `.env.local` to Git (it's ignored)
- Redeploy after adding environment variables
- Check variable names match exactly (case-sensitive)

---

### Issue: "OAuth callback error"

**Error:** `"State validation failed"` or `"Authorization failed"`

**Solutions:**

1. **Redirect URL mismatch:**

   - LinkedIn app redirect URL must match EXACTLY:
     ```
     http://localhost:3000/api/linkedin/oauth/callback (dev)
     https://your-domain.com/api/linkedin/oauth/callback (prod)
     ```
   - Check in LinkedIn app settings → Auth → Redirect URLs

2. **Cookies blocked:**

   - Make sure cookies are enabled in browser
   - Try in different browser
   - Disable privacy extensions temporarily

3. **HTTPS required:**
   - In production, redirect URL must be HTTPS
   - Localhost can use HTTP for testing

---

### Issue: "No posts displaying but no errors"

**Diagnostic steps:**

```bash
# 1. Check API responses
curl http://localhost:3000/api/linkedin-feed
curl http://localhost:3000/api/linkedin-sheet
curl http://localhost:3000/api/linkedin-static

# 2. Check browser Network tab
# DevTools → Network → Filter: "linkedin"

# 3. Check component state
# Add console.log in LinkedInFeed.tsx:
console.log('Items:', items);
console.log('Error:', error);
```

**Common causes:**

- All methods returning empty arrays
- Component not rendering (check React DevTools)
- CSS hiding the section (check with Inspector)
- JavaScript error preventing render

---

### Issue: "Images not loading"

**Solutions:**

1. **Add image domain to Next.js config:**

   ```js
   // next.config.js
   module.exports = {
     images: {
       domains: ["media.licdn.com"],
     },
   };
   ```

2. **Use direct URLs:**

   - In Google Sheets or Static JSON
   - Use full URLs starting with `https://`

3. **CORS issues:**
   - LinkedIn images may have CORS restrictions
   - Use Next.js Image component with proper config

---

### Issue: "Rate limit exceeded"

**Error:** `"LinkedIn API rate limit exceeded"`

**Solutions:**

1. **Wait for rate limit to reset:**

   - LinkedIn limits vary by API product
   - Usually reset within an hour

2. **Increase cache time:**

   ```typescript
   // app/api/linkedin-feed/route.ts
   export const revalidate = 600; // 10 minutes instead of 5
   ```

3. **Use fallback method:**
   - Google Sheets has no rate limits
   - Static JSON never hits external APIs

---

### Issue: "TypeScript errors"

**Common TypeScript issues:**

1. **Module not found:**

   ```bash
   npm install
   ```

2. **Type errors in LinkedInFeed.tsx:**

   - Make sure `framer-motion` is installed
   - Check `tsconfig.json` paths are correct

3. **Clear TypeScript cache:**
   ```bash
   rm -rf .next
   rm -rf node_modules/.cache
   npm run dev
   ```

---

## 🧪 Testing Checklist

Run through this checklist to diagnose issues:

```bash
# 1. Test all methods
npm run test:linkedin

# 2. Test individual endpoints
curl http://localhost:3000/api/linkedin-feed
curl http://localhost:3000/api/linkedin-sheet
curl http://localhost:3000/api/linkedin-static

# 3. Check environment variables
cat .env.local | grep LINKEDIN
cat .env.local | grep GOOGLE_SHEET

# 4. Verify file exists
cat data/linkedin-posts.json

# 5. Check for errors
npm run dev
# Then check terminal output

# 6. Browser console
# Open DevTools → Console
# Look for errors or warnings

# 7. Network requests
# DevTools → Network → Filter: "api/linkedin"
```

---

## 🆘 Emergency Fallback

**If nothing works, use Static JSON:**

```bash
# 1. Edit the static file
code data/linkedin-posts.json

# 2. Add your posts manually:
{
  "items": [
    {
      "id": "post-1",
      "title": "Your Post Title",
      "preview": "Post description...",
      "author": "Your Name",
      "date": "Nov 2025",
      "url": "https://linkedin.com/posts/your-post"
    }
  ]
}

# 3. Save and commit
git add data/linkedin-posts.json
git commit -m "Update posts"

# 4. Restart server
npm run dev
```

This method **always works** and requires no API keys or external services.

---

## 📞 Getting Help

If you're still stuck:

1. **Check documentation:**

   - `LINKEDIN_SETUP.md` - Detailed setup
   - `LINKEDIN_QUICK_REFERENCE.md` - Quick tips
   - `LINKEDIN_ARCHITECTURE.md` - How it works

2. **Run diagnostics:**

   ```bash
   npm run test:linkedin
   ```

3. **Check logs:**

   - Browser console (F12)
   - Terminal output
   - Vercel/Netlify logs (production)

4. **Try different method:**

   - If API fails, try Google Sheets
   - If Sheets fail, use Static JSON
   - Always have a fallback configured

5. **Ask for help:**
   - Include output from `npm run test:linkedin`
   - Share any error messages
   - Mention which method you're using
   - Include relevant environment variables (NOT tokens!)

---

## 🔧 Reset Everything

**Nuclear option - start fresh:**

```bash
# 1. Stop dev server (Ctrl+C)

# 2. Remove environment file
rm .env.local

# 3. Clear caches
rm -rf .next
rm -rf node_modules/.cache

# 4. Reinstall dependencies
rm -rf node_modules
npm install

# 5. Run setup wizard
npm run setup:linkedin

# 6. Start fresh
npm run dev
```

---

## ✅ Verify Working

After fixing issues, verify everything works:

```bash
# 1. Run tests
npm run test:linkedin

# 2. Check homepage
open http://localhost:3000

# 3. Check API endpoints
open http://localhost:3000/api/linkedin-feed
open http://localhost:3000/api/linkedin-sheet
open http://localhost:3000/api/linkedin-static

# 4. Test on mobile
# Open on phone or use DevTools device emulation
```

---

**Still having issues?** See the full documentation in `LINKEDIN_SETUP.md` or create an issue on GitHub with the output from `npm run test:linkedin`.
