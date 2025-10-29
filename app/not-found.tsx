"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Home, Search, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-950 to-gray-900 flex items-center justify-center px-6 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a15_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a15_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring" }}
          className="mb-8"
        >
          <motion.div
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="inline-flex p-6 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full mb-6"
          >
            <AlertTriangle className="w-20 h-20 text-red-400" />
          </motion.div>

          {/* 404 Text with Glitch Effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-9xl font-bold mb-4 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              404
            </span>
            <motion.span
              className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
              animate={{
                opacity: [0, 0.3, 0],
                x: [-2, 2, -2],
              }}
              transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              404
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Looks like this page got lost in the cyber void.
          </p>
          <p className="text-gray-400 mb-12">
            The page you're looking for doesn't exist or has been moved. Don't
            worry, even the best security systems have their blind spots.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Home className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Back to Home
            <motion.span
              className="absolute inset-0 bg-white/20 rounded-lg"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </Link>

          <Link
            href="/#contact"
            className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-lg text-white font-semibold hover:bg-gray-800/70 hover:border-blue-500/50 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Search className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Contact Support
          </Link>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 pt-8 border-t border-gray-700/50"
        >
          <p className="text-gray-400 mb-4">Or explore these sections:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { href: "/#resonance", label: "Resonance Protocol" },
              { href: "/#mbdr", label: "MBDR" },
              { href: "/#solution", label: "Solutions" },
              { href: "/#team", label: "Team" },
              { href: "/#faq", label: "FAQ" },
            ].map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all duration-200 inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" />
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Error Code */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12"
        >
          <p className="text-xs text-gray-600 font-mono">
            ERROR_CODE: CSS_404_PAGE_NOT_FOUND
          </p>
        </motion.div>
      </div>
    </div>
  );
}
