import Solution from "@/components/Solution";
import BackButton from "@/components/BackButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "Our Solution | Cyber Security Stack",
  description:
    "Three-pillar approach: Agent, SaaS Platform, and Professional Services.",
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Breadcrumbs />
      <Solution />
      <PageNavigation
        previousPage={{
          title: "MBDR",
          href: "/mbdr",
        }}
        nextPage={{
          title: "Team",
          href: "/team",
        }}
      />
    </main>
  );
}
