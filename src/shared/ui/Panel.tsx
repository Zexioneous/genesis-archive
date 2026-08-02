import clsx from "clsx";
import { ReactNode } from "react";

type PanelProps = {
  children: ReactNode;
  className?: string;
};

export default function Panel({ children, className }: PanelProps) {
  return (
    <div
      className={clsx(
        "rounded-x1",
        "border",
        "border-cyan-900/60",
        "bg-cyan-950/10",
        "backdrop-blur-md",
        "shadow-[0_0_30px_rgba(34,211,238,0.08)]",
        "transition-all",
        "duration-300",
        "hover :border-cyan-500/50",

        "hover :shadow-[0_0_40px_rgba(34,211,238,0.15)]",
        className,
      )}
    >
      {children}
    </div>
  );
}
