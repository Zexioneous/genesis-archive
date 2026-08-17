"use client";

import { motion } from "framer-motion";

export default function GatewayHeader() {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-mono text-[10px] tracking-[0.45em] text-cyan-500/60 uppercase"
      >
        Genesis Organization Archive
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 font-mono text-4xl font-bold tracking-[0.32em] text-cyan-200 md:text-6xl"
      >
        GENESIS SYSTEM
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="mx-auto mt-6 h-px w-48 bg-cyan-400/40 shadow-[0_0_18px_rgba(34,211,238,0.35)]"
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto mt-6 max-w-2xl font-mono text-xs leading-6 tracking-[0.16em] text-cyan-500/70 uppercase"
      >
        System gateway initialized.
        <br />
        Select an operational field to continue.
      </motion.p>
    </div>
  );
}
