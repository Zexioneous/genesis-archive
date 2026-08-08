"use client";

import { useState } from "react";

import ObservationDeck from "../components/ObservationDeck";
import PlanetaryInspection from "../components/PlanetaryInspection";
import OrbitalScene from "../scene/OrbitalScene";

export default function OrbitalView() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  return (
    <ObservationDeck>
      <OrbitalScene onSelectObject={setSelectedObject} />

      {selectedObject === "elysia" && (
        <PlanetaryInspection onClose={() => setSelectedObject(null)} />
      )}
    </ObservationDeck>
  );
}
