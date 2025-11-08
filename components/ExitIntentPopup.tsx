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
        <motion.div
          initial={{ opacity: 0, x: 400, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: 400 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-6 right-6 z-[100] w-full max-w-sm"
        >
          <div className="relative bg-gradient-to-br from-gray-900 to-cyber-navy rounded-xl border border-primary-500/30 shadow-2xl overflow-hidden">
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 p-1.5 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-colors z-10"
              aria-label="Close popup"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>

            {/* Content */}
            <div className="p-5">
              <div className="flex items-start gap-3 mb-4">
                <div className="p-2 bg-primary-500/10 rounded-lg flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-1">
                    Wait! Before You Go...
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Get a free consultation on ransomware protection.
                  </p>
                </div>
              </div>

              <div className="space-y-2">
                <Link
                  href="/contact"
                  onClick={handleClose}
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-primary-700 to-cyber-purple rounded-lg text-white text-sm font-semibold hover:from-primary-600 hover:to-primary-700 transition-all group"
                >
                  Schedule Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={handleClose}
                  className="w-full text-gray-400 text-xs hover:text-gray-300 transition-colors py-1"
                >
                  No thanks
                </button>
              </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-cyber-purple/20 rounded-full blur-2xl" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
