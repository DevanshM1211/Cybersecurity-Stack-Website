"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface PageNavigationProps {
  previousPage?: {
    title: string;
    href: string;
  };
  nextPage?: {
    title: string;
    href: string;
  };
}

const PageNavigation = ({ previousPage, nextPage }: PageNavigationProps) => {
  if (!previousPage && !nextPage) return null;

  return (
    <nav className="container mx-auto px-6 py-12 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Previous Page */}
        {previousPage ? (
          <motion.div whileHover={{ x: -5 }} className="group">
            <Link
              href={previousPage.href}
              className="flex items-center gap-4 p-6 glass-effect rounded-xl border border-white/5 hover:border-cyber-blue/30 transition-all h-full"
            >
              <ArrowLeft className="w-5 h-5 text-cyber-blue flex-shrink-0" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Previous
                </p>
                <p className="text-white group-hover:text-cyber-blue transition-colors">
                  {previousPage.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Next Page */}
        {nextPage && (
          <motion.div whileHover={{ x: 5 }} className="group">
            <Link
              href={nextPage.href}
              className="flex items-center justify-end gap-4 p-6 glass-effect rounded-xl border border-white/5 hover:border-cyber-blue/30 transition-all h-full"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">
                  Next
                </p>
                <p className="text-white group-hover:text-cyber-blue transition-colors">
                  {nextPage.title}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-cyber-blue flex-shrink-0" />
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
