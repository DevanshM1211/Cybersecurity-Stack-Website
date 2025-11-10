"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Award, FileCheck, Lock } from "lucide-react";

const TrustSignals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const badges = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "ISO 27001",
      subtitle: "Certified",
      color: "from-cyber-blue to-primary-400",
    },
    {
      icon: <FileCheck className="w-8 h-8" />,
      title: "8+ Patents",
      subtitle: "Pending",
      color: "from-primary-500 to-cyber-blue",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Zero Trust",
      subtitle: "Architecture",
      color: "from-primary-700 to-cyber-navy",
    },
  ];

  return (
    <section ref={ref} className="py-12 bg-cyber-dark/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-wrap justify-center items-center gap-8"
        >
          {badges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-xl p-6 flex items-center gap-4 min-w-[200px]"
            >
              <div
                className={`p-3 rounded-lg bg-gradient-to-br ${badge.color} bg-opacity-20`}
              >
                <div className="text-white">{badge.icon}</div>
              </div>
              <div>
                <div className="text-gray-900 dark:text-white font-bold">
                  {badge.title}
                </div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">
                  {badge.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSignals;
