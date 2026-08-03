"use client";

import { createContext, useContext, useState } from "react";

export type activePage =
  | "personnel"
  | "missions"
  | "technology"
  | "timeline"
  | "galaxy"
  | "communications";

type SystemContextType = {
  activePage: activePage;
  setActivePage: (page: activePage) => void;
};

const SystemContext = createContext<SystemContextType | null>(null);

export function SystemProvider({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<activePage>("personnel");

  return (
    <SystemContext.Provider
      value={{
        activePage,
        setActivePage,
      }}
    >
      {children}
    </SystemContext.Provider>
  );
}

export function useSystem() {
  const context = useContext(SystemContext);

  if (!context) {
    throw new Error("useSystem must be used inside SystemProvider");
  }

  return context;
}
