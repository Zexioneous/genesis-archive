"use client";

import * as THREE from "three";

export default function Atmosphere() {
  return (
    <>
      {/* Outer atmospheric glow */}
      <mesh scale={1.03}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#63dfff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>

      {/* Thin atmosphere shell */}
      <mesh scale={1.045}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshBasicMaterial
          color="#7aefff"
          transparent
          opacity={0.08}
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}
