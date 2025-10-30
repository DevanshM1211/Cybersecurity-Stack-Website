"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, ArrowRight } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-b from-cyber-darker to-cyber-dark"
    >
      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
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

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="space-y-8 text-center max-w-4xl mx-auto"
        >
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            <strong className="text-cyber-blue font-semibold">
              Cyber Security Stack (CSS)
            </strong>{" "}
            is a cyber security startup pioneering next-generation solutions
            with the{" "}
            <strong className="text-cyber-purple font-semibold">
              Resonance Protocol (RP)
            </strong>
            —a federated trust protocol that creates ransomware-resistant,
            integrity-first architectures.
          </p>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
            Every system becomes a self-verifying "hive" where tampering is
            detected and isolated in real time, redefining resilience for
            enterprise IT, OT, and IoT environments.
          </p>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="pt-12 space-y-6"
          >
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Ready to transform your security?
            </p>

            {/* Email Contact */}
            <motion.a
              href="mailto:hello@cybersecuritystack.co.uk"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white text-lg font-semibold shadow-lg shadow-cyber-blue/30 hover:shadow-cyber-blue/50 transition-all group"
            >
              <Mail className="w-6 h-6" />
              hello@cybersecuritystack.co.uk
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="text-sm text-gray-500">
              Or use the contact form below
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
