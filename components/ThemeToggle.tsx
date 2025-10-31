"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-24 right-6 z-50 p-3 glass-effect rounded-full border border-white/10 hover:border-cyber-blue/50 transition-all"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? (
          <Sun className="w-5 h-5 text-cyber-blue" />
        ) : (
          <Moon className="w-5 h-5 text-cyber-blue" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
