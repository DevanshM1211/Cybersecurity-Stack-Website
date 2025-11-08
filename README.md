# Cyber Security Stack Website

A cutting-edge, modern, and futuristic website for Cyber Security Stack - pioneering Merkle-Based Detection and Response (MBDR) and the Resonance Protocol.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff69b4)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevanshM1211/Cybersecurity-Stack-Website)

## 🚀 Quick Deploy

**Deploy to Vercel in one click:** [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/DevanshM1211/Cybersecurity-Stack-Website)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 🚀 About

Cyber Security Stack is a deep-tech cybersecurity company pioneering a new paradigm in autonomous cyber defence. Developed in partnership with the University of Oxford, we're building the next generation of Zero Trust Architecture through the Resonance Protocol and MBDR framework.

## ✨ Features

- **Modern Design**: Cutting-edge UI with glassmorphism effects and gradient accents
- **Smooth Animations**: Powered by Framer Motion for fluid, engaging interactions
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **LinkedIn Feed Integration**: Automated post fetching with three-tier fallback system
  - LinkedIn API for real-time updates
  - Google Sheets for easy manual management
  - Static JSON fallback for reliability
- **Interactive Visualizations**:
  - Animated Merkle Tree verification system
  - Real-time threat prevention matrix
  - Multi-layer architecture diagrams
- **Performance Optimized**: Built with Next.js 14 App Router for optimal performance
- **Type-Safe**: Full TypeScript implementation
- **SEO Optimized**: Comprehensive meta tags, structured data, and sitemap

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: Inter & Roboto Mono (Google Fonts)

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/DevanshM1211/Cybersecurity-Stack-Website.git
   cd "Cybersecurity Stack Website"
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables (optional)**

   ```bash
   # Copy the example environment file
   cp .env.example .env.local

   # Use the interactive setup script for LinkedIn feed
   ./scripts/setup-linkedin.sh
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Home page
│   ├── globals.css         # Global styles and Tailwind imports
│   └── api/                # API routes
│       ├── contact/        # Contact form API
│       ├── linkedin-feed/  # LinkedIn API integration
│       ├── linkedin-sheet/ # Google Sheets fallback
│       └── linkedin-static/# Static JSON fallback
├── components/
│   ├── Navbar.tsx          # Navigation bar with scroll effects
│   ├── Hero.tsx            # Hero section with CTA
│   ├── LinkedInFeed.tsx    # Automated LinkedIn feed component
│   ├── MerkleTree.tsx      # Interactive Merkle tree visualization
│   ├── ResonanceProtocol.tsx  # Protocol explanation section
│   ├── MBDR.tsx            # MBDR technology showcase
│   ├── Partnership.tsx     # Oxford partnership section
│   ├── Mission.tsx         # Company mission and values
│   └── Footer.tsx          # Footer with links and newsletter
├── data/
│   └── linkedin-posts.json # Static LinkedIn posts fallback
├── scripts/
│   ├── setup-linkedin.sh   # Interactive LinkedIn setup
│   └── test-linkedin-feed.js  # LinkedIn integration tester
├── public/                 # Static assets
├── LINKEDIN_SETUP.md       # Comprehensive LinkedIn setup guide
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Design Features

### Color Palette

- **Cyber Blue**: `#00f0ff` - Primary accent
- **Cyber Purple**: `#a855f7` - Secondary accent
- **Cyber Pink**: `#ec4899` - Tertiary accent
- **Dark Background**: `#0a0e27` / `#050814`

### Key Components

1. **Hero Section**

   - Animated floating icons
   - Gradient text effects
   - Real-time statistics
   - Merkle tree visualization

2. **LinkedIn Feed**

   - Displays latest 3 company posts
   - Three-tier fallback system for reliability
   - Auto-refresh with ISR caching
   - Beautiful card-based layout with hover effects

3. **Resonance Protocol**

   - Multi-layer architecture visualization
   - Interactive feature cards
   - Scroll-triggered animations

4. **MBDR Technology**

   - Live threat prevention matrix
   - Core capabilities showcase
   - Step-by-step process explanation

5. **Partnership Section**

   - Oxford University collaboration
   - Research statistics
   - Rotating gradient backgrounds

6. **Mission Statement**
   - Company values grid
   - Vision statement with key metrics
   - Call-to-action buttons

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory (or use `./scripts/setup-linkedin.sh` for interactive setup):

```env
# Contact Form (Resend)
RESEND_API_KEY=re_your_api_key_here
CONTACT_FROM="Cyber Security Stack <no-reply@cybersecuritystack.co.uk>"
CONTACT_TO=hello@cybersecuritystack.co.uk

# reCAPTCHA v3
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your_recaptcha_site_key_here
RECAPTCHA_SECRET_KEY=your_recaptcha_secret_key_here

# LinkedIn Feed (Choose one or more methods)
# Method 1: LinkedIn API (Fully automated)
LINKEDIN_CLIENT_ID=your_linkedin_client_id
LINKEDIN_CLIENT_SECRET=your_linkedin_client_secret
LINKEDIN_ACCESS_TOKEN=your_access_token
LINKEDIN_ORGANIZATION_ID=123456789

# Method 2: Google Sheets (Easy manual updates)
GOOGLE_SHEET_ID=your_google_sheet_id
GOOGLE_SHEET_TAB=Posts

# Method 3: Static JSON (No setup needed)
# Edit data/linkedin-posts.json directly
```

**LinkedIn Feed Setup:**

- **Quick Start**: Run `./scripts/setup-linkedin.sh` for interactive setup
- **Testing**: Run `node scripts/test-linkedin-feed.js` to test your configuration
- **Documentation**: See [LINKEDIN_SETUP.md](./LINKEDIN_SETUP.md) for detailed instructions

### Customization

- **Colors**: Edit `tailwind.config.ts` to customize the color scheme
- **Fonts**: Modify `app/layout.tsx` to change fonts
- **Content**: Update component files to change text and images
- **Animations**: Adjust Framer Motion parameters in components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎯 Performance

- **Lighthouse Score**: 90+ across all metrics
- **Core Web Vitals**: Optimized
- **Bundle Size**: Minimized with Next.js automatic optimization
- **Image Optimization**: Next.js Image component ready

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software of Cyber Security Stack Ltd.

## 🔗 Links

- **GitHub Repository**: https://github.com/DevanshM1211/Cybersecurity-Stack-Website
- **University of Oxford**: https://www.ox.ac.uk/

## 📧 Contact

For inquiries about Cyber Security Stack:

- Email: hello@cybersecuritystack.co.uk
- Location: Oxford Innovation Hub, University of Oxford, United Kingdom

---

**Built with ❤️ by Cyber Security Stack in partnership with the University of Oxford**

_Redefining Digital Trust | Pioneering Autonomous Cyber Defence_
