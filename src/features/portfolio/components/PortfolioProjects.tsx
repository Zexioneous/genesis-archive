"use client";

import { motion } from "framer-motion";

import portfolioData from "../data/portfolioData";

export default function PortfolioProjects() {
  return (
    <div className="space-y-8">
      <section>
        <p className="font-mono text-[9px] tracking-[0.4em] text-cyan-600 uppercase">
          Project Registry
        </p>

        <h2 className="mt-3 font-mono text-3xl tracking-[0.12em] text-cyan-200 uppercase">
          Projects
        </h2>

        <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-cyan-600">
          Selected creative, development, and world-building projects.
        </p>
      </section>

      <div className="grid gap-5">
        {portfolioData.projects.map((project, index) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.35,
              delay: index * 0.08,
            }}
            className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/30 md:p-8"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-cyan-700">
                  PROJECT {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mt-2 font-mono text-xl tracking-[0.08em] text-cyan-200 uppercase">
                  {project.title}
                </h3>
              </div>

              {"status" in project && project.status && (
                <span className="w-fit rounded border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-[9px] tracking-[0.2em] text-emerald-400 uppercase">
                  {project.status}
                </span>
              )}
            </div>

            <p className="mt-5 max-w-3xl font-mono text-sm leading-7 text-cyan-500">
              {project.description}
            </p>

            {"genre" in project && project.genre && (
              <div className="mt-5">
                <p className="font-mono text-[9px] tracking-[0.25em] text-cyan-700 uppercase">
                  Genre
                </p>

                <p className="mt-2 font-mono text-xs text-cyan-400">
                  {project.genre}
                </p>
              </div>
            )}

            {"platform" in project && project.platform && (
              <div className="mt-4">
                <p className="font-mono text-[9px] tracking-[0.25em] text-cyan-700 uppercase">
                  Platform
                </p>

                <p className="mt-2 font-mono text-xs text-cyan-400">
                  {project.platform}
                </p>
              </div>
            )}

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies?.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-cyan-500/10 bg-cyan-500/5 px-2 py-1 font-mono text-[9px] text-cyan-500"
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
