"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";

export type NotificationType = "system" | "astra" | "warning";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
};

type NotificationContextType = {
  notifications: NotificationItem[];
  notify: (notification: Omit<NotificationItem, "id">) => void;
  remove: (id: string) => void;
};

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);

  const notify = useCallback((notification: Omit<NotificationItem, "id">) => {
    setNotifications((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        ...notification,
      },
    ]);
  }, []);

  const remove = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, []);

  const value = useMemo(
    () => ({
      notifications,
      notify,
      remove,
    }),
    [notifications, notify, remove],
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  const context = useContext(NotificationContext);

  if (!context) {
    throw new Error(
      "useNotificationContext must be used inside NotificationProvider",
    );
  }

  return context;
}
