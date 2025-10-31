"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Linkedin } from "lucide-react";

type FeedItem = {
  id: string;
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
        if (mounted) setItems(data.items);
      } catch (e: any) {
        if (mounted) {
          setError(e?.message || "Unable to load feed");
          // Minimal graceful fallback
          setItems([
            {
              id: "fallback-1",
              text: "Follow us on LinkedIn for the latest updates on the Resonance Protocol and MBDR.",
              url: "https://www.linkedin.com/company/cybersecuritystack/",
            },
          ]);
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
          <p className="mt-4 text-gray-600 dark:text-gray-400 text-lg">
            New posts and reposts update here automatically.
          </p>
        </div>

        {/* Grid of posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(items || []).map((item, i) => (
            <motion.a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              className="group block p-6 rounded-xl border bg-black/5 border-black/10 dark:bg-white/[0.02] dark:border-white/10 transition-all hover:bg-black/10 dark:hover:bg-white/[0.04]"
            >
              {item.imageUrl && (
                <div className="mb-4 overflow-hidden rounded-lg max-h-48">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.imageUrl}
                    alt="LinkedIn post"
                    className="w-full object-cover"
                  />
                </div>
              )}
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {item.createdAt
                  ? new Date(item.createdAt).toLocaleString()
                  : "Recent"}
              </div>
              <div className="text-base text-gray-900 dark:text-white line-clamp-4">
                {item.text || "View on LinkedIn"}
              </div>
              <div className="mt-4 inline-flex items-center gap-2 text-cyber-blue">
                Open post <ExternalLink size={16} />
              </div>
            </motion.a>
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
