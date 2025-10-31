import Team from "@/components/Team";
import BackButton from "@/components/BackButton";

export const metadata = {
  title: "Our Team | Cyber Security Stack",
  description:
    "Meet the team pioneering the future of cyber security with vision, innovation, and world-class expertise.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Team />
    </main>
  );
}
