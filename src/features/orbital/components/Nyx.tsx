"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type NyxProps = {
  onSelect?: () => void;
};

export default function Nyx({ onSelect }: NyxProps) {
  const orbitRef = useRef<THREE.Group>(null);
  const nyxRef = useRef<THREE.Mesh>(null);

  const textures = useTexture({
    map: "/textures/planets/nyx/color.png",
    normalMap: "/textures/planets/nyx/normal.png",
    roughnessMap: "/textures/planets/nyx/roughness.png",
    displacementMap: "/textures/planets/nyx/height.png",
  });

  useFrame((_, delta) => {
    /* ================================================== */
    /* NYX ORBIT AROUND SELENE */
    /* ================================================== */

    if (orbitRef.current) {
      orbitRef.current.rotation.y += delta * 0.45;
    }

    /* ================================================== */
    /* NYX ROTATION */
    /* ================================================== */

    if (nyxRef.current) {
      nyxRef.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <group ref={orbitRef} rotation={[0.3, -0.15, 0.2]}>
      <mesh
        ref={nyxRef}
        position={[1.15, 0, 0]}
        castShadow
        onClick={(event) => {
          event.stopPropagation();
          onSelect?.();
        }}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[0.25, 96, 96]} />

        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          roughnessMap={textures.roughnessMap}
          displacementMap={textures.displacementMap}
          displacementScale={0.01}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  );
}
