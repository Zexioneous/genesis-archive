"use client";

import { useEffect, useState } from "react";

import bootData from "./bootData";

const LINE_DELAY = 700;
const CHARACTER_DELAY = 20;

export function useBootSequence() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= bootData.length) return;

    const line = bootData[currentLine];

    let charIndex = 0;

    const typing = setInterval(() => {
      setCurrentText(line.slice(0, charIndex + 1));

      charIndex++;

      if (charIndex >= line.length) {
        clearInterval(typing);

        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, line]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }, LINE_DELAY);
      }
    }, CHARACTER_DELAY);

    return () => clearInterval(typing);
  }, [currentLine]);

  return {
    displayedLines,
    currentText,
    finished: currentLine >= bootData.length,
  };
}
