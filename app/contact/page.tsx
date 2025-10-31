import ContactForm from "@/components/ContactForm";
import BackButton from "@/components/BackButton";
import PageNavigation from "@/components/PageNavigation";

export const metadata = {
  title: "Contact Us | Cyber Security Stack",
  description:
    "Get in touch with Cyber Security Stack. Schedule a demo or learn more about our solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <ContactForm />
      <PageNavigation
        previousPage={{
          title: "FAQ",
          href: "/faq",
        }}
      />
    </main>
  );
}
