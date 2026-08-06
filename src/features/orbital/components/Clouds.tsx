"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Clouds() {
  const cloudRef = useRef<THREE.Mesh>(null);

  const cloudTexture = useTexture("/textures/planets/elysia/clouds.png");

  useFrame((_, delta) => {
    if (!cloudRef.current) return;

    // Slightly faster than the planet
    cloudRef.current.rotation.y += delta * 0.09;
    cloudRef.current.rotation.z += delta * 0.002;
  });

  return (
    <mesh ref={cloudRef} scale={1.015} rotation={[0.03, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />

      <meshPhongMaterial
        map={cloudTexture}
        transparent
        opacity={0.35}
        depthWrite={false}
        shininess={5}
      />
    </mesh>
  );
}
