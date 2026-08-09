"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useRef, useState } from "react";

import Atmosphere from "../components/Atmosphere";
import Clouds from "../components/Clouds";
import GenesisStation, {
  GenesisStationHandle,
} from "../components/GenesisStation";
import Planet from "../components/Planet";
import Selene, { SeleneHandle } from "../components/Selene";
import Starfield from "../components/Starfield";

import CinematicCameraController from "./CinematicCameraController";
import FreeCameraController from "./FreeCameraController";

type OrbitalSceneProps = {
  onSelectObject: (object: string) => void;
};

export default function OrbitalScene({ onSelectObject }: OrbitalSceneProps) {
  /*
   * ==================================================
   * CAMERA MODE
   * ==================================================
   */

  const [cameraMode, setCameraMode] = useState<
    "orbital" | "free" | "cinematic"
  >("orbital");

  const freeCamera = cameraMode === "free";

  const cinematic = cameraMode === "cinematic";

  /*
   * ==================================================
   * OBJECT REFERENCES
   * ==================================================
   *
   * These are passed to the cinematic controller so
   * it can track the actual moving objects.
   */

  const seleneHandle = useRef<SeleneHandle>(null);

  const stationHandle = useRef<GenesisStationHandle>(null);

  return (
    <div className="relative h-full w-full">
      {/* ================================================== */}
      {/* 3D ORBITAL SCENE */}
      {/* ================================================== */}

      <Canvas
        shadows
        dpr={[1, 1.5]}
        camera={{
          position: [0, 0, 8],
          fov: 45,
        }}
      >
        {/* ================================================== */}
        {/* CELESTIAL BACKGROUND */}
        {/* ================================================== */}

        <Starfield />

        {/* ================================================== */}
        {/* FREE CAMERA */}
        {/* ================================================== */}

        <FreeCameraController enabled={freeCamera} />

        {/* ================================================== */}
        {/* CINEMATIC CAMERA */}
        {/* ================================================== */}

        <CinematicCameraController
          enabled={cinematic}
          seleneHandle={seleneHandle}
          stationHandle={stationHandle}
        />

        {/* ================================================== */}
        {/* PRIMARY LIGHT */}
        {/* ================================================== */}

        <directionalLight
          castShadow
          position={[10, 3, 5]}
          intensity={5}
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
          shadow-camera-near={0.1}
          shadow-camera-far={30}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />

        {/* ================================================== */}
        {/* SECONDARY COOL LIGHT */}
        {/* ================================================== */}

        <directionalLight
          position={[-8, -2, -5]}
          intensity={0.18}
          color="#6ecbff"
        />

        {/* ================================================== */}
        {/* ELYSIA-3 */}
        {/* ================================================== */}

        <Planet onSelect={() => onSelectObject("elysia")} />

        <Clouds />
        <Atmosphere />

        {/* ================================================== */}
        {/* SELENE + NYX ORBITAL SYSTEM */}
        {/* ================================================== */}

        <Selene
          ref={seleneHandle}
          onSelect={() => onSelectObject("selene")}
          onSelectNyx={() => onSelectObject("nyx")}
        />

        {/* ================================================== */}
        {/* GENESIS STATION */}
        {/* ================================================== */}

        <GenesisStation
          ref={stationHandle}
          onSelect={() => onSelectObject("genesis-station")}
        />

        {/* ================================================== */}
        {/* NORMAL ORBITAL CAMERA */}
        {/* ================================================== */}

        {cameraMode === "orbital" && (
          <OrbitControls
            enablePan={false}
            enableZoom
            enableDamping
            dampingFactor={0.08}
            rotateSpeed={0.6}
            minDistance={3.5}
            maxDistance={18}
          />
        )}
      </Canvas>

      {/* ================================================== */}
      {/* CAMERA MODE HUD */}
      {/* ================================================== */}

      <div className="absolute top-6 left-6 z-50">
        <div className="rounded-lg border border-cyan-400/20 bg-black/60 p-2 backdrop-blur-md">
          {/* Label */}

          <div className="mb-2 px-2 text-[10px] tracking-[0.25em] text-cyan-300/70 uppercase">
            Camera Mode
          </div>

          {/* Buttons */}

          <div className="flex gap-1">
            <button
              type="button"
              onClick={() => setCameraMode("orbital")}
              className={`rounded px-3 py-2 text-xs tracking-wider uppercase transition ${
                cameraMode === "orbital"
                  ? "bg-cyan-400/20 text-cyan-200"
                  : "text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              Orbital
            </button>

            <button
              type="button"
              onClick={() => setCameraMode("free")}
              className={`rounded px-3 py-2 text-xs tracking-wider uppercase transition ${
                cameraMode === "free"
                  ? "bg-cyan-400/20 text-cyan-200"
                  : "text-white/50 hover:bg-white/5 hover:text-white/80"
              }`}
            >
              Free
            </button>
          </div>

          {/* Cinematic */}

          <button
            type="button"
            onClick={() => setCameraMode("cinematic")}
            className={`mt-1 w-full rounded px-3 py-2 text-xs tracking-wider uppercase transition ${
              cameraMode === "cinematic"
                ? "bg-cyan-400/20 text-cyan-200"
                : "text-white/50 hover:bg-white/5 hover:text-white/80"
            }`}
          >
            Cinematic
          </button>

          {/* ================================================== */}
          {/* FREE CAMERA INSTRUCTIONS */}
          {/* ================================================== */}

          {freeCamera && (
            <div className="mt-2 border-t border-white/10 px-2 pt-2 text-[9px] tracking-wider text-white/40 uppercase">
              <div>W A S D · Move</div>
              <div>Q / E · Vertical</div>
              <div>Shift · Accelerate</div>
              <div>Click · Look Around</div>
              <div>Esc · Release Mouse</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
