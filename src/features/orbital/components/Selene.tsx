"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import Nyx from "./Nyx";

export default function Selene() {
  const orbitRef = useRef<THREE.Group>(null);
  const seleneRef = useRef<THREE.Mesh>(null);

  const textures = useTexture({
    map: "/textures/planets/selene/color.png",
    normalMap: "/textures/planets/selene/normal.png",
    roughnessMap: "/textures/planets/selene/roughness.png",
    displacementMap: "/textures/planets/selene/height.png",
  });

  useFrame((_, delta) => {
    // True orbital movement
    if (orbitRef.current) {
      orbitRef.current.rotation.y -= delta * 0.18;
    }

    // Selene's own rotation
    if (seleneRef.current) {
      seleneRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={orbitRef} rotation={[0.18, 0.8, -0.12]}>
      <group position={[4.8, 0, 0]}>
        <mesh ref={seleneRef} castShadow>
          <sphereGeometry args={[0.5, 128, 128]} />

          <meshStandardMaterial
            map={textures.map}
            normalMap={textures.normalMap}
            roughnessMap={textures.roughnessMap}
            displacementMap={textures.displacementMap}
            displacementScale={0.015}
            roughness={0.9}
            metalness={0}
          />
        </mesh>

        <Nyx />
      </group>
    </group>
  );
}
