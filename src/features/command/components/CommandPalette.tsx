"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { useNotification } from "@/features/notifications/hooks/useNotification";
import { useSearchContext } from "@/features/search/context/SearchContext";
import { useSystem } from "@/features/system/context/SystemContext";

import { useCommand } from "../CommandPaletteContext";
import commands from "../data/commands";

type CommandPaletteProps = {
  open: boolean;
};

export default function CommandPalette({ open }: CommandPaletteProps) {
  const { notify } = useNotification();
  const { close } = useCommand();
  const { open: openSearch } = useSearchContext();
  const { setActivePage } = useSystem();

  const inputRef = useRef<HTMLInputElement>(null);

  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  const filteredCommands = useMemo(() => {
    const search = query.toLowerCase().trim();

    if (!search) return commands;

    return commands.filter(
      (command) =>
        command.title.toLowerCase().includes(search) ||
        command.description.toLowerCase().includes(search),
    );
  }, [query]);

  const executeCommand = useCallback(
    (action: string) => {
      switch (action) {
        case "open-personnel":
          setActivePage("personnel");

          notify({
            title: "PERSONNEL ARCHIVE",
            message: "Personnel records loaded.",
            type: "system",
          });
          break;

        case "open-missions":
          setActivePage("missions");

          notify({
            title: "MISSION ARCHIVE",
            message: "Mission database loaded.",
            type: "system",
          });
          break;

        case "open-timeline":
          setActivePage("timeline");

          notify({
            title: "TIMELINE ARCHIVE",
            message: "Historical archive loaded.",
            type: "system",
          });
          break;

        case "open-search":
          openSearch();

          notify({
            title: "ASTRA",
            message: "Archive Search initialized.",
            type: "astra",
          });
          break;

        case "open-terminal":
          notify({
            title: "WARNING",
            message: "Terminal module coming soon.",
            type: "warning",
          });
          break;

        default:
          break;
      }

      setQuery("");
      setSelectedIndex(0);
      close();
    },
    [setActivePage, openSearch, close, notify],
  );

  // Focus input when palette opens
  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (filteredCommands.length === 0) return;

      if (event.key === "ArrowDown") {
        event.preventDefault();

        setSelectedIndex((prev) =>
          prev === filteredCommands.length - 1 ? 0 : prev + 1,
        );
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();

        setSelectedIndex((prev) =>
          prev === 0 ? filteredCommands.length - 1 : prev - 1,
        );
      }

      if (event.key === "Enter") {
        event.preventDefault();

        executeCommand(filteredCommands[selectedIndex].action);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, filteredCommands, selectedIndex, executeCommand]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background */}
          <motion.div
            onClick={close}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Palette */}
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -20,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed top-24 left-1/2 z-50 w-full max-w-2xl -translate-x-1/2"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="overflow-hidden rounded-2xl border border-cyan-500/20 bg-[#071019]/95 shadow-[0_0_60px_rgba(34,211,238,.15)] backdrop-blur-xl"
            >
              {/* Search */}
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                placeholder="Type a command..."
                className="w-full border-b border-cyan-500/20 bg-transparent px-6 py-5 font-mono text-lg text-cyan-200 outline-none placeholder:text-cyan-600"
              />

              {/* Commands */}
              <div className="p-2">
                {filteredCommands.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <p className="font-mono text-cyan-600">
                      No commands found.
                    </p>
                  </div>
                ) : (
                  filteredCommands.map((command, index) => (
                    <button
                      key={command.id}
                      onMouseEnter={() => setSelectedIndex(index)}
                      onClick={() => executeCommand(command.action)}
                      className={`flex w-full items-start gap-4 rounded-lg px-4 py-3 text-left transition ${
                        selectedIndex === index
                          ? "bg-cyan-500/15"
                          : "hover:bg-cyan-500/10"
                      }`}
                    >
                      <span className="text-xl">{command.icon}</span>

                      <div>
                        <p className="font-mono text-cyan-300">
                          {command.title}
                        </p>

                        <p className="mt-1 text-sm text-cyan-600">
                          {command.description}
                        </p>
                      </div>
                    </button>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-cyan-500/20 px-5 py-3 font-mono text-xs text-cyan-600">
                <span>{filteredCommands.length} commands</span>

                <span>↑↓ Navigate • Enter Select • Esc Close</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
