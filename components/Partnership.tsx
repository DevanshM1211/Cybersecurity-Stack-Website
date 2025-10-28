"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Users, Lightbulb, Award } from "lucide-react";

const Partnership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section
      id="partnership"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyber-purple/10 via-transparent to-cyber-blue/10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Oxford Partnership */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-cyber-purple/10 border border-cyber-purple/30 rounded-full text-cyber-purple text-sm font-semibold mb-6"
            >
              Academic Excellence
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Developed with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple to-cyber-pink">
                University of Oxford
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              The Resonance Protocol emerged from rigorous research and
              development through the{" "}
              <strong className="text-cyber-purple">
                University of Oxford Innovation Incubator
              </strong>
              . This partnership combines world-leading academic expertise with
              cutting-edge industry application.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              {[
                {
                  icon: <GraduationCap className="w-6 h-6" />,
                  text: "Research-backed cryptographic foundations",
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  text: "Innovative architectural paradigms",
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  text: "Collaborative development ecosystem",
                },
                {
                  icon: <Award className="w-6 h-6" />,
                  text: "Peer-reviewed security protocols",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-4 text-gray-300"
                >
                  <div className="flex-shrink-0 p-2 bg-cyber-purple/20 rounded-lg text-cyber-purple">
                    {item.icon}
                  </div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-effect rounded-2xl p-12 relative overflow-hidden">
              {/* Decorative elements */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyber-purple/20 to-transparent rounded-full blur-3xl"
              />

              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-cyber-blue/20 to-transparent rounded-full blur-3xl"
              />

              <div className="relative z-10">
                <div className="text-center mb-8">
                  <GraduationCap className="w-24 h-24 mx-auto text-cyber-purple mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Innovation Incubator
                  </h3>
                  <p className="text-gray-400">University of Oxford</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  {[
                    { label: "Research Years", value: "3+" },
                    { label: "Expert Team", value: "20+" },
                    { label: "Publications", value: "15+" },
                    { label: "Patents Filed", value: "8+" },
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1 }}
                      className="bg-cyber-dark/50 rounded-lg p-4 text-center border border-cyber-purple/20"
                    >
                      <div className="text-3xl font-bold text-cyber-purple mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Collaboration Call */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="mt-20 text-center glass-effect rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Join the Movement
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Achieving this vision requires collaborative effort between
            academia, manufacturers, and industry. We're leading the
            establishment of the Resonance Protocol as the universal trust
            standard.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-pink rounded-full text-white font-semibold glow-effect"
            >
              Partner with Us
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all"
            >
              View Research
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partnership;
