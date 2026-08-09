"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type SeleneProps = {
  onSelect?: () => void;
};

export default function Selene({ onSelect }: SeleneProps) {
  const orbitRef = useRef<THREE.Group>(null);
  const seleneRef = useRef<THREE.Mesh>(null);

  const textures = useTexture({
    map: "/textures/planets/selene/color.png",
    normalMap: "/textures/planets/selene/normal.png",
    roughnessMap: "/textures/planets/selene/roughness.png",
    displacementMap: "/textures/planets/selene/height.png",
  });

  useFrame((_, delta) => {
    /* ================================================== */
    /* ORBIT */
    /* ================================================== */

    if (orbitRef.current) {
      orbitRef.current.rotation.y -= delta * 0.18;
    }

    /* ================================================== */
    /* SELENE ROTATION */
    /* ================================================== */

    if (seleneRef.current) {
      seleneRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={orbitRef} rotation={[0, 0, 0]}>
      <mesh
        ref={seleneRef}
        position={[4.8, 0, 0]}
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
        <sphereGeometry args={[0.55, 128, 128]} />

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
    </group>
  );
}
