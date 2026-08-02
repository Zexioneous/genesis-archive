"use client";

import { useBootSequence } from "./useBootSequence";

export default function BootSequence() {
  const { displayedLines, currentText } = useBootSequence();

  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-8 text-cyan-400">
      <div className="w-full max-w-3xl font-mono text-lg">
        {displayedLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}

        <p>
          {currentText}
          <span className="animate-pulse">▊</span>
        </p>
      </div>
    </main>
  );
}
