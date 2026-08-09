"use client";

import { motion } from "framer-motion";

import ElysiaMapViewer from "./ElysiaMapViewer";

type PlanetaryInspectionProps = {
  onClose: () => void;
};

export default function PlanetaryInspection({
  onClose,
}: PlanetaryInspectionProps) {
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
      {/* ARCHIVE ACTIVATION */}
      {/* ================================================== */}

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 0.35,
          duration: 0.7,
          ease: "easeInOut",
        }}
        className="pointer-events-none fixed inset-0 z-[100] flex items-center justify-center bg-black"
      >
        <div className="w-80 font-mono">
          <p className="text-[9px] tracking-[0.35em] text-cyan-600 uppercase">
            Genesis Planetary Archive
          </p>

          <div className="mt-4 h-px bg-cyan-300/10" />

          <div className="mt-5 space-y-2 text-[8px] tracking-[0.2em] uppercase">
            <SystemLine label="Target" value="ELYSIA-3" delay={0} />

            <SystemLine label="Surface Data" value="ONLINE" delay={0.06} />

            <SystemLine label="Orbital Data" value="ONLINE" delay={0.12} />

            <SystemLine label="Historical Data" value="ONLINE" delay={0.18} />
          </div>

          <div className="mt-5 h-px bg-cyan-300/10" />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.25,
            }}
            className="mt-4 text-[8px] tracking-[0.3em] text-emerald-400 uppercase"
          >
            Archive Ready
          </motion.p>
        </div>
      </motion.div>

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
          delay: 0.55,
          duration: 0.5,
          ease: "easeOut",
        }}
        className="sticky top-0 z-20 border-b border-cyan-300/10 bg-black/90 px-8 py-5 backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] tracking-[0.35em] text-cyan-600 uppercase">
              Genesis Planetary Archive
            </p>

            <h1 className="mt-1 font-mono text-xl tracking-[0.18em] text-cyan-200">
              ELYSIA-3
            </h1>
          </div>

          <div className="text-right">
            <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
              Database Status
            </p>

            <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-emerald-400 uppercase">
              ONLINE
            </p>
          </div>
        </div>
      </motion.header>

      {/* ================================================== */}
      {/* MAIN */}
      {/* ================================================== */}

      <main className="px-8 py-8">
        {/* ================================================== */}
        {/* TOP SECTION */}
        {/* ================================================== */}

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* ================================================== */}
          {/* MAP */}
          {/* ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: 10,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              delay: 0.65,
              duration: 0.65,
              ease: "easeOut",
            }}
            className="h-[420px] overflow-hidden border border-cyan-300/10 bg-[#03090d] lg:h-[520px]"
          >
            <ElysiaMapViewer />
          </motion.div>

          {/* ================================================== */}
          {/* PLANET DATA */}
          {/* ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="border border-cyan-300/10 bg-[#03090d]"
          >
            <div className="border-b border-cyan-300/10 px-5 py-4">
              <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
                Planetary Profile
              </p>

              <h2 className="mt-2 font-mono text-2xl tracking-[0.12em] text-cyan-200">
                ELYSIA-3
              </h2>

              <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase">
                Primary Planetary Body
              </p>
            </div>

            <div className="space-y-4 p-5">
              <DataRow
                label="Status"
                value="NOMINAL"
                valueClass="text-emerald-400"
              />

              <DataRow label="Classification" value="TERRESTRIAL PLANET" />

              <DataRow label="Atmosphere" value="STABLE" />

              <DataRow label="Orbital System" value="ELYSIA" />

              <DataRow label="Observation" value="ACTIVE" />

              <div className="my-5 h-px bg-cyan-300/10" />

              <div>
                <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
                  Planetary Profile
                </p>

                <p className="mt-3 font-mono text-[10px] leading-6 text-cyan-100/60">
                  Elysia-3 serves as the primary planetary body within the
                  Elysia orbital system. Genesis observation arrays maintain
                  continuous monitoring of the planet, atmosphere, and
                  surrounding orbital environment.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ================================================== */}
        {/* HISTORICAL ARCHIVE */}
        {/* ================================================== */}

        <motion.section
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.05,
            duration: 0.65,
            ease: "easeOut",
          }}
          className="mt-8 border border-cyan-300/10 bg-[#03090d]"
        >
          <div className="border-b border-cyan-300/10 px-5 py-4">
            <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
              Historical Archive
            </p>

            <h2 className="mt-2 font-mono text-lg tracking-[0.15em] text-cyan-200">
              ELYSIA-3 RECORD
            </h2>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-2">
            <StorySection
              title="Origin"
              text="The history of Elysia-3 begins here. This section will contain the established origin story of the planet, its formation, and the earliest known records."
            />

            <StorySection
              title="Discovery"
              text="This section will document the discovery of Elysia-3 and the first observations made by the Genesis program."
            />

            <StorySection
              title="Genesis Program"
              text="Genesis observation arrays were established to study Elysia-3 and its surrounding orbital system. The program continues to monitor planetary conditions and orbital bodies."
            />

            <StorySection
              title="The Elysia System"
              text="Elysia-3 is accompanied by its orbital bodies, including Selene and Nyx. Their relationships, orbital characteristics, and historical significance will be documented here."
            />
          </div>

          <div className="border-t border-cyan-300/10 px-6 py-6">
            <StorySection
              title="Current Observation"
              text="Genesis systems currently maintain an active observation lock on Elysia-3. Additional records will be added as new observations become available."
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
            delay: 1.35,
            duration: 0.5,
          }}
          className="flex justify-center py-10"
        >
          <button
            type="button"
            onClick={onClose}
            className="border border-cyan-300/20 px-8 py-3 font-mono text-[9px] tracking-[0.25em] text-cyan-400 uppercase transition hover:border-cyan-300/50 hover:bg-cyan-300/5"
          >
            Return to Orbit
          </button>
        </motion.div>
      </main>
    </motion.div>
  );
}

/* ====================================================== */
/* SYSTEM LINE */
/* ====================================================== */

type SystemLineProps = {
  label: string;
  value: string;
  delay: number;
};

function SystemLine({ label, value, delay }: SystemLineProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -8,
      }}
      animate={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        delay: 0.15 + delay,
        duration: 0.25,
      }}
      className="flex justify-between"
    >
      <span className="text-cyan-700">{label}</span>

      <span
        className={value === "ONLINE" ? "text-emerald-400" : "text-cyan-300"}
      >
        {value}
      </span>
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
