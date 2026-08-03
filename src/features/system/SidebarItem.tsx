"use client";

import clsx from "clsx";

type SidebarItemProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

export default function SidebarItem({
  active,
  label,
  onClick,
}: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-mono transition-all duration-200",
        active
          ? "bg-cyan-500/10 text-cyan-300"
          : "text-cyan-600 hover:bg-cyan-500/5 hover:text-cyan-300",
      )}
    >
      <span
        className={clsx(
          "transition-opacity",
          active ? "opacity-100" : "opacity-0",
        )}
      >
        ▶
      </span>

      <span>{label}</span>
    </button>
  );
}
