"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Atmosphere from "../components/Atmosphere";
import Clouds from "../components/Clouds";
import Planet from "../components/Planet";

export default function OrbitalScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 6],
        fov: 45,
      }}
    >
      <ambientLight intensity={0.08} />

      <directionalLight position={[10, 3, 5]} intensity={2.5} />

      <directionalLight
        position={[-8, -2, -5]}
        intensity={0.18}
        color="#6ecbff"
      />

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
