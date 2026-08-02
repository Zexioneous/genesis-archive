"use client";

import { AnimatePresence, motion } from "framer-motion";

import GenesisSystem from "@/features/system/GenesisSystem";
import GenesisLogo from "@/shared/components/GenesisLogo";

import { useBootSequence } from "./useBootSequence";

export default function BootSequence() {
  const { displayedLines, currentText, finished } = useBootSequence();

  return (
    <AnimatePresence mode="wait">
      {!finished ? (
        <motion.main
          key="boot"
          className="min-h-screen bg-black px-10 py-10 text-cyan-400"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <GenesisLogo />

          <div className="mx-auto max-w-5xl font-mono text-lg leading-8">
            {displayedLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}

            <p>
              {currentText}
              <span className="animate-pulse">▋</span>
            </p>
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
