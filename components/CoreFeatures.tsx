"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Feather, Layers, Zap, Sparkles } from "lucide-react";
import Image from "next/image";

const CoreFeatures = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    {
      icon: <Feather className="w-8 h-8" />,
      title: "Simple & Light",
      description:
        "Designed to be lightweight and effortless, delivering powerful protection without adding complexity.",
      color: "from-cyber-blue to-cyan-400",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Flexible",
      description:
        "Built to adapt seamlessly across IT, OT, and IoT environments.",
      color: "from-cyber-purple to-purple-400",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Super Fast",
      description: "Engineered for speed, without sacrificing security.",
      color: "from-cyber-pink to-pink-400",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Novel",
      description: "A groundbreaking approach that redefines cyber resilience.",
      color: "from-cyber-blue to-cyber-purple",
    },
  ];

  return (
    <section
      id="core-features"
      ref={ref}
      className="py-32 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker opacity-30" />

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
            Core Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
          >
            See Some{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-blue-400 to-cyber-purple">
              Core Features
            </span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-white/90 mb-6"
          >
            Of the Resonance Protocol
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Core capabilities built to contain ransomware and enforce trust.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Image/Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="minimal-card rounded-2xl p-12 overflow-hidden relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-cyber-purple/5 to-cyber-pink/5" />

              {/* Image Placeholder */}
              <div className="relative aspect-square flex items-center justify-center bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 rounded-xl overflow-hidden">
                {/* Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]" />

                {/* Animated Rings */}
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute w-64 h-64 border-2 border-cyber-blue/30 rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute w-80 h-80 border-2 border-cyber-purple/30 rounded-full"
                />

                {/* Center Icon */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="relative z-10"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-2xl flex items-center justify-center shadow-2xl">
                    <Sparkles className="w-16 h-16 text-white" />
                  </div>
                </motion.div>

                {/* Placeholder Text */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white/60 text-sm mb-1">
                    Visualization Placeholder
                  </p>
                  <p className="text-white/40 text-xs">
                    Add: /public/Resonance-Protocol.png
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="minimal-card rounded-xl p-8 hover:shadow-lg hover:shadow-cyber-blue/10 transition-all group"
              >
                <div
                  className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 mb-6 group-hover:scale-105 transition-transform`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.4 }}
          className="text-center"
        >
          <motion.a
            href="#solution"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-block px-10 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white font-semibold text-lg shadow-lg shadow-cyber-blue/20 hover:shadow-cyber-blue/40 transition-all"
          >
            Discover More Features
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
