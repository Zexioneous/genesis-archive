"use client";

import { useNotification } from "@/features/notifications/hooks/useNotification";
import { useSystem } from "@/features/system/context/SystemContext";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSearchContext } from "../context/SearchContext";
import { useSearch } from "../hooks/useSearch";

export default function SearchWindow() {
  const { query, setQuery, results } = useSearch();
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

  return (
    <div className="h-full rounded-xl border border-cyan-500/20 bg-[#071019]/80 p-6">
      <div className="mb-6 border-b border-cyan-500/20 pb-4">
        <h2 className="font-mono text-2xl tracking-widest text-cyan-300">
          ARCHIVE QUERY
        </h2>

        <p className="mt-1 font-mono text-sm text-cyan-600">
          Genesis Archive Database
        </p>

        <div className="mt-4 flex flex-wrap gap-6 font-mono text-xs uppercase">
          <span className="text-cyan-400">Records: {results.length}</span>

          <span className="text-cyan-500">Database: Online</span>

          <span className="text-cyan-600">Status: Connected</span>
        </div>
      </div>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Awaiting search request..."
        className="mb-6 w-full rounded-lg border border-cyan-500/20 bg-black/30 px-4 py-3 font-mono text-cyan-200 outline-none placeholder:text-cyan-700"
      />

      <div className="space-y-3">
        {results.map((item, index) => (
          <motion.div
            onClick={() => openArchive(item)}
            key={item.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.25,
              delay: index * 0.08,
            }}
            className="group cursor-pointer rounded-xl border border-cyan-500/15 bg-cyan-950/10 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-900/20 hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]"
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

        {results.length === 0 && (
          <div className="py-10 text-center">
            <p className="font-mono text-cyan-600">No archive records found.</p>
          </div>
        )}
      </div>
    </div>
  );
}
