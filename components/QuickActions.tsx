"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { motion } from "framer-motion";
import { Sun, Moon, Mail, FileText } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

const QuickActions = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const actions = [
    {
      icon: <Mail className="w-4 h-4" />,
      label: "Contact",
      href: "/contact",
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Resources",
      href: "/faq",
    },
  ];

  return (
    <div className="fixed top-24 right-6 z-40 flex items-center gap-2">
      {/* Quick Action Buttons */}
      {actions.map((action, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            href={action.href}
            className="p-3 glass-effect rounded-full border border-white/10 hover:border-cyber-blue/50 transition-all group"
            aria-label={action.label}
            title={action.label}
          >
            <div className="text-gray-400 group-hover:text-cyber-blue transition-colors">
              {action.icon}
            </div>
          </Link>
        </motion.div>
      ))}

      {/* Theme Toggle */}
      <motion.button
        onClick={toggleTheme}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="p-3 glass-effect rounded-full border border-white/10 hover:border-cyber-blue/50 transition-all group"
        aria-label="Toggle theme"
        title={
          theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
        }
      >
        <motion.div
          initial={false}
          animate={{ rotate: theme === "dark" ? 0 : 180 }}
          transition={{ duration: 0.3 }}
          className="text-gray-400 group-hover:text-cyber-blue transition-colors"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4" />
          ) : (
            <Moon className="w-4 h-4" />
          )}
        </motion.div>
      </motion.button>
    </div>
  );
};

export default QuickActions;
