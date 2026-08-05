"use client";

import AmbientGlow from "./AmbientGlow";
import Grid from "./Grid";
import Nebula from "./Nebula";
import Scanlines from "./Scanlines";
import Starfield from "./Starfield";
import Vignette from "./Vignette";

export default function UniverseBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <Grid />

      <Nebula />

      <AmbientGlow />

      <Starfield />

      <Scanlines />

      <Vignette />
    </div>
  );
}
