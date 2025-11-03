"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";

type FeedItem = {
  id: string;
  title?: string;
  preview?: string;
  author?: string;
  date?: string;
  text?: string;
  url: string;
  createdAt?: string;
  imageUrl?: string;
};

export default function LinkedInFeed() {
  const [items, setItems] = useState<FeedItem[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await fetch("/api/linkedin-feed", {
          next: { revalidate: 300 },
        });
        if (!res.ok) throw new Error("Failed to load LinkedIn feed");
        const data = await res.json();
        if (mounted) {
          if (Array.isArray(data.items) && data.items.length > 0) {
            setItems(data.items);
          } else {
            // Try Google Sheet-based source next
            const sheetRes = await fetch("/api/linkedin-sheet", {
              next: { revalidate: 120 },
            });
            const sheetData = await sheetRes.json();
            if (Array.isArray(sheetData.items) && sheetData.items.length > 0) {
              setItems(sheetData.items);
            } else {
              // Fallback to static manual list if others empty
              const staticRes = await fetch("/api/linkedin-static", {
                next: { revalidate: 60 },
              });
              const staticData = await staticRes.json();
              setItems(staticData.items || []);
            }
          }
        }
      } catch (e: any) {
        if (mounted) {
          try {
            // Try sheet fallback first on error as well
            const sheetRes = await fetch("/api/linkedin-sheet", {
              next: { revalidate: 120 },
            });
            const sheetData = await sheetRes.json();
            if (Array.isArray(sheetData.items) && sheetData.items.length > 0) {
              setItems(sheetData.items || []);
            } else {
              const staticRes = await fetch("/api/linkedin-static", {
                next: { revalidate: 60 },
              });
              const staticData = await staticRes.json();
              setItems(staticData.items || []);
            }
          } catch {}
          setError(e?.message || "Unable to load feed");
        }
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.2em] text-cyber-blue uppercase font-medium mb-4 block">
            Latest on
          </span>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight">
            <span className="inline-flex items-center gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-blue-400 to-cyber-purple">
              LinkedIn <Linkedin size={28} />
            </span>
          </h2>
        </div>

        {/* Grid of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(items || []).slice(0, 3).map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-xl border bg-black/5 border-black/10 dark:bg-white/[0.02] dark:border-white/10 transition-all hover:border-cyber-blue/30 dark:hover:border-cyber-blue/30"
            >
              {/* Author & Date */}
              {(item.author || item.date) && (
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500 dark:text-gray-400">
                  {item.author && <span>{item.author}</span>}
                  {item.date && <span>{item.date}</span>}
                </div>
              )}

              {/* Title */}
              {item.title && (
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white group-hover:text-cyber-blue transition-colors">
                  {item.title}
                </h3>
              )}

              {/* Preview text */}
              <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400 mb-6 line-clamp-4">
                {item.preview || item.text || "Read more on LinkedIn..."}
              </p>

              {/* Read More CTA */}
              <motion.a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-cyber-blue font-medium group-hover:gap-3 transition-all"
              >
                Read more on LinkedIn <ExternalLink size={16} />
              </motion.a>
            </motion.div>
          ))}

          {!items &&
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border bg-black/5 border-black/10 dark:bg-white/[0.02] dark:border-white/10 animate-pulse"
              >
                <div className="h-40 rounded-lg bg-black/10 dark:bg-white/10 mb-4" />
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-3/4 mb-2" />
                <div className="h-4 bg-black/10 dark:bg-white/10 rounded w-2/3" />
              </div>
            ))}
        </div>

        {/* Follow CTA */}
        <div className="text-center mt-10">
          <a
            href="https://www.linkedin.com/company/cybersecuritystack/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white bg-gradient-to-r from-cyber-blue to-cyber-purple hover:shadow-lg hover:shadow-cyber-blue/40 transition-all"
          >
            Follow us on LinkedIn <Linkedin size={18} />
          </a>
        </div>

        {error && (
          <p className="mt-6 text-center text-sm text-red-500">{error}</p>
        )}
      </div>
    </section>
  );
}
