"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resonance Protocol", href: "/protocol" },
    { name: "MBDR", href: "/mbdr" },
    { name: "Solution", href: "/solution" },
    { name: "Team", href: "/team" },
    { name: "Whitepapers", href: "/whitepapers" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
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
              <span className="text-lg font-light tracking-tight text-gray-900 dark:text-white">
                Cyber Security Stack
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation - Simple & Elegant */}
          <div className="hidden md:flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hamburger Menu Button */}
            <button
              className="p-2 hover:bg-black/5 dark:hover:bg-white/[0.05] rounded-lg transition-colors text-gray-700 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile - Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Hamburger Menu Button */}
            <button
              className="p-2 rounded-lg transition-colors hover:bg-black/5 dark:hover:bg-white/[0.05] text-gray-700 dark:text-white"
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
                className="fixed right-6 top-[90px] w-[280px] bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 overflow-y-auto shadow-2xl"
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
                            ? "text-cyber-blue underline underline-offset-4 decoration-2 bg-black/5 dark:bg-white/[0.08]"
                            : "text-gray-700 hover:text-gray-900 hover:bg-black/5 dark:text-gray-300 dark:hover:text-white dark:hover:bg-white/[0.05]"
                        }`}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {link.name}
                      </motion.a>
                    ))}
                  </div>
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
