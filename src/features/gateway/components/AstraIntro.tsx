"use client";

import { motion } from "framer-motion";

export default function AstraIntro() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="mx-auto mt-8 flex max-w-xl items-center justify-center gap-4"
    >
      <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/5">
        <div className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />

        <motion.div
          className="absolute inset-0 rounded-full border border-emerald-400/20"
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </div>

      <div className="text-left">
        <p className="font-mono text-[9px] tracking-[0.35em] text-emerald-400/70">
          ASTRA
        </p>

        <p className="mt-1 font-mono text-[10px] tracking-[0.12em] text-emerald-300/50">
          ARCHIVE INTERFACE ONLINE
        </p>
      </div>
    </motion.div>
  );
}
