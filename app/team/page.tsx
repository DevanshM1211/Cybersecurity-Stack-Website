import Team from "@/components/Team";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import Script from "next/script";

export const metadata = {
  title: "Our Team | Cyber Security Stack",
  description:
    "Meet the brilliant minds behind Cyber Security Stack's revolutionary technology.",
};

const teamStructuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cyber Security Stack",
  url: "https://cybersecuritystack.co.uk",
  employee: [
    {
      "@type": "Person",
      name: "Luke Collinson",
      jobTitle: "Co-founder",
      sameAs: "https://www.linkedin.com/in/luke-c-088b61121/",
      worksFor: {
        "@type": "Organization",
        name: "Cyber Security Stack",
      },
    },
    {
      "@type": "Person",
      name: "Anna Wilson",
      jobTitle: "Co-founder",
      sameAs: "https://www.linkedin.com/in/anna-wilson-889830226/",
      worksFor: {
        "@type": "Organization",
        name: "Cyber Security Stack",
      },
    },
  ],
};

export default function TeamPage() {
  return (
    <>
      <Script
        id="team-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamStructuredData) }}
      />
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
    </>
  );
}
