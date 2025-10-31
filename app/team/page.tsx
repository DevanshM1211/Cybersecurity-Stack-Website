import Team from "@/components/Team";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "Our Team | Cyber Security Stack",
  description:
    "Meet the brilliant minds behind Cyber Security Stack's revolutionary technology.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Team />
      <PageNavigation
        previousPage={{
          title: "Solution",
          href: "/solution",
        }}
        nextPage={{
          title: "FAQ",
          href: "/faq",
        }}
      />
    </main>
  );
}
