"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface RelatedLink {
  title: string;
  description: string;
  href: string;
}

interface InternalLinksProps {
  links: RelatedLink[];
  title?: string;
}

export default function InternalLinks({
  links,
  title = "Related Pages",
}: InternalLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className="py-12 border-t border-gray-800/50">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8">{title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {links.map((link, index) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={link.href}
                className="group block p-6 rounded-xl bg-gray-800/30 border border-primary-500/20 hover:border-primary-500/40 hover:bg-gray-800/50 transition-all"
              >
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {link.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {link.description}
                </p>
                <div className="flex items-center text-primary-500 text-sm font-medium">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
