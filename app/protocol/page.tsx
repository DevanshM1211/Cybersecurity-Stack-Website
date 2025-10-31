import ResonanceProtocol from "@/components/ResonanceProtocol";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Resonance Protocol | Cyber Security Stack",
  description:
    "Explore the Resonance Protocol - decentralised trust architecture for autonomous cyber defense.",
};

export default function ProtocolPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <ResonanceProtocol />
    </main>
  );
}
