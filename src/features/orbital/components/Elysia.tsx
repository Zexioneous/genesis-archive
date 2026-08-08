"use client";

import { motion } from "framer-motion";

type PlanetProps = {
  onSelect: () => void;
};

export default function Planet({ onSelect }: PlanetProps) {
  return (
    <motion.div
      animate={{
        rotate: 360,
      }}
      transition={{
        duration: 120,
        repeat: Infinity,
        ease: "linear",
      }}
      whileHover={{
        scale: 1.025,
      }}
      onClick={(event) => {
        event.stopPropagation();
        onSelect();
      }}
      className="group relative h-72 w-72 cursor-pointer rounded-full"
    >
      {/* ================================================== */}
      {/* HOVER TARGET GLOW */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute -inset-2 rounded-full border border-transparent opacity-0 transition-all duration-300 group-hover:border-cyan-300/30 group-hover:opacity-100 group-hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]" />

      {/* ================================================== */}
      {/* ATMOSPHERE */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-0 rounded-full bg-cyan-300/5 blur-xl" />

      {/* ================================================== */}
      {/* PLANET */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute inset-3 overflow-hidden rounded-full border border-cyan-300/20 bg-[radial-gradient(circle_at_30%_30%,#4ffcff,#0f4c81_45%,#021423_90%)]">
        {/* ================================================== */}
        {/* CONTINENTS */}
        {/* ================================================== */}

        <div className="absolute top-14 left-10 h-20 w-24 rounded-full bg-cyan-300/20 blur-md" />

        <div className="absolute right-12 bottom-16 h-16 w-20 rounded-full bg-cyan-300/20 blur-md" />

        <div className="absolute top-1/2 left-1/2 h-12 w-12 rounded-full bg-cyan-300/10 blur-md" />

        {/* ================================================== */}
        {/* CLOUD LAYER */}
        {/* ================================================== */}

        <motion.div
          animate={{
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,.12),transparent_60%)]"
        />

        {/* ================================================== */}
        {/* LIGHT EDGE */}
        {/* ================================================== */}

        <div className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_70%_70%,transparent_45%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      {/* ================================================== */}
      {/* HOVER LABEL */}
      {/* ================================================== */}

      <div className="pointer-events-none absolute top-full left-1/2 mt-4 -translate-x-1/2 whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="border border-cyan-300/20 bg-black/70 px-3 py-2 backdrop-blur-sm">
          <p className="font-mono text-[9px] tracking-[0.25em] text-cyan-300 uppercase">
            ELYSIA-3
          </p>

          <p className="mt-1 font-mono text-[7px] tracking-[0.2em] text-cyan-600 uppercase">
            Click to inspect
          </p>
        </div>
      </div>
    </motion.div>
  );
}
