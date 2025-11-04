"use client";

import { motion } from "framer-motion";

const LogoLoop = () => {
  // Partner/certification logos - you can replace these with actual logo paths
  const logos = [
    {
      name: "Plexal",
      src: "/team/plexal.png",
      alt: "Plexal",
    },
    {
      name: "Oxford University",
      src: "/team/oxford.png",
      alt: "Oxford University",
    },
    {
      name: "Innovate UK",
      src: "/team/innovateuk.png",
      alt: "Innovate UK",
    },
    {
      name: "Breakthrough Founders",
      src: "/team/breakthroughfounders.png",
      alt: "Breakthrough Founders",
    },
    {
      name: "NatWest Accelerator",
      src: "/team/natwest.png",
      alt: "NatWest Accelerator",
    },
    {
      name: "Barclays Digital Eagle",
      src: "/team/barclays.png",
      alt: "Barclays Digital Eagle",
    },
    {
      name: "Manchester DiSH",
      src: "/team/manchester.png",
      alt: "Manchester DiSH",
    },
    {
      name: "Google for Startups",
      src: "/team/google.png",
      alt: "Google for Startups",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden border-y border-white/5 bg-gradient-to-b from-cyber-darker/50 to-cyber-dark/50">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-sm text-gray-500 uppercase tracking-widest">
          Our Industry Partners
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
              <div className="glass-effect rounded-lg p-4 w-full h-full flex items-center justify-center border border-white/5">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoLoop;
