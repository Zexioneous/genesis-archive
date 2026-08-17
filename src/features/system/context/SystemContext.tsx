"use client";

import { createContext, useContext, useState } from "react";

export type ActivePage = "astra" | "orbital";

type SystemContextType = {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
};

const SystemContext = createContext<SystemContextType | null>(null);

export function SystemProvider({ children }: { children: React.ReactNode }) {
  const [activePage, setActivePage] = useState<ActivePage>("astra");

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
