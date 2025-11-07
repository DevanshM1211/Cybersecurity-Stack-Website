"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Linkedin,
  Github,
  ExternalLink,
  BookOpen,
  Users,
  Code,
} from "lucide-react";

const Community = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const platforms = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-12 h-12" />,
      gradient: "from-primary-700 to-primary-500",
      title: "Keep up to date on LinkedIn",
      description:
        "We've set up a dedicated LinkedIn page for Cyber Security Stack where we'll be sharing the latest updates, insights, and progress on the Resonance Protocol. This will be the main space to follow our journey, from new whitepapers and proof-of-concepts through to events, partnerships, and milestones.",
      cta: "Follow on LinkedIn",
      url: "https://www.linkedin.com/company/cyber-security-stack/",
      features: [
        {
          icon: <BookOpen className="w-5 h-5" />,
          text: "Latest updates & insights",
        },
        { icon: <Users className="w-5 h-5" />, text: "Events & partnerships" },
        {
          icon: <ExternalLink className="w-5 h-5" />,
          text: "Join the conversation",
        },
      ],
    },
    {
      name: "GitHub",
      icon: <Github className="w-12 h-12" />,
      gradient: "from-gray-700 to-gray-500",
      title: "Open Source Repository",
      description:
        "We maintain an open GitHub repository that houses our whitepapers, proof-of-concept implementations, and supporting documentation. It's a space for the community to explore the Resonance Protocol in action, test its capabilities, and even try to break it. By making the technology transparent and accessible, we invite security professionals, researchers, and innovators to engage directly.",
      cta: "Explore on GitHub",
      url: "https://github.com/CyberSecurityStack/opensource",
      features: [
        {
          icon: <BookOpen className="w-5 h-5" />,
          text: "Whitepapers & documentation",
        },
        {
          icon: <Code className="w-5 h-5" />,
          text: "Proof-of-concept implementations",
        },
        {
          icon: <Users className="w-5 h-5" />,
          text: "Community contributions",
        },
      ],
    },
  ];

  return (
    <section
      id="community"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-dark via-cyber-darker to-cyber-dark opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-semibold mb-4"
          >
            Join the Movement
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Stay{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
              Connected
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Follow our journey, explore our open-source work, and join the
            community shaping the future of cyber resilience.
          </motion.p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {platforms.map((platform, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all"
            >
              {/* Icon Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-4 rounded-xl bg-gradient-to-br ${platform.gradient}`}
                >
                  <div className="text-white">{platform.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  {platform.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed mb-6">
                {platform.description}
              </p>

              {/* Features */}
              <div className="space-y-3 mb-6">
                {platform.features.map((feature, featureIndex) => (
                  <div
                    key={featureIndex}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <div
                      className={`p-1.5 rounded bg-gradient-to-br ${platform.gradient} bg-opacity-20`}
                    >
                      {feature.icon}
                    </div>
                    <span className="text-sm">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r ${platform.gradient} rounded-full text-white font-semibold hover:shadow-lg transition-all`}
              >
                {platform.cta}
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Box */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="glass-effect rounded-2xl p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Help Shape the Future
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            If you're interested in staying close to the development of this
            technology and joining the conversation, we welcome security
            professionals, researchers, and innovators to engage
            directly-validating the concept, contributing improvements, and
            shaping how it evolves.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="https://www.linkedin.com/company/108569527/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Linkedin className="w-5 h-5" />
              Follow Updates
            </motion.a>
            <motion.a
              href="https://github.com/CyberSecurityStack/opensource"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Contribute Code
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Community;
