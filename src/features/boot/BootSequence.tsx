"use client";

import { AnimatePresence, motion } from "framer-motion";

import GenesisSystem from "@/features/system/GenesisSystem";
import GenesisLogo from "@/shared/components/GenesisLogo";
import UniverseBackground from "@/universe/background/UniverseBackground";

import BootProgress from "./BootProgress";
import { useBootSequence } from "./useBootSequence";

export default function BootSequence() {
  const { displayedLines, currentText, finished, progress } = useBootSequence();

  return (
    <AnimatePresence mode="wait">
      {!finished ? (
        <motion.main
          key="boot"
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-cyan-400"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Universe */}
          <UniverseBackground />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-3xl px-6">
            {/* Logo */}
            <div className="mb-10 flex justify-center">
              <GenesisLogo size={200} />
            </div>

            {/* Title */}
            <div className="mb-8 text-center">
              <h1 className="font-mono text-4xl font-bold tracking-[0.5em] text-cyan-300">
                GENESIS CORE
              </h1>

              <p className="mt-3 text-sm tracking-[0.4em] text-cyan-500/70 uppercase">
                Genesis Organization Archive
              </p>
            </div>

            <div className="mb-10 h-px w-full bg-cyan-500/20" />

            {/* Terminal */}
            <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/10 p-8 backdrop-blur-md">
              <BootProgress progress={progress} />

              <div className="mt-6 font-mono text-lg leading-8">
                {displayedLines.map((line, index) => (
                  <p key={index}>{line}</p>
                ))}

                <p>
                  {currentText}
                  <span className="animate-pulse">▋</span>
                </p>
              </div>
            </div>
          </div>
        </motion.main>
      ) : (
        <motion.div
          key="system"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <GenesisSystem />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
