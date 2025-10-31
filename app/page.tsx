"use client";

import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import CoreFeatures from "@/components/CoreFeatures";
import TrustSignals from "@/components/TrustSignals";
import LinkedInFeed from "@/components/LinkedInFeed";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Hero />
      <LogoLoop />
      <CoreFeatures />
      <TrustSignals />
      <LinkedInFeed />
      <Footer />
      <BackToTop />
    </main>
  );
}
