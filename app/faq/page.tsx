import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "FAQ | Cyber Security Stack",
  description:
    "Frequently asked questions about Cyber Security Stack, the Resonance Protocol, and MBDR.",
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <Breadcrumbs />
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
