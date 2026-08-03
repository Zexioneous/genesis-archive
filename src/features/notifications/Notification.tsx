"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type NotificationProps = {
  id: string;
  title: string;
  message: string;
  type?: "system" | "astra" | "warning";
  onClose: (id: string) => void;
};

const accent = {
  system: "border-cyan-500/30 text-cyan-300",
  astra: "border-emerald-500/30 text-emerald-300",
  warning: "border-yellow-500/30 text-yellow-300",
};

const icons = {
  system: "●",
  astra: "◈",
  warning: "⚠",
};

export default function Notification({
  id,
  title,
  message,
  type = "system",
  onClose,
}: NotificationProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, onClose]);

  const timestamp = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 80, scale: 0.95 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className={`w-[420px] rounded-xl border bg-[#071019]/90 p-5 shadow-[0_0_45px_rgba(34,211,238,0.18)] backdrop-blur-xl ${accent[type]}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <p className="font-mono text-xs font-semibold tracking-[0.3em] uppercase">
          {icons[type]} {title}
        </p>

        <span className="font-mono text-[10px] text-cyan-500">{timestamp}</span>
      </div>

      {/* Message */}
      <p className="mt-3 font-mono text-sm leading-relaxed text-cyan-100">
        {message}
      </p>

      {/* Progress Bar */}
      <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-cyan-900/40">
        <motion.div
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{
            duration: 4,
            ease: "linear",
          }}
          className="h-full rounded-full bg-cyan-300 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
        />
      </div>
    </motion.div>
  );
}
