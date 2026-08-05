"use client";

import { motion } from "framer-motion";

export default function GenesisStation() {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 24,
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute h-105 w-105"
    >
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2"
      >
        <div className="flex items-center gap-2">
          {/* Left Solar Panel */}
          <div className="h-2 w-8 rounded bg-cyan-500/40" />

          {/* Station Core */}
          <div className="h-4 w-4 rounded-full border border-cyan-300 bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)]" />

          {/* Right Solar Panel */}
          <div className="h-2 w-8 rounded bg-cyan-500/40" />
        </div>

        <p className="mt-2 text-center font-mono text-[10px] tracking-[0.2em] text-cyan-400 uppercase">
          Genesis
        </p>
      </motion.div>
    </motion.div>
  );
}
