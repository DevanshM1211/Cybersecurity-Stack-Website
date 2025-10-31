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
      className="py-40 relative overflow-hidden"
    >
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
        {/* Section Header - Ultra Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
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
            <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-blue-400 to-cyber-purple">
              Powerful
            </span>{" "}
            by Design
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto font-light"
          >
            Built to contain ransomware and enforce trust through cryptographic
            verification
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

          {/* Right: Features Grid - Minimal Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="grid sm:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="group"
              >
                <div className="p-8 bg-white/[0.02] border border-white/5 rounded-xl hover:bg-white/[0.04] hover:border-white/10 transition-all duration-300">
                  <div className="mb-6 text-cyber-blue group-hover:scale-105 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-light text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoreFeatures;
