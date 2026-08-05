"use client";

import * as THREE from "three";

export default function Atmosphere() {
  return (
    <>
      {/* Outer glow */}
      <mesh scale={1.08}>
        <sphereGeometry args={[2, 128, 128]} />

        <meshBasicMaterial
          color="#63dfff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Thin atmosphere shell */}
      <mesh scale={1.045}>
        <sphereGeometry args={[2, 128, 128]} />

        <meshPhongMaterial
          color="#7aefff"
          transparent
          opacity={0.12}
          side={THREE.DoubleSide}
        />
      </mesh>
    </>
  );
}
