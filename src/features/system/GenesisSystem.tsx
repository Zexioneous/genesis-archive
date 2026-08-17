"use client";

import GenesisBackground from "@/universe/background/GenesisBackground";

import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import Workspace from "./components/Workspace";
import { SystemProvider } from "./context/SystemContext";

type GenesisSystemProps = {
  initialField: "portfolio" | "genesis" | "lore";
  onReturnToGateway: () => void;
};

export default function GenesisSystem({
  initialField,
  onReturnToGateway,
}: GenesisSystemProps) {
  if (initialField === "portfolio") {
    return null;
  }

  return (
    <SystemProvider>
      <div className="relative h-screen overflow-hidden">
        <GenesisBackground />

        <main className="relative flex h-screen bg-[#02070b]/40 text-cyan-400">
          <Sidebar onReturnToGateway={onReturnToGateway} />

          <section className="flex min-h-0 flex-1 flex-col overflow-hidden">
            <TopBar />

            <Workspace />
          </section>
        </main>
      </div>
    </SystemProvider>
  );
}
