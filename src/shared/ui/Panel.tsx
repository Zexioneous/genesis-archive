import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export default function Panel({ children, className = "" }: PanelProps) {
  return (
    <div
      className={`rounded-xl border border-cyan-900/60 bg-cyan-950/10 shadow-[0_0_30px_rgba(0,255,255,0.05)] backdrop-blur-md transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(0,255,255,0.12)] ${className} `}
    >
      {children}
    </div>
  );
}
