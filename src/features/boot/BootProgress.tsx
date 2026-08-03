"use client";

import { motion } from "framer-motion";

type BootProgressProps = {
  progress: number;
};

export default function BootProgress({ progress }: BootProgressProps) {
  return (
    <div className="my-8">
      {/* Title + Percentage */}
      <div className="mb-3 flex items-center justify-between font-mono text-sm tracking-[0.25em] text-cyan-400 uppercase">
        <span>Initializing Genesis Core</span>
        <span>{progress}%</span>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="h-3 overflow-hidden rounded-full border border-cyan-500/30 bg-cyan-950/30"
        animate={{
          boxShadow: [
            "0 0 6px rgba(34,211,238,0.25)",
            "0 0 18px rgba(34,211,238,0.7)",
            "0 0 6px rgba(34,211,238,0.25)",
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <motion.div
          className="relative h-full overflow-hidden rounded-full bg-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.9)]"
          animate={{
            width: `${progress}%`,
          }}
          transition={{
            duration: 0.25,
            ease: "easeOut",
          }}
        >
          {/* Shimmer */}
          <motion.div
            className="bg-linier-to-r absolute inset-y-0 w-20 from-transparent via-white/80 to-transparent"
            animate={{
              x: ["-100%", "500%"],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear",
            }}
          />
        </motion.div>
      </motion.div>

      {/* Status */}
      <p className="mt-4 font-mono text-xs tracking-[0.3em] text-cyan-500/60 uppercase">
        Awaiting Archive Synchronization...
      </p>
    </div>
  );
}
