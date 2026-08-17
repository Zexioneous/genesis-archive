"use client";

import portfolioData from "../data/portfolioData";

export default function PortfolioContact() {
  return (
    <div className="space-y-8">
      <section>
        <p className="font-mono text-[9px] tracking-[0.4em] text-cyan-600 uppercase">
          Communication Registry
        </p>

        <h2 className="mt-3 font-mono text-3xl tracking-[0.12em] text-cyan-200 uppercase">
          Contact
        </h2>

        <p className="mt-4 max-w-2xl font-mono text-sm leading-7 text-cyan-600">
          Communication channels and external identities.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <ContactItem
          label="EMAIL"
          value={portfolioData.contact.email}
          href={`mailto:${portfolioData.contact.email}`}
        />

        <ContactItem
          label="DISCORD"
          value={portfolioData.contact.discord.username}
          href={portfolioData.contact.discord.invite}
        />

        <ContactItem
          label="INSTAGRAM"
          value={portfolioData.contact.instagram.username}
          href={portfolioData.contact.instagram.url}
        />
      </section>
    </div>
  );
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="rounded-xl border border-cyan-500/15 bg-[#071019]/70 p-6 backdrop-blur-xl transition-colors hover:border-cyan-400/30"
    >
      <p className="font-mono text-[9px] tracking-[0.3em] text-cyan-700">
        {label}
      </p>

      <p className="mt-3 font-mono text-sm break-all text-cyan-200">{value}</p>

      <p className="mt-4 font-mono text-[9px] tracking-[0.2em] text-cyan-600 uppercase">
        Open Channel →
      </p>
    </a>
  );
}
