"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type SeleneInspectionProps = {
  onClose: () => void;
};

export default function SeleneInspection({ onClose }: SeleneInspectionProps) {
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
          delay: 0.2,
          duration: 0.5,
        }}
        className="sticky top-0 z-20 border-b border-cyan-300/10 bg-black/90 px-8 py-5 backdrop-blur-md"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="font-mono text-[9px] tracking-[0.35em] text-cyan-600 uppercase">
              Genesis Orbital Archive
            </p>

            <h1 className="mt-1 font-mono text-xl tracking-[0.18em] text-cyan-200">
              SELENE
            </h1>

            <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase">
              Primary Satellite // Elysia-3
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
              Orbital Status
            </p>

            <p className="mt-1 font-mono text-[9px] tracking-[0.2em] text-emerald-400 uppercase">
              STABLE
            </p>
          </div>
        </div>
      </motion.header>

      <main className="px-8 py-8">
        {/* ================================================== */}
        {/* TOP SECTION */}
        {/* ================================================== */}

        <section className="grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* ================================================== */}
          {/* SELENE MAP */}
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
              delay: 0.35,
              duration: 0.6,
            }}
            className="relative min-h-[360px] overflow-hidden border border-cyan-300/10 bg-[#03090d]"
          >
            {/* Background glow */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]" />

            {/* Technical grid */}

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

            {/* Map */}

            <div className="relative flex h-full min-h-[360px] items-center justify-center p-6">
              <div className="relative w-full overflow-hidden border border-cyan-300/10">
                <Image
                  src="/textures/planets/selene/map.png"
                  alt="Selene surface map"
                  width={1774}
                  height={887}
                  priority
                  className="h-auto w-full object-contain"
                />

                {/* Map overlay */}

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.35)_100%)]" />

                <div className="pointer-events-none absolute inset-0 border border-cyan-300/10" />
              </div>
            </div>

            {/* Map label */}

            <div className="pointer-events-none absolute top-4 left-4">
              <p className="font-mono text-[7px] tracking-[0.2em] text-cyan-500/80 uppercase">
                SELENE SURFACE MAP
              </p>

              <p className="mt-1 font-mono text-[6px] tracking-[0.18em] text-cyan-700 uppercase">
                EQUIRECTANGULAR ARCHIVE
              </p>
            </div>

            {/* Map status */}

            <div className="pointer-events-none absolute right-4 bottom-4 text-right">
              <p className="font-mono text-[7px] tracking-[0.2em] text-cyan-600/80 uppercase">
                CARTOGRAPHIC DATA
              </p>

              <p className="mt-1 font-mono text-[7px] tracking-[0.18em] text-emerald-400/80 uppercase">
                AVAILABLE
              </p>
            </div>
          </motion.div>

          {/* ================================================== */}
          {/* DATA PANEL */}
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
              delay: 0.5,
              duration: 0.55,
            }}
            className="border border-cyan-300/10 bg-[#03090d]"
          >
            {/* Panel heading */}

            <div className="border-b border-cyan-300/10 px-5 py-4">
              <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
                Satellite Profile
              </p>

              <h2 className="mt-2 font-mono text-2xl tracking-[0.12em] text-cyan-200">
                SELENE
              </h2>

              <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase">
                Primary Satellite of Elysia-3
              </p>
            </div>

            {/* Data */}

            <div className="space-y-4 p-5">
              <DataRow
                label="Status"
                value="NOMINAL"
                valueClass="text-emerald-400"
              />

              <DataRow label="Classification" value="NATURAL SATELLITE" />

              <DataRow label="Primary" value="ELYSIA-3" />

              <DataRow label="Orbital State" value="STABLE" />

              <DataRow
                label="Survey Status"
                value="ACTIVE"
                valueClass="text-emerald-400"
              />

              <div className="my-5 h-px bg-cyan-300/10" />

              <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-700 uppercase">
                Description
              </p>

              <p className="mt-3 font-mono text-[10px] leading-6 text-cyan-100/60">
                Selene is the primary natural satellite of Elysia-3. Genesis
                observation arrays maintain continuous tracking of its orbital
                position, surface conditions, and relationship with the
                planetary body.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ================================================== */}
        {/* ORBITAL DATA */}
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
            delay: 0.7,
            duration: 0.6,
          }}
          className="mt-8 border border-cyan-300/10 bg-[#03090d]"
        >
          <div className="border-b border-cyan-300/10 px-5 py-4">
            <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
              Orbital Telemetry
            </p>

            <h2 className="mt-2 font-mono text-lg tracking-[0.15em] text-cyan-200">
              ORBITAL PROFILE
            </h2>
          </div>

          <div className="grid gap-px bg-cyan-300/10 sm:grid-cols-2 lg:grid-cols-4">
            <TelemetryCard label="Primary Body" value="ELYSIA-3" />

            <TelemetryCard label="Orbital State" value="STABLE" />

            <TelemetryCard label="Tracking" value="LOCKED" />

            <TelemetryCard label="Survey" value="ACTIVE" />
          </div>
        </motion.section>

        {/* ================================================== */}
        {/* LORE / ARCHIVE */}
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
            delay: 0.85,
            duration: 0.6,
          }}
          className="mt-8 border border-cyan-300/10 bg-[#03090d]"
        >
          <div className="border-b border-cyan-300/10 px-5 py-4">
            <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
              Orbital Archive
            </p>

            <h2 className="mt-2 font-mono text-lg tracking-[0.15em] text-cyan-200">
              SELENE RECORD
            </h2>
          </div>

          <div className="grid gap-8 p-6 lg:grid-cols-2">
            <StorySection
              title="Origin"
              text="The established origin record for Selene will be documented here, including its formation and earliest known presence within the Elysia system."
            />

            <StorySection
              title="Discovery"
              text="Genesis survey records will document the first confirmed observation of Selene and the initial orbital analysis performed by the observation arrays."
            />

            <StorySection
              title="Relationship With Elysia"
              text="Selene maintains a persistent orbital relationship with Elysia-3. Its movement provides an important reference point for understanding the wider Elysia orbital system."
            />

            <StorySection
              title="Nyx"
              text="A secondary body known as Nyx is associated with Selene. Further records concerning their orbital relationship will be added to the Genesis archive."
            />
          </div>
        </motion.section>

        {/* ================================================== */}
        {/* RETURN BUTTON */}
        {/* ================================================== */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.05,
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
/* TELEMETRY CARD */
/* ====================================================== */

type TelemetryCardProps = {
  label: string;
  value: string;
};

function TelemetryCard({ label, value }: TelemetryCardProps) {
  return (
    <div className="bg-[#03090d] p-5">
      <p className="font-mono text-[8px] tracking-[0.18em] text-cyan-700 uppercase">
        {label}
      </p>

      <p className="mt-2 font-mono text-[10px] tracking-[0.15em] text-cyan-300 uppercase">
        {value}
      </p>
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
