"use client";

import { motion } from "framer-motion";

const LogoLoop = () => {
  // Partner/certification logos - you can replace these with actual logo paths
  const logos = [
    {
      name: "Oxford University",
      src: "/team/oxford.png",
      alt: "Oxford University",
    },
    {
      name: "Innovate UK",
      src: "/team/Innovate UK.png",
      alt: "Innovate UK",
    },
    {
      name: "Breakthrough Founders",
      src: "/team/Breakthrough founders.png",
      alt: "Breakthrough Founders",
    },
    {
      name: "NatWest Accelerator",
      src: "/team/Natwest Acelerator.png",
      alt: "NatWest Accelerator",
    },
    {
      name: "Barclays Digital Eagle",
      src: "/team/Barclays digital eagle.png",
      alt: "Barclays Digital Eagle",
    },
    {
      name: "Manchester DiSH",
      src: "/team/Manchester dish.png",
      alt: "Manchester DiSH",
    },
    {
      name: "Google for Startups",
      src: "/team/Google for startups.png",
      alt: "Google for Startups",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden border-y border-gray-200/50 dark:border-white/5 bg-white dark:bg-gradient-to-b dark:from-cyber-darker/50 dark:to-cyber-dark/50">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-sm text-gray-600 dark:text-gray-500 uppercase tracking-widest">
          Our Industry Partners
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-cyber-dark dark:to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-cyber-dark dark:to-transparent z-10" />

        {/* Scrolling Logos */}
        <motion.div
          className="flex gap-12 items-center"
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
              className="flex-shrink-0 w-48 h-24 flex items-center justify-center hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white dark:bg-white/[0.02] rounded-xl p-6 w-full h-full flex items-center justify-center border border-gray-200/80 dark:border-white/10 shadow-sm hover:shadow-md dark:shadow-none transition-shadow">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
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
