"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Atmosphere from "../components/Atmosphere";
import Clouds from "../components/Clouds";
import Planet from "../components/Planet";

export default function OrbitalScene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
    >
      {/* Space ambient */}
      <ambientLight intensity={0.08} />

      {/* Main Sun */}
      <directionalLight
        castShadow
        position={[10, 3, 5]}
        intensity={5}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />

      {/* Rim light */}
      <directionalLight
        position={[-8, -2, -5]}
        intensity={0.25}
        color="#6ecbff"
      />

      {/* Tiny fill */}
      <pointLight position={[0, 0, 0]} intensity={0.08} color="#8de9ff" />

      <Planet />
      <Clouds />
      <Atmosphere />

      <OrbitControls
        enablePan={false}
        enableZoom
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        minDistance={3.5}
        maxDistance={12}
      />
    </Canvas>
  );
}
