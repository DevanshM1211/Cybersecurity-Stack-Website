# LinkedIn Feed - Quick Reference

## 🚀 Quick Start

Choose the easiest method for you:

### Option 1: Static JSON (5 minutes)

```bash
# Edit the file
code data/linkedin-posts.json

# Add your posts
{
  "items": [
    {
      "id": "post-1",
      "title": "Your Title",
      "preview": "Post description...",
      "author": "Your Name",
      "date": "Nov 2025",
      "url": "https://linkedin.com/posts/..."
    }
  ]
}

# Deploy
git add data/linkedin-posts.json
git commit -m "Update posts"
git push
```

### Option 2: Google Sheets (15 minutes)

```bash
# 1. Create a Google Sheet with columns:
#    id | title | preview | author | date | url

# 2. Publish to web (File → Share → Publish)

# 3. Get Sheet ID from URL:
#    https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit

# 4. Add to .env.local:
GOOGLE_SHEET_ID=YOUR_SHEET_ID
GOOGLE_SHEET_TAB=Posts

# 5. Test
node scripts/test-linkedin-feed.js sheet
```

### Option 3: LinkedIn API (30 minutes)

```bash
# Use the interactive setup
./scripts/setup-linkedin.sh

# Or manually:
# 1. Create app at: https://www.linkedin.com/developers/apps
# 2. Add to .env.local:
LINKEDIN_CLIENT_ID=...
LINKEDIN_CLIENT_SECRET=...
LINKEDIN_ORGANIZATION_ID=...

# 3. Get access token:
#    Visit: http://localhost:3000/api/linkedin/oauth/start

# 4. Add token to .env.local:
LINKEDIN_ACCESS_TOKEN=...

# 5. Test
node scripts/test-linkedin-feed.js api
```

## 🧪 Testing

```bash
# Test all methods
node scripts/test-linkedin-feed.js

# Test specific method
node scripts/test-linkedin-feed.js api
node scripts/test-linkedin-feed.js sheet
node scripts/test-linkedin-feed.js static

# Check in browser
open http://localhost:3000
open http://localhost:3000/api/linkedin-feed
open http://localhost:3000/api/linkedin-sheet
open http://localhost:3000/api/linkedin-static
```

## 📋 Environment Variables

```bash
# Method 1: LinkedIn API
LINKEDIN_CLIENT_ID=your_client_id
LINKEDIN_CLIENT_SECRET=your_client_secret
LINKEDIN_ACCESS_TOKEN=your_access_token
LINKEDIN_ORGANIZATION_ID=123456789
LINKEDIN_REDIRECT_URI=https://your-domain.com/api/linkedin/oauth/callback

# Method 2: Google Sheets
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SHEET_TAB=Posts
# OR
SHEET_JSON_URL=https://opensheet.elk.sh/SHEET_ID/Posts

# Method 3: Static JSON
# No env vars needed - edit data/linkedin-posts.json
```

## 🔄 Fallback Order

1. **LinkedIn API** → (fails?) →
2. **Google Sheets** → (fails?) →
3. **Static JSON** → (always works)

## ⏱️ Cache Times

- LinkedIn API: 5 minutes
- Google Sheets: 2 minutes
- Static JSON: 1 minute

## 🎨 Customization

### Change number of posts displayed

```tsx
// components/LinkedInFeed.tsx line ~102
{(items || []).slice(0, 3).map((item, i) => (
                      // ↑ Change this number
```

### Change company LinkedIn URL

```tsx
// components/LinkedInFeed.tsx line ~160
href = "https://www.linkedin.com/company/YOUR-COMPANY/";
```

### Modify card styling

```tsx
// components/LinkedInFeed.tsx
// Search for: className="group p-6 rounded-xl..."
```

## 🐛 Troubleshooting

### "LinkedIn feed not configured"

- Check `.env.local` exists
- Verify env vars are set correctly
- Restart dev server: `npm run dev`

### "Unable to load feed"

- Run test script: `node scripts/test-linkedin-feed.js`
- Check network connectivity
- Verify URLs/tokens are correct
- Check browser console for errors

### Posts not updating

- Wait 2-5 minutes (cache)
- Force refresh: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
- Check the API endpoint directly in browser

### "Access token expired" (LinkedIn API)

- Tokens expire after ~60 days
- Re-run OAuth flow: `/api/linkedin/oauth/start`
- Update `LINKEDIN_ACCESS_TOKEN` in env

### Google Sheets not working

- Sheet must be public (Anyone with link can view)
- Check Sheet ID is correct
- Verify tab name matches `GOOGLE_SHEET_TAB`
- Test OpenSheet URL: `https://opensheet.elk.sh/SHEET_ID/TAB`

## 📚 Full Documentation

See [LINKEDIN_SETUP.md](./LINKEDIN_SETUP.md) for complete setup guide.

## 🛠️ Utility Scripts

```bash
# Interactive setup wizard
./scripts/setup-linkedin.sh

# Test all methods
node scripts/test-linkedin-feed.js

# Test specific method
node scripts/test-linkedin-feed.js [api|sheet|static]
```

## 🔗 Useful Links

- [LinkedIn Developers](https://www.linkedin.com/developers/apps)
- [OpenSheet](https://opensheet.elk.sh/)
- [Next.js ISR](https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration)
- [Component Source](./components/LinkedInFeed.tsx)

## ✅ Checklist

- [ ] Method chosen (API, Sheets, or Static)
- [ ] Environment variables configured
- [ ] Tested with test script
- [ ] Verified on localhost
- [ ] Deployed to production
- [ ] Confirmed posts are displaying
- [ ] Team knows how to update posts

## 💡 Tips

- Use **Static JSON** during development
- Switch to **Google Sheets** for team collaboration
- Upgrade to **LinkedIn API** for full automation
- Configure all three for maximum reliability
- Update posts at least monthly for SEO
- Keep post descriptions concise (under 200 chars)
- Always include valid LinkedIn URLs
- Test on mobile devices

## 🎯 Best Practices

1. **Always have a fallback**: Configure at least 2 methods
2. **Keep posts fresh**: Update every 1-2 weeks
3. **Test before deploy**: Use `test-linkedin-feed.js`
4. **Monitor errors**: Check server logs regularly
5. **Rotate tokens**: LinkedIn tokens expire - set reminders
6. **Optimize images**: Use compressed images in posts
7. **Mobile-first**: Test on mobile before deploying
8. **SEO-friendly**: Include keywords in titles and descriptions

---

**Need help?** See [LINKEDIN_SETUP.md](./LINKEDIN_SETUP.md) or open an issue on GitHub.
