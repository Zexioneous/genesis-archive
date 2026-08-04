"use client";

import NotificationContainer from "@/features/notifications/components/NotificationContainer";
import { NotificationProvider } from "@/features/notifications/NotificationContext";

import SearchOverlay from "@/features/search/components/SearchOverlay";
import { SearchProvider } from "@/features/search/context/SearchContext";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Workspace from "./components/Workspace";
import { SystemProvider } from "./context/SystemContext";

import {
  CommandPaletteProvider,
  useCommand,
} from "@/features/command/CommandPaletteContext";

import CommandPalette from "@/features/command/components/CommandPalette";

function CommandPaletteRoot() {
  const { isOpen } = useCommand();

  return <CommandPalette open={isOpen} />;
}

export default function GenesisSystem() {
  return (
    <SystemProvider>
      <NotificationProvider>
        <CommandPaletteProvider>
          <SearchProvider>
            <NotificationContainer />
            <CommandPaletteRoot />
            <SearchOverlay />

            <main className="flex h-screen bg-black text-cyan-400">
              <Sidebar />

              <section className="flex flex-1 flex-col">
                <TopBar />
                <Workspace />
              </section>
            </main>
          </SearchProvider>
        </CommandPaletteProvider>
      </NotificationProvider>
    </SystemProvider>
  );
}
