"use client";

import Nebula from "./Nebula";
import Starfield from "./Starfield";

export default function UniverseBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <Nebula />
      <Starfield />
    </div>
  );
}
