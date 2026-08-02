"use client";

import UniverseBackground from "@/universe/background/UniverseBackground";
import Sidebar from "./Sidebar";
import { SystemProvider } from "./SystemContext";
import TopBar from "./TopBar";
import Workspace from "./Workspace";

export default function GenesisSystem() {
  return (
    <SystemProvider>
      <UniverseBackground />
      <main className="flex h-screen bg-transparent text-cyan-400">
        <Sidebar />

        <section className="flex flex-1 flex-col">
          <TopBar />
          <Workspace />
        </section>
      </main>
    </SystemProvider>
  );
}
