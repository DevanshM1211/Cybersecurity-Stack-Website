# Vercel Deployment Guide

## 🚀 Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub** (Already done! ✅)
   - Repository: https://github.com/DevanshM1211/Cybersecurity-Stack-Website

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository: `DevanshM1211/Cybersecurity-Stack-Website`

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
   - **Install Command**: `npm install` (auto-detected)

4. **Deploy**
   - Click "Deploy"
   - Wait 1-2 minutes for deployment
   - Your site will be live at `https://cybersecurity-stack-website.vercel.app`

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Navigate to project directory
cd "/Users/devanshmehrotra/Projects/Cybersecurity Stack Website"

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

## 📋 Pre-Deployment Checklist

✅ All checks passed:
- [x] Build successful (`npm run build`)
- [x] No TypeScript errors
- [x] All dependencies installed
- [x] Git repository initialized and pushed
- [x] vercel.json configured
- [x] .nvmrc file added (Node v20.14.0)
- [x] Package.json has correct scripts
- [x] ESLint configuration added
- [x] VS Code settings optimized

## 🔧 Vercel Configuration

The project includes a `vercel.json` file with:
- Build and dev commands
- Security headers
- Optimal region selection (iad1 - US East)

## 🌍 Environment Variables

No environment variables are required for the current build. If you add API integrations or backend services in the future, add them in:
- Vercel Dashboard → Project Settings → Environment Variables

## 📊 Build Output

```
Route (app)                              Size     First Load JS
┌ ○ /                                    46.7 kB         134 kB
└ ○ /_not-found                          875 B          87.9 kB
+ First Load JS shared by all            87 kB
```

The website is optimized and ready for production! 🎉

## 🔗 Post-Deployment

After deployment, you'll receive:
- **Production URL**: `https://cybersecurity-stack-website.vercel.app`
- **Deployment Dashboard**: Vercel dashboard with analytics
- **Automatic HTTPS**: SSL certificate auto-configured
- **CDN**: Global edge network for fast loading

### Custom Domain (Optional)

To add a custom domain:
1. Go to Vercel Dashboard → Project → Settings → Domains
2. Add your domain (e.g., `cybersecuritystack.com`)
3. Follow DNS configuration instructions
4. Domain will be live in 24-48 hours

## 🔄 Automatic Deployments

Every push to the `main` branch will:
- Trigger automatic deployment
- Run build checks
- Deploy to production if successful
- Provide preview URLs for pull requests

## 📱 Performance

Your website is optimized with:
- **Static Generation**: Pre-rendered at build time
- **Code Splitting**: Optimal JavaScript bundles
- **Image Optimization**: Next.js Image component ready
- **Font Optimization**: Google Fonts optimized
- **CSS Optimization**: Tailwind CSS purged and minified

## 🆘 Troubleshooting

If deployment fails:
1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Verify Node.js version matches `.nvmrc`
4. Run `npm run build` locally to test

---

**Ready to Deploy!** 🚀
