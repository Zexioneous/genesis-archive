"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

import Nyx from "./Nyx";

type SeleneProps = {
  onSelect?: () => void;
  onSelectNyx?: () => void;
};

export default function Selene({ onSelect, onSelectNyx }: SeleneProps) {
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
    /* SELENE ORBIT AROUND ELYSIA */
    /* ================================================== */

    if (orbitRef.current) {
      orbitRef.current.rotation.y -= delta * 0.18;
    }

    /* ================================================== */
    /* SELENE OWN ROTATION */
    /* ================================================== */

    if (seleneRef.current) {
      seleneRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <group ref={orbitRef} rotation={[0, 0, 0]}>
      {/* ================================================== */}
      {/* SELENE */}
      {/* ================================================== */}

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

      {/* ================================================== */}
      {/* NYX ORBIT AROUND SELENE */}
      {/* ================================================== */}

      <group position={[4.8, 0, 0]}>
        <Nyx onSelect={onSelectNyx} />
      </group>
    </group>
  );
}
