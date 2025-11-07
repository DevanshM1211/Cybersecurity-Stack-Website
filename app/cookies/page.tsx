import type { Metadata } from "next";
import CookieContent from "./CookieContent";

export const metadata: Metadata = {
  title: "Cookie Policy | Cyber Security Stack",
  description:
    "Learn about how Cyber Security Stack uses cookies and similar technologies. Understand our use of essential, functional, and analytics cookies to improve your browsing experience.",
  keywords: [
    "cookie policy",
    "cookies",
    "privacy",
    "data protection",
    "analytics",
    "cyber security stack",
    "GDPR",
  ],
  openGraph: {
    title: "Cookie Policy | Cyber Security Stack",
    description:
      "Learn about how we use cookies and similar technologies on our website.",
    type: "website",
  },
};

export default function CookiePolicy() {
  return <CookieContent />;
}
