import ContactForm from "@/components/ContactForm";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";
import { RecaptchaProvider } from "@/contexts/RecaptchaContext";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Get in touch with Cyber Security Stack. Schedule a demo, request information about MBDR and Resonance Protocol, or learn more about our ransomware protection solutions.",
  keywords: [
    "contact cyber security stack",
    "request demo",
    "ransomware protection enquiry",
    "MBDR demo",
    "security consultation",
  ],
  openGraph: {
    title: "Contact Us - Cyber Security Stack",
    description:
      "Get in touch to learn how our Resonance Protocol can protect your infrastructure.",
    type: "website",
    url: "https://cybersecuritystack.co.uk/contact",
  },
  alternates: {
    canonical: "https://cybersecuritystack.co.uk/contact",
  },
};

export default function ContactPage() {
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
        name: "Contact",
        item: "https://cybersecuritystack.co.uk/contact",
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <main className="min-h-screen bg-cyber-dark">
        <BackButton />
        <RecaptchaProvider>
          <ContactForm />
        </RecaptchaProvider>
        <PageNavigation
          previousPage={{
            title: "FAQ",
            href: "/faq",
          }}
        />
      </main>
    </>
  );
}
