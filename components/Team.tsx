"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

const Team = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const team = [
    {
      name: "Luke Collinson",
      role: "Co-founder",
      description:
        "Turning breakthrough integrity research into practical security products. Leads strategy, partnerships, and go-to-market to help organisations build ransomware-resilient systems.",
      image: "/team/luke-collinson.jpeg",
      linkedin: "https://www.linkedin.com/in/luke-c-088b61121/",
      email: "hello@cybersecuritystack.co.uk",
    },
    {
      name: "Anna Wilson",
      role: "Co-founder",
      description:
        "Expert in technological innovation across industry, Anna leads our business strategy and stakeholder engagement portfolio.",
      image: "/team/anna-wilson.jpg",
      linkedin: "https://www.linkedin.com/in/anna-wilson-889830226/",
      email: "anna@cybersecuritystack.co.uk",
    },
    {
      name: "Devansh Mehrotra",
      role: "Founder's Associate",
      description:
        "Drives the technical development of our SaaS platform and website, transforming concepts into scalable, user-focused digital solutions with seamless functionality and user experience.",
      image: "/team/devansh-mehrotra.png",
      linkedin: "https://www.linkedin.com/in/devanshmehrotra12/",
      email: "devansh@cybersecuritystack.co.uk",
    },
    {
      name: "Ebun Idowu",
      role: "Founder's Associate",
      description:
        "Focus on research for investment readiness via grant and Investor Relations analysis, translating complex concepts into clear commercial narratives for funding and market adoption.",
      image: "/team/ebun-idowu.png",
      linkedin: "https://www.linkedin.com/in/ebun-idowu/",
      email: "ebun@cybersecuritystack.co.uk",
    },
  ];

  return (
    <section
      id="team"
      ref={ref}
      className="py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-cyber-dark dark:to-cyber-darker"
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
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 + index * 0.2 }}
              whileHover={{ scale: 1.03, y: -10 }}
              className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all cursor-pointer group h-full flex flex-col"
            >
              {/* Image */}
              <div className="relative h-64 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/20 to-cyber-pink/20 overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              {/* Member Info */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-cyber-blue transition-colors">
                  {member.name}
                </h3>
                <p className="text-cyber-purple text-sm font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="mt-auto flex items-center gap-3">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 glass-effect rounded-lg hover:bg-cyber-blue/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-blue"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <Linkedin
                      className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-cyber-blue transition-colors"
                      aria-hidden="true"
                    />
                  </motion.a>
                  {member.email && (
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 glass-effect rounded-lg hover:bg-cyber-purple/20 transition-all focus:outline-none focus:ring-2 focus:ring-cyber-purple"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail
                        className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-cyber-purple transition-colors"
                        aria-hidden="true"
                      />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA removed per request */}
      </div>
    </section>
  );
};

export default Team;
