"use client";

import AnimatedStars from "./AnimatedStars";

export default function GenesisBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#020509]"
      aria-hidden="true"
    >
      {/* Pixel-art space */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/backgrounds/genesis-space.png')",
        }}
      />

      {/* Dark overlay for UI readability */}
      <div className="absolute inset-0 bg-[#020509]/20" />

      {/* Animated stars */}
      <AnimatedStars />

      {/* Very subtle vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(0,3,7,0.65)_100%)]" />
    </div>
  );
}
