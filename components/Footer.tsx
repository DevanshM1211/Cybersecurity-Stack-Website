"use client";

import { Shield, Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = {
    Product: [
      { name: "Resonance Protocol", href: "/protocol" },
      { name: "MBDR Technology", href: "/mbdr" },
      { name: "Features", href: "/#core-features" },
      { name: "Documentation", href: "/documentation" },
      { name: "Pricing", href: "/contact" },
    ],
    Company: [
      { name: "About Us", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "LinkedIn Feed", href: "/#linkedin" },
      { name: "Whitepaper", href: "/documentation" },
      { name: "Contact", href: "/contact" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Security", href: "/documentation" },
      { name: "Compliance", href: "/documentation" },
      { name: "Cookies", href: "/cookies" },
    ],
  };

  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/company/cyber-security-stack/",
      label: "LinkedIn",
    },
    {
      icon: <Github size={20} />,
      href: "https://github.com/CyberSecurityStack",
      label: "GitHub",
    },
  ];

  return (
    <footer className="bg-white dark:bg-cyber-darker border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 mb-4"
            >
              <Shield className="w-8 h-8 text-cyber-blue" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Cyber Security Stack
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Pioneering Merkle-Based Detection and Response (MBDR). Building
              the future of autonomous cyber defence with the Resonance
              Protocol.
            </p>
            <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
              <Mail size={20} className="text-cyber-purple" />
              <a
                href="mailto:hello@cybersecuritystack.co.uk"
                className="hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors"
              >
                hello@cybersecuritystack.co.uk
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-gray-900 dark:text-white font-bold mb-4 text-base">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      whileHover={{ x: 5 }}
                      href={link.href}
                      className="text-gray-700 dark:text-gray-400 hover:text-cyber-blue dark:hover:text-cyber-blue transition-colors inline-block text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter - Hidden for now */}
        {/* <div className="glass-effect rounded-xl p-8 mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated on the Future of Cybersecurity
            </h3>
            <p className="text-gray-400 mb-6">
              Get the latest insights on MBDR technology and the Resonance
              Protocol.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-3 bg-cyber-dark border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyber-blue transition-colors flex-1 max-w-md"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div> */}

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} Cyber Security Stack. All rights
              reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-cyber-blue hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Extra Info */}
        <div className="mt-8 pt-8 border-t border-gray-200/50 dark:border-gray-800/50 text-center text-xs text-gray-500 dark:text-gray-500">
          <p>
            Website developed by{" "}
            <motion.a
              href="https://v0-aquos-website-design.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="text-cyber-blue hover:text-cyber-purple transition-colors font-semibold"
            >
              AQUOS
            </motion.a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
