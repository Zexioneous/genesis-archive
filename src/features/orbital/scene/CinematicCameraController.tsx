"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { RefObject, useEffect, useRef } from "react";
import * as THREE from "three";

import type { GenesisStationHandle } from "../components/GenesisStation";
import type { SeleneHandle } from "../components/Selene";

type CinematicCameraControllerProps = {
  enabled: boolean;
  seleneHandle: RefObject<SeleneHandle | null>;
  stationHandle: RefObject<GenesisStationHandle | null>;
};

type CinematicShot = {
  position: THREE.Vector3;
  target: THREE.Vector3;
  duration: number;
  tracking?: "none" | "selene" | "nyx" | "station";
};

/*
 * ==================================================
 * CINEMATIC SHOTS
 * ==================================================
 *
 * 01 — Helios Prime
 * 02 — Elysia-3 reveal
 * 03 — Elysia-3 close pass
 * 04 — Selene
 * 05 — Nyx
 * 06 — Genesis Station approach
 * 07 — Genesis Station close inspection
 * 08 — Full orbital system
 */

const SHOTS: CinematicShot[] = [
  /*
   * ==================================================
   * 01 — HELIOS PRIME
   * ==================================================
   */

  {
    position: new THREE.Vector3(-8, 4, 10),
    target: new THREE.Vector3(-6, 2, -2),
    duration: 8,
    tracking: "none",
  },

  /*
   * ==================================================
   * 02 — ELYSIA-3 REVEAL
   * ==================================================
   */

  {
    position: new THREE.Vector3(7, 2.8, 8),
    target: new THREE.Vector3(0, 0, 0),
    duration: 8,
    tracking: "none",
  },

  /*
   * ==================================================
   * 03 — ELYSIA-3 CLOSE PASS
   * ==================================================
   */

  {
    position: new THREE.Vector3(5, 1.5, 3.8),
    target: new THREE.Vector3(0, 0, 0),
    duration: 7,
    tracking: "none",
  },

  /*
   * ==================================================
   * 04 — SELENE
   * ==================================================
   *
   * Target is calculated from the actual Selene
   * object every frame.
   */

  {
    position: new THREE.Vector3(7.2, 1.8, 2.8),
    target: new THREE.Vector3(4.8, 0, 0),
    duration: 7,
    tracking: "selene",
  },

  /*
   * ==================================================
   * 05 — NYX
   * ==================================================
   *
   * Nyx is moving around Selene, so we dynamically
   * track its world position.
   */

  {
    position: new THREE.Vector3(5.8, 1.3, 2.2),
    target: new THREE.Vector3(4.8, 0, 0),
    duration: 6,
    tracking: "nyx",
  },

  /*
   * ==================================================
   * 06 — GENESIS STATION APPROACH
   * ==================================================
   */

  {
    position: new THREE.Vector3(8.5, 2.8, 3.5),
    target: new THREE.Vector3(6.5, 1.2, -1.5),
    duration: 8,
    tracking: "station",
  },

  /*
   * ==================================================
   * 07 — GENESIS STATION CLOSE INSPECTION
   * ==================================================
   */

  {
    position: new THREE.Vector3(7.4, 1.8, 0.8),
    target: new THREE.Vector3(6.5, 1.2, -1.5),
    duration: 7,
    tracking: "station",
  },

  /*
   * ==================================================
   * 08 — FULL ORBITAL SYSTEM
   * ==================================================
   */

  {
    position: new THREE.Vector3(0, 5, 13),
    target: new THREE.Vector3(1, 0, 0),
    duration: 9,
    tracking: "none",
  },
];

export default function CinematicCameraController({
  enabled,
  seleneHandle,
  stationHandle,
}: CinematicCameraControllerProps) {
  const { camera } = useThree();

  /*
   * ==================================================
   * CINEMATIC STATE
   * ==================================================
   */

  const shotIndex = useRef(0);

  const shotTime = useRef(0);

  const startPosition = useRef(new THREE.Vector3());

  const startTarget = useRef(new THREE.Vector3());

  const currentTarget = useRef(new THREE.Vector3());

  const nextPosition = useRef(new THREE.Vector3());

  const nextTarget = useRef(new THREE.Vector3());

  const trackedPosition = useRef(new THREE.Vector3());

  const initialized = useRef(false);

  /*
   * ==================================================
   * CINEMATIC MODE START / STOP
   * ==================================================
   */

  useEffect(() => {
    if (!enabled) {
      initialized.current = false;

      shotIndex.current = 0;
      shotTime.current = 0;

      return;
    }

    const firstShot = SHOTS[0];

    /*
     * Start camera.
     */

    camera.position.copy(firstShot.position);

    camera.lookAt(firstShot.target);

    /*
     * Save starting state.
     */

    startPosition.current.copy(firstShot.position);

    startTarget.current.copy(firstShot.target);

    currentTarget.current.copy(firstShot.target);

    shotIndex.current = 0;
    shotTime.current = 0;

    initialized.current = true;
  }, [enabled, camera]);

  /*
   * ==================================================
   * FIND TRACKING TARGET
   * ==================================================
   */

  const getTrackingTarget = (shot: CinematicShot): THREE.Vector3 | null => {
    if (shot.tracking === "selene") {
      const selene = seleneHandle.current?.selene;

      if (!selene) {
        return null;
      }

      selene.getWorldPosition(trackedPosition.current);

      return trackedPosition.current;
    }

    if (shot.tracking === "nyx") {
      const nyx = seleneHandle.current?.nyx;

      if (!nyx) {
        return null;
      }

      nyx.getWorldPosition(trackedPosition.current);

      return trackedPosition.current;
    }

    if (shot.tracking === "station") {
      const station = stationHandle.current?.station;

      if (!station) {
        return null;
      }

      station.getWorldPosition(trackedPosition.current);

      return trackedPosition.current;
    }

    return null;
  };

  /*
   * ==================================================
   * CINEMATIC ANIMATION
   * ==================================================
   */

  useFrame((_, delta) => {
    if (!enabled || !initialized.current) {
      return;
    }

    const shot = SHOTS[shotIndex.current];

    if (!shot) {
      shotIndex.current = 0;
      shotTime.current = 0;

      return;
    }

    /*
     * Advance timer.
     */

    shotTime.current += delta;

    /*
     * Calculate progress.
     */

    const rawProgress = shotTime.current / shot.duration;

    const progress = THREE.MathUtils.clamp(rawProgress, 0, 1);

    /*
     * Smooth cinematic movement.
     */

    const eased = THREE.MathUtils.smoothstep(progress, 0, 1);

    /*
     * ==================================================
     * CAMERA POSITION
     * ==================================================
     */

    nextPosition.current.lerpVectors(
      startPosition.current,
      shot.position,
      eased,
    );

    camera.position.copy(nextPosition.current);

    /*
     * ==================================================
     * CAMERA TARGET
     * ==================================================
     *
     * For moving objects, use their current
     * world position.
     */

    const dynamicTarget = getTrackingTarget(shot);

    if (dynamicTarget) {
      /*
       * Smoothly follow the moving object.
       */

      nextTarget.current.lerp(dynamicTarget, 0.08);

      currentTarget.current.copy(nextTarget.current);
    } else {
      /*
       * Static cinematic target.
       */

      nextTarget.current.lerpVectors(startTarget.current, shot.target, eased);

      currentTarget.current.copy(nextTarget.current);
    }

    /*
     * Point camera toward target.
     */

    camera.lookAt(currentTarget.current);

    /*
     * ==================================================
     * NEXT SHOT
     * ==================================================
     */

    if (progress >= 1) {
      shotIndex.current = (shotIndex.current + 1) % SHOTS.length;

      shotTime.current = 0;

      /*
       * New shot starts from the camera's current
       * position and current target.
       */

      startPosition.current.copy(camera.position);

      startTarget.current.copy(currentTarget.current);
    }
  });

  return null;
}
