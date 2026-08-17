"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

import GenesisBackground from "@/universe/background/GenesisBackground";

import gatewayFields from "../data/gatewayFields";
import { useGateway } from "../hooks/useGateway";
import GatewayField from "./GatewayField";
import GatewayHeader from "./GatewayHeader";

type GenesisGatewayProps = {
  onEnter: (field: "portfolio" | "genesis" | "lore") => void;
};

export default function GenesisGateway({ onEnter }: GenesisGatewayProps) {
  const { selectedField, selectField, clearSelection } = useGateway();

  useEffect(() => {
    if (!selectedField) return;

    const timer = window.setTimeout(() => {
      onEnter(selectedField);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [selectedField, onEnter]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* ==================================================
          BACKGROUND
          ================================================== */}

      <GenesisBackground />

      {/* Main darkness */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Cyan atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_55%)]" />

      {/* Bottom atmosphere */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_bottom,rgba(34,211,238,0.08),transparent_70%)]" />

      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px)] opacity-[0.035]" />

      {/* ==================================================
          CONTENT
          ================================================== */}

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 md:px-10 md:py-14">
        {/* ==================================================
            GENESIS IDENTITY
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo glow */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl"
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.55, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <Image
              src="/images/genesis-logo.png"
              alt="Genesis Organization"
              width={110}
              height={110}
              priority
              className="relative h-22.5 w-22.5 object-contain md:h-27.5 md:w-27.5"
            />
          </div>

          {/* System label */}
          <p className="mt-4 font-mono text-[9px] tracking-[0.5em] text-cyan-600 uppercase">
            Genesis Organization Archive
          </p>
        </motion.div>

        {/* ==================================================
            HEADER
            ================================================== */}

        <GatewayHeader />

        {/* ==================================================
            FIELD SELECTION
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
          className="mt-12 flex flex-1 items-center"
        >
          <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-3">
            {gatewayFields.map((field, index) => (
              <GatewayField
                key={field.id}
                field={field}
                index={index}
                onSelect={() => selectField(field.id)}
              />
            ))}
          </div>
        </motion.div>

        {/* ==================================================
            FOOTER
            ================================================== */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.6,
          }}
          className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-cyan-500/10 pt-5 font-mono text-[9px] tracking-[0.25em] text-cyan-600/60 uppercase md:flex-row"
        >
          <span>Genesis Core v1.0.0</span>

          <span>ASTRA Neural Core · Online</span>

          <span>Archive Gateway · Authorized</span>
        </motion.div>
      </div>

      {/* ==================================================
          TRANSITION
          ================================================== */}

      <AnimatePresence>
        {selectedField && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              className="text-center"
            >
              {/* Small Genesis logo during transition */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="mb-6 flex justify-center"
              >
                <Image
                  src="/images/genesis-logo.png"
                  alt="Genesis"
                  width={55}
                  height={55}
                  className="object-contain"
                />
              </motion.div>

              <p className="font-mono text-[10px] tracking-[0.4em] text-cyan-500 uppercase">
                Establishing Connection
              </p>

              <p className="mt-4 font-mono text-xl tracking-[0.2em] text-cyan-200 uppercase">
                {selectedField}
              </p>

              <div className="mx-auto mt-6 h-px w-40 overflow-hidden bg-cyan-950">
                <motion.div
                  className="h-full bg-cyan-300"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 0.45,
                  }}
                />
              </div>
            </motion.div>

            {/* Cancel */}
            <button
              type="button"
              onClick={clearSelection}
              className="absolute bottom-8 font-mono text-[9px] tracking-[0.25em] text-cyan-700 uppercase transition-colors hover:text-cyan-400"
            >
              Cancel
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
