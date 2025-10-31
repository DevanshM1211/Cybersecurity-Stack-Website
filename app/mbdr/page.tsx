import MBDR from "@/components/MBDR";
import BackButton from "@/components/BackButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageNavigation from "@/components/PageNavigation";
import dynamic from "next/dynamic";

const QuickActions = dynamic(() => import("@/components/QuickActions"), {
  ssr: false,
});

export const metadata = {
  title: "MBDR | Cyber Security Stack",
  description:
    "Merkle-Based Detection and Response - real-time threat detection and isolation.",
};

export default function MBDRPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <QuickActions />
      <Breadcrumbs />
      <MBDR />
      <PageNavigation
        previousPage={{
          title: "Resonance Protocol",
          href: "/protocol",
        }}
        nextPage={{
          title: "Solution",
          href: "/solution",
        }}
      />
    </main>
  );
}
