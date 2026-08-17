"use client";

import portfolioData from "../data/portfolioData";

export default function PortfolioExperience() {
  return (
    <div className="space-y-8">
      <section>
        <p className="font-mono text-[9px] tracking-[0.4em] text-cyan-600 uppercase">
          Development History
        </p>

        <h2 className="mt-3 font-mono text-3xl tracking-[0.12em] text-cyan-200 uppercase">
          Experience
        </h2>
      </section>

      <div className="space-y-4">
        {portfolioData.experience.map((item, index) => (
          <article
            key={`${item.title}-${index}`}
            className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl md:p-8"
          >
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h3 className="font-mono text-lg tracking-[0.08em] text-cyan-200 uppercase">
                {item.title}
              </h3>

              <span className="font-mono text-[9px] tracking-[0.2em] text-cyan-700 uppercase">
                {item.period}
              </span>
            </div>

            <p className="mt-4 font-mono text-sm leading-7 text-cyan-500">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
