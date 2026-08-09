"use client";

import { motion } from "framer-motion";

import GenesisStationViewer from "./GenesisStationViewer";

type GenesisStationInspectionProps = {
  onClose: () => void;
};

export default function GenesisStationInspection({
  onClose,
}: GenesisStationInspectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="absolute inset-0 z-50 overflow-y-auto bg-black text-cyan-100"
    >
      {/* ================================================== */}
      {/* HEADER */}
      {/* ================================================== */}

      <motion.header
        initial={{
          opacity: 0,
          y: -18,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.15,
          duration: 0.5,
        }}
        className="sticky top-0 z-30 border-b border-cyan-300/10 bg-black/90 px-8 py-5 backdrop-blur-md"
      >
        <div className="flex items-center justify-between gap-6">
          <div>
            <p className="font-mono text-[9px] tracking-[0.35em] text-cyan-600 uppercase">
              Genesis Orbital Archive
            </p>

            <h1 className="mt-1 font-mono text-xl tracking-[0.16em] text-cyan-200">
              GENESIS STATION
            </h1>

            <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase">
              Orbital Observation & Habitat Platform
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
              Station Status
            </p>

            <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-emerald-400 uppercase">
              NOMINAL
            </p>
          </div>
        </div>
      </motion.header>

      <main className="px-8 py-8">
        {/* ================================================== */}
        {/* MAIN INSPECTION AREA */}
        {/* ================================================== */}

        <section className="grid grid-cols-1 gap-6 xl:grid-cols-[1.35fr_0.65fr]">
          {/* ================================================== */}
          {/* 3D MODEL */}
          {/* ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.6,
            }}
            className="relative h-[520px] overflow-hidden border border-cyan-300/10 bg-[#02070a]"
          >
            <GenesisStationViewer />

            {/* Corner brackets */}

            <div className="pointer-events-none absolute top-3 left-3 h-5 w-5 border-t border-l border-cyan-300/20" />

            <div className="pointer-events-none absolute top-3 right-3 h-5 w-5 border-t border-r border-cyan-300/20" />

            <div className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b border-l border-cyan-300/20" />

            <div className="pointer-events-none absolute right-3 bottom-3 h-5 w-5 border-r border-b border-cyan-300/20" />

            {/* Model title */}

            <div className="pointer-events-none absolute top-5 left-5">
              <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-500/80 uppercase">
                GENESIS STATION // 3D INSPECTION
              </p>

              <p className="mt-1 font-mono text-[6px] tracking-[0.2em] text-cyan-700 uppercase">
                STATIC TECHNICAL MODEL
              </p>
            </div>

            {/* Model status */}

            <div className="pointer-events-none absolute top-5 right-5 text-right">
              <p className="font-mono text-[7px] tracking-[0.2em] text-cyan-600 uppercase">
                MODEL
              </p>

              <p className="mt-1 font-mono text-[8px] tracking-[0.18em] text-emerald-400 uppercase">
                ONLINE
              </p>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* STATION DATA */}
          {/* ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.45,
              duration: 0.55,
            }}
            className="border border-cyan-300/10 bg-[#03090d]"
          >
            <div className="border-b border-cyan-300/10 px-5 py-4">
              <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
                Station Profile
              </p>

              <h2 className="mt-2 font-mono text-2xl tracking-[0.1em] text-cyan-200">
                GENESIS
              </h2>

              <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase">
                Orbital Station
              </p>
            </div>

            <div className="space-y-4 p-5">
              <DataRow
                label="Status"
                value="NOMINAL"
                valueClass="text-emerald-400"
              />

              <DataRow label="Classification" value="ORBITAL STATION" />

              <DataRow label="Primary Role" value="OBSERVATION" />

              <DataRow
                label="Habitat"
                value="ONLINE"
                valueClass="text-emerald-400"
              />

              <DataRow
                label="Power"
                value="NOMINAL"
                valueClass="text-emerald-400"
              />

              <DataRow
                label="Beacon"
                value="ACTIVE"
                valueClass="text-cyan-300"
              />

              <div className="my-5 h-px bg-cyan-300/10" />

              <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
                Description
              </p>

              <p className="mt-3 font-mono text-[10px] leading-6 text-cyan-100/60">
                Genesis Station serves as an orbital observation and habitation
                platform within the Elysia system. The station provides a
                persistent observation platform for monitoring Elysia-3, its
                satellites, and surrounding orbital space.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================================================== */}
        {/* SYSTEMS */}
        {/* ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.65,
            duration: 0.6,
          }}
          className="mt-8 border border-cyan-300/10 bg-[#03090d]"
        >
          <div className="border-b border-cyan-300/10 px-5 py-4">
            <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
              Station Architecture
            </p>

            <h2 className="mt-2 font-mono text-lg tracking-[0.15em] text-cyan-200">
              SYSTEM STATUS
            </h2>
          </div>

          <div className="grid gap-px bg-cyan-300/10 sm:grid-cols-2 lg:grid-cols-4">
            <SystemCard label="Observation Core" status="ONLINE" />

            <SystemCard label="Habitat Ring" status="ONLINE" />

            <SystemCard label="Solar Array" status="ONLINE" />

            <SystemCard label="Navigation Beacon" status="ACTIVE" />
          </div>
        </motion.section>

        {/* ================================================== */}
        {/* TECHNICAL DATA */}
        {/* ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
          className="mt-8 border border-cyan-300/10 bg-[#03090d]"
        >
          <div className="border-b border-cyan-300/10 px-5 py-4">
            <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
              Technical Archive
            </p>

            <h2 className="mt-2 font-mono text-lg tracking-[0.15em] text-cyan-200">
              STATION RECORD
            </h2>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-2">
            <StorySection
              title="Construction"
              text="Genesis Station was constructed as a persistent orbital platform designed to support long-duration observation and habitation operations within the Elysia system."
            />

            <StorySection
              title="Observation Mission"
              text="The station's primary operational purpose is continuous observation. Its sensor systems monitor Elysia-3, Selene, Nyx, and the surrounding orbital environment."
            />

            <StorySection
              title="Habitat Systems"
              text="Integrated habitat systems allow personnel and long-duration missions to remain in orbit without relying entirely on planetary infrastructure."
            />

            <StorySection
              title="Solar Infrastructure"
              text="External solar arrays provide the station with a persistent power source while the station maintains its orbital observation position."
            />

            <StorySection
              title="Navigation Beacon"
              text="The station's beacon provides identification and navigation assistance for nearby orbital traffic and Genesis system operations."
            />

            <StorySection
              title="Current Record"
              text="Genesis Station is currently operating within nominal parameters. Observation systems remain online and the station maintains active orbital tracking."
            />
          </div>
        </motion.section>

        {/* ================================================== */}
        {/* RETURN */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
          className="flex justify-center py-10"
        >
          <button
            type="button"
            onClick={onClose}
            className="border border-cyan-300/20 px-8 py-3 font-mono text-[9px] tracking-[0.25em] text-cyan-400 uppercase transition hover:border-cyan-300/50 hover:bg-cyan-300/5 hover:text-cyan-200"
          >
            Return to Orbit
          </button>
        </motion.div>
      </main>
    </motion.div>
  );
}

/* ====================================================== */
/* DATA ROW */
/* ====================================================== */

type DataRowProps = {
  label: string;
  value: string;
  valueClass?: string;
};

function DataRow({ label, value, valueClass = "text-cyan-300" }: DataRowProps) {
  return (
    <div className="flex items-center justify-between border-b border-cyan-300/5 pb-3">
      <span className="font-mono text-[8px] tracking-[0.15em] text-cyan-700 uppercase">
        {label}
      </span>

      <span
        className={`font-mono text-[9px] tracking-[0.12em] uppercase ${valueClass}`}
      >
        {value}
      </span>
    </div>
  );
}

/* ====================================================== */
/* SYSTEM CARD */
/* ====================================================== */

type SystemCardProps = {
  label: string;
  status: string;
};

function SystemCard({ label, status }: SystemCardProps) {
  return (
    <div className="bg-[#03090d] p-5">
      <p className="font-mono text-[8px] tracking-[0.18em] text-cyan-700 uppercase">
        {label}
      </p>

      <div className="mt-3 flex items-center gap-2">
        <div className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)]" />

        <p className="font-mono text-[9px] tracking-[0.15em] text-emerald-400 uppercase">
          {status}
        </p>
      </div>
    </div>
  );
}

/* ====================================================== */
/* STORY SECTION */
/* ====================================================== */

type StorySectionProps = {
  title: string;
  text: string;
};

function StorySection({ title, text }: StorySectionProps) {
  return (
    <article>
      <h3 className="font-mono text-[9px] tracking-[0.25em] text-cyan-500 uppercase">
        {title}
      </h3>

      <p className="mt-3 font-mono text-[10px] leading-6 text-cyan-100/55">
        {text}
      </p>
    </article>
  );
}
