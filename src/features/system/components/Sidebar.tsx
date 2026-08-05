"use client";

import GenesisLogo from "@/shared/components/GenesisLogo";

import { useSystem } from "../context/SystemContext";
import navigation from "../navigation";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const { activePage, setActivePage } = useSystem();

  return (
    <aside className="flex w-72 flex-col border-r border-cyan-900/50 bg-[#071019]/90 px-6 py-8 shadow-[0_0_40px_rgba(34,211,238,0.08)]">
      {/* Header */}
      <div className="flex flex-col items-center border-b border-cyan-500/20 pb-6">
        <GenesisLogo size={96} />

        <h1 className="mt-3 text-center font-mono text-2xl font-bold tracking-[0.35em] text-cyan-300">
          GENESIS COMMAND
        </h1>

        <p className="mt-1 text-center font-mono text-[11px] tracking-[0.3em] text-cyan-500/60 uppercase">
          Genesis Organization Archive
        </p>
      </div>

      {/* Navigation */}
      <div className="flex-1 px-4 py-6">
        <h2 className="mb-5 font-mono text-sm tracking-[0.35em] text-cyan-300 uppercase">
          Genesis Modules
        </h2>

        <div className="space-y-1">
          {navigation.map((item) => (
            <SidebarItem
              key={item.id}
              active={activePage === item.id}
              label={item.label}
              onClick={() => setActivePage(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 border-t border-cyan-900/50 pt-6 font-mono text-xs">
        <p className="text-emerald-400">● ASTRA ONLINE</p>

        <p className="mt-3 text-cyan-600">Genesis Archive</p>

        <p className="text-cyan-500">v0.3.0</p>
      </div>
    </aside>
  );
}
