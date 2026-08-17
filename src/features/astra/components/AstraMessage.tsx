"use client";

import { motion } from "framer-motion";

type AstraMessageProps = {
  role: "user" | "astra";
  content: string;
};

export default function AstraMessage({ role, content }: AstraMessageProps) {
  const isAstra = role === "astra";

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`flex w-full ${isAstra ? "justify-start" : "justify-end"}`}
    >
      <div
        className={`max-w-3xl ${
          isAstra
            ? "border-l border-cyan-500/30 pl-5"
            : "rounded-xl border border-cyan-500/10 bg-cyan-500/4 px-5 py-4"
        }`}
      >
        <div className="mb-2 flex items-center gap-2 font-mono text-[9px] tracking-[0.25em] uppercase">
          <span className={isAstra ? "text-cyan-500" : "text-cyan-700"}>
            {isAstra ? "ASTRA" : "USER"}
          </span>

          {isAstra && <span className="text-cyan-900">· NEURAL RESPONSE</span>}
        </div>

        <p className="font-mono text-sm leading-7 whitespace-pre-wrap text-cyan-200/90">
          {content}
        </p>
      </div>
    </motion.div>
  );
}
