"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

const BackButton = () => {
  const router = useRouter();

  return (
    <motion.button
      onClick={() => router.back()}
      whileHover={{ x: -2 }}
      whileTap={{ scale: 0.95 }}
      className="fixed top-24 left-6 z-40 p-3 glass-effect rounded-xl border border-white/10 hover:border-cyber-blue/50 transition-all group"
      aria-label="Go back"
    >
      <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-cyber-blue transition-colors" />
    </motion.button>
  );
};

export default BackButton;
