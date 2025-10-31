import About from "@/components/About";

export const metadata = {
  title: "About | Cyber Security Stack",
  description:
    "Learn about Cyber Security Stack and the Resonance Protocol - Trust as a Protocol, Not a Policy.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <About />
    </main>
  );
}
