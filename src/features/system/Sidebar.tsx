"use client";

import { useSystem, type Page } from "./SystemContext";

const items: { id: Page; label: string }[] = [
  {
    id: "personnel",
    label: "Personnel Record",
  },
  {
    id: "missions",
    label: "Mission Archive",
  },
  {
    id: "technology",
    label: "Technology Index",
  },
  {
    id: "timeline",
    label: "Expedition Log",
  },
  {
    id: "galaxy",
    label: "Galaxy Map",
  },
  {
    id: "communications",
    label: "Communications",
  },
];

export default function Sidebar() {
  const { activePage, setActivePage } = useSystem();

  return (
    <aside className="w-72 border-r border-cyan-900 p-6">
      <h2 className="mb-8 font-mono text-2xl">
        GENESIS COMMAND
      </h2>

      <nav className="space-y-2">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`block w-full rounded px-3 py-2 text-left font-mono transition ${
              activePage === item.id
                ? "bg-cyan-950 text-white"
                : "hover:bg-cyan-950"
            }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}
