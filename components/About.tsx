"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";
import MerkleTree from "@/components/MerkleTree";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" ref={ref} className="py-40 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-6xl">
        {/* Minimalist Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.2em] text-cyber-blue/60 uppercase font-medium">
            About
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-light text-center mb-8 leading-tight tracking-tight"
        >
          Trust as a{" "}
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue to-cyber-purple">
            Protocol
          </span>
          ,<br />
          Not a Policy
        </motion.h2>

        {/* Main Content with imagery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start mb-16"
        >
          {/* Text column */}
          <div className="space-y-6 text-left">
            <p className="text-lg md:text-xl leading-relaxed font-light text-gray-700 dark:text-gray-400">
              Cyber Security Stack is a deep-tech cybersecurity company
              pioneering Merkle-Based Detection and Response (MBDR), a new
              paradigm in autonomous cyber defence built upon the Resonance
              Protocol.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              Developed in partnership with the University of Oxford via its
              Innovation Incubator, the Resonance Protocol is not a single
              product or agent. It represents a new approach to digital
              architecture, embedding verifiable trust and integrity deep into
              the fabric of digital ecosystems. This is Zero Trust Architecture
              realised at its most fundamental level, extending from firmware,
              kernel, and chip, through operating systems and runtime
              environments, and across IoT, OT, and IT infrastructures.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              The Resonance Protocol and MBDR framework provide a lightweight
              and highly adaptable technology designed to integrate seamlessly
              across diverse environments. Using Merkle tree verification and
              federated trust contracts, it enforces cryptographic trust between
              devices, processes, and services. This creates a continuously
              self-auditing ecosystem that detects tampering, isolates
              compromise in real time, and maintains operational integrity
              autonomously.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-400">
              Achieving this vision requires a collaborative effort between
              academia, manufacturers, and industry. Cyber Security Stack is
              leading that movement, driving the establishment of the Resonance
              Protocol as the universal trust standard for the next generation
              of secure digital infrastructure.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-gray-900 dark:text-gray-300">
              Our mission is to redefine how digital trust is built and
              maintained, giving organisations infrastructures that cannot be
              held to ransom.
            </p>
          </div>

          {/* Imagery column */}
          <div className="space-y-6">
            {/* Merkle diagram preview */}
            <div className="rounded-xl overflow-hidden border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/[0.02]">
              <div className="max-h-72 overflow-hidden">
                <MerkleTree />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Divider Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-cyber-blue/30 to-transparent mb-16"
        />

        {/* CTA - Minimal & Futuristic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center space-y-8"
        >
          <p className="text-sm tracking-wide text-gray-500 uppercase">
            Get in Touch
          </p>

          {/* Sleek Email Button */}
          <motion.a
            href="mailto:hello@cybersecuritystack.co.uk"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block group"
          >
            <div className="relative px-10 py-5 bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:border-cyber-blue/50">
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10" />
              </div>

              <div className="relative flex items-center gap-4">
                <Mail className="w-5 h-5 text-cyber-blue" />
                <span className="text-lg font-light tracking-wide text-gray-900 dark:text-white">
                  hello@cybersecuritystack.co.uk
                </span>
              </div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
