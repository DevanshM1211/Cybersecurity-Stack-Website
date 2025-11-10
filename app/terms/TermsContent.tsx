"use client";

import { motion } from "framer-motion";
import { FileText, Shield, AlertTriangle, Mail } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function TermsContent() {
  const sections = [
    {
      icon: FileText,
      title: "Acceptance of Terms",
      content: [
        "By accessing and using the Cyber Security Stack website, you accept and agree to be bound by these Terms of Service.",
        "If you do not agree to these terms, please do not use our website or services.",
        "We reserve the right to modify these terms at any time. Continued use of the site constitutes acceptance of the updated terms.",
      ],
    },
    {
      icon: Shield,
      title: "Use of Services",
      content: [
        "You may use our website for lawful purposes only and in accordance with these Terms.",
        "You agree not to use the site in any way that could damage, disable, or impair the service.",
        "You may not attempt to gain unauthorised access to any part of the website or systems.",
        "Commercial use of any content on this site without express written permission is prohibited.",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Intellectual Property",
      content: [
        "All content on this website, including text, graphics, logos, and software, is the property of Cyber Security Stack Ltd.",
        "The Resonance Protocol and MBDR are trademarks of Cyber Security Stack Ltd.",
        "You may not reproduce, distribute, or create derivative works from our content without permission.",
        "Technology described on this site is protected by patents pending.",
      ],
    },
    {
      icon: Mail,
      title: "Limitation of Liability",
      content: [
        "Cyber Security Stack provides this website 'as is' without warranties of any kind.",
        "We are not liable for any damages arising from the use or inability to use our website.",
        "We do not guarantee that our website will be uninterrupted, secure, or error-free.",
        "Our total liability shall not exceed the amount paid by you, if any, for accessing our services.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-cyber-dark">
      <BackButton />

      {/* Header */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-transparent dark:from-cyber-darker/50 dark:to-transparent" />
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
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
              className="inline-flex p-4 bg-cyber-blue/10 rounded-full mb-6"
            >
              <FileText className="w-12 h-12 text-cyber-blue" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Terms of Service
            </h1>

            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">
              Please read these terms carefully before using our services
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <span>Last Updated:</span>
              <span className="text-cyber-blue">6 November 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-effect rounded-2xl p-8 border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-cyber-blue/10 rounded-lg">
                    <section.icon className="w-6 h-6 text-cyber-blue" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-4">
                      {section.content.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-blue flex-shrink-0" />
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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

          {/* Additional Terms */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl glass-effect border border-cyber-blue/30"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Governing Law
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              These Terms of Service shall be governed by and construed in
              accordance with the laws of England and Wales.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Any disputes arising from these terms shall be subject to the
              exclusive jurisdiction of the courts of England and Wales.
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Questions about our Terms of Service?
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all"
            >
              <Mail size={20} />
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
