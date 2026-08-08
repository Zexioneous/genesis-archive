"use client";

import { ReactNode } from "react";

type ObservationDeckProps = {
  children: ReactNode;
};

export default function ObservationDeck({ children }: ObservationDeckProps) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-[#02050a]">
      {/* Deep-space viewing area */}
      <div className="absolute inset-0">{children}</div>

      {/* Left structural frame */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-12 border-r border-cyan-300/10 bg-linear-to-r from-[#071017] via-[#071017]/80 to-transparent" />

      {/* Right structural frame */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-12 border-l border-cyan-300/10 bg-linear-to-l from-[#071017] via-[#071017]/80 to-transparent" />

      {/* Top spacecraft frame */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 h-16 border-b border-cyan-300/10 bg-linear-to-b from-[#071017] to-transparent" />

      {/* Bottom spacecraft console */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-24 border-t border-cyan-300/10 bg-linear-to-t from-[#071017] via-[#071017]/95 to-transparent" />

      {/* Observation label */}
      <div className="pointer-events-none absolute top-6 left-8 z-30">
        <p className="font-mono text-[10px] tracking-[0.35em] text-cyan-500 uppercase">
          Genesis Observation Deck
        </p>

        <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-cyan-700 uppercase">
          External Visual Array // Online
        </p>
      </div>

      {/* Bottom status console */}
      <div className="pointer-events-none absolute right-8 bottom-5 left-8 z-30 flex items-end justify-between">
        <div>
          <p className="font-mono text-[9px] tracking-[0.3em] text-cyan-700 uppercase">
            Observation Target
          </p>

          <p className="mt-1 font-mono text-sm tracking-[0.2em] text-cyan-300">
            ELYSIA-3
          </p>
        </div>

        <div className="flex gap-8 text-right font-mono">
          <div>
            <p className="text-[8px] tracking-widest text-cyan-700 uppercase">
              Camera
            </p>
            <p className="mt-1 text-[10px] text-cyan-400">ACTIVE</p>
          </div>

          <div>
            <p className="text-[8px] tracking-widest text-cyan-700 uppercase">
              Tracking
            </p>
            <p className="mt-1 text-[10px] text-emerald-400">LOCKED</p>
          </div>
        </div>
      </div>
    </div>
  );
}
