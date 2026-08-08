"use client";

import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";

type PlanetProps = {
  onSelect: () => void;
};

export default function Planet({ onSelect }: PlanetProps) {
  const planetRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  const textures = useTexture({
    map: "/textures/planets/elysia/color.png",
    normalMap: "/textures/planets/elysia/normal.png",
    roughnessMap: "/textures/planets/elysia/roughness.png",
    displacementMap: "/textures/planets/elysia/height.png",
  });

  useFrame((_, delta) => {
    if (!planetRef.current) return;

    // Elysia rotation
    planetRef.current.rotation.y += delta * 0.05;
  });

  return (
    <group>
      {/* ================================================== */}
      {/* TARGETING RING */}
      {/* ================================================== */}

      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[2.18, 2.2, 96]} />

        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={hovered ? 0.65 : 0}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* ================================================== */}
      {/* ELYSIA */}
      {/* ================================================== */}

      <mesh
        ref={planetRef}
        castShadow
        receiveShadow
        onClick={(event) => {
          event.stopPropagation();
          onSelect();
        }}
        onPointerOver={(event) => {
          event.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={(event) => {
          event.stopPropagation();
          setHovered(false);
          document.body.style.cursor = "default";
        }}
      >
        <sphereGeometry args={[2, 128, 128]} />

        <meshStandardMaterial
          map={textures.map}
          normalMap={textures.normalMap}
          roughnessMap={textures.roughnessMap}
          displacementMap={textures.displacementMap}
          displacementScale={0.03}
          roughness={1}
          metalness={0}
          emissive="#00bcd4"
          emissiveIntensity={hovered ? 0.08 : 0}
        />
      </mesh>

      {/* ================================================== */}
      {/* TARGETING BRACKETS */}
      {/* ================================================== */}

      <group visible={hovered} scale={1.08}>
        {/* Top-left */}
        <mesh position={[-2.15, 2.15, 0]}>
          <boxGeometry args={[0.5, 0.025, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        <mesh position={[-2.15, 2.15, 0]}>
          <boxGeometry args={[0.025, 0.5, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        {/* Top-right */}
        <mesh position={[2.15, 2.15, 0]}>
          <boxGeometry args={[0.5, 0.025, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        <mesh position={[2.15, 2.15, 0]}>
          <boxGeometry args={[0.025, 0.5, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        {/* Bottom-left */}
        <mesh position={[-2.15, -2.15, 0]}>
          <boxGeometry args={[0.5, 0.025, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        <mesh position={[-2.15, -2.15, 0]}>
          <boxGeometry args={[0.025, 0.5, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        {/* Bottom-right */}
        <mesh position={[2.15, -2.15, 0]}>
          <boxGeometry args={[0.5, 0.025, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>

        <mesh position={[2.15, -2.15, 0]}>
          <boxGeometry args={[0.025, 0.5, 0.025]} />
          <meshBasicMaterial color="#67e8f9" />
        </mesh>
      </group>
    </group>
  );
}
