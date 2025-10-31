import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoLoop from "@/components/LogoLoop";
import CoreFeatures from "@/components/CoreFeatures";
import TrustSignals from "@/components/TrustSignals";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import dynamic from "next/dynamic";

const ThemeToggle = dynamic(() => import("@/components/ThemeToggle"), {
  ssr: false,
});

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <ThemeToggle />
      <Hero />
      <LogoLoop />
      <CoreFeatures />
      <TrustSignals />
      <Footer />
      <BackToTop />
    </main>
  );
}
