"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    size: 900,
    top: "50%",
    left: "50%",
    color: "rgba(0,255,255,1)",
    opacity: 0.8,
    duration: 14,
  },
  {
    size: 500,
    top: "70%",
    left: "20%",
    color: "rgba(0,180,255,.4)",
    opacity: 0.12,
    duration: 18,
  },
  {
    size: 400,
    top: "15%",
    left: "80%",
    color: "rgba(100,255,255,.3)",
    opacity: 0.1,
    duration: 16,
  },
];

export default function Nebula() {
  return (
    <>
      {blobs.map((blob, index) => (
        <motion.div
          key={index}
          className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: `radial-gradient(circle, ${blob.color}, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.08, 1],
            opacity: [blob.opacity, blob.opacity + 0.08, blob.opacity],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
