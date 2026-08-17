"use client";

import clsx from "clsx";
import { motion } from "framer-motion";

import type { GatewayField as GatewayFieldData } from "../data/gatewayFields";

type GatewayFieldProps = {
  field: GatewayFieldData;
  index: number;
  onSelect: () => void;
};

const accentStyles = {
  cyan: {
    border: "border-cyan-500/20 hover:border-cyan-400/60",
    glow: "hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]",
    index: "text-cyan-500",
    title: "text-cyan-200",
    status: "text-cyan-400",
    line: "bg-cyan-400",
  },

  emerald: {
    border: "border-emerald-500/20 hover:border-emerald-400/60",
    glow: "hover:shadow-[0_0_40px_rgba(52,211,153,0.12)]",
    index: "text-emerald-500",
    title: "text-emerald-200",
    status: "text-emerald-400",
    line: "bg-emerald-400",
  },

  violet: {
    border: "border-violet-500/20 hover:border-violet-400/60",
    glow: "hover:shadow-[0_0_40px_rgba(167,139,250,0.12)]",
    index: "text-violet-400",
    title: "text-violet-200",
    status: "text-violet-400",
    line: "bg-violet-400",
  },
};

export default function GatewayField({
  field,
  index,
  onSelect,
}: GatewayFieldProps) {
  const style = accentStyles[field.accent];

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: 0.5 + index * 0.12,
      }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.985 }}
      className={clsx(
        "group relative overflow-hidden rounded-xl border bg-[#071019]/70 p-6 text-left backdrop-blur-xl transition-all duration-300",
        style.border,
        style.glow,
      )}
    >
      {/* Top line */}
      <div className="flex items-center justify-between">
        <span
          className={clsx(
            "font-mono text-[10px] font-bold tracking-[0.3em]",
            style.index,
          )}
        >
          FIELD {field.index}
        </span>

        <span
          className={clsx(
            "font-mono text-[9px] tracking-[0.25em] uppercase",
            style.status,
          )}
        >
          ● {field.status}
        </span>
      </div>

      {/* Title */}
      <div className="mt-8">
        <p
          className={clsx(
            "font-mono text-xl font-bold tracking-[0.16em]",
            style.title,
          )}
        >
          {field.title}
        </p>

        <p className="mt-2 font-mono text-[10px] tracking-[0.28em] text-white/35 uppercase">
          {field.subtitle}
        </p>
      </div>

      {/* Description */}
      <p className="mt-6 min-h-12 font-mono text-xs leading-6 text-cyan-100/55">
        {field.description}
      </p>

      {/* Action */}
      <div className="mt-7 flex items-center gap-3">
        <span
          className={clsx(
            "h-px w-8 transition-all duration-300 group-hover:w-14",
            style.line,
          )}
        />

        <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase transition-colors group-hover:text-white/80">
          Enter Field
        </span>

        <span className="text-white/30 transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>

      {/* Hover scan */}
      <motion.div
        className={clsx(
          "pointer-events-none absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100",
          style.line,
        )}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.button>
  );
}
