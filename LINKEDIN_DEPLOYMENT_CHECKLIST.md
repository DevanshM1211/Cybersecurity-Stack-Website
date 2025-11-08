# LinkedIn Feed Deployment Checklist

Use this checklist to ensure your LinkedIn feed is properly deployed and functioning.

---

## 📋 Pre-Deployment Checklist

### 1. Environment Setup

- [ ] Decided which method(s) to use:

  - [ ] LinkedIn API (fully automated)
  - [ ] Google Sheets (easy manual updates)
  - [ ] Static JSON (fallback, always works)

- [ ] Created `.env.local` file from `.env.example`
  ```bash
  cp .env.example .env.local
  ```

### 2. Configuration (Choose Your Method)

#### If Using LinkedIn API:

- [ ] Created LinkedIn Developer App
  - [ ] App created at https://www.linkedin.com/developers/apps
  - [ ] Added products: "Sign In with LinkedIn", "Share on LinkedIn"
  - [ ] Set redirect URL: `https://your-domain.com/api/linkedin/oauth/callback`
- [ ] Added credentials to `.env.local`:

  - [ ] `LINKEDIN_CLIENT_ID`
  - [ ] `LINKEDIN_CLIENT_SECRET`
  - [ ] `LINKEDIN_ORGANIZATION_ID`
  - [ ] `LINKEDIN_REDIRECT_URI`

- [ ] Ran OAuth flow:
  - [ ] Visited `/api/linkedin/oauth/start`
  - [ ] Authorized with admin LinkedIn account
  - [ ] Copied access token
  - [ ] Added `LINKEDIN_ACCESS_TOKEN` to `.env.local`

#### If Using Google Sheets:

- [ ] Created Google Sheet with columns:

  - [ ] id
  - [ ] title
  - [ ] preview
  - [ ] author
  - [ ] date
  - [ ] url

- [ ] Published sheet to web

  - [ ] File → Share → Publish to web
  - [ ] Shared with "Anyone with the link can view"

- [ ] Added Sheet ID to `.env.local`:

  - [ ] `GOOGLE_SHEET_ID`
  - [ ] `GOOGLE_SHEET_TAB` (usually "Posts")

- [ ] Tested OpenSheet URL works:
  ```
  https://opensheet.elk.sh/YOUR_SHEET_ID/Posts
  ```

#### If Using Static JSON:

- [ ] Edited `data/linkedin-posts.json`
- [ ] Added at least 3 posts
- [ ] Verified JSON is valid (no syntax errors)
- [ ] Each post has required fields: `id`, `url`

### 3. Local Testing

- [ ] Installed dependencies:

  ```bash
  npm install
  ```

- [ ] Started dev server:

  ```bash
  npm run dev
  ```

- [ ] Ran LinkedIn feed tests:

  ```bash
  npm run test:linkedin
  ```

- [ ] Verified in browser:

  - [ ] Visited http://localhost:3000
  - [ ] LinkedIn feed section appears
  - [ ] Posts are displaying
  - [ ] Images loading (if applicable)
  - [ ] Links work when clicked
  - [ ] "Follow us" button works

- [ ] Tested API endpoints directly:

  - [ ] http://localhost:3000/api/linkedin-feed
  - [ ] http://localhost:3000/api/linkedin-sheet
  - [ ] http://localhost:3000/api/linkedin-static

- [ ] Checked browser console:

  - [ ] No errors
  - [ ] No warnings

- [ ] Tested on mobile:
  - [ ] Responsive layout works
  - [ ] Cards stack properly
  - [ ] Touch interactions work

---

## 🚀 Deployment Checklist

### 1. Code Preparation

- [ ] Committed all changes:

  ```bash
  git add .
  git commit -m "Add LinkedIn feed feature"
  ```

- [ ] Pushed to repository:

  ```bash
  git push origin main
  ```

- [ ] No sensitive data in commits:
  - [ ] `.env.local` not committed
  - [ ] No access tokens in code
  - [ ] No API keys hardcoded

### 2. Hosting Platform (Vercel Example)

- [ ] Logged into hosting dashboard
- [ ] Added environment variables:
  - [ ] Go to Settings → Environment Variables
  - [ ] Add same variables from `.env.local`
  - [ ] Set for Production, Preview, and Development

#### Required for LinkedIn API:

- [ ] `LINKEDIN_CLIENT_ID`
- [ ] `LINKEDIN_CLIENT_SECRET`
- [ ] `LINKEDIN_ACCESS_TOKEN`
- [ ] `LINKEDIN_ORGANIZATION_ID`
- [ ] `LINKEDIN_REDIRECT_URI` (update with production URL)

#### Required for Google Sheets:

- [ ] `GOOGLE_SHEET_ID`
- [ ] `GOOGLE_SHEET_TAB`

#### Also Add (if applicable):

- [ ] `RESEND_API_KEY`
- [ ] `RECAPTCHA_SECRET_KEY`
- [ ] `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
- [ ] Other project-specific variables

### 3. Deployment

- [ ] Triggered deployment:

  - [ ] Automatic via Git push, or
  - [ ] Manual via hosting dashboard

- [ ] Waited for build to complete

- [ ] Checked build logs:
  - [ ] No errors
  - [ ] Build successful
  - [ ] All routes generated

### 4. Production Verification

- [ ] Visited production URL

- [ ] Verified LinkedIn feed section:

  - [ ] Posts are displaying
  - [ ] Layout is correct
  - [ ] Images loading
  - [ ] Links are correct
  - [ ] Animations working

- [ ] Tested API endpoints:

  - [ ] `https://your-domain.com/api/linkedin-feed`
  - [ ] `https://your-domain.com/api/linkedin-sheet`
  - [ ] `https://your-domain.com/api/linkedin-static`
  - [ ] All return valid JSON

- [ ] Tested on multiple devices:

  - [ ] Desktop (Chrome, Firefox, Safari)
  - [ ] Mobile (iOS, Android)
  - [ ] Tablet
  - [ ] Different screen sizes

- [ ] Checked performance:

  - [ ] Page loads in < 3 seconds
  - [ ] LinkedIn section appears quickly
  - [ ] No layout shift
  - [ ] Smooth animations

- [ ] Verified caching:
  - [ ] First load fetches data
  - [ ] Subsequent loads use cache
  - [ ] Revalidation happens on schedule

### 5. OAuth Production Setup (LinkedIn API Only)

If using LinkedIn API:

- [ ] Updated LinkedIn app redirect URL to production:

  ```
  https://your-domain.com/api/linkedin/oauth/callback
  ```

- [ ] Re-ran OAuth flow in production:

  - [ ] Visited `https://your-domain.com/api/linkedin/oauth/start`
  - [ ] Authorized with admin account
  - [ ] Got new production access token

- [ ] Updated production environment variable:
  - [ ] Updated `LINKEDIN_ACCESS_TOKEN` in hosting dashboard
  - [ ] Redeployed (if necessary)

---

## ✅ Post-Deployment Checklist

### 1. Monitoring Setup

- [ ] Set up error tracking:

  - [ ] Vercel Analytics enabled
  - [ ] Error alerts configured
  - [ ] Logs being monitored

- [ ] Created calendar reminders:
  - [ ] LinkedIn token rotation (every 60 days)
  - [ ] Update posts (weekly/monthly)
  - [ ] Check for API changes

### 2. Documentation

- [ ] Updated team documentation:

  - [ ] How to update posts (method-specific)
  - [ ] Who has access to LinkedIn/Sheets
  - [ ] Emergency contacts

- [ ] Shared credentials securely:
  - [ ] Used password manager
  - [ ] Shared with appropriate team members
  - [ ] Documented where credentials are stored

### 3. Content Management

- [ ] Created content calendar:

  - [ ] When to update posts
  - [ ] Who is responsible
  - [ ] What type of content to feature

- [ ] Tested update process:
  - [ ] Updated a post
  - [ ] Verified it appears on site
  - [ ] Confirmed caching works

### 4. Backup Plan

- [ ] Documented fallback procedures:

  - [ ] What to do if API fails
  - [ ] How to switch methods
  - [ ] Emergency contact information

- [ ] Verified all three methods work:
  - [ ] Tested each independently
  - [ ] Confirmed fallback chain
  - [ ] Static JSON is up-to-date

---

## 🔍 Quality Assurance Checklist

### Functionality

- [ ] All posts display correctly
- [ ] Post titles render properly
- [ ] Preview text shows (not cut off)
- [ ] Author names appear
- [ ] Dates are formatted correctly
- [ ] URLs work and open in new tab
- [ ] "Follow us" CTA works
- [ ] Fallback system works (if primary fails)

### Visual

- [ ] Cards are aligned properly
- [ ] Spacing is consistent
- [ ] Colors match brand
- [ ] Hover effects work
- [ ] Animations are smooth
- [ ] Loading skeletons appear
- [ ] Dark mode compatible (if applicable)
- [ ] Icons render correctly

### Performance

- [ ] Lighthouse score > 90
- [ ] Core Web Vitals pass
- [ ] Images optimized
- [ ] No layout shift
- [ ] Fast Time to Interactive
- [ ] Efficient caching

### Accessibility

- [ ] Proper heading hierarchy
- [ ] Alt text for images
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient color contrast
- [ ] Focus indicators visible

### SEO

- [ ] Proper HTML semantics
- [ ] No duplicate content
- [ ] External links have rel="noopener"
- [ ] Content is crawlable
- [ ] Structured data (if applicable)

---

## 🐛 Troubleshooting Checklist

If something isn't working:

### General Issues

- [ ] Checked browser console for errors
- [ ] Checked server logs for errors
- [ ] Verified environment variables are set
- [ ] Confirmed all dependencies installed
- [ ] Tried hard refresh (Cmd+Shift+R / Ctrl+Shift+R)
- [ ] Tested in incognito/private mode
- [ ] Cleared cache

### LinkedIn API Issues

- [ ] Access token is valid (not expired)
- [ ] Organization ID is correct
- [ ] App has required permissions
- [ ] Redirect URL matches exactly
- [ ] Using correct API version
- [ ] Not hitting rate limits
- [ ] Account has admin access to company page

### Google Sheets Issues

- [ ] Sheet is published to web
- [ ] Sheet ID is correct
- [ ] Tab name matches
- [ ] Columns are spelled correctly
- [ ] Sheet has data
- [ ] OpenSheet URL works in browser
- [ ] Sheet is shared publicly

### Static JSON Issues

- [ ] File exists at `data/linkedin-posts.json`
- [ ] JSON is valid (no syntax errors)
- [ ] File is committed to git
- [ ] Array structure is correct
- [ ] Required fields present

---

## 📊 Success Metrics

After deployment, track these metrics:

- [ ] Uptime: Should be 99.9%+
- [ ] Load time: < 3 seconds
- [ ] Error rate: < 0.1%
- [ ] User engagement: Click-through rate on posts
- [ ] Freshness: Posts updated regularly
- [ ] Fallback usage: How often fallbacks are used

---

## 📅 Maintenance Schedule

### Daily

- [ ] Monitor error logs
- [ ] Check site is accessible

### Weekly

- [ ] Update posts (or verify auto-update working)
- [ ] Review analytics
- [ ] Test user-facing features

### Monthly

- [ ] Review performance metrics
- [ ] Update static JSON backup
- [ ] Check for LinkedIn API changes
- [ ] Verify all methods still working

### Every 60 Days

- [ ] Rotate LinkedIn access token
- [ ] Test OAuth flow
- [ ] Update documentation if needed

### Quarterly

- [ ] Full system test
- [ ] Review and update documentation
- [ ] Team training refresh
- [ ] Consider feature improvements

---

## 🎉 Deployment Complete!

Once all items are checked, your LinkedIn feed is:

✅ Fully deployed
✅ Production ready
✅ Monitored
✅ Documented
✅ Team-ready

Congratulations! 🚀

---

**Deployment Date**: ******\_\_\_******

**Deployed By**: ******\_\_\_******

**Methods Active**:

- [ ] LinkedIn API
- [ ] Google Sheets
- [ ] Static JSON

**Next Review Date**: ******\_\_\_******

**Notes**:

```
[Add any deployment-specific notes here]
```

---

**Need Help?**

- See `LINKEDIN_SETUP.md` for detailed setup
- See `LINKEDIN_QUICK_REFERENCE.md` for quick help
- Run `npm run test:linkedin` to diagnose issues
