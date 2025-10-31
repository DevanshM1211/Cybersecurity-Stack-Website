"use client";

import { motion } from "framer-motion";

const LogoLoop = () => {
  // Partner/certification logos - you can replace these with actual logo paths
  const logos = [
    {
      name: "University of Oxford",
      src: "/partners/oxford.svg",
      alt: "University of Oxford",
    },
    {
      name: "ISO 27001",
      src: "/partners/iso27001.svg",
      alt: "ISO 27001 Certified",
    },
    {
      name: "SOC 2",
      src: "/partners/soc2.svg",
      alt: "SOC 2 Compliant",
    },
    {
      name: "GDPR",
      src: "/partners/gdpr.svg",
      alt: "GDPR Compliant",
    },
    {
      name: "Cyber Essentials",
      src: "/partners/cyber-essentials.svg",
      alt: "Cyber Essentials Certified",
    },
    {
      name: "NCSC",
      src: "/partners/ncsc.svg",
      alt: "NCSC Assured",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-cyber-darker/50 to-cyber-dark/50">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest">
          Trusted by Industry Leaders & Partners
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-cyber-dark to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-cyber-dark to-transparent z-10" />

        {/* Scrolling Logos */}
        <motion.div
          className="flex gap-16 items-center"
          animate={{
            x: [0, -50 + "%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              {/* Placeholder - Replace with actual logo images */}
              <div className="glass-effect rounded-lg p-4 w-full h-full flex items-center justify-center border border-white/5">
                <span className="text-xs text-gray-400 text-center font-medium">
                  {logo.name}
                </span>
              </div>
              {/* Uncomment when you have actual logos:
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
              */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoLoop;
