"use client";

import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Atmosphere from "../components/Atmosphere";
import Clouds from "../components/Clouds";
import GenesisStation from "../components/GenesisStation";
import Nyx from "../components/Nyx";
import Planet from "../components/Planet";
import Selene from "../components/Selene";

type OrbitalSceneProps = {
  onSelectObject: (object: string) => void;
};

export default function OrbitalScene({ onSelectObject }: OrbitalSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 8],
        fov: 45,
      }}
    >
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

      <directionalLight
        position={[-8, -2, -5]}
        intensity={0.18}
        color="#6ecbff"
      />

      <Planet onSelect={() => onSelectObject("elysia")} />

      <Clouds />
      <Atmosphere />
      <Selene onSelect={() => onSelectObject("selene")} />
      <Nyx onSelect={() => onSelectObject("nyx")} />
      <GenesisStation onSelect={() => onSelectObject("genesis-station")} />

      <OrbitControls
        enablePan={false}
        enableZoom
        enableDamping
        dampingFactor={0.08}
        rotateSpeed={0.6}
        minDistance={3.5}
        maxDistance={18}
      />
    </Canvas>
  );
}
