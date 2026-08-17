"use client";

import { motion } from "framer-motion";
import type { PortfolioPage } from "./PortfolioSystem";

type PortfolioSidebarProps = {
  activePage: PortfolioPage;
  onSelect: (page: PortfolioPage) => void;
  onReturnToGateway: () => void;
};

const navigation: {
  id: PortfolioPage;
  label: string;
  description: string;
}[] = [
  {
    id: "profile",
    label: "PROFILE",
    description: "Identity and personal overview",
  },
  {
    id: "about",
    label: "ABOUT",
    description: "Background and introduction",
  },
  {
    id: "projects",
    label: "PROJECTS",
    description: "Selected work and creations",
  },
  {
    id: "skills",
    label: "SKILLS",
    description: "Technical capabilities",
  },
  {
    id: "experience",
    label: "EXPERIENCE",
    description: "Experience and development",
  },
  {
    id: "contact",
    label: "CONTACT",
    description: "Communication channels",
  },
];

export default function PortfolioSidebar({
  activePage,
  onSelect,
  onReturnToGateway,
}: PortfolioSidebarProps) {
  return (
    <aside className="flex w-64 shrink-0 flex-col border-r border-cyan-500/15 bg-[#030a10]/90">
      {/* Identity */}
      <div className="border-b border-cyan-500/15 px-6 py-6">
        <p className="font-mono text-[9px] tracking-[0.4em] text-cyan-600 uppercase">
          Personal Archive
        </p>

        <h1 className="mt-2 font-mono text-lg tracking-[0.18em] text-cyan-200">
          PORTFOLIO
        </h1>

        <p className="mt-2 font-mono text-[9px] leading-relaxed text-cyan-700">
          Individual identity registry
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-3">
        {navigation.map((item) => {
          const selected = activePage === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelect(item.id)}
              className="relative w-full text-left"
            >
              {selected && (
                <motion.div
                  layoutId="portfolio-active"
                  className="absolute inset-0 rounded-lg bg-cyan-500/10"
                  transition={{
                    duration: 0.2,
                  }}
                />
              )}

              <div
                className={`relative rounded-lg px-4 py-3 transition ${
                  selected
                    ? "border border-cyan-400/20"
                    : "border border-transparent hover:bg-cyan-500/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      selected
                        ? "bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.9)]"
                        : "bg-cyan-900"
                    }`}
                  />

                  <span
                    className={`font-mono text-xs tracking-[0.18em] ${
                      selected ? "text-cyan-200" : "text-cyan-600"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>

                <p className="mt-1 pl-4.5 font-mono text-[8px] leading-relaxed text-cyan-700">
                  {item.description}
                </p>
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-cyan-500/15 px-4 py-4">
        <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
          Portfolio Registry
        </p>

        <p className="mt-2 font-mono text-[8px] text-cyan-800">
          STATUS · ONLINE
        </p>

        <button
          type="button"
          onClick={onReturnToGateway}
          className="mt-4 w-full border border-cyan-500/10 px-3 py-2 text-left font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase transition hover:border-cyan-400/30 hover:bg-cyan-500/5 hover:text-cyan-300"
        >
          ← Return to Gateway
        </button>
      </div>
    </aside>
  );
}
