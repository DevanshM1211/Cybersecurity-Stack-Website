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
  title: "Cyber Security Stack — Trust as a Protocol, Not a Policy",
  description:
    "Trust as a Protocol, Not a Policy. Pioneering autonomous cyber defence with Merkle-Based Detection and Response (MBDR) and the Resonance Protocol. Developed with the University of Oxford.",
  keywords:
    "cybersecurity, MBDR, Resonance Protocol, Zero Trust Architecture, autonomous defence, Merkle tree, Oxford Innovation",
  icons: {
    icon: "/favicon.svg",
  },
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
