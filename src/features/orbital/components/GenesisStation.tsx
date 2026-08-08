"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function GenesisStation() {
  const stationRef = useRef<THREE.Group>(null);

  const timeRef = useRef(0);

  const emissiveMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  const beaconMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

  const { scene } = useGLTF("/models/genesis-station.glb");

  useEffect(() => {
    const emissiveMaterials: THREE.MeshStandardMaterial[] = [];
    const beaconMaterials: THREE.MeshStandardMaterial[] = [];

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      // Shadows
      child.castShadow = true;
      child.receiveShadow = true;

      const material = child.material;

      if (!(material instanceof THREE.MeshStandardMaterial)) {
        return;
      }

      const name = child.name.toLowerCase();

      /*
       * ----------------------------------------------------
       * GENESIS STATION LIGHTS
       * ----------------------------------------------------
       *
       * These are the small lights already modeled
       * into the GLB.
       */

      const isWindow = name.includes("window");

      const isSensor = name.includes("sensor");

      const isStatus = name.includes("status");

      const isLamp = name.includes("lamp");

      const isBeacon = name.includes("beacon");

      /*
       * Windows and sensors
       *
       * These stay relatively stable.
       */
      if (isWindow || isSensor) {
        material.color.set("#39d9ff");
        material.emissive.set("#39d9ff");

        // Keep this deliberately low.
        material.emissiveIntensity = 0.5;

        emissiveMaterials.push(material);
      }

      /*
       * Docking/status/lamp lights
       *
       * These are slightly brighter but still subtle.
       */
      if (isStatus || isLamp) {
        material.color.set("#39d9ff");
        material.emissive.set("#39d9ff");

        material.emissiveIntensity = 0.35;

        emissiveMaterials.push(material);
        beaconMaterials.push(material);
      }

      /*
       * Beacon
       *
       * The beacon gets its own animation.
       */
      if (isBeacon) {
        material.color.set("#39d9ff");
        material.emissive.set("#39d9ff");

        // Start dim.
        material.emissiveIntensity = 0.2;

        emissiveMaterials.push(material);
        beaconMaterials.push(material);
      }
    });

    emissiveMaterialsRef.current = emissiveMaterials;
    beaconMaterialsRef.current = beaconMaterials;

    return () => {
      emissiveMaterialsRef.current = [];
      beaconMaterialsRef.current = [];
    };
  }, [scene]);

  useFrame((_, delta) => {
    timeRef.current += delta;

    /*
     * ----------------------------------------------------
     * SUBTLE GENESIS BEACON PULSE
     * ----------------------------------------------------
     *
     * Approximately:
     *
     * 0.20 → 0.50
     *
     * This prevents the aggressive white flash.
     */
    const pulse = 0.25 + Math.sin(timeRef.current * 2.5) * 0.1;

    beaconMaterialsRef.current.forEach((material) => {
      material.emissiveIntensity = pulse;
    });
  });

  return (
    <group
      ref={stationRef}
      position={[6.5, 1.2, -1.5]}
      rotation={[0.12, -0.45, 0.08]}
      scale={0.45}
    >
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/genesis-station.glb");
