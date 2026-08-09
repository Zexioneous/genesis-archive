"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import * as THREE from "three";

export type GenesisStationHandle = {
  station: THREE.Group | null;
};

type GenesisStationProps = {
  onSelect?: () => void;
};

const GenesisStation = forwardRef<GenesisStationHandle, GenesisStationProps>(
  function GenesisStation({ onSelect }, ref) {
    const stationRef = useRef<THREE.Group>(null);

    const timeRef = useRef(0);

    const emissiveMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

    const beaconMaterialsRef = useRef<THREE.MeshStandardMaterial[]>([]);

    const { scene } = useGLTF("/models/genesis-station.glb");

    /*
     * ==================================================
     * EXPOSE STATION REFERENCE
     * ==================================================
     *
     * CinematicCameraController will use this to find
     * the station's actual world position.
     */

    useImperativeHandle(
      ref,
      () => ({
        station: stationRef.current,
      }),
      [],
    );

    /*
     * ==================================================
     * GENESIS STATION MATERIALS
     * ==================================================
     */

    useEffect(() => {
      const emissiveMaterials: THREE.MeshStandardMaterial[] = [];

      const beaconMaterials: THREE.MeshStandardMaterial[] = [];

      scene.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) {
          return;
        }

        /*
         * Shadows
         */

        child.castShadow = true;
        child.receiveShadow = true;

        const material = child.material;

        if (!(material instanceof THREE.MeshStandardMaterial)) {
          return;
        }

        const name = child.name.toLowerCase();

        /*
         * ==================================================
         * LIGHT GROUPS
         * ==================================================
         */

        const isWindow = name.includes("window");

        const isSensor = name.includes("sensor");

        const isStatus = name.includes("status");

        const isLamp = name.includes("lamp");

        const isBeacon = name.includes("beacon");

        /*
         * ==================================================
         * WINDOWS + SENSORS
         * ==================================================
         */

        if (isWindow || isSensor) {
          material.color.set("#39d9ff");

          material.emissive.set("#39d9ff");

          material.emissiveIntensity = 0.5;

          emissiveMaterials.push(material);
        }

        /*
         * ==================================================
         * STATUS + LAMP LIGHTS
         * ==================================================
         */

        if (isStatus || isLamp) {
          material.color.set("#39d9ff");

          material.emissive.set("#39d9ff");

          material.emissiveIntensity = 0.35;

          emissiveMaterials.push(material);

          beaconMaterials.push(material);
        }

        /*
         * ==================================================
         * BEACON
         * ==================================================
         */

        if (isBeacon) {
          material.color.set("#39d9ff");

          material.emissive.set("#39d9ff");

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

    /*
     * ==================================================
     * SUBTLE BEACON PULSE
     * ==================================================
     */

    useFrame((_, delta) => {
      timeRef.current += delta;

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
        <primitive object={scene} />
      </group>
    );
  },
);

export default GenesisStation;

useGLTF.preload("/models/genesis-station.glb");
