"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Feather, Layers, Zap, Lightbulb } from "lucide-react";

const CoreFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Simple & Light",
      description:
        "Designed to be lightweight and effortless, delivering powerful protection without adding complexity.",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Flexible",
      description:
        "Built to adapt seamlessly across IT, OT, and IoT environments.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Super Fast",
      description: "Engineered for speed, without sacrificing security.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Novel",
      description: "A groundbreaking approach that redefines cyber resilience.",
    },
  ];

  return (
    <section
      id="core-features"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 143, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 143, 255, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        {/* Section Header - Ultra Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-xs tracking-[0.2em] text-cyber-blue uppercase font-medium mb-8 block"
          >
            Core Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight tracking-tight"
          >
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-primary-500 to-cyber-purple">
              Powerful
            </span>{" "}
            by Design
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto font-light"
          >
            Built to contain ransomware and enforce trust through cryptographic
            verification
          </motion.p>
        </motion.div>

        {/* Features Grid - 4 Columns Horizontal */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="group"
            >
              <div className="p-8 bg-white dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 rounded-xl hover:bg-white dark:hover:bg-white/[0.04] hover:border-gray-300 dark:hover:border-white/10 transition-all duration-300 h-full text-center">
                <div className="mb-6 text-cyber-blue group-hover:scale-110 transition-transform inline-block">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
