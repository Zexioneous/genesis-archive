"use client";

import { motion } from "framer-motion";

export default function AmbientGlow() {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 h-225 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[180px]"
      animate={{
        opacity: [0.15, 0.28, 0.15],
        scale: [1, 1.06, 1],
      }}
      transition={{
        duration: 10,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}
