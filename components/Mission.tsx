"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Zap, Globe, Shield } from "lucide-react";

const Mission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const values = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Integrity-First Architecture",
      description:
        "Self-verifying hives where every layer proves its integrity through cryptographically signed Merkle tree blocks.",
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Real-Time Isolation",
      description:
        "Federated trust contracts ensure tampering is detected instantly. Compromised components are rejected and isolated automatically.",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Universal Standard",
      description:
        "Establishing the Resonance Protocol as the global trust standard for digital infrastructure.",
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Industry Leadership",
      description:
        "Driving collaboration between academia, manufacturers, and industry to realize our vision.",
    },
  ];

  return (
    <section
      id="mission"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-cyber-dark to-cyber-darker"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Main Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyber-pink/10 border border-cyber-pink/30 rounded-full text-cyber-pink text-sm font-semibold mb-6"
          >
            Our Mission
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Redefining How{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink text-glow">
              Digital Trust
            </span>{" "}
            is Built
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-2xl text-gray-300 leading-relaxed"
          >
            <strong className="text-cyber-blue">
              Cyber Security Stack (CSS)
            </strong>{" "}
            is redefining resilience for enterprise IT, OT, and IoT
            environments. Our mission: create ransomware-resistant,
            integrity-first architectures where tampering is detected and
            isolated in real time.
          </motion.p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-xl p-8 text-center hover:glow-effect transition-all cursor-pointer"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-lg text-cyber-blue mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="glass-effect rounded-2xl p-12 relative overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5" />

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-6 text-white">
              The Future of Cyber Defence
            </h3>
            <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto leading-relaxed mb-8">
              <strong className="text-cyber-purple">
                Cyber Security Stack (CSS)
              </strong>{" "}
              is pioneering the{" "}
              <strong className="text-cyber-blue">Resonance Protocol</strong>-a
              federated trust protocol creating ransomware-resistant
              architectures for enterprise IT, OT, and IoT. Achieving this
              vision requires collaboration between academia, manufacturers, and
              industry to establish RP as the universal integrity standard.
            </p>

            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyber-blue mb-2">
                  Zero
                </div>
                <div className="text-sm text-gray-400">Ransom Attacks</div>
              </div>
              <div className="w-px bg-gray-700" />
              <div className="text-center">
                <div className="text-4xl font-bold text-cyber-purple mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-400">Autonomous</div>
              </div>
              <div className="w-px bg-gray-700" />
              <div className="text-center">
                <div className="text-4xl font-bold text-cyber-pink mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Protection</div>
              </div>
              <div className="w-px bg-gray-700" />
              <div className="text-center">
                <div className="text-4xl font-bold text-cyber-blue mb-2">∞</div>
                <div className="text-sm text-gray-400">Trust Depth</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Ready to Build Unbreakable Infrastructure?
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg glow-effect"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-effect rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Sales
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Mission;
