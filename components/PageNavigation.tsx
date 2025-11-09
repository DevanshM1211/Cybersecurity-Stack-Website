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
    <nav className="container mx-auto px-6 pb-8 relative z-10">
      <div className="flex justify-between items-center">
        {/* Previous Page - Bottom Left */}
        {previousPage ? (
          <motion.div whileHover={{ x: -3 }} className="group">
            <Link
              href={previousPage.href}
              className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-white/5 hover:border-cyber-blue/30 transition-all text-sm"
            >
              <ArrowLeft className="w-4 h-4 text-cyber-blue" />
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Previous
                </p>
                <p className="text-gray-900 dark:text-white group-hover:text-cyber-blue transition-colors font-medium">
                  {previousPage.title}
                </p>
              </div>
            </Link>
          </motion.div>
        ) : (
          <div />
        )}

        {/* Next Page - Bottom Right */}
        {nextPage && (
          <motion.div whileHover={{ x: 3 }} className="group">
            <Link
              href={nextPage.href}
              className="flex items-center gap-2 px-4 py-2 glass-effect rounded-full border border-white/5 hover:border-cyber-blue/30 transition-all text-sm"
            >
              <div className="text-right">
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Next
                </p>
                <p className="text-gray-900 dark:text-white group-hover:text-cyber-blue transition-colors font-medium">
                  {nextPage.title}
                </p>
              </div>
              <ArrowRight className="w-4 h-4 text-cyber-blue" />
            </Link>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default PageNavigation;
