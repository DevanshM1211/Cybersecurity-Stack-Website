"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Linkedin, Mail } from "lucide-react";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const team = [
    {
      name: "Luke Collinson",
      role: "Co-founder",
      image: "/team/luke-collinson.jpg", // Placeholder path
    },
    {
      name: "Anna Wilson",
      role: "Co-founder",
      image: "/team/anna-wilson.jpg", // Placeholder path
    },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-cyber-dark to-cyber-darker"
    >
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-semibold mb-4"
          >
            Leadership
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
              Dream Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Pioneering the future of cyber security with vision, innovation, and
            world-class expertise.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all cursor-pointer group"
            >
              {/* Image Placeholder */}
              <div className="relative h-80 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 overflow-hidden">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
                </div>

                {/* Floating Icon */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Users className="w-32 h-32 text-white/20" />
                </motion.div>

                {/* Placeholder Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-white/60 text-sm mb-2">
                      Photo Coming Soon
                    </p>
                    <p className="text-white/40 text-xs">
                      Add image to: /public/team/
                      {member.name.toLowerCase().replace(" ", "-")}.jpg
                    </p>
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyber-blue transition-colors">
                  {member.name}
                </h3>
                <p className="text-cyber-purple text-lg font-semibold mb-4">
                  {member.role}
                </p>

                {/* Social Links Placeholder */}
                <div className="flex gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass-effect rounded-lg hover:bg-cyber-blue/20 transition-all"
                  >
                    <Linkedin className="w-5 h-5 text-gray-400 hover:text-cyber-blue transition-colors" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass-effect rounded-lg hover:bg-cyber-purple/20 transition-all"
                  >
                    <Mail className="w-5 h-5 text-gray-400 hover:text-cyber-purple transition-colors" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Optional CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-20 text-center"
        >
          <p className="text-lg text-gray-300 mb-6">
            Want to join the mission?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:glow-effect transition-all"
          >
            Explore Careers
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
