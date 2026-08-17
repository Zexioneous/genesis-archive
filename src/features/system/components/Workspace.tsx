"use client";

import { AnimatePresence, motion } from "framer-motion";
import dynamic from "next/dynamic";

import AstraInterface from "@/features/astra/components/AstraInterface";
import { useSystem } from "../context/SystemContext";

const OrbitalView = dynamic(
  () => import("@/features/orbital/pages/OrbitalView"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full items-center justify-center">
        <p className="font-mono text-sm tracking-[0.3em] text-cyan-500 uppercase">
          Initializing Orbital View...
        </p>
      </div>
    ),
  },
);

function renderActivePage(activePage: "astra" | "orbital") {
  switch (activePage) {
    case "astra":
      return <AstraInterface />;

    case "orbital":
      return <OrbitalView />;

    default:
      return <AstraInterface />;
  }
}

export default function Workspace() {
  const { activePage } = useSystem();

  return (
    <div className="min-h-0 flex-1 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{
            opacity: 0,
            y: 16,
            scale: 0.99,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: -16,
            scale: 0.99,
          }}
          transition={{
            duration: 0.25,
            ease: "easeInOut",
          }}
          className="h-full min-h-0 w-full"
        >
          {renderActivePage(activePage)}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
