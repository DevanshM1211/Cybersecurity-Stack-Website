import { Metadata } from "next";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import { FileText, Download, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Whitepapers | Cyber Security Stack",
  description:
    "Technical whitepapers and research papers on the Resonance Protocol, MBDR technology, and federated trust architecture for ransomware protection.",
};

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Resonance Protocol: A Federated Trust Architecture",
      description:
        "Comprehensive technical overview of the Resonance Protocol, including Merkle tree-based verification, hive architecture, and peer-to-peer trust contracts.",
      date: "November 2025",
      pages: "42 pages",
      downloadUrl: "#",
    },
    {
      title: "MBDR: Merkle-Based Detection and Response",
      description:
        "Deep dive into MBDR technology, real-time integrity verification, and automated remediation for ransomware attacks.",
      date: "October 2025",
      pages: "28 pages",
      downloadUrl: "#",
    },
    {
      title: "Implementing Zero Trust at Firmware Level",
      description:
        "Technical analysis of firmware-level trust embedding and creating unbreakable chains of verification across IT/OT/IoT architectures.",
      date: "September 2025",
      pages: "35 pages",
      downloadUrl: "#",
    },
  ];

  return (
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
              Technical research and detailed documentation on the Resonance
              Protocol, MBDR technology, and our approach to ransomware
              protection.
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
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-700 to-cyber-purple rounded-lg text-white font-semibold hover:from-primary-600 hover:to-primary-700 transition-all whitespace-nowrap"
                  >
                    <Download className="w-5 h-5" />
                    Download PDF
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-16 text-center p-8 glass-effect rounded-2xl border border-primary-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              More Research Coming Soon
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We're continuously publishing new research and technical
              documentation. Check back regularly for updates on our latest
              findings in ransomware protection and federated trust
              architectures.
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
  );
}
