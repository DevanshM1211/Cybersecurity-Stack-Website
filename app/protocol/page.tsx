import ResonanceProtocol from "@/components/ResonanceProtocol";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resonance Protocol - Federated Trust Architecture",
  description:
    "Explore the Resonance Protocol - decentralised trust architecture for autonomous cyber defence. A federated system that detects unwanted changes instantly and reverts to trusted state.",
  keywords: [
    "Resonance Protocol",
    "federated trust",
    "Merkle tree",
    "decentralised security",
    "autonomous cyber defence",
    "trust contracts",
  ],
  openGraph: {
    title: "Resonance Protocol - Cyber Security Stack",
    description:
      "Decentralised trust architecture for autonomous cyber defence using federated Merkle trees and peer-to-peer verification.",
    type: "website",
    url: "https://cybersecuritystack.co.uk/protocol",
  },
  alternates: {
    canonical: "https://cybersecuritystack.co.uk/protocol",
  },
};

export default function ProtocolPage() {
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://cybersecuritystack.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Resonance Protocol",
        item: "https://cybersecuritystack.co.uk/protocol",
      },
    ],
  };

  return (
    <>
      <Script
        id="protocol-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <main className="min-h-screen bg-cyber-dark">
        <BackButton />
        <ResonanceProtocol />
        <PageNavigation
          previousPage={{
            title: "About Us",
            href: "/about",
          }}
          nextPage={{
            title: "MBDR",
            href: "/mbdr",
          }}
        />
      </main>
    </>
  );
}
