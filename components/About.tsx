"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Shield, Network } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-cyber-darker to-cyber-dark"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-5 py-2.5 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-sm font-medium tracking-wide mb-6"
          >
            About Us
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            Who We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-blue-400 to-cyber-purple">
              Are
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-cyber-blue font-semibold mb-4"
          >
            Trust as a Protocol, Not a Policy
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              <strong className="text-cyber-blue font-semibold">
                Cyber Security Stack (CSS)
              </strong>{" "}
              is a cyber security startup pioneering next-generation solutions,
              with its flagship innovation being the{" "}
              <strong className="text-cyber-purple font-semibold">
                Resonance Protocol (RP)
              </strong>
              .
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              RP is a federated trust protocol that treats every system as a
              self-verifying "hive," where each layer (hardware, firmware,
              kernel, process, application) generates cryptographically signed
              Merkle tree blocks to prove integrity.
            </p>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
              Adjacent hives only establish trust through scoped, signed "trust
              contracts," meaning that if tampering occurs the affected
              component is rejected and isolated in real time.
            </p>

            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Together, CSS and RP aim to redefine resilience for enterprise IT,
              OT, and IoT environments by creating a{" "}
              <strong className="text-white font-semibold">
                ransomware-resistant, integrity-first architecture
              </strong>
              .
            </p>
          </motion.div>

          {/* Right: Key Points */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="minimal-card rounded-xl p-8 space-y-4"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-cyber-blue to-blue-400 bg-opacity-10">
                <Building2 className="w-8 h-8 text-cyber-blue" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Next-Gen Startup
              </h3>
              <p className="text-gray-400 leading-relaxed">
                A pioneering cyber security startup focused on innovative,
                resilient solutions for modern threats.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
              className="minimal-card rounded-xl p-8 space-y-4"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-cyber-purple to-purple-400 bg-opacity-10">
                <Shield className="w-8 h-8 text-cyber-purple" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Federated Trust
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Self-verifying hives with cryptographically signed Merkle blocks
                ensuring integrity at every layer.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="minimal-card rounded-xl p-8 space-y-4"
            >
              <div className="inline-flex p-4 rounded-lg bg-gradient-to-br from-cyber-pink to-pink-400 bg-opacity-10">
                <Network className="w-8 h-8 text-cyber-pink" />
              </div>
              <h3 className="text-2xl font-semibold text-white">
                Real-Time Isolation
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Tampered components are instantly rejected and isolated through
                scoped trust contracts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
