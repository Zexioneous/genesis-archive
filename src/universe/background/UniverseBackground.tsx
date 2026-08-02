"use client";

import Nebula from "./Nebula";
import Starfield from "./Starfield";

export default function UniverseBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#02050d]">
      <Nebula />
      <Starfield />
    </div>
  );
}
