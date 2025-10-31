"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import CoreFeatures from "@/components/CoreFeatures";
import TrustSignals from "@/components/TrustSignals";
import SiteMap from "@/components/SiteMap";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <LogoLoop />
      <CoreFeatures />
      <TrustSignals />
      <SiteMap />
      <Footer />
      <BackToTop />
    </main>
  );
}
