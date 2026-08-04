"use client";

import { useEffect } from "react";
import { useSearchContext } from "../context/SearchContext";
import { useSearch } from "../hooks/useSearch";

export default function SearchWindow() {
  const { query, setQuery, results } = useSearch();
  const { close } = useSearchContext();

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

  return (
    <div className="h-full rounded-xl border border-cyan-500/20 bg-[#071019]/80 p-6">
      <h2 className="mb-1 font-mono text-2xl text-cyan-300">ARCHIVE QUERY</h2>

      <p className="mb-6 font-mono text-sm text-cyan-600">
        Search the Genesis Archive Database
      </p>

      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Awaiting search request..."
        className="mb-6 w-full rounded-lg border border-cyan-500/20 bg-black/30 px-4 py-3 font-mono text-cyan-200 outline-none placeholder:text-cyan-700"
      />

      <div className="space-y-3">
        {results.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-cyan-500/10 bg-cyan-950/20 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-mono text-cyan-300">{item.title}</h3>

              <span className="rounded border border-cyan-500/20 px-2 py-1 font-mono text-xs text-cyan-500 uppercase">
                {item.category}
              </span>
            </div>

            <p className="mt-2 text-sm text-cyan-600">{item.description}</p>
          </div>
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
