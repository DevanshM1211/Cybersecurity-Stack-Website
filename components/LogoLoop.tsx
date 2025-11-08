"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
    {
      name: "Plexal",
      src: "/team/Plexal.png",
      alt: "Plexal",
    },
  ];

  // Duplicate logos for seamless infinite scroll
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 uppercase tracking-widest">
          Our Industry Partners
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent dark:from-gray-900 dark:to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent dark:from-gray-900 dark:to-transparent z-10" />

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
              className="flex-shrink-0 w-40 h-20 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={160}
                height={80}
                className="max-w-full max-h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                priority={index < 7}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default LogoLoop;
