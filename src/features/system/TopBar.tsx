"use client";

import { useEffect, useState } from "react";

export default function TopBar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }),
      );
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="flex items-center justify-between border-b border-cyan-900 px-6 py-4 font-mono">
      <div>GENESIS COMMAND</div>

      <div>ASTRA : ONLINE</div>

      <div>{time}</div>
    </header>
  );
}
