"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the Resonance Protocol?",
      answer:
        "The Resonance Protocol (RP) is a federated trust protocol that treats every system as a self-verifying 'hive.' Each layer—hardware, firmware, kernel, process, and application—generates cryptographically signed Merkle tree blocks to prove integrity. Adjacent hives establish trust through scoped, signed contracts, meaning tampering is detected and isolated in real time.",
    },
    {
      question:
        "How does MBDR differ from traditional cybersecurity solutions?",
      answer:
        "Unlike traditional signature-based or behavior-based detection, MBDR (Merkle-Based Detection and Response) provides cryptographic proof of system integrity at every layer. It operates autonomously without human intervention, detecting and isolating compromised components in real time—often in under 1 millisecond. This makes it ransomware-resistant by design.",
    },
    {
      question: "Which environments does the Resonance Protocol support?",
      answer:
        "The Resonance Protocol is designed to work seamlessly across IT, OT (Operational Technology), and IoT environments. It's lightweight and flexible enough to run on everything from enterprise servers to industrial control systems and IoT devices, adapting to diverse infrastructures without compromising performance.",
    },
    {
      question: "Is the Resonance Protocol open source?",
      answer:
        "Yes! We maintain an open GitHub repository with whitepapers, proof-of-concept implementations, and documentation. We invite security professionals, researchers, and innovators to explore, test, and even try to break it. Transparency is core to building trust in our technology.",
    },
    {
      question: "How was Cyber Security Stack developed?",
      answer:
        "Cyber Security Stack (CSS) developed the Resonance Protocol through rigorous research at the University of Oxford Innovation Incubator. This partnership combines world-leading cryptographic expertise with cutting-edge federated trust architecture, backed by academic rigor and peer-reviewed security protocols.",
    },
    {
      question: "What makes the solution 'ransomware-resistant'?",
      answer:
        "The integrity-first architecture means every component continuously proves its authenticity through cryptographic verification. If ransomware attempts to tamper with any layer, the trust chain breaks instantly, and the affected component is automatically rejected and isolated before it can spread—making traditional ransomware attacks ineffective.",
    },
    {
      question: "How do I get started with Cyber Security Stack?",
      answer:
        "Getting started is simple: our solution includes lightweight agents for endpoint protection, a SaaS platform for centralized management and dashboards, and professional services for onboarding, technical review, and ongoing support. Contact us to schedule a demo and see the Resonance Protocol in action.",
    },
    {
      question: "What is the performance impact of MBDR?",
      answer:
        "MBDR is engineered for speed without sacrificing security. Our lightweight agents have minimal footprint, and detection happens in real time (typically under 1ms). The system is designed to be 'super fast'—providing enterprise-grade protection without adding complexity or slowing down operations.",
    },
  ];

  return (
    <section
      id="faq"
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
            Got Questions?
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
              Questions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Everything you need to know about the Resonance Protocol and Cyber
            Security Stack.
          </motion.p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left glass-effect rounded-xl p-6 hover:glow-effect transition-all group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4 flex-1">
                    <HelpCircle className="w-6 h-6 text-cyber-blue flex-shrink-0 mt-1" />
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyber-blue transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-cyber-purple transition-colors" />
                  </motion.div>
                </div>

                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? "auto" : 0,
                    opacity: openIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-300 leading-relaxed mt-4 ml-10">
                    {faq.answer}
                  </p>
                </motion.div>
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-16 text-center glass-effect rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Still Have Questions?
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            Our team is here to help you understand how the Resonance Protocol
            can protect your infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg glow-effect"
            >
              Contact Us
            </motion.button>
            <motion.a
              href="https://github.com/CyberSecurityStack/opensource"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 glass-effect rounded-full text-white font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Documentation
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
