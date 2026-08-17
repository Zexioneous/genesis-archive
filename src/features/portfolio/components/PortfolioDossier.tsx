"use client";

import Image from "next/image";

import InfoRow from "@/shared/ui/InfoRow";
import Panel from "@/shared/ui/Panel";
import StatusBadge from "@/shared/ui/StatusBadge";
import Window from "@/shared/ui/Window";

import portfolioData from "../data/portfolioData";

export default function PortfolioDossier() {
  const { identity, profile, languages, skills } = portfolioData;

  return (
    <div className="p-6 md:p-10">
      <Window title="Personal Dossier">
        {/* ==================================================
            IDENTITY
            ================================================== */}

        <Panel className="p-6 md:p-8">
          <div className="grid gap-8 md:grid-cols-[180px_1fr] md:gap-10">
            {/* Profile */}

            <div className="flex flex-col items-center gap-4">
              <div className="relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-lg border border-cyan-700 bg-cyan-950/20">
                <Image
                  src={identity.image}
                  alt={identity.displayName}
                  fill
                  priority
                  className="object-cover"
                />
              </div>

              <div className="text-center font-mono">
                <p className="text-[10px] tracking-[0.2em] text-cyan-600 uppercase">
                  Portfolio ID
                </p>

                <p className="mt-1 text-cyan-300">{identity.portfolioId}</p>
              </div>
            </div>

            {/* Information */}

            <div className="space-y-4 font-mono">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-[10px] tracking-[0.3em] text-cyan-600 uppercase">
                    Identity Registry
                  </p>

                  <h2 className="mt-2 text-2xl text-cyan-200 md:text-3xl">
                    {identity.displayName}
                  </h2>
                </div>

                <StatusBadge label="STATUS" status={identity.status} />
              </div>

              <InfoRow label="Role" value={identity.role.join(" · ")} />

              <InfoRow label="Portfolio ID" value={identity.portfolioId} />

              <InfoRow label="Location" value={identity.location} />

              <InfoRow label="Availability" value={identity.availability} />
            </div>
          </div>
        </Panel>

        {/* ==================================================
            PROFESSIONAL OVERVIEW
            ================================================== */}

        <Panel className="p-6 md:p-8">
          <h3 className="mb-4 font-mono text-xl text-cyan-300">
            Professional Overview
          </h3>

          <p className="font-mono leading-8 text-cyan-100">{profile.bio}</p>
        </Panel>

        {/* ==================================================
            INTERESTS
            ================================================== */}

        <Panel className="p-6 md:p-8">
          <h3 className="mb-4 font-mono text-xl text-cyan-300">
            Primary Interests
          </h3>

          <div className="grid gap-3 md:grid-cols-2">
            {profile.interests.map((interest) => (
              <div
                key={interest}
                className="border border-cyan-500/10 bg-cyan-950/10 px-4 py-3 font-mono text-sm text-cyan-400"
              >
                <span className="mr-3 text-cyan-700">›</span>

                {interest}
              </div>
            ))}
          </div>
        </Panel>

        {/* ==================================================
            SKILLS
            ================================================== */}

        <Panel className="p-6 md:p-8">
          <h3 className="mb-4 font-mono text-xl text-cyan-300">
            Capability Registry
          </h3>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="border border-cyan-500/15 bg-cyan-950/20 px-3 py-2 font-mono text-xs text-cyan-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </Panel>

        {/* ==================================================
            LANGUAGES
            ================================================== */}

        <Panel className="p-6 md:p-8">
          <h3 className="mb-4 font-mono text-xl text-cyan-300">
            Language Registry
          </h3>

          <div className="space-y-3">
            {languages.map((language) => (
              <InfoRow
                key={language.name}
                label={language.name}
                value={language.level}
              />
            ))}
          </div>
        </Panel>
      </Window>
    </div>
  );
}
