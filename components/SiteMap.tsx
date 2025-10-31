"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Info,
  Radio,
  Shield,
  Blocks,
  Users,
  HelpCircle,
  Mail,
} from "lucide-react";

const SiteMap = () => {
  const pages = [
    {
      title: "Home",
      href: "/",
      icon: <Home className="w-5 h-5" />,
      description: "Main landing page with overview",
    },
    {
      title: "About",
      href: "/about",
      icon: <Info className="w-5 h-5" />,
      description: "Learn about our mission and vision",
    },
    {
      title: "Resonance Protocol",
      href: "/protocol",
      icon: <Radio className="w-5 h-5" />,
      description: "Federated trust architecture",
    },
    {
      title: "MBDR",
      href: "/mbdr",
      icon: <Shield className="w-5 h-5" />,
      description: "Merkle-Based Detection & Response",
    },
    {
      title: "Solution",
      href: "/solution",
      icon: <Blocks className="w-5 h-5" />,
      description: "Three-pillar security approach",
    },
    {
      title: "Team",
      href: "/team",
      icon: <Users className="w-5 h-5" />,
      description: "Meet our co-founders",
    },
    {
      title: "FAQ",
      href: "/faq",
      icon: <HelpCircle className="w-5 h-5" />,
      description: "Frequently asked questions",
    },
    {
      title: "Contact",
      href: "/contact",
      icon: <Mail className="w-5 h-5" />,
      description: "Get in touch with us",
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Explore Our{" "}
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">
              Website
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Quick access to all pages and resources
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pages.map((page, index) => (
            <motion.div
              key={page.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Link
                href={page.href}
                className="block p-6 glass-effect rounded-xl border border-white/5 hover:border-cyber-blue/30 transition-all group h-full"
              >
                <div className="text-cyber-blue mb-4 group-hover:scale-110 transition-transform">
                  {page.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                  {page.title}
                </h3>
                <p className="text-sm text-gray-400">{page.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SiteMap;
