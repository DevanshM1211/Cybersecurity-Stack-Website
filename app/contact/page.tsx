import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact Us | Cyber Security Stack",
  description:
    "Get in touch with Cyber Security Stack. Schedule a demo or learn more about our solutions.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <ContactForm />
    </main>
  );
}
