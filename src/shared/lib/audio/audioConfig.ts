type AudioCategoryVolumes = {
  ui: number;
  system: number;
  notifications: number;
  orbital: number;
  terminal: number;
  astra: number;
};

type AudioConfig = {
  masterVolume: number;
  categories: AudioCategoryVolumes;
};

export const AUDIO_CONFIG: AudioConfig = {
  masterVolume: 0.7,

  categories: {
    ui: 0.65,
    system: 0.7,
    notifications: 0.7,
    orbital: 0.65,
    terminal: 0.6,
    astra: 0.7,
  },
};
