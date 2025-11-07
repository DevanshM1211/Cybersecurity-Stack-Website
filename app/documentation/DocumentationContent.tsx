"use client";

import { motion } from "framer-motion";
import {
  Book,
  Code,
  FileText,
  Zap,
  Shield,
  Database,
  GitBranch,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function DocumentationContent() {
  const sections = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Quick start guide and initial setup",
      items: [
        "System requirements and prerequisites",
        "Installation and deployment options",
        "Initial configuration and API keys",
        "First-time setup walkthrough",
      ],
    },
    {
      icon: Shield,
      title: "Resonance Protocol",
      description: "Core protocol documentation",
      items: [
        "Protocol architecture and design principles",
        "Blockchain integration methodology",
        "Transaction verification and consensus",
        "Security features and encryption standards",
      ],
    },
    {
      icon: Database,
      title: "MBDR Platform",
      description: "Micro-Blockchain Defence & Response",
      items: [
        "Real-time threat detection algorithms",
        "Automated response mechanisms",
        "Dashboard and analytics interface",
        "Alert configuration and management",
      ],
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Complete API documentation",
      items: [
        "Authentication and authorization",
        "RESTful API endpoints",
        "WebSocket connections for real-time data",
        "Rate limiting and error handling",
      ],
    },
    {
      icon: GitBranch,
      title: "Integration Guide",
      description: "Integrate with your existing systems",
      items: [
        "SIEM integration (Splunk, IBM QRadar)",
        "EDR platform connectivity",
        "Custom webhook configurations",
        "Third-party security tools compatibility",
      ],
    },
    {
      icon: Terminal,
      title: "CLI Tools",
      description: "Command-line interface utilities",
      items: [
        "Installation and setup of CLI tools",
        "Common commands and operations",
        "Automation scripts and workflows",
        "Troubleshooting and diagnostics",
      ],
    },
  ];

  const quickLinks = [
    { title: "API Reference", href: "#api-reference" },
    { title: "Integration Examples", href: "#integration" },
    { title: "Best Practices", href: "#best-practices" },
    { title: "Troubleshooting", href: "#troubleshooting" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900">
      <BackButton />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 to-transparent" />
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="inline-flex p-4 bg-blue-500/10 rounded-full mb-6"
            >
              <Book className="w-12 h-12 text-blue-400" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Documentation
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Complete technical documentation for the Resonance Protocol and
              MBDR platform
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-4 justify-center">
              {quickLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-lg text-blue-400 hover:bg-blue-500/20 hover:border-blue-500/50 transition-all text-sm"
                >
                  {link.title}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coming Soon Notice */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30 mb-12 text-center"
          >
            <Zap className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Detailed Documentation Coming Soon
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              We're currently developing comprehensive documentation for our
              platform. In the meantime, please explore the sections below for
              an overview of available resources. For immediate assistance,
              please contact our technical team.
            </p>
          </motion.div>

          {/* Documentation Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-blue-500/10 rounded-lg">
                    <section.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {section.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {section.description}
                    </p>

                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                          <p className="text-gray-300 text-sm leading-relaxed">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact for Documentation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30"
          >
            <h2 className="text-2xl font-bold text-white mb-4 text-center">
              Need Technical Support?
            </h2>
            <p className="text-gray-300 mb-6 text-center max-w-2xl mx-auto">
              Our technical team is available to help with integration,
              deployment, and any questions about the Resonance Protocol and
              MBDR platform.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all"
              >
                <FileText size={20} />
                Request Documentation Access
              </Link>
              <Link
                href="/solution"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800/50 border border-blue-500/30 rounded-lg text-white hover:bg-gray-800/70 hover:border-blue-500/50 transition-all"
              >
                <Shield size={20} />
                View Our Solution
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
