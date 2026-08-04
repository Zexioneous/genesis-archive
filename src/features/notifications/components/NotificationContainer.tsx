"use client";

import { AnimatePresence } from "framer-motion";

import { useNotification } from "../hooks/useNotification";
import Notification from "./Notification";

export default function NotificationContainer() {
  const { notifications, remove } = useNotification();

  return (
    <div className="pointer-events-none fixed top-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {notifications.slice(0, 3).map((notification) => (
          <Notification
            key={notification.id}
            id={notification.id}
            title={notification.title}
            message={notification.message}
            type={notification.type}
            onClose={remove}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}
