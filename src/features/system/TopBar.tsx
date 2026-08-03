"use client";

import StatusBadge from "@/shared/ui/StatusBadge";

import { useSystemClock } from "./useSystemClock";

export default function TopBar() {
  const now = useSystemClock();

  const date = now.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-GB", {
    hour12: false,
  });

  return (
    <header className="border-b border-cyan-800/60 bg-gradient-to-b from-cyan-950/40 to-[#071019]/90 shadow-[0_0_30px_rgba(34,211,238,0.08)] backdrop-blur-md">
      {/* Top Row */}
      <div className="flex items-center justify-between px-6 py-3">
        <div>
          <h1 className="font-mono text-base font-bold tracking-[0.35em] text-cyan-300 uppercase">
            Genesis Command
          </h1>

          <p className="mt-1 font-mono text-xs text-cyan-600">
            Genesis Organization Archive
          </p>
        </div>

        <div className="text-right font-mono">
          <p className="text-xs tracking-widest text-cyan-500 uppercase">
            Local Terminal
          </p>

          <p className="mt-1 text-xs text-cyan-500">{date}</p>

          <p className="text-xl font-semibold tracking-wider text-cyan-200">
            {time}
          </p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex items-center gap-4 border-t border-cyan-900/40 px-6 py-3">
        <StatusBadge label="ASTRA" status="ONLINE" color="green" />

        <StatusBadge label="ARCHIVE" status="VERIFIED" color="cyan" />

        <StatusBadge label="RELAY" status="STABLE" color="yellow" />

        <StatusBadge label="STATUS" status="ALPHA" color="cyan" />
      </div>
    </header>
  );
}
