"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Network, Layers, Lock, Cpu, Shield, Zap } from "lucide-react";
import Link from "next/link";

const ResonanceProtocol = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Multi-Layer Architecture",
      description:
        "From firmware and kernel through OS and runtime environments, extending across IoT, OT, and IT infrastructures.",
      color: "cyber-blue",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Self-Verifying Hives",
      description:
        "Every system layer generates cryptographically signed Merkle tree blocks, creating a chain of verifiable integrity that proves authenticity.",
      color: "cyber-purple",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Federated Trust Contracts",
      description:
        "Adjacent hives establish trust only through scoped, signed contracts. If tampering occurs, the affected component is rejected and isolated in real time.",
      color: "cyber-pink",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightweight & Adaptable",
      description:
        "Designed to integrate seamlessly across diverse environments without compromising performance.",
      color: "cyber-blue",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Ransomware Resistance",
      description:
        "Integrity-first architecture prevents ransomware attacks by detecting and isolating compromised components before damage spreads.",
      color: "cyber-purple",
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Firmware Integration",
      description:
        "Trust embedded from firmware level, creating unbreakable chains of verification.",
      color: "cyber-pink",
    },
  ];

  const architectureLayers = [
    {
      name: "IT / OT / IoT Device Architectures",
      color: "from-primary-500 to-cyber-blue",
    },
    { name: "Runtime", color: "from-primary-700 to-cyber-purple" },
    { name: "OS", color: "from-primary-500 to-primary-700" },
    { name: "Kernel", color: "from-cyber-purple to-cyber-navy" },
    { name: "Firmware", color: "from-primary-700 to-cyber-navy" },
  ];

  return (
    <section
      id="resonance-protocol"
      ref={ref}
      className="py-16 md:py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white dark:from-cyber-darker dark:via-cyber-dark dark:to-cyber-darker opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-semibold mb-4"
          >
            The Foundation of Trust
          </motion.span>

          <motion.h2
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            The{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-primary-500">
              Resonance Protocol
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
          >
            A federated trust protocol where every system operates as a
            self-verifying "hive." Each layer - hardware, firmware, kernel,
            process, application - generates cryptographically signed Merkle
            tree blocks to prove integrity. Adjacent hives only trust through
            scoped, signed contracts.
          </motion.p>

          {/* Problem / Solution / Vision */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-12 max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center"
          >
            <div>
              <h4 className="text-sm text-cyber-blue uppercase tracking-widest mb-2">
                Problem
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Ransomware causes operational outages and costly rebuilds.
                Existing tools detect behaviours late and struggle with unknown
                threats.
              </p>
            </div>

            <div>
              <h4 className="text-sm text-cyber-blue uppercase tracking-widest mb-2">
                Solution
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                A deep‑tech immune system that detects unwanted change instantly
                and reverts to a trusted state so businesses continue as normal.
              </p>
            </div>

            <div>
              <h4 className="text-sm text-cyber-blue uppercase tracking-widest mb-2">
                Vision
              </h4>
              <p className="text-gray-700 dark:text-gray-400">
                Start as an agent & SaaS in IT, then become the universal
                tamper‑proofing protocol embedded across all architectures and
                devices.
              </p>
            </div>
          </motion.div>

          {/* 5-Step Hive Flow */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="mt-16 max-w-6xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-white mb-8">
              How the Resonance Protocol Works
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 items-start text-center">
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mx-auto text-cyber-blue font-bold">
                  1
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Merkle tree formation
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mx-auto text-cyber-blue font-bold">
                  2
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Stack propagation, subsumption hive formed
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mx-auto text-cyber-blue font-bold">
                  3
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Peer-to-peer contracts form adjacent hives
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mx-auto text-cyber-blue font-bold">
                  4
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Node compromised
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mx-auto text-cyber-blue font-bold">
                  5
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Compromised subsumption hive isolated
                </p>
              </div>

              <div className="space-y-3">
                <div className="w-14 h-14 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center mx-auto text-cyber-blue font-bold">
                  6
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Remedial action, automated corrective action to mitigate
                  ransomware
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Architecture Visualization */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-cyber-blue">
            Trust Architecture Layers
          </h3>
          <div className="max-w-4xl mx-auto relative">
            {/* IT/OT/IoT Overarching Bracket */}
            <div className="relative border-l-4 border-r-4 border-t-4 border-primary-500/30 rounded-t-3xl pt-8 pb-4 px-6 mb-6">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white dark:bg-cyber-dark px-4">
                <span className="text-lg font-semibold text-primary-500">
                  IT / OT / IoT Device Architectures
                </span>
              </div>

              {/* Inner Layers */}
              <div className="space-y-4 mt-4">
                {architectureLayers.slice(1).map((layer, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, x: 0 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 10 }}
                    className="relative group cursor-pointer"
                  >
                    <div
                      className={`glass-effect rounded-lg p-6 bg-gradient-to-r ${layer.color} bg-opacity-10 border-l-4 border-transparent group-hover:border-cyber-blue transition-all`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold text-gray-900 dark:text-white">
                          {layer.name}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400 font-mono">
                          Layer {index + 1}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 hover:glow-effect transition-all cursor-pointer group text-center"
            >
              <div
                className={`inline-flex p-3 rounded-lg bg-${feature.color}/10 text-${feature.color} mb-4 group-hover:scale-110 transition-transform mx-auto`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-cyber-blue transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-16 text-center"
        >
          <Link href="/whitepapers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:glow-effect transition-all"
            >
              Click to View Whitepapers
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ResonanceProtocol;
