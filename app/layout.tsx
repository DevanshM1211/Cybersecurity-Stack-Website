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
  metadataBase: new URL("https://cybersecuritystack.com"),
  title: "Cyber Security Stack — Trust as a Protocol, Not a Policy",
  description:
    "Cyber Security Stack (CSS) pioneers next-generation cyber security with the Resonance Protocol—a federated trust protocol creating ransomware-resistant, integrity-first architectures. Every system becomes a self-verifying hive where tampering is detected and isolated in real time.",
  keywords:
    "cybersecurity, Cyber Security Stack, CSS, Resonance Protocol, federated trust, Merkle tree, Zero Trust Architecture, ransomware-resistant, integrity verification, autonomous defence, Oxford Innovation",
  authors: [{ name: "Cyber Security Stack" }],
  creator: "Cyber Security Stack",
  publisher: "Cyber Security Stack",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://cybersecuritystack.com",
    title: "Cyber Security Stack — Trust as a Protocol, Not a Policy",
    description:
      "Pioneering ransomware-resistant cyber security with the Resonance Protocol. Self-verifying hives detect and isolate tampering in real time.",
    siteName: "Cyber Security Stack",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cyber Security Stack - Resonance Protocol",
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
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoMono.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
