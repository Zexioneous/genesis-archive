"use client";

import { AnimatePresence, motion } from "framer-motion";
import PortfolioDossier from "./PortfolioDossier";
import type { PortfolioPage } from "./PortfolioSystem";
import PortfolioTopBar from "./PortfolioTopBar";

import PortfolioAbout from "./PortfolioAbout";
import PortfolioContact from "./PortfolioContact";
import PortfolioExperience from "./PortfolioExperience";
import PortfolioProjects from "./PortfolioProjects";
import PortfolioSkills from "./PortfolioSkills";

type PortfolioWorkspaceProps = {
  activePage: PortfolioPage;
};

export default function PortfolioWorkspace({
  activePage,
}: PortfolioWorkspaceProps) {
  return (
    <div className="relative flex h-full flex-col overflow-hidden">
      <PortfolioTopBar />

      {/* Content */}
      <div className="relative min-h-0 flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -12,
            }}
            transition={{
              duration: 0.2,
            }}
            className="min-h-full p-6 md:p-10"
          >
            <PortfolioPageContent page={activePage} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

function PortfolioPageContent({ page }: { page: PortfolioPage }) {
  switch (page) {
    case "profile":
      return <PortfolioDossier />;

    case "about":
      return <PortfolioAbout />;

    case "projects":
      return <PortfolioProjects />;

    case "skills":
      return <PortfolioSkills />;

    case "experience":
      return <PortfolioExperience />;

    case "contact":
      return <PortfolioContact />;

    default:
      return null;
  }
}
