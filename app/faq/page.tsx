import FAQ from "@/components/FAQ";

export const metadata = {
  title: "FAQ | Cyber Security Stack",
  description:
    "Frequently asked questions about Cyber Security Stack, the Resonance Protocol, and MBDR.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <FAQ />
    </main>
  );
}
