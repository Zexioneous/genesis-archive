"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import portfolioData from "../data/portfolioData";

export default function PortfolioHome() {
  const { identity, profile, projects, skills, languages } = portfolioData;

  return (
    <section className="relative h-full overflow-y-auto">
      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-14">
        {/* ==================================================
            HEADER
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-[10px] tracking-[0.35em] text-cyan-600 uppercase">
            Personal Archive
          </p>

          <h1 className="mt-4 font-mono text-4xl font-semibold tracking-[0.08em] text-cyan-200 md:text-6xl">
            {identity.displayName}
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
            {identity.role.map((role) => (
              <span
                key={role}
                className="font-mono text-xs tracking-[0.15em] text-cyan-500/80 uppercase"
              >
                {role}
              </span>
            ))}
          </div>

          <div className="mt-8 h-px w-full bg-cyan-500/15" />
        </motion.div>

        {/* ==================================================
            IDENTITY / INTRO
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mt-10 grid gap-6 md:grid-cols-[1fr_280px]"
        >
          {/* Bio */}

          <div className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl">
            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-600 uppercase">
              Identity Brief
            </p>

            <p className="mt-5 font-mono text-sm leading-8 text-cyan-100/80">
              {profile.bio}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-md border border-cyan-500/10 bg-cyan-500/5 px-3 py-1.5 font-mono text-[9px] tracking-[0.12em] text-cyan-500 uppercase"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Registry Status */}

          <div className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl">
            <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-600 uppercase">
              Registry Status
            </p>

            <div className="mt-5 space-y-4 font-mono text-xs">
              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">ID</span>

                <span className="text-cyan-200">{identity.portfolioId}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">LOCATION</span>

                <span className="text-cyan-200">{identity.location}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">STATUS</span>

                <span className="text-emerald-400">{identity.status}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">AVAILABILITY</span>

                <span className="max-w-37.5 text-right text-cyan-300">
                  {identity.availability}
                </span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">PROJECTS</span>

                <span className="text-cyan-200">{projects.length}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">SKILLS</span>

                <span className="text-cyan-200">{skills.length}</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="text-cyan-600">LANGUAGES</span>

                <span className="text-cyan-200">{languages.length}</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            PROFILE SNAPSHOT
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="mt-10"
        >
          <div className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-lg border border-cyan-700/60 bg-cyan-950/20">
                <Image
                  src={identity.image}
                  alt={identity.displayName}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <p className="font-mono text-[9px] tracking-[0.3em] text-cyan-600 uppercase">
                  Public Identity
                </p>

                <h2 className="mt-2 font-mono text-2xl tracking-widest text-cyan-200 uppercase">
                  {identity.displayName}
                </h2>

                <p className="mt-2 font-mono text-xs leading-6 text-cyan-600">
                  Portfolio Registry · {identity.portfolioId}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ==================================================
            FEATURED PROJECTS
            ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10"
        >
          <div className="mb-5 flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-cyan-600 uppercase">
                Selected Projects
              </p>

              <h2 className="mt-2 font-mono text-xl tracking-[0.08em] text-cyan-200">
                PROJECT ARCHIVE
              </h2>
            </div>

            <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-700 uppercase">
              {projects.length} entries
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {projects.slice(0, 4).map((project, index) => {
              const tags: string[] =
                "technologies" in project
                  ? (project.technologies ?? [])
                  : project.genre
                    ? [project.genre]
                    : [];

              return (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.35 + index * 0.08,
                    duration: 0.5,
                  }}
                  className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-2 font-mono text-[9px] tracking-[0.2em] text-cyan-700 uppercase">
                        {project.type}
                      </p>

                      <h3 className="font-mono text-base text-cyan-200">
                        {project.title}
                      </h3>
                    </div>

                    <span className="font-mono text-[9px] text-cyan-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <p className="mt-3 font-mono text-xs leading-6 text-cyan-600">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-cyan-500/10 bg-cyan-500/5 px-2 py-1 font-mono text-[9px] text-cyan-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-cyan-500/10 pt-4">
                    <span className="font-mono text-[9px] tracking-[0.15em] text-cyan-700 uppercase">
                      {project.platform}
                    </span>

                    <span className="font-mono text-[9px] tracking-[0.15em] text-emerald-500 uppercase">
                      {project.status}
                    </span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
