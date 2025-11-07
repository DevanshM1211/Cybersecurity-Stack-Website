import type { Metadata } from "next";
import DocumentationContent from "./DocumentationContent";

export const metadata: Metadata = {
  title: "Documentation | Cyber Security Stack",
  description:
    "Technical documentation for the Resonance Protocol and MBDR. Learn how to integrate our blockchain-based cyber defence technology into your organisation.",
  keywords: [
    "documentation",
    "technical docs",
    "resonance protocol",
    "MBDR",
    "API",
    "integration",
    "blockchain cybersecurity",
    "cyber defence",
  ],
  openGraph: {
    title: "Documentation | Cyber Security Stack",
    description:
      "Technical documentation for the Resonance Protocol and MBDR platform.",
    type: "website",
  },
};

export default function Documentation() {
  return <DocumentationContent />;
}
