"use client";

import { AUDIO_CONFIG } from "./audioConfig";

type AudioCategory =
  "ui" | "system" | "notifications" | "orbital" | "terminal" | "astra";

type SoundDefinition = {
  src: string;
  category: AudioCategory;
  volume?: number;
  loop?: boolean;
};

const SOUND_DEFINITIONS: Record<string, SoundDefinition> = {
  /*
   * ==================================================
   * UI
   * ==================================================
   */

  "ui.click": {
    src: "/audio/ui/click.mp3",
    category: "ui",
  },

  "ui.hover": {
    src: "/audio/ui/hover.mp3",
    category: "ui",
  },

  "ui.open": {
    src: "/audio/ui/open.mp3",
    category: "ui",
  },

  "ui.close": {
    src: "/audio/ui/close.mp3",
    category: "ui",
  },

  "ui.confirm": {
    src: "/audio/ui/confirm.mp3",
    category: "ui",
  },

  "ui.error": {
    src: "/audio/ui/error.mp3",
    category: "ui",
  },

  /*
   * Generic notification sound.
   *
   * Used by the Notification component when
   * a new notification enters the UI.
   */

  "ui.notification": {
    src: "/audio/ui/notification.mp3",
    category: "ui",
  },

  /*
   * ==================================================
   * SYSTEM
   * ==================================================
   */

  "system.boot": {
    src: "/audio/system/boot.mp3",
    category: "system",
  },

  "system.shutdown": {
    src: "/audio/system/shutdown.mp3",
    category: "system",
  },

  "system.mode-change": {
    src: "/audio/system/mode-change.mp3",
    category: "system",
  },

  /*
   * ==================================================
   * NOTIFICATIONS
   * ==================================================
   */

  "notifications.incoming": {
    src: "/audio/notifications/incoming.mp3",
    category: "notifications",
  },

  "notifications.warning": {
    src: "/audio/notifications/warning.mp3",
    category: "notifications",
  },

  "notifications.critical": {
    src: "/audio/notifications/critical.mp3",
    category: "notifications",
  },

  /*
   * ==================================================
   * ORBITAL
   * ==================================================
   */

  "orbital.object-select": {
    src: "/audio/orbital/object-select.mp3",
    category: "orbital",
  },

  "orbital.inspection-open": {
    src: "/audio/orbital/inspection-open.mp3",
    category: "orbital",
  },

  "orbital.camera-mode": {
    src: "/audio/orbital/camera-mode.mp3",
    category: "orbital",
  },

  "orbital.cinematic": {
    src: "/audio/orbital/cinematic.mp3",
    category: "orbital",
  },

  /*
   * ==================================================
   * TERMINAL
   * ==================================================
   */

  "terminal.key": {
    src: "/audio/terminal/key.mp3",
    category: "terminal",
  },

  "terminal.execute": {
    src: "/audio/terminal/execute.mp3",
    category: "terminal",
  },

  "terminal.error": {
    src: "/audio/terminal/error.mp3",
    category: "terminal",
  },

  "terminal.success": {
    src: "/audio/terminal/success.mp3",
    category: "terminal",
  },

  /*
   * ==================================================
   * ASTRA
   * ==================================================
   */

  "astra.activation": {
    src: "/audio/astra/activation.mp3",
    category: "astra",
  },

  "astra.response": {
    src: "/audio/astra/response.mp3",
    category: "astra",
  },

  "astra.warning": {
    src: "/audio/astra/warning.mp3",
    category: "astra",
  },
};

class AudioManager {
  private static instance: AudioManager | null = null;

  private audioCache = new Map<string, HTMLAudioElement>();

  private masterVolume = AUDIO_CONFIG.masterVolume;

  private muted = false;

  private initialized = false;

  private constructor() {}

  /*
   * ==================================================
   * SINGLETON
   * ==================================================
   */

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }

    return AudioManager.instance;
  }

  /*
   * ==================================================
   * INITIALIZATION
   * ==================================================
   */

  initialize() {
    if (this.initialized) {
      return;
    }

    if (typeof window === "undefined") {
      return;
    }

    this.initialized = true;
  }

  /*
   * ==================================================
   * LOAD SOUND
   * ==================================================
   */

  private load(event: string): HTMLAudioElement | null {
    if (typeof window === "undefined") {
      return null;
    }

    const definition = SOUND_DEFINITIONS[event];

    if (!definition) {
      console.warn(`[AudioManager] Unknown sound: ${event}`);

      return null;
    }

    const cached = this.audioCache.get(event);

    if (cached) {
      return cached;
    }

    const audio = new Audio(definition.src);

    audio.preload = "auto";

    this.audioCache.set(event, audio);

    return audio;
  }

  /*
   * ==================================================
   * PLAY SOUND
   * ==================================================
   */

  play(event: string): HTMLAudioElement | null {
    if (typeof window === "undefined") {
      return null;
    }

    if (this.muted) {
      return null;
    }

    const definition = SOUND_DEFINITIONS[event];

    if (!definition) {
      console.warn(`[AudioManager] Unknown sound: ${event}`);

      return null;
    }

    const audio = this.load(event);

    if (!audio) {
      return null;
    }

    /*
     * Reset short UI sounds so repeated
     * clicks don't start halfway through.
     */

    audio.currentTime = 0;

    const categoryVolume = AUDIO_CONFIG.categories[definition.category];

    const soundVolume = definition.volume ?? 1;

    audio.volume = this.masterVolume * categoryVolume * soundVolume;

    audio.loop = definition.loop ?? false;

    /*
     * Browser autoplay restrictions can
     * reject play(). We intentionally
     * handle that silently.
     */

    const promise = audio.play();

    if (promise && typeof promise.catch === "function") {
      promise.catch(() => {
        /*
         * Browser blocked playback.
         *
         * This is expected until the user
         * interacts with the page.
         */
      });
    }

    return audio;
  }

  /*
   * ==================================================
   * STOP SOUND
   * ==================================================
   */

  stop(event: string) {
    const audio = this.audioCache.get(event);

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
  }

  /*
   * ==================================================
   * MASTER VOLUME
   * ==================================================
   */

  setMasterVolume(volume: number) {
    this.masterVolume = Math.max(0, Math.min(1, volume));

    this.updateVolumes();
  }

  getMasterVolume() {
    return this.masterVolume;
  }

  /*
   * ==================================================
   * MUTE
   * ==================================================
   */

  setMuted(muted: boolean) {
    this.muted = muted;

    if (muted) {
      this.audioCache.forEach((audio) => {
        audio.pause();
      });

      return;
    }

    this.updateVolumes();
  }

  isMuted() {
    return this.muted;
  }

  /*
   * ==================================================
   * UPDATE ACTIVE VOLUMES
   * ==================================================
   */

  private updateVolumes() {
    this.audioCache.forEach((audio, event) => {
      const definition = SOUND_DEFINITIONS[event];

      if (!definition) {
        return;
      }

      const categoryVolume = AUDIO_CONFIG.categories[definition.category];

      const soundVolume = definition.volume ?? 1;

      audio.volume = this.masterVolume * categoryVolume * soundVolume;
    });
  }

  /*
   * ==================================================
   * PRELOAD
   * ==================================================
   */

  preload(event: string) {
    const audio = this.load(event);

    if (!audio) {
      return;
    }

    audio.load();
  }

  /*
   * ==================================================
   * CLEAR CACHE
   * ==================================================
   */

  clearCache() {
    this.audioCache.forEach((audio) => {
      audio.pause();
      audio.src = "";
    });

    this.audioCache.clear();
  }
}

export default AudioManager;
