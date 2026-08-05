"use client";

import { motion } from "framer-motion";

export default function Elysia() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
      className="relative h-72 w-72 rounded-full"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-2xl" />

      {/* Planet */}
      <div className="absolute inset-3 overflow-hidden rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_30%_30%,#4ffcff,#0f4c81_45%,#021423_90%)]">
        {/* Continents */}
        <div className="absolute top-14 left-10 h-20 w-24 rounded-full bg-cyan-300/20 blur-md" />

        <div className="absolute right-12 bottom-16 h-16 w-20 rounded-full bg-cyan-300/20 blur-md" />

        <div className="absolute top-1/2 left-1/2 h-12 w-12 rounded-full bg-cyan-300/10 blur-md" />

        {/* Cloud layer */}
        <motion.div
          animate={{
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,.12),transparent_60%)]"
        />
      </div>
    </motion.div>
  );
}
