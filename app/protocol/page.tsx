import ResonanceProtocol from "@/components/ResonanceProtocol";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "Resonance Protocol | Cyber Security Stack",
  description:
    "Explore the Resonance Protocol - decentralised trust architecture for autonomous cyber defence.",
};

export default function ProtocolPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <ResonanceProtocol />
      <PageNavigation
        previousPage={{
          title: "About Us",
          href: "/about",
        }}
        nextPage={{
          title: "MBDR",
          href: "/mbdr",
        }}
      />
    </main>
  );
}
