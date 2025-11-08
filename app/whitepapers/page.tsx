import { Metadata } from "next";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import { FileText, Download, Calendar } from "lucide-react";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Whitepapers - Technical Research & Documentation",
  description:
    "Download 4 comprehensive technical whitepapers on the Resonance Protocol: Overall Architecture, Subsumption Hive, Adjacent Hive, and OT Application. Complete documentation for ransomware protection and federated trust architecture.",
  keywords: [
    "cybersecurity whitepapers",
    "Resonance Protocol whitepaper",
    "MBDR research",
    "ransomware protection research",
    "technical documentation",
    "zero trust whitepaper",
    "federated trust research",
    "Subsumption Hive",
    "Adjacent Hive",
    "OT security",
    "operational technology",
  ],
  openGraph: {
    title: "Technical Whitepapers - Cyber Security Stack",
    description:
      "Download comprehensive whitepapers on the Resonance Protocol, including Overall Architecture, Subsumption Hive, Adjacent Hive, and OT Application.",
    type: "website",
    url: "https://cybersecuritystack.co.uk/whitepapers",
  },
  alternates: {
    canonical: "https://cybersecuritystack.co.uk/whitepapers",
  },
};

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "Overall Architecture - The Resonance Protocol",
      description:
        "Comprehensive technical overview of the Resonance Protocol's overall architecture, including Merkle tree-based verification, hive architecture, and peer-to-peer trust contracts. Foundational paper covering the complete system design.",
      date: "November 2025",
      pages: "Paper 1",
      downloadUrl:
        "/team/Cyber Security Stack - Overall Architecture (Paper 1).pdf",
    },
    {
      title: "Subsumption Hive - Core Detection Engine",
      description:
        "Deep dive into the Subsumption Hive component, detailing real-time integrity verification, automated threat detection, and the core mechanisms that power MBDR technology for ransomware prevention.",
      date: "November 2025",
      pages: "Paper 2",
      downloadUrl:
        "/team/Cyber Security Stack - Sumsumption Hive (Paper 2).pdf",
    },
    {
      title: "Adjacent Hive - Federated Trust Network",
      description:
        "Technical analysis of the Adjacent Hive architecture, exploring peer-to-peer trust contracts, federated verification systems, and how distributed hives collaborate to maintain system integrity.",
      date: "November 2025",
      pages: "Paper 3",
      downloadUrl: "/team/Cyber Security Stack - Adjacent Hive (Paper 3).pdf",
    },
    {
      title: "OT Application - Operational Technology Security",
      description:
        "Specialised implementation guide for applying the Resonance Protocol to Operational Technology environments, covering firmware-level trust embedding and creating unbreakable chains of verification across IT/OT/IoT architectures.",
      date: "November 2025",
      pages: "Paper 4",
      downloadUrl: "/team/Cyber Security Stack - OT Application (Paper 4).pdf",
    },
  ];

  // Breadcrumb Structured Data
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
        name: "Whitepapers",
        item: "https://cybersecuritystack.co.uk/whitepapers",
      },
    ],
  };

  // Collection Page Structured Data
  const collectionData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Technical Whitepapers & Research",
    description:
      "Technical research and detailed documentation on the Resonance Protocol, MBDR technology, and our approach to ransomware protection.",
    url: "https://cybersecuritystack.co.uk/whitepapers",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: whitepapers.map((paper, index) => ({
        "@type": "ScholarlyArticle",
        position: index + 1,
        name: paper.title,
        description: paper.description,
        datePublished: paper.date,
        numberOfPages: parseInt(paper.pages),
        author: {
          "@type": "Organization",
          name: "Cyber Security Stack",
        },
      })),
    },
  };

  return (
    <>
      {/* Structured Data */}
      <Script
        id="whitepapers-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <Script
        id="whitepapers-collection"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionData) }}
      />

      <main className="min-h-screen bg-cyber-dark">
        <BackButton />

        <section className="py-24 relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker opacity-50" />

          <div className="container mx-auto px-6 relative z-10 max-w-5xl">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex p-4 bg-primary-500/10 rounded-full mb-6">
                <FileText className="w-12 h-12 text-primary-500" />
              </div>

              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-primary-500">
                  Whitepapers
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our comprehensive 4-part technical research series on
                the Resonance Protocol, covering the Overall Architecture,
                Subsumption Hive, Adjacent Hive, and OT Applications.
              </p>
            </div>

            {/* Whitepapers List */}
            <div className="space-y-8">
              {whitepapers.map((paper, index) => (
                <div
                  key={index}
                  className="glass-effect rounded-2xl p-8 border border-primary-500/20 hover:border-primary-500/40 transition-all"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-white mb-3">
                        {paper.title}
                      </h2>
                      <p className="text-gray-400 mb-4 leading-relaxed">
                        {paper.description}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{paper.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          <span>{paper.pages}</span>
                        </div>
                      </div>
                    </div>

                    <a
                      href={paper.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-cyber-purple rounded-lg text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all whitespace-nowrap"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Information */}
            <div className="mt-16 text-center p-8 glass-effect rounded-2xl border border-primary-500/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Complete Technical Documentation
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                These four whitepapers provide comprehensive technical coverage
                of the Resonance Protocol. Read them in sequence for a complete
                understanding of our ransomware-resistant architecture, or focus
                on specific areas relevant to your implementation needs.
              </p>
            </div>
          </div>
        </section>

        <PageNavigation
          previousPage={{
            title: "Documentation",
            href: "/documentation",
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
