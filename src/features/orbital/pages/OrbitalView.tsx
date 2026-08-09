"use client";

import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import GenesisStationInspection from "../components/GenesisStationInspection";
import NyxInspection from "../components/NyxInspection";
import ObservationDeck from "../components/ObservationDeck";
import PlanetaryInspection from "../components/PlanetaryInspection";
import SeleneInspection from "../components/SeleneInspection";
import OrbitalScene from "../scene/OrbitalScene";

export default function OrbitalView() {
  const [selectedObject, setSelectedObject] = useState<string | null>(null);

  return (
    <ObservationDeck>
      {/* Main orbital scene */}

      <OrbitalScene onSelectObject={setSelectedObject} />

      {/* Inspection overlays */}

      <AnimatePresence>
        {selectedObject === "elysia" && (
          <PlanetaryInspection onClose={() => setSelectedObject(null)} />
        )}

        {selectedObject === "selene" && (
          <SeleneInspection onClose={() => setSelectedObject(null)} />
        )}

        {selectedObject === "genesis-station" && (
          <GenesisStationInspection onClose={() => setSelectedObject(null)} />
        )}

        {selectedObject === "nyx" && (
          <NyxInspection onClose={() => setSelectedObject(null)} />
        )}
      </AnimatePresence>
    </ObservationDeck>
  );
}
