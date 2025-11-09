import MBDR from "@/components/MBDR";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import Script from "next/script";

export const metadata = {
  title: "MBDR | Cyber Security Stack",
  description:
    "Merkle-Based Detection and Response - real-time threat detection and isolation.",
};

const mbdrProductData = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "MBDR - Merkle-Based Detection and Response",
  description:
    "Next-generation cybersecurity technology that leverages cryptographic Merkle trees for real-time threat detection, verification, and automatic isolation of compromised components.",
  brand: {
    "@type": "Brand",
    name: "Cyber Security Stack",
  },
  category: "Cybersecurity Software",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/PreOrder",
    priceCurrency: "GBP",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
  },
};

export default function MBDRPage() {
  return (
    <>
      <Script
        id="mbdr-product-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mbdrProductData) }}
      />
      <main className="min-h-screen bg-white dark:bg-cyber-dark">
        <BackButton />
        <MBDR />
        <PageNavigation
          previousPage={{
            title: "Resonance Protocol",
            href: "/protocol",
          }}
          nextPage={{
            title: "Solution",
            href: "/solution",
          }}
        />
      </main>
    </>
  );
}
