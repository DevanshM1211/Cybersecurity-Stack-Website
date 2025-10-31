import ResonanceProtocol from "@/components/ResonanceProtocol";
import BackButton from "@/components/BackButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "Resonance Protocol | Cyber Security Stack",
  description:
    "Explore the Resonance Protocol - decentralised trust architecture for autonomous cyber defense.",
};

export default function ProtocolPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Breadcrumbs />
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
