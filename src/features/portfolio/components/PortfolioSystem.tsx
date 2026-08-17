"use client";

import { useState } from "react";

import PortfolioSidebar from "./PortfolioSidebar";
import PortfolioWorkspace from "./PortfolioWorkspace";

export type PortfolioPage =
  "profile" | "about" | "projects" | "skills" | "experience" | "contact";

type PortfolioSystemProps = {
  onReturnToGateway: () => void;
};

export default function PortfolioSystem({
  onReturnToGateway,
}: PortfolioSystemProps) {
  const [activePage, setActivePage] = useState<PortfolioPage>("profile");

  return (
    <main className="relative flex h-screen overflow-hidden bg-[#02070b] text-cyan-400">
      {/* ==================================================
          SIDEBAR
          ================================================== */}

      <PortfolioSidebar
        activePage={activePage}
        onSelect={setActivePage}
        onReturnToGateway={onReturnToGateway}
      />

      {/* ==================================================
          WORKSPACE
          ================================================== */}

      <section className="min-w-0 flex-1">
        <PortfolioWorkspace activePage={activePage} />
      </section>
    </main>
  );
}
