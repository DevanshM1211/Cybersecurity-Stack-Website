"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail } from "lucide-react";

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

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
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

        {/* Main Content - Ultra Clean */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center space-y-8 mb-16"
        >
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-light max-w-3xl mx-auto">
            We're pioneering next-generation cyber security with the{" "}
            <span className="text-white font-medium">Resonance Protocol</span>
            —a federated trust system that creates ransomware-resistant,
            integrity-first architectures where tampering is detected and
            isolated in real time.
          </p>
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
                <span className="text-lg text-white font-light tracking-wide">
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
