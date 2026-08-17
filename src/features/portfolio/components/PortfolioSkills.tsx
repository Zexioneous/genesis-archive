"use client";

import portfolioData from "../data/portfolioData";

export default function PortfolioSkills() {
  return (
    <div className="space-y-8">
      <section>
        <p className="font-mono text-[9px] tracking-[0.4em] text-cyan-600 uppercase">
          Capability Matrix
        </p>

        <h2 className="mt-3 font-mono text-3xl tracking-[0.12em] text-cyan-200 uppercase">
          Skills
        </h2>
      </section>

      <section className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl md:p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((skill) => (
            <div
              key={skill}
              className="border border-cyan-500/10 bg-cyan-950/10 px-4 py-4 font-mono text-sm text-cyan-300 transition-colors hover:border-cyan-400/25 hover:bg-cyan-500/5"
            >
              <span className="mr-3 text-cyan-700">›</span>
              {skill}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
