"use client";

import GenesisLogo from "@/shared/components/GenesisLogo";
import { motion } from "framer-motion";
import { useBootSequence } from "./useBootSequence";

export default function BootSequence() {
  const { displayedLines, currentText } = useBootSequence();

  return (
    <main className="min-h-screen bg-black px-10 py-10 text-cyan-400">
      <GenesisLogo />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
        }}
        className="mx-auto max-w-5xl font-mono text-lg leading-8"
      >
        {displayedLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <p>
          {currentText}
          <span className="animate-pulse">▋</span>
        </p>
      </motion.div>
    </main>
  );
}
