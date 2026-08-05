"use client";

import OrbitalScene from "../scene/OrbitalScene";

export default function OrbitalView() {
  return (
    <div className="flex h-full flex-col bg-black">
      <div className="flex-1">
        <OrbitalScene />
      </div>

      <div className="border-t border-cyan-500/20 bg-[#071019]/80 p-6">
        <h1 className="font-mono text-3xl tracking-[0.4em] text-cyan-300">
          ORBITAL VIEW
        </h1>

        <p className="mt-2 font-mono text-cyan-600">Observing Elysia-3</p>
      </div>
    </div>
  );
}
