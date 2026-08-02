"use client";

import Sidebar from "./Sidebar";
import { SystemProvider } from "./SystemContext";
import TopBar from "./TopBar";
import Workspace from "./Workspace";

export default function GenesisSystem() {
  return (
    <SystemProvider>
      <main className="flex h-screen bg-black text-cyan-400">
        <Sidebar />

        <section className="flex flex-1 flex-col">
          <TopBar />
          <Workspace />
        </section>
      </main>
    </SystemProvider>
  );
}
