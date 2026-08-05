"use client";

import { motion } from "framer-motion";

export default function Grid() {
  return (
    <motion.div
      className="[background-image: linear-gradient(rgba(34,211,238,.18)_1px,transparent_1px), linear-gradient(90deg,rgba(34,211,238,.18)_1px,transparent_1px)] absolute inset-0 bg-size-[60px_60px] opacity-[0.06]"
      animate={{
        backgroundPosition: ["0px 0px", "0px 60px"],
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}
