import MBDR from "@/components/MBDR";

export const metadata = {
  title: "MBDR | Cyber Security Stack",
  description:
    "Merkle-tree Based Detection & Response - autonomous, real-time cyber defense powered by the Resonance Protocol.",
};

export default function MBDRPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <MBDR />
    </main>
  );
}
