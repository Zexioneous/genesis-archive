"use client";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import GenesisGateway from "@/features/gateway/components/GenesisGateway";
import PortfolioSystem from "@/features/portfolio/components/PortfolioSystem";
import GenesisSystem from "@/features/system/GenesisSystem";
import GenesisLogo from "@/shared/components/GenesisLogo";
import GenesisBackground from "@/universe/background/GenesisBackground";

import BootProgress from "./BootProgress";
import { useBootSequence } from "./useBootSequence";

type GatewayField = "portfolio" | "genesis" | "lore";

type SystemViewProps = {
  field: GatewayField;
  onReturnToGateway: () => void;
};

function SystemView({ field, onReturnToGateway }: SystemViewProps) {
  return (
    <motion.div
      key={`system-${field}`}
      initial={{
        opacity: 0,
        scale: 1.02,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{
        opacity: 0,
        scale: 0.98,
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
      }}
      className="relative min-h-screen"
    >
      {field === "portfolio" ? (
        <PortfolioSystem onReturnToGateway={onReturnToGateway} />
      ) : (
        <GenesisSystem
          initialField={field}
          onReturnToGateway={onReturnToGateway}
        />
      )}
    </motion.div>
  );
}

export default function BootSequence() {
  const { displayedLines, currentText, finished, progress } = useBootSequence();

  /*
   * ==================================================
   * GATEWAY / SYSTEM NAVIGATION
   * ==================================================
   *
   * null       → Genesis Gateway
   * portfolio  → Portfolio System
   * genesis    → Genesis System
   * lore       → Lore System
   */

  const [selectedField, setSelectedField] = React.useState<GatewayField | null>(
    null,
  );

  function handleGatewayEnter(field: GatewayField) {
    setSelectedField(field);
  }

  function handleReturnToGateway() {
    setSelectedField(null);
  }

  return (
    <AnimatePresence mode="wait">
      {!finished ? (
        <motion.main
          key="boot"
          className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-cyan-400"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
          }}
        >
          {/* Universe */}
          <GenesisBackground />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Boot content */}
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
        <AnimatePresence mode="wait">
          {selectedField === null ? (
            <GenesisGateway key="gateway" onEnter={handleGatewayEnter} />
          ) : (
            <SystemView
              key={`system-${selectedField}`}
              field={selectedField}
              onReturnToGateway={handleReturnToGateway}
            />
          )}
        </AnimatePresence>
      )}
    </AnimatePresence>
  );
}
