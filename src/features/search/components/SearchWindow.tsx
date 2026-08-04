"use client";

import { useNotification } from "@/features/notifications/hooks/useNotification";
import { useSystem } from "@/features/system/context/SystemContext";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useSearchContext } from "../context/SearchContext";
import { filters, type SearchFilter } from "../data/filters";
import { useSearch } from "../hooks/useSearch";

const filterIcons: Record<SearchFilter, string> = {
  all: "◎",
  personnel: "👤",
  mission: "🚀",
  timeline: "🛰",
  document: "📄",
};

export default function SearchWindow() {
  const { query, setQuery, results } = useSearch();

  const [activeFilter, setActiveFilter] = useState<SearchFilter>("all");

  const { close } = useSearchContext();
  const { setActivePage } = useSystem();
  const { notify } = useNotification();

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);

  function openArchive(item: (typeof results)[number]) {
    setActivePage(item.page);

    notify({
      title: "ARCHIVE",
      message: `${item.title} loaded.`,
      type: "system",
    });

    close();
  }

  const filteredResults =
    activeFilter === "all"
      ? results
      : results.filter((item) => item.category === activeFilter);

  return (
    <div className="h-full rounded-xl border border-cyan-500/20 bg-[#071019]/80 p-6">
      {/* Header */}
      <div className="mb-6 border-b border-cyan-500/20 pb-6">
        <h2 className="font-mono text-2xl tracking-widest text-cyan-300">
          ARCHIVE QUERY
        </h2>

        <p className="mt-1 font-mono text-sm text-cyan-600">
          Genesis Archive Database
        </p>

        <div className="mt-4 flex flex-wrap gap-6 font-mono text-xs uppercase">
          <span className="text-cyan-400">
            Records: {filteredResults.length}
          </span>

          <span className="text-cyan-500">Database: Online</span>

          <span className="text-cyan-600">Status: Connected</span>
        </div>

        {/* Filters */}
        <LayoutGroup>
          <div className="mt-6 flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`group relative overflow-hidden rounded-lg border px-4 py-2 font-mono text-xs tracking-[0.2em] uppercase transition-all duration-300 ${
                  activeFilter === filter
                    ? "border-cyan-400 text-cyan-200"
                    : "border-cyan-500/20 bg-black/20 text-cyan-600 hover:border-cyan-400/40 hover:bg-cyan-500/5 hover:text-cyan-300"
                }`}
              >
                {activeFilter === filter && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 -z-10 rounded-lg bg-cyan-500/15 shadow-[0_0_20px_rgba(34,211,238,.18)]"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="mr-2">{filterIcons[filter]}</span>

                {filter}
              </button>
            ))}
          </div>
        </LayoutGroup>
      </div>

      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Awaiting search request..."
        className="mb-6 w-full rounded-xl border border-cyan-500/20 bg-black/40 px-5 py-4 font-mono text-cyan-200 transition-all duration-300 outline-none placeholder:text-cyan-700 focus:border-cyan-400/40 focus:shadow-[0_0_20px_rgba(34,211,238,.12)]"
      />

      {/* Results */}
      <div className="space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredResults.map((item, index) => (
            <motion.div
              key={item.id}
              layout
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -20,
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.08,
              }}
              onClick={() => openArchive(item)}
              className="group cursor-pointer rounded-xl border border-cyan-500/15 bg-cyan-950/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-900/20 hover:shadow-[0_0_30px_rgba(34,211,238,.12)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-mono text-lg tracking-wide text-cyan-300 transition-colors duration-300 group-hover:text-cyan-100">
                  {item.title}
                </h3>

                <span className="rounded border border-cyan-500/20 bg-cyan-950/40 px-3 py-1 font-mono text-[10px] tracking-widest text-cyan-500 uppercase transition-colors duration-300 group-hover:border-cyan-300/50 group-hover:text-cyan-300">
                  {item.category}
                </span>
              </div>

              <p className="mt-3 text-sm leading-6 text-cyan-600">
                {item.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-cyan-500/10 pt-3">
                <span className="font-mono text-[11px] tracking-widest text-cyan-700 uppercase transition-colors duration-300 group-hover:text-cyan-500">
                  STATUS: INDEXED
                </span>

                <span className="font-mono text-[11px] tracking-widest text-cyan-500 uppercase">
                  ID #{item.id}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredResults.length === 0 && (
          <div className="rounded-xl border border-cyan-500/10 bg-cyan-950/10 py-12 text-center">
            <p className="font-mono text-lg tracking-[0.25em] text-cyan-500">
              NO MATCHES DETECTED
            </p>

            <p className="mt-3 font-mono text-sm text-cyan-700">
              ASTRA could not locate matching archive entries.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
