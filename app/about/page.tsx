import About from "@/components/About";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "About Us | Cyber Security Stack",
  description:
    "Learn about Cyber Security Stack's mission to redefine digital trust through the Resonance Protocol.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-white dark:bg-cyber-dark z-0 pt-20">
      <BackButton />
      <About />
      <PageNavigation
        nextPage={{
          title: "Resonance Protocol",
          href: "/protocol",
        }}
      />
    </main>
  );
}
