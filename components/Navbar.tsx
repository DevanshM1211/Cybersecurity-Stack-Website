"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useTheme } from "@/contexts/ThemeContext";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Protocol", href: "/protocol" },
    { name: "MBDR", href: "/mbdr" },
    { name: "Solution", href: "/solution" },
    { name: "Team", href: "/team" },
    { name: "FAQ", href: "/faq" },
  ];

  // Essential links for desktop nav (minimal)
  const desktopLinks = [
    { name: "About", href: "/about" },
    { name: "Protocol", href: "/protocol" },
  ];

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-lg border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-5 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo - Visible & Clean */}
          <motion.a
            href="/"
            whileHover={{ opacity: 0.8 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {!imgError ? (
              <Image
                src="/logo.png"
                alt="Cyber Security Stack logo"
                width={40}
                height={40}
                priority
                className="rounded-md"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold text-sm">
                CSS
              </div>
            )}
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-light text-white tracking-tight">
                Cyber Security Stack
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation - Minimal & Clean */}
          <nav
            className="hidden md:flex items-center gap-8"
            aria-label="Main navigation"
          >
            {desktopLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ y: -2 }}
                className={`transition-colors text-sm font-light focus:outline-none focus:text-cyber-blue ${
                  pathname === link.href
                    ? "text-cyber-blue font-medium"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="/contact"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`px-6 py-2.5 border rounded-xl text-sm font-light transition-all focus:outline-none focus:ring-1 focus:ring-cyber-blue/50 backdrop-blur-sm ${
                pathname === "/contact"
                  ? "bg-cyber-blue/20 border-cyber-blue text-white"
                  : "bg-white/[0.03] border-white/10 text-white hover:bg-white/[0.06] hover:border-cyber-blue/50"
              }`}
            >
              Contact
            </motion.a>

            {/* Theme Toggle Button */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </motion.div>
            </motion.button>

            {/* Hamburger for remaining items on desktop */}
            <button
              className="p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </nav>

          {/* Mobile - Theme Toggle and Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-white p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              aria-label="Toggle theme"
              title={
                theme === "dark"
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === "dark" ? <Sun size={24} /> : <Moon size={24} />}
              </motion.div>
            </motion.button>

            <button
              className="text-white p-2 hover:bg-white/[0.05] rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden"
                style={{ top: "80px" }}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-hidden="true"
              />

              {/* Menu */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed right-6 top-[90px] w-[280px] glass-effect border border-white/10 rounded-xl p-6 overflow-y-auto shadow-2xl"
              >
                <nav aria-label="Navigation menu">
                  <div className="space-y-1">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={index}
                        href={link.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`block py-3 px-4 rounded-lg transition-all text-sm font-light ${
                          pathname === link.href
                            ? "text-cyber-blue bg-white/[0.08]"
                            : "text-gray-300 hover:text-white hover:bg-white/[0.05]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
                  <motion.a
                    href="/contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="block w-full mt-6 px-6 py-3 bg-gradient-to-r from-cyber-blue/10 to-cyber-purple/10 border border-cyber-blue/30 rounded-xl text-cyber-blue font-light text-center hover:from-cyber-blue/20 hover:to-cyber-purple/20 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get in Touch
                  </motion.a>
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
