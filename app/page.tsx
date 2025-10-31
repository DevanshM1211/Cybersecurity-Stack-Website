import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import CoreFeatures from "@/components/CoreFeatures";
import TrustSignals from "@/components/TrustSignals";
import SiteMap from "@/components/SiteMap";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import dynamic from "next/dynamic";

const QuickActions = dynamic(() => import("@/components/QuickActions"), {
  ssr: false,
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <QuickActions />
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
