"use client";

import { useNotificationContext } from "./NotificationContext";

export function useNotification() {
  return useNotificationContext();
}
