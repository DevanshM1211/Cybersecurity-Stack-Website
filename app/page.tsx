"use client";

import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import CoreFeatures from "@/components/CoreFeatures";
import LinkedInFeed from "@/components/LinkedInFeed";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Hero />
      <LogoLoop />
      <CoreFeatures />
      <LinkedInFeed />
      <BackToTop />
    </main>
  );
}
