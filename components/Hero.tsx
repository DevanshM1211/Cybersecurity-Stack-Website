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
      {/* Animated Background with Parallax */}
      <motion.div
        style={{ y: y2, opacity }}
        className="absolute inset-0 bg-mesh-gradient opacity-20"
      />

      {/* Grid Pattern with Parallax - more subtle */}
      <motion.div
        style={{ y: y1 }}
        className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"
      />

      {/* Floating Icons with Parallax - more subtle */}
      <motion.div
        style={{ y: y1 }}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-10 text-cyber-blue opacity-10"
      >
        <Shield size={60} />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        animate={{
          y: [0, 20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-32 right-20 text-cyber-purple opacity-10"
      >
        <Lock size={50} />
      </motion.div>

      <motion.div
        style={{ y: y1 }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 right-10 text-cyber-pink opacity-10"
      >
        <Cpu size={55} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-5 py-2.5 bg-cyber-blue/10 border border-cyber-blue/20 rounded-full text-cyber-blue text-sm font-medium tracking-wide">
                Trust as a Protocol, Not a Policy
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight"
            >
              Redefining{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-blue-400 to-cyber-purple">
                Digital Trust
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl"
            >
              <strong className="text-cyber-blue font-semibold">
                Cyber Security Stack (CSS)
              </strong>{" "}
              pioneers next-generation cyber security with the{" "}
              <strong className="text-cyber-purple font-semibold">
                Resonance Protocol
              </strong>
              —a federated trust protocol where every system becomes a
              self-verifying "hive" using cryptographically signed Merkle tree
              blocks.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg md:text-xl text-gray-400"
            >
              Developed with the University of Oxford, we create
              ransomware-resistant, integrity-first architectures for enterprise
              IT, OT, and IoT environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <motion.a
                href="#mbdr"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-lg text-white font-semibold flex items-center gap-2 shadow-lg shadow-cyber-blue/20 hover:shadow-cyber-blue/40 transition-all"
              >
                Explore MBDR
                <ArrowRight size={20} />
              </motion.a>

              <motion.a
                href="#resonance"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 minimal-card rounded-lg text-white font-semibold transition-all"
              >
                Learn About Resonance
              </motion.a>
            </motion.div>

            {/* Stats with Animated Counters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-8 pt-8"
            >
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyber-blue mb-2">
                  <AnimatedCounter end={100} suffix="%" />
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Autonomous
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyber-purple mb-2">
                  &lt;
                  <AnimatedCounter end={1} />
                  ms
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Detection
                </div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-cyber-pink mb-2">
                  <AnimatedCounter end={0} />
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  Trust Assumed
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
