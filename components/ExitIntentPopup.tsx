"use client";

import { useState, useEffect } from "react";
import { X, Mail, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if popup has been shown before
    const shown = localStorage.getItem("exit_popup_shown");
    if (shown) {
      setHasShown(true);
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem("exit_popup_shown", "true");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Popup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ type: "spring", damping: 25 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[101] w-full max-w-lg mx-4"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-blue-950 rounded-2xl border border-blue-500/30 shadow-2xl overflow-hidden">
              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 p-2 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors z-10"
                aria-label="Close popup"
              >
                <X className="w-5 h-5 text-gray-400" />
              </button>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-blue-500/10 rounded-full">
                    <Mail className="w-12 h-12 text-blue-400" />
                  </div>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-4">
                  Wait! Before You Go...
                </h2>

                <p className="text-gray-300 text-center mb-6">
                  Discover how our Resonance Protocol can protect your business
                  from ransomware attacks. Get a free consultation with our
                  security experts.
                </p>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all group"
                  >
                    Schedule Free Consultation
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/documentation"
                    onClick={handleClose}
                    className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-800/50 border border-blue-500/30 rounded-lg text-white hover:bg-gray-800/70 hover:border-blue-500/50 transition-all"
                  >
                    View Documentation
                  </Link>
                </div>

                <button
                  onClick={handleClose}
                  className="mt-4 w-full text-gray-400 text-sm hover:text-gray-300 transition-colors"
                >
                  No thanks, I'll explore on my own
                </button>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
