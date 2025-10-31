import About from "@/components/About";
import BackButton from "@/components/BackButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "About Us | Cyber Security Stack",
  description:
    "Learn about Cyber Security Stack's mission to redefine digital trust through the Resonance Protocol.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Breadcrumbs />
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
