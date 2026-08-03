"use client";

import { useSystemClock } from "../hooks/useSystemClock";

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
    <header className="flex h-16 items-center justify-between border-b border-cyan-900/60 bg-cyan-950/20 px-6">
      {/* Left */}
      <div>
        <h1 className="font-mono text-sm tracking-[0.3em] text-cyan-300 uppercase">
          Genesis Command
        </h1>

        <p className="font-mono text-xs text-cyan-600">
          Genesis Organization Archive
        </p>
      </div>

      {/* Right */}
      <div className="text-right font-mono">
        <p className="text-xs text-emerald-400">● ASTRA ONLINE</p>

        <p className="text-xs text-cyan-500">{date}</p>

        <p className="text-sm text-cyan-200">{time}</p>
      </div>
    </header>
  );
}
