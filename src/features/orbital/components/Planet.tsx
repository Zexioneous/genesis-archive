"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Planet() {
  const planetRef = useRef<THREE.Mesh>(null);

  const textures = useTexture({
    map: "/textures/planets/elysia/color.png",
    normalMap: "/textures/planets/elysia/normal.png",
    roughnessMap: "/textures/planets/elysia/roughness.png",
    displacementMap: "/textures/planets/elysia/height.png",
  });

  useFrame((_, delta) => {
    if (!planetRef.current) return;

    // One full rotation every ~120 seconds
    planetRef.current.rotation.y += delta * 0.05;
  });

  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[2, 128, 128]} />

      <meshStandardMaterial
        map={textures.map}
        normalMap={textures.normalMap}
        roughnessMap={textures.roughnessMap}
        displacementMap={textures.displacementMap}
        displacementScale={0.03}
        roughness={1}
        metalness={0}
      />
    </mesh>
  );
}
