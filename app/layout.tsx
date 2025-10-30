import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cybersecuritystack.co.uk"),
  title: {
    default: "Cyber Security Stack — Trust as a Protocol, Not a Policy",
    template: "%s | Cyber Security Stack",
  },
  description:
    "Deep-tech immune system for ransomware protection. Cyber Security Stack's Resonance Protocol detects unwanted changes instantly and reverts to trusted state, preventing operational outages and billion-pound losses like JLR experienced. A federated trust protocol creating ransomware-resistant architectures.",
  keywords: [
    "cybersecurity",
    "cyber security",
    "Cyber Security Stack",
    "CSS",
    "Resonance Protocol",
    "RP",
    "federated trust",
    "Merkle tree",
    "MBDR",
    "Merkle-Based Detection and Response",
    "Zero Trust Architecture",
    "ransomware protection",
    "ransomware prevention",
    "ransomware-resistant",
    "operational outage prevention",
    "integrity verification",
    "autonomous cyber defence",
    "real-time threat detection",
    "instant threat detection",
    "cryptographic verification",
    "tamper-proofing",
    "deep-tech security",
    "cyber immune system",
    "trusted state recovery",
    "Oxford Innovation",
    "University of Oxford",
    "cyber security startup",
    "enterprise security",
    "OT security",
    "IoT security",
    "IT security",
    "SaaS security platform",
    "security agent",
    "endpoint protection",
  ],
  authors: [
    { name: "Cyber Security Stack", url: "https://cybersecuritystack.co.uk" },
  ],
  creator: "Cyber Security Stack",
  publisher: "Cyber Security Stack",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cybersecuritystack.co.uk",
    title: "Cyber Security Stack — Trust as a Protocol, Not a Policy",
    description:
      "Deep-tech immune system preventing ransomware outages. Detects unwanted changes instantly and reverts to trusted state. Starting as SaaS platform, aiming to be the new standard for tamper-proofing businesses.",
    siteName: "Cyber Security Stack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyber Security Stack - Resonance Protocol - Trust as a Protocol, Not a Policy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyber Security Stack — Trust as a Protocol, Not a Policy",
    description:
      "Deep-tech immune system preventing ransomware outages. Detects unwanted changes instantly and reverts to trusted state. Starting as SaaS platform, aiming to be the new standard for tamper-proofing businesses.",
    images: ["/og-image.png"],
    creator: "@CyberSecStack",
  },
  alternates: {
    canonical: "https://cybersecuritystack.co.uk",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "verification_token",
    // Add your actual verification tokens here
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cyber Security Stack",
    alternateName: "CSS",
    url: "https://cybersecuritystack.co.uk",
    logo: "https://cybersecuritystack.co.uk/Logo.png",
    description:
      "A deep-tech immune system that detects unwanted changes instantly and reverts back to trusted state. Starting as an agent and SaaS platform for ransomware prevention, aiming to be the new standard for tamper-proofing businesses.",
    slogan: "Trust as a Protocol, Not a Policy",
    email: "hello@cybersecuritystack.co.uk",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Oxford",
      addressCountry: "GB",
    },
    sameAs: [
      "https://twitter.com/CyberSecStack",
      "https://linkedin.com/company/cybersecuritystack",
      "https://github.com/CyberSecurityStack",
    ],
    foundingDate: "2024",
    foundingLocation: {
      "@type": "Place",
      name: "Oxford Innovation Hub, University of Oxford",
    },
    knowsAbout: [
      "Cybersecurity",
      "Resonance Protocol",
      "Merkle-Based Detection and Response",
      "Zero Trust Architecture",
      "Ransomware Protection",
      "Ransomware Prevention",
      "Federated Trust",
      "Tamper-proofing",
      "Operational Outage Prevention",
      "Instant Threat Detection",
      "Trusted State Recovery",
    ],
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Resonance Protocol - Ransomware Protection",
        description:
          "Deep-tech immune system that knows exactly what should and shouldn't be there. Not only detecting unwanted change instantly, but reverting back to the trusted state so businesses can continue as normal.",
      },
    },
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cyber Security Stack",
    url: "https://cybersecuritystack.co.uk",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://cybersecuritystack.co.uk/?s={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  // Problem-Solution Structured Data
  const softwareApplicationData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cyber Security Stack",
    applicationCategory: "SecurityApplication",
    operatingSystem: "Cross-platform",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
    },
    description:
      "A deep-tech immune system preventing ransomware-caused operational outages and costly rebuilds. Detects behaviours instantly and handles unknown threats, taking security to the next level.",
    featureList: [
      "Instant unwanted change detection",
      "Automatic revert to trusted state",
      "Ransomware prevention",
      "Operational continuity",
      "Real-time threat isolation",
      "Zero trust verification",
      "Tamper-proof architecture",
    ],
  };

  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareApplicationData),
          }}
        />
      </head>
      <body className={inter.className}>
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-cyber-blue focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
