"use client";

import { Clone, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

type GenesisStationModelProps = {
  staticMode?: boolean;
};

export default function GenesisStationModel({
  staticMode = false,
}: GenesisStationModelProps) {
  const { scene } = useGLTF("/models/genesis-station.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) {
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      if (!staticMode) {
        return;
      }

      const material = child.material;

      if (!(material instanceof THREE.MeshStandardMaterial)) {
        return;
      }

      const name = child.name.toLowerCase();

      if (
        name.includes("window") ||
        name.includes("sensor") ||
        name.includes("status") ||
        name.includes("lamp") ||
        name.includes("beacon")
      ) {
        material.emissiveIntensity = 0;
      }
    });
  }, [scene, staticMode]);

  return <Clone object={scene} />;
}

useGLTF.preload("/models/genesis-station.glb");
