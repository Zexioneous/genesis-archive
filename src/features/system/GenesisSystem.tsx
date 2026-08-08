"use client";

import NotificationContainer from "@/features/notifications/components/NotificationContainer";
import { NotificationProvider } from "@/features/notifications/NotificationContext";

import SearchOverlay from "@/features/search/components/SearchOverlay";
import { SearchProvider } from "@/features/search/context/SearchContext";
import GenesisBackground from "@/universe/background/GenesisBackground";
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
            <GenesisBackground />
            <NotificationContainer />
            <CommandPaletteRoot />
            <SearchOverlay />

            <main className="relative flex h-screen bg-[#02070b]/40 text-cyan-400">
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
