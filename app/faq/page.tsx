import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "FAQ | Cyber Security Stack",
  description:
    "Frequently asked questions about Cyber Security Stack and our technology.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <FAQ />
      <PageNavigation
        previousPage={{
          title: "Team",
          href: "/team",
        }}
        nextPage={{
          title: "Contact",
          href: "/contact",
        }}
      />
    </main>
  );
}
