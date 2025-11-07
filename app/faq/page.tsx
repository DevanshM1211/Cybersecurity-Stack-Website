import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import Script from "next/script";

export const metadata = {
  title: "FAQ | Cyber Security Stack",
  description:
    "Frequently asked questions about Cyber Security Stack and our technology.",
};

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Cyber Security Stack (CSS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cyber Security Stack is a UK-based cyber innovation company pioneering the Resonance Protocol - a trust contract framework that ensures system integrity using Merkle-tree-based verification. Our mission is to make digital systems verifiably trustworthy.",
      },
    },
    {
      "@type": "Question",
      name: "What is the Resonance Protocol?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Resonance Protocol is a federated trust protocol that enables systems (devices, applications, or networks) to verify their internal integrity and establish trust contracts with other systems. It detects tampering in real time and isolates compromised components automatically.",
      },
    },
    {
      "@type": "Question",
      name: "How is CSS different from traditional cybersecurity solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Traditional security tools detect or prevent attacks after they happen. The Resonance Protocol builds security into the system's DNA - continuously verifying integrity and revoking trust if anomalies are detected.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when tampering is detected?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If a system deviates from its baseline (indicating tampering), the protocol immediately revokes its trust contract and isolates it from the network until revalidation occurs.",
      },
    },
    {
      "@type": "Question",
      name: "Which environments does the Resonance Protocol support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Resonance Protocol is designed to work seamlessly across IT, OT (Operational Technology), and IoT environments. It's lightweight and flexible enough to run on everything from enterprise servers to industrial control systems and IoT devices.",
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
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
    </>
  );
}
