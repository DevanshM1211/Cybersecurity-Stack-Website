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
      className="py-24 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-cyber-dark to-cyber-darker opacity-50" />

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
            Core Capabilities
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            See Some{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
              Core Features
            </span>
          </motion.h2>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-bold text-white mb-4"
          >
            Of the Resonance Protocol
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Core capabilities built to contain ransomware and enforce trust.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: Image/Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-8 overflow-hidden relative">
              {/* Decorative Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/10 via-cyber-purple/10 to-cyber-pink/10" />

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
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-xl p-6 hover:glow-effect transition-all cursor-pointer group"
              >
                <div
                  className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-blue group-hover:to-cyber-purple transition-all">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg glow-effect"
          >
            Discover More Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoreFeatures;
