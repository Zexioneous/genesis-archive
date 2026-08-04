"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";

import { useCommandPalette } from "./hooks/useCommandPalette";

type CommandPaletteContextType = ReturnType<typeof useCommandPalette>;

const CommandPaletteContext = createContext<CommandPaletteContextType | null>(
  null,
);

export function CommandPaletteProvider({ children }: { children: ReactNode }) {
  const command = useCommandPalette();
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        command.toggle();
        return;
      }

      if (event.key === "Escape") {
        command.close();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [command]);

  return (
    <CommandPaletteContext.Provider value={command}>
      {children}
    </CommandPaletteContext.Provider>
  );
}

export function useCommand() {
  const context = useContext(CommandPaletteContext);

  if (!context) {
    throw new Error("useCommand must be used inside CommandPaletteProvider");
  }

  return context;
}
