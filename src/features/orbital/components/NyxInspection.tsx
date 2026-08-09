"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type NyxInspectionProps = {
  onClose: () => void;
};

export default function NyxInspection({ onClose }: NyxInspectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="absolute inset-0 z-50 overflow-y-auto bg-black"
    >
      <div className="min-h-full p-8">
        {/* Header */}

        <div className="flex items-start justify-between border-b border-cyan-300/10 pb-5">
          <div>
            <p className="font-mono text-[8px] tracking-[0.3em] text-cyan-600 uppercase">
              Orbital Archive
            </p>

            <h1 className="mt-2 font-mono text-2xl tracking-[0.15em] text-cyan-200">
              NYX
            </h1>

            <p className="mt-1 font-mono text-[8px] tracking-[0.2em] text-cyan-700 uppercase">
              Secondary Orbital Body
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="border border-cyan-300/20 px-4 py-2 font-mono text-[8px] tracking-[0.2em] text-cyan-400 uppercase transition hover:border-cyan-300/40 hover:bg-cyan-300/5"
          >
            Return to Orbit
          </button>
        </div>

        {/* Map */}

        <div className="mt-6 border border-cyan-300/10 bg-[#02070a]">
          <div className="relative aspect-[2/1] w-full overflow-hidden">
            <Image
              src="/textures/planets/nyx/map.png"
              alt="Selene surface map"
              width={1774}
              height={887}
              priority
              className="h-auto w-full object-contain"
            />

            <div className="pointer-events-none absolute top-4 left-4">
              <p className="font-mono text-[7px] tracking-[0.25em] text-cyan-500 uppercase">
                NYX // SURFACE MAP
              </p>
            </div>
          </div>
        </div>

        {/* Basic information */}

        <div className="mt-6 border border-cyan-300/10 bg-[#03090d] p-6">
          <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-600 uppercase">
            Planetary Profile
          </p>

          <h2 className="mt-2 font-mono text-lg tracking-[0.12em] text-cyan-200">
            NYX
          </h2>

          <div className="my-5 h-px bg-cyan-300/10" />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <InfoBlock
              label="Status"
              value="NOMINAL"
              valueClass="text-emerald-400"
            />

            <InfoBlock label="Classification" value="SATELLITE" />

            <InfoBlock label="System" value="ELYSIA" />

            <InfoBlock label="Observation" value="ACTIVE" />
          </div>
        </div>

        {/* Description */}

        <div className="mt-6 border border-cyan-300/10 bg-[#03090d] p-6">
          <p className="font-mono text-[8px] tracking-[0.25em] text-cyan-600 uppercase">
            Description
          </p>

          <p className="mt-3 max-w-4xl font-mono text-[10px] leading-6 text-cyan-100/60">
            Nyx is a secondary orbital body within the Elysia system. Genesis
            observation systems maintain continuous tracking of its orbital
            position and surface characteristics.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

type InfoBlockProps = {
  label: string;
  value: string;
  valueClass?: string;
};

function InfoBlock({
  label,
  value,
  valueClass = "text-cyan-300",
}: InfoBlockProps) {
  return (
    <div className="border border-cyan-300/5 p-4">
      <p className="font-mono text-[7px] tracking-[0.2em] text-cyan-700 uppercase">
        {label}
      </p>

      <p
        className={`mt-2 font-mono text-[10px] tracking-[0.15em] uppercase ${valueClass}`}
      >
        {value}
      </p>
    </div>
  );
}
