import type { Metadata } from "next";
import TermsContent from "./TermsContent";

export const metadata: Metadata = {
  title: "Terms of Service | Cyber Security Stack",
  description:
    "Read our Terms of Service governing the use of Cyber Security Stack's website and services. Learn about intellectual property, liability limitations, and user responsibilities.",
  keywords: [
    "terms of service",
    "terms and conditions",
    "legal",
    "cyber security stack",
    "user agreement",
    "intellectual property",
    "resonance protocol",
    "MBDR",
  ],
  openGraph: {
    title: "Terms of Service | Cyber Security Stack",
    description:
      "Terms of Service governing the use of Cyber Security Stack's website and services.",
    type: "website",
  },
};

export default function TermsOfService() {
  return <TermsContent />;
}
