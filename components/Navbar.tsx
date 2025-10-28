"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Resonance Protocol", href: "#resonance" },
    { name: "MBDR Technology", href: "#mbdr" },
    { name: "Partnership", href: "#partnership" },
    { name: "Mission", href: "#mission" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#top"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 cursor-pointer"
          >
            {!imgError ? (
              <Image
                src="/logo.png"
                alt="Cyber Security Stack logo"
                width={36}
                height={36}
                priority
                className="rounded-md"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-9 h-9 rounded-md bg-gradient-to-br from-cyber-blue to-cyber-purple flex items-center justify-center text-white font-bold text-sm">
                CSS
              </div>
            )}
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-white">
                Cyber Security Stack
              </span>
              <span className="hidden sm:block text-[11px] md:text-xs text-gray-400">
                Trust as a Protocol, Not a Policy
              </span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="text-gray-300 hover:text-cyber-blue transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyber-blue transition-all group-hover:w-full" />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-semibold hover:shadow-lg hover:shadow-cyber-blue/50 transition-all"
            >
              Contact Us
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 glass-effect rounded-lg p-4"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block py-3 text-gray-300 hover:text-cyber-blue transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 px-6 py-2 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-semibold">
              Contact Us
            </button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
