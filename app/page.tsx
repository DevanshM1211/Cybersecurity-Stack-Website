import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CoreFeatures from "@/components/CoreFeatures";
import ResonanceProtocol from "@/components/ResonanceProtocol";
import MBDR from "@/components/MBDR";
import Solution from "@/components/Solution";
import Partnership from "@/components/Partnership";
import Team from "@/components/Team";
import Mission from "@/components/Mission";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <Hero />
      <CoreFeatures />
      <ResonanceProtocol />
      <MBDR />
      <Solution />
      <Partnership />
      <Team />
      <Mission />
      <Community />
      <Footer />
    </main>
  );
}
