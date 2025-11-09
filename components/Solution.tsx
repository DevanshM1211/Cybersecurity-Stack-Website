"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import {
  Cpu,
  Search,
  Zap,
  Feather,
  BarChart3,
  Settings,
  Users as UsersIcon,
  ShieldCheck,
  HeadphonesIcon,
  Wrench,
  LifeBuoy,
} from "lucide-react";

const Solution = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const solutions = [
    {
      title: "Agent",
      icon: <Cpu className="w-12 h-12" />,
      gradient: "from-cyber-blue to-cyan-400",
      features: [
        {
          icon: <Search className="w-5 h-5" />,
          title: "Integrity Scanning",
          description: "Continuous verification of system integrity",
        },
        {
          icon: <Zap className="w-5 h-5" />,
          title: "Instant Orchestration",
          description: "Real-time coordination across all endpoints",
        },
        {
          icon: <Feather className="w-5 h-5" />,
          title: "Lightweight and Flexible",
          description: "Minimal footprint, maximum adaptability",
        },
      ],
    },
    {
      title: "SaaS Platform",
      icon: <BarChart3 className="w-12 h-12" />,
      gradient: "from-cyber-purple to-purple-400",
      features: [
        {
          icon: <BarChart3 className="w-5 h-5" />,
          title: "Dashboards",
          description: "Centralised visibility and insights",
        },
        {
          icon: <Settings className="w-5 h-5" />,
          title: "Baselining Mode",
          description: "Establish trusted system states",
        },
        {
          icon: <UsersIcon className="w-5 h-5" />,
          title: "Endpoint Grouping",
          description: "Organize and manage at scale",
        },
        {
          icon: <ShieldCheck className="w-5 h-5" />,
          title: "Licensing Management",
          description: "Streamlined license control",
        },
      ],
    },
    {
      title: "Professional Services",
      icon: <HeadphonesIcon className="w-12 h-12" />,
      gradient: "from-cyber-pink to-pink-400",
      features: [
        {
          icon: <Wrench className="w-5 h-5" />,
          title: "Onboarding",
          description: "Seamless deployment and setup",
        },
        {
          icon: <Search className="w-5 h-5" />,
          title: "Technical Review",
          description: "Expert analysis and optimization",
        },
        {
          icon: <LifeBuoy className="w-5 h-5" />,
          title: "Troubleshooting",
          description: "Rapid issue resolution and support",
        },
      ],
    },
  ];

  return (
    <section
      id="solution"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-cyber-darker dark:via-cyber-dark dark:to-cyber-darker"
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
            className="inline-block px-4 py-2 bg-cyber-blue/10 border border-cyber-blue/30 rounded-full text-cyber-blue text-sm font-semibold mb-4"
          >
            Complete Protection
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-blue via-cyber-purple to-cyber-pink">
              Solution
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Our solution brings together lightweight agents, a powerful SaaS
            platform, and expert professional services to deliver end-to-end
            cyber resilience. Whether you need real-time integrity checks,
            centralised dashboards, or tailored guidance, we provide the tools
            and expertise to protect your systems with{" "}
            <strong className="text-cyber-blue">speed</strong>,{" "}
            <strong className="text-cyber-purple">flexibility</strong>, and{" "}
            <strong className="text-cyber-pink">simplicity</strong>.
          </motion.p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="glass-effect rounded-2xl p-8 hover:glow-effect transition-all cursor-pointer"
            >
              {/* Icon Header */}
              <div className="mb-6">
                <div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${solution.gradient} bg-opacity-10 mb-4`}
                >
                  <div className="text-gray-900 dark:text-white">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {solution.title}
                </h3>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {solution.features.map((feature, featureIndex) => (
                  <motion.div
                    key={featureIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.9 + index * 0.2 + featureIndex * 0.1,
                    }}
                    className="flex gap-3 group"
                  >
                    <div
                      className={`flex-shrink-0 p-2 rounded-lg bg-gradient-to-br ${solution.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all`}
                    >
                      <div className="text-gray-600 dark:text-gray-300">
                        {feature.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-gray-900 dark:text-white font-semibold mb-1 group-hover:text-cyber-blue transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
          className="text-center glass-effect rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Transform Your Cyber Defence?
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover how our comprehensive solution can protect your
            infrastructure with unmatched speed and resilience.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-cyber-blue to-cyber-purple rounded-full text-white font-bold text-lg glow-effect"
              >
                Talk to an Expert
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
