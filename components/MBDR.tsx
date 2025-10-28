"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Zap, Lock, Activity, AlertTriangle } from "lucide-react";

const MBDR = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const capabilities = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Real-Time Detection",
      description:
        "Continuous monitoring and instant identification of anomalies and tampering attempts.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Autonomous Response",
      description:
        "Automated isolation and containment of compromised systems without human intervention.",
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Cryptographic Verification",
      description:
        "Every layer generates signed Merkle tree blocks proving integrity. Perpetual validation across hardware, firmware, kernel, and application levels.",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Trust Contracts",
      description:
        "Hives establish scoped, signed trust contracts. Only verified components can communicate—tampering breaks the trust chain instantly.",
    },
  ];

  const threatScenarios = [
    { name: "Ransomware Attack", prevented: true, time: "< 1ms" },
    { name: "Zero-Day Exploit", prevented: true, time: "< 1ms" },
    { name: "Supply Chain Compromise", prevented: true, time: "< 1ms" },
    { name: "Firmware Tampering", prevented: true, time: "< 1ms" },
    { name: "Privilege Escalation", prevented: true, time: "< 1ms" },
    { name: "Data Exfiltration", prevented: true, time: "< 1ms" },
  ];

  return (
    <section
      id="mbdr"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-cyber-darker to-cyber-dark"
    >
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
            className="inline-block px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm font-semibold mb-4"
          >
            Next-Generation Defense
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">
              Merkle-Based
            </span>
            <br />
            Detection & Response
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Built on the Resonance Protocol, MBDR leverages cryptographic Merkle
            tree verification across every system layer. When integrity is
            compromised, affected components are automatically rejected and
            isolated—no human intervention required.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Capabilities */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-3xl font-bold mb-8 text-cyber-blue">
              Core Capabilities
            </h3>
            <div className="space-y-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.03, x: 10 }}
                  className="glass-effect rounded-lg p-6 flex gap-4 hover:glow-effect transition-all cursor-pointer"
                >
                  <div className="flex-shrink-0 p-3 bg-cyber-blue/10 rounded-lg text-cyber-blue">
                    {capability.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      {capability.title}
                    </h4>
                    <p className="text-gray-400">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Live Threat Prevention */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="glass-effect rounded-2xl p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-cyber-purple" />
              <h3 className="text-2xl font-bold text-white">
                Threat Prevention Matrix
              </h3>
            </div>

            <div className="space-y-3">
              {threatScenarios.map((threat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="bg-cyber-dark/50 rounded-lg p-4 border border-green-500/30"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2,
                        }}
                        className="w-2 h-2 bg-green-500 rounded-full"
                      />
                      <span className="text-white font-medium">
                        {threat.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-gray-400 font-mono">
                        {threat.time}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-xs font-semibold">
                        PREVENTED
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 2 }}
              className="mt-6 p-4 bg-cyber-blue/5 border border-cyber-blue/30 rounded-lg"
            >
              <p className="text-sm text-gray-300 text-center">
                <strong className="text-cyber-blue">
                  100% Prevention Rate
                </strong>{" "}
                • Zero-latency response • Autonomous operation
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-cyber-purple">
            How MBDR Works
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Self-Verifying Hives",
                description:
                  "Each system layer generates cryptographically signed Merkle tree blocks, creating a verifiable chain of integrity across all components.",
              },
              {
                step: "02",
                title: "Federated Trust Contracts",
                description:
                  "Adjacent hives establish trust through scoped, signed contracts. Any deviation from verified state breaks the trust chain.",
              },
              {
                step: "03",
                title: "Real-Time Rejection",
                description:
                  "Tampering is detected instantly. Affected components are automatically rejected and isolated before damage spreads.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.7 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-effect rounded-xl p-8 text-center hover:glow-effect transition-all"
              >
                <div className="text-5xl font-bold text-cyber-blue mb-4 opacity-50">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg glow-effect"
          >
            Request MBDR Demo
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default MBDR;
