export const AUDIO_EVENTS = {
  ui: {
    click: "ui.click",
    hover: "ui.hover",
    open: "ui.open",
    close: "ui.close",
    notification: "ui.notification",
    confirm: "ui.confirm",
    error: "ui.error",
  },

  system: {
    boot: "system.boot",
    shutdown: "system.shutdown",
    modeChange: "system.mode-change",
  },

  notifications: {
    incoming: "notifications.incoming",
    warning: "notifications.warning",
    critical: "notifications.critical",
  },

  orbital: {
    objectSelect: "orbital.object-select",
    inspectionOpen: "orbital.inspection-open",
    cameraMode: "orbital.camera-mode",
    cinematic: "orbital.cinematic",
  },

  terminal: {
    key: "terminal.key",
    execute: "terminal.execute",
    error: "terminal.error",
    success: "terminal.success",
  },

  astra: {
    activation: "astra.activation",
    response: "astra.response",
    warning: "astra.warning",
  },
} as const;
