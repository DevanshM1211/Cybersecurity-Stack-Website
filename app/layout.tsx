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
    "Cyber Security Stack pioneers next-generation cybersecurity with the Resonance Protocol (RP)—a federated trust protocol creating ransomware-resistant, integrity-first architectures. Every system becomes a self-verifying 'hive' where tampering is detected and isolated in real time.",
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
    "ransomware-resistant",
    "integrity verification",
    "autonomous cyber defence",
    "real-time threat detection",
    "cryptographic verification",
    "Oxford Innovation",
    "University of Oxford",
    "cyber security startup",
    "enterprise security",
    "OT security",
    "IoT security",
    "IT security",
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
      "Pioneering ransomware-resistant cyber security with the Resonance Protocol. Self-verifying hives detect and isolate tampering in real time.",
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
      "Pioneering ransomware-resistant cyber security with the Resonance Protocol. Self-verifying hives detect and isolate tampering in real time.",
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
      "Cyber Security Stack pioneers next-generation cybersecurity with the Resonance Protocol—a federated trust protocol creating ransomware-resistant, integrity-first architectures.",
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
      "Federated Trust",
    ],
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
