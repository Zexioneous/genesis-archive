"use client";

import { motion } from "framer-motion";

const stars = Array.from({ length: 180 }, (_, index) => ({
  id: index,

  left: (index * 37) % 100,
  top: (index * 53) % 100,

  size: (index % 3) + 1,

  opacity: 0.3 + (index % 5) * 0.12,

  duration: 2 + (index % 4),
}));

export default function Starfield() {
  return (
    <>
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-cyan-200"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
}
