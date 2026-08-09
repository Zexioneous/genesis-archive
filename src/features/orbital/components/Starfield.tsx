"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";

export default function Starfield() {
  const texture = useTexture("/textures/space/orbital-starfield.png");

  return (
    <mesh scale={[-1, 1, 1]} renderOrder={-1000}>
      <sphereGeometry args={[50, 64, 64]} />

      <meshBasicMaterial
        map={texture}
        side={THREE.BackSide}
        depthWrite={false}
        depthTest={false}
        toneMapped={false}
      />
    </mesh>
  );
}
