"use client";

import { motion } from "framer-motion";
import { Cookie, Shield, Settings, Info } from "lucide-react";
import Link from "next/link";
import BackButton from "@/components/BackButton";

export default function CookieContent() {
  const cookieTypes = [
    {
      icon: Shield,
      title: "Essential Cookies",
      description: "Required for the website to function properly",
      cookies: [
        {
          name: "theme_preference",
          purpose: "Stores your light/dark mode preference",
          duration: "1 year",
        },
      ],
    },
    {
      icon: Settings,
      title: "Functional Cookies",
      description: "Enhance your experience on our website",
      cookies: [
        {
          name: "language_preference",
          purpose: "Remembers your language selection",
          duration: "1 year",
        },
      ],
    },
    {
      icon: Info,
      title: "Analytics Cookies",
      description: "Help us understand how visitors use our website",
      cookies: [
        {
          name: "_ga",
          purpose: "Google Analytics - tracks user behaviour",
          duration: "2 years",
        },
        {
          name: "_gid",
          purpose: "Google Analytics - distinguishes users",
          duration: "24 hours",
        },
      ],
    },
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
              <Cookie className="w-12 h-12 text-blue-400" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Cookie Policy
            </h1>

            <p className="text-xl text-gray-300 mb-8">
              Learn about how we use cookies and similar technologies
            </p>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
              <span>Last Updated:</span>
              <span className="text-blue-400">6 November 2025</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What are Cookies */}
      <section className="py-12">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 mb-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              What are Cookies?
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device when
              you visit our website. They help us provide you with a better
              experience by remembering your preferences and understanding how
              you use our site.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We use cookies to enhance website functionality, analyse traffic,
              and personalise content. You can control cookie settings through
              your browser preferences.
            </p>
          </motion.div>

          {/* Cookie Types */}
          <div className="space-y-8">
            {cookieTypes.map((type, index) => (
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
                    <type.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {type.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{type.description}</p>

                    <div className="space-y-4">
                      {type.cookies.map((cookie, i) => (
                        <div
                          key={i}
                          className="bg-gray-900/50 rounded-lg p-4 border border-blue-500/10"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <div>
                              <p className="text-white font-mono text-sm mb-1">
                                {cookie.name}
                              </p>
                              <p className="text-gray-400 text-sm">
                                {cookie.purpose}
                              </p>
                            </div>
                            <div className="text-blue-400 text-sm whitespace-nowrap">
                              {cookie.duration}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Managing Cookies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-500/30"
          >
            <h2 className="text-2xl font-bold text-white mb-4">
              Managing Your Cookie Preferences
            </h2>
            <p className="text-gray-300 mb-4">
              Most web browsers allow you to control cookies through their
              settings. You can set your browser to refuse cookies or delete
              certain cookies. Please note that disabling cookies may affect
              your ability to use some features of our website.
            </p>
            <p className="text-gray-300">
              For more information about cookies and how to manage them, visit{" "}
              <a
                href="https://www.allaboutcookies.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                www.allaboutcookies.org
              </a>
            </p>
          </motion.div>

          {/* Related Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/privacy"
              className="px-6 py-3 bg-gray-800/50 border border-blue-500/30 rounded-lg text-white hover:bg-gray-800/70 hover:border-blue-500/50 transition-all"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="px-6 py-3 bg-gray-800/50 border border-blue-500/30 rounded-lg text-white hover:bg-gray-800/70 hover:border-blue-500/50 transition-all"
            >
              Terms of Service
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
