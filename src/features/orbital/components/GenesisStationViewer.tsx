"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import GenesisStationModel from "./GenesisStationModel";

export default function GenesisStationViewer() {
  return (
    <div className="relative h-full w-full bg-[#02070a]">
      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [0, 1.2, 7],
          fov: 42,
        }}
      >
        <ambientLight intensity={0.45} />

        <directionalLight position={[5, 6, 5]} intensity={2.5} castShadow />

        <directionalLight
          position={[-5, 2, -4]}
          intensity={0.5}
          color="#6ecbff"
        />

        <GenesisStationModel staticMode />

        <OrbitControls
          enablePan
          enableZoom
          enableRotate
          enableDamping
          dampingFactor={0.08}
          rotateSpeed={0.7}
          zoomSpeed={0.8}
          panSpeed={0.7}
          minDistance={3}
          maxDistance={14}
          target={[0, 0, 0]}
        />
      </Canvas>

      {/* Viewer label */}

      <div className="pointer-events-none absolute top-4 left-4">
        <p className="font-mono text-[7px] tracking-[0.25em] text-cyan-500/80 uppercase">
          Genesis Station // 3D Inspection
        </p>

        <p className="mt-1 font-mono text-[6px] tracking-[0.18em] text-cyan-700 uppercase">
          Interactive Model
        </p>
      </div>

      {/* Controls hint */}

      <div className="pointer-events-none absolute bottom-4 left-4">
        <p className="font-mono text-[7px] tracking-[0.15em] text-cyan-700 uppercase">
          Drag // Rotate
        </p>

        <p className="mt-1 font-mono text-[7px] tracking-[0.15em] text-cyan-700 uppercase">
          Scroll // Zoom
        </p>

        <p className="mt-1 font-mono text-[7px] tracking-[0.15em] text-cyan-700 uppercase">
          Right Drag // Pan
        </p>
      </div>

      <div className="pointer-events-none absolute right-4 bottom-4 text-right">
        <p className="font-mono text-[7px] tracking-[0.2em] text-emerald-400/70 uppercase">
          MODEL ONLINE
        </p>
      </div>
    </div>
  );
}
