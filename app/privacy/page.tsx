"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, Mail, Calendar } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: [
        "When you use our contact form, we collect your name, email address, company name, and message content.",
        "We automatically collect certain information about your device, including your IP address, browser type, and usage data through cookies and similar technologies.",
        "If you subscribe to our newsletter, we store your email address and subscription preferences.",
      ],
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To respond to your inquiries and provide customer support.",
        "To send you updates about our products, services, and company news (with your consent).",
        "To improve our website, products, and services based on your feedback and usage patterns.",
        "To protect against fraud, unauthorized access, and other security threats.",
      ],
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits.",
        "Our Resonance Protocol technology ensures data integrity and protection against unauthorized access.",
        "We limit access to personal information to employees and contractors who need it to perform their job functions.",
        "Despite our best efforts, no security measures are completely impenetrable. We cannot guarantee absolute security.",
      ],
    },
    {
      icon: Eye,
      title: "Data Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "We may share information with trusted service providers who assist us in operating our website and conducting business (e.g., email service providers, analytics platforms).",
        "We may disclose information when required by law or to protect our rights, property, or safety.",
      ],
    },
    {
      icon: Calendar,
      title: "Data Retention",
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy.",
        "Contact form submissions are retained for up to 2 years for customer service purposes.",
        "Newsletter subscriptions are maintained until you unsubscribe.",
        "You may request deletion of your data at any time by contacting us.",
      ],
    },
    {
      icon: Mail,
      title: "Your Rights",
      content: [
        "Access: You have the right to request a copy of the personal information we hold about you.",
        "Correction: You can request corrections to any inaccurate or incomplete information.",
        "Deletion: You may request deletion of your personal information, subject to legal obligations.",
        "Opt-out: You can unsubscribe from marketing communications at any time.",
        "Data Portability: You can request your data in a structured, commonly used format.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-cyber-dark">
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
              <Shield className="w-12 h-12 text-cyber-blue dark:text-cyber-blue" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyber-blue to-cyber-purple">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Last Updated: October 29, 2025
            </p>
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Your privacy is important to us. This policy outlines how Cyber
              Security Stack collects, uses, and protects your personal
              information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative p-8 rounded-2xl glass-effect border border-cyber-blue/20 hover:border-cyber-blue/40 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 to-cyber-purple/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-cyber-blue/10 rounded-lg">
                        <section.icon className="w-6 h-6 text-cyber-blue" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {section.title}
                      </h2>
                    </div>

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

          {/* Cookies Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl glass-effect border border-cyber-blue/30"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Cookies & Tracking
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              We use cookies and similar tracking technologies to enhance your
              browsing experience and analyse website traffic. You can control
              cookie preferences through your browser settings.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Types of cookies we use: Essential cookies (required for website
              functionality), Analytics cookies (to understand usage patterns),
              and Performance cookies (to optimise user experience).
            </p>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl glass-effect border border-cyber-blue/20 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Questions About Privacy?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you have any questions or concerns about our privacy practices,
              please don't hesitate to contact us.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </Link>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              href="/"
              className="text-cyber-blue hover:text-cyber-purple dark:text-cyber-blue dark:hover:text-cyber-purple transition-colors inline-flex items-center gap-2"
            >
              ← Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
