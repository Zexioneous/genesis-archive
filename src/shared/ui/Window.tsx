import { ReactNode } from "react";

type WindowProps = {
  title: string;
  children: ReactNode;
};

export default function Window({ title, children }: WindowProps) {
  return (
    <div className="rounded-x1 'shadow-[0_-_30px_rgba(34,211,238,0.08)]' overflow-hidden border border-cyan-900/70 bg-[#071019]/80">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-cyan-900/70 bg-cyan-950/20 px-6 py-3">
        <h2 className="font-mono text-sm tracking-[0.25em] text-cyan-300 uppercase">
          {title}
        </h2>
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-emerald-400/70" />

          <div className="h-3 w-3 rounded-full bg-yellow-400/70" />

          <div className="h-3 w-3 rounded-full bg-red-400/70" />
        </div>
      </div>

      {/* Body */}
      <div className="p-8">{children}</div>
    </div>
  );
}
