import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResonanceProtocol from "@/components/ResonanceProtocol";
import MBDR from "@/components/MBDR";
import Partnership from "@/components/Partnership";
import Mission from "@/components/Mission";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main id="top" className="min-h-screen">
      <Navbar />
      <Hero />
      <ResonanceProtocol />
      <MBDR />
      <Partnership />
      <Mission />
      <Footer />
    </main>
  );
}
