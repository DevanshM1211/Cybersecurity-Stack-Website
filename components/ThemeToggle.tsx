"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * ThemeToggle Component
 *
 * Accessible inline theme switcher for navbar.
 * Features:
 * - Smooth icon transitions
 * - Remembers user preference in localStorage
 * - Respects system preference as default
 * - Full keyboard accessibility
 * - ARIA labels for screen readers
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="p-2 w-9 h-9" aria-hidden="true">
        {/* Placeholder to prevent layout shift */}
      </div>
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative p-2 rounded-lg transition-all duration-300 hover:bg-black/5 dark:hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyber-blue focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      type="button"
    >
      <div className="relative w-5 h-5">
        {/* Sun Icon - Light Mode */}
        <motion.div
          initial={false}
          animate={{
            opacity: theme === "light" ? 1 : 0,
            rotate: theme === "light" ? 0 : 180,
            scale: theme === "light" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Sun
            size={20}
            className="text-amber-500"
            strokeWidth={2}
            aria-hidden="true"
          />
        </motion.div>

        {/* Moon Icon - Dark Mode */}
        <motion.div
          initial={false}
          animate={{
            opacity: theme === "dark" ? 1 : 0,
            rotate: theme === "dark" ? 0 : -180,
            scale: theme === "dark" ? 1 : 0.5,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <Moon
            size={20}
            className="text-indigo-400"
            strokeWidth={2}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">
        {theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      </span>
    </motion.button>
  );
};

export default ThemeToggle;
