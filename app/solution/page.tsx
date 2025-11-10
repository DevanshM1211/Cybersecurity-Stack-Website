import Solution from "@/components/Solution";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "Our Solution | Cyber Security Stack",
  description:
    "Discover how our solution provides unparalleled protection against ransomware.",
};

export default function SolutionPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-cyber-dark pt-20">
      <BackButton />
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
