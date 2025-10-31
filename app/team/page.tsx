import Team from "@/components/Team";
import BackButton from "@/components/BackButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import PageNavigation from "@/components/PageNavigation";
import dynamic from "next/dynamic";

const QuickActions = dynamic(() => import("@/components/QuickActions"), {
  ssr: false,
});

export const metadata = {
  title: "Our Team | Cyber Security Stack",
  description:
    "Meet the team pioneering the future of cyber security with vision, innovation, and world-class expertise.",
};

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-cyber-dark">
      <BackButton />
      <QuickActions />
      <Breadcrumbs />
      <Team />
      <PageNavigation
        previousPage={{
          title: "Solution",
          href: "/solution",
        }}
        nextPage={{
          title: "FAQ",
          href: "/faq",
        }}
      />
    </main>
  );
}
