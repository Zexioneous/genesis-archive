"use client";

import { useCallback } from "react";

import AudioManager from "../lib/audio/AudioManager";

export function useSound() {
  const playSound = useCallback((event: string) => {
    AudioManager.getInstance().play(event);
  }, []);

  return {
    playSound,
  };
}
