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
    "Cyber Security Stack (CSS) pioneers next-generation cyber security with the Resonance Protocol—a federated trust protocol creating ransomware-resistant, integrity-first architectures. Every system becomes a self-verifying hive where tampering is detected and isolated in real time.",
  keywords:
    "cybersecurity, Cyber Security Stack, CSS, Resonance Protocol, federated trust, Merkle tree, Zero Trust Architecture, ransomware-resistant, integrity verification, autonomous defence, Oxford Innovation",
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
