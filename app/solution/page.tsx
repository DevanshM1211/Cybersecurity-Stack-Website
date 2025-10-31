import Solution from "@/components/Solution";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Our Solution | Cyber Security Stack",
  description:
    "Lightweight agents, powerful SaaS platform, and expert professional services for end-to-end cyber resilience.",
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Solution />
    </main>
  );
}
