"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Shield, Lock, Cpu } from "lucide-react";
import MerkleTree from "./MerkleTree";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-24">
      {/* Subtle Grid Background - Ultra Minimal */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Minimal Gradient Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block"
            >
              <span className="text-xs tracking-[0.2em] text-cyber-blue/70 uppercase font-medium">
                Trust as a Protocol, Not a Policy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] tracking-tight"
            >
              Redefining{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-blue-400 to-cyber-purple">
                Digital Trust
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-400 leading-relaxed font-light max-w-2xl"
            >
              Autonomous cyber defence powered by the{" "}
              <span className="text-white font-normal">Resonance Protocol</span>
              —real-time integrity verification through federated trust.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#mbdr"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white/[0.03] border border-white/10 rounded-xl text-white font-light hover:bg-white/[0.06] hover:border-cyber-blue/50 transition-all backdrop-blur-sm"
              >
                Explore MBDR
              </motion.a>

              <motion.a
                href="#resonance"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30 rounded-xl text-cyber-blue font-light hover:from-cyber-blue/20 hover:to-cyber-purple/20 transition-all backdrop-blur-sm"
              >
                Resonance Protocol
              </motion.a>
            </motion.div>

            {/* Stats with Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-12 border-t border-white/5"
            >
              <div>
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-xs md:text-sm text-gray-500 tracking-wide">
                  AUTONOMOUS
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  &lt;
                  <AnimatedCounter end={1} />
                  ms
                </div>
                <div className="text-xs md:text-sm text-gray-500 tracking-wide">
                  DETECTION
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-light text-white mb-2">
                  <AnimatedCounter end={0} />
                </div>
                <div className="text-xs md:text-sm text-gray-500 tracking-wide">
                  TRUST ASSUMED
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Merkle Tree Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="w-full max-w-lg">
              <MerkleTree />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyber-blue/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1.5 h-1.5 bg-cyber-blue rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
