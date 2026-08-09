"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

type FreeCameraControllerProps = {
  enabled: boolean;
};

export default function FreeCameraController({
  enabled,
}: FreeCameraControllerProps) {
  const { camera, gl } = useThree();

  const cameraRef = useRef(camera);

  const keys = useRef<Record<string, boolean>>({});

  const yaw = useRef(0);
  const pitch = useRef(0);

  const velocity = useRef(new THREE.Vector3());
  const direction = useRef(new THREE.Vector3());
  const movement = useRef(new THREE.Vector3());

  /*
   * ==================================================
   * CAMERA BOUNDARY
   * ==================================================
   *
   * The playable observation space is a sphere
   * centered around the orbital system.
   *
   * The camera can move freely inside it.
   *
   * As it approaches the outer edge, movement
   * gradually becomes weaker.
   */

  /*
   * Start slowing down when the camera is this
   * far from the center.
   */

  const SOFT_BOUNDARY_RADIUS = 10;

  /*
   * Never allow the camera outside this radius.
   */

  const HARD_BOUNDARY_RADIUS = 13;

  /*
   * ==================================================
   * MOUSE
   * ==================================================
   */

  const mouseSensitivity = 0.002;

  /*
   * ==================================================
   * INITIAL CAMERA ROTATION
   * ==================================================
   */

  useEffect(() => {
    const currentCamera = cameraRef.current;

    yaw.current = currentCamera.rotation.y;
    pitch.current = currentCamera.rotation.x;
  }, []);

  /*
   * ==================================================
   * KEYBOARD
   * ==================================================
   */

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      keys.current[event.code] = true;
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      keys.current[event.code] = false;
    };

    window.addEventListener("keydown", handleKeyDown);

    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);

      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [enabled]);

  /*
   * ==================================================
   * POINTER LOCK / MOUSE LOOK
   * ==================================================
   */

  useEffect(() => {
    if (!enabled) return;

    const canvas = gl.domElement;

    const handleClick = () => {
      canvas.requestPointerLock();
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (document.pointerLockElement !== canvas) {
        return;
      }

      yaw.current -= event.movementX * mouseSensitivity;

      pitch.current -= event.movementY * mouseSensitivity;

      const maxPitch = Math.PI / 2 - 0.05;

      pitch.current = THREE.MathUtils.clamp(pitch.current, -maxPitch, maxPitch);
    };

    canvas.addEventListener("click", handleClick);

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvas.removeEventListener("click", handleClick);

      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [enabled, gl]);

  /*
   * ==================================================
   * POINTER LOCK STATE
   * ==================================================
   */

  useEffect(() => {
    const canvas = gl.domElement;

    const handlePointerLockChange = () => {
      const locked = document.pointerLockElement === canvas;

      canvas.style.cursor = locked ? "none" : "default";
    };

    document.addEventListener("pointerlockchange", handlePointerLockChange);

    return () => {
      document.removeEventListener(
        "pointerlockchange",
        handlePointerLockChange,
      );

      canvas.style.cursor = "default";
    };
  }, [gl]);

  /*
   * ==================================================
   * DISABLE FREE CAMERA
   * ==================================================
   */

  useEffect(() => {
    if (enabled) return;

    if (document.pointerLockElement === gl.domElement) {
      document.exitPointerLock();
    }

    velocity.current.set(0, 0, 0);
    keys.current = {};
  }, [enabled, gl]);

  /*
   * ==================================================
   * FRAME LOOP
   * ==================================================
   */

  useFrame((_, delta) => {
    if (!enabled) return;

    const currentCamera = cameraRef.current;

    /*
     * --------------------------------------------------
     * CAMERA LOOK
     * --------------------------------------------------
     */

    currentCamera.rotation.set(pitch.current, yaw.current, 0, "YXZ");

    /*
     * --------------------------------------------------
     * MOVEMENT INPUT
     * --------------------------------------------------
     */

    direction.current.set(0, 0, 0);

    if (keys.current["KeyW"]) {
      direction.current.z -= 1;
    }

    if (keys.current["KeyS"]) {
      direction.current.z += 1;
    }

    if (keys.current["KeyA"]) {
      direction.current.x -= 1;
    }

    if (keys.current["KeyD"]) {
      direction.current.x += 1;
    }

    if (keys.current["KeyQ"]) {
      direction.current.y -= 1;
    }

    if (keys.current["KeyE"]) {
      direction.current.y += 1;
    }

    /*
     * Normalize diagonal movement.
     */

    if (direction.current.lengthSq() > 0) {
      direction.current.normalize();
    }

    /*
     * --------------------------------------------------
     * SPEED
     * --------------------------------------------------
     */

    const speed = keys.current["ShiftLeft"] ? 8 : 3;

    direction.current.multiplyScalar(speed);

    /*
     * --------------------------------------------------
     * SOFT BOUNDARY
     * --------------------------------------------------
     *
     * Calculate how close the camera is to the
     * observation boundary.
     */

    const distance = currentCamera.position.length();

    let boundaryFactor = 1;

    if (distance > SOFT_BOUNDARY_RADIUS) {
      const range = HARD_BOUNDARY_RADIUS - SOFT_BOUNDARY_RADIUS;

      const progress = (distance - SOFT_BOUNDARY_RADIUS) / range;

      /*
       * Smoothly reduce movement.
       *
       * 1.0 = completely free
       * 0.0 = boundary reached
       */

      boundaryFactor = 1 - THREE.MathUtils.smoothstep(progress, 0, 1);
    }

    direction.current.multiplyScalar(boundaryFactor);

    /*
     * --------------------------------------------------
     * SMOOTH ACCELERATION
     * --------------------------------------------------
     */

    velocity.current.lerp(direction.current, 1 - Math.pow(0.001, delta));

    /*
     * --------------------------------------------------
     * MOVEMENT
     * --------------------------------------------------
     */

    movement.current.copy(velocity.current).multiplyScalar(delta);

    movement.current.applyQuaternion(currentCamera.quaternion);

    /*
     * --------------------------------------------------
     * PREDICTED POSITION
     * --------------------------------------------------
     */

    const nextPosition = currentCamera.position.clone().add(movement.current);

    /*
     * --------------------------------------------------
     * HARD BOUNDARY
     * --------------------------------------------------
     */

    if (nextPosition.length() > HARD_BOUNDARY_RADIUS) {
      nextPosition.setLength(HARD_BOUNDARY_RADIUS);

      /*
       * Stop outward velocity.
       */

      velocity.current.multiplyScalar(0.15);
    }

    currentCamera.position.copy(nextPosition);
  });

  return null;
}
