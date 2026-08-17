"use client";

import portfolioData from "../data/portfolioData";

export default function PortfolioAbout() {
  return (
    <div className="space-y-6">
      <section>
        <p className="font-mono text-[9px] tracking-[0.4em] text-cyan-600 uppercase">
          Background Registry
        </p>

        <h2 className="mt-3 font-mono text-3xl tracking-[0.12em] text-cyan-200 uppercase">
          About
        </h2>
      </section>

      <section className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl md:p-8">
        <p className="font-mono text-sm leading-8 text-cyan-100/80">
          {portfolioData.profile.bio}
        </p>
      </section>

      <section className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl md:p-8">
        <p className="font-mono text-[9px] tracking-[0.35em] text-cyan-600 uppercase">
          Creative Direction
        </p>

        <h3 className="mt-3 font-mono text-xl tracking-[0.08em] text-cyan-200 uppercase">
          World Building & Storytelling
        </h3>

        <p className="mt-5 font-mono text-sm leading-8 text-cyan-500">
          My creative work focuses heavily on original fiction, world-building,
          interactive experiences, and the development of complex fictional
          universes.
        </p>

        <p className="mt-4 font-mono text-sm leading-8 text-cyan-500">
          I enjoy building a universe piece by piece — from characters and
          stories to planets, systems, organizations, and the interfaces that
          allow people to explore them.
        </p>
      </section>
    </div>
  );
}
