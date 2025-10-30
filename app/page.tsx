import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreFeatures from "@/components/CoreFeatures";
import ResonanceProtocol from "@/components/ResonanceProtocol";
import MBDR from "@/components/MBDR";
import Solution from "@/components/Solution";
import Partnership from "@/components/Partnership";
import Team from "@/components/Team";
import Mission from "@/components/Mission";
import FAQ from "@/components/FAQ";
import Community from "@/components/Community";
import Footer from "@/components/Footer";
import TrustSignals from "@/components/TrustSignals";
import ContactForm from "@/components/ContactForm";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <main id="main-content" className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustSignals />
      <CoreFeatures />
      <ResonanceProtocol />
      <MBDR />
      <Solution />
      <Partnership />
      <Team />
      <Mission />
      <FAQ />
      <ContactForm />
      <Community />
      <Footer />
      <BackToTop />
    </main>
  );
}
