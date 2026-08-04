"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useSearchContext } from "../context/SearchContext";
import SearchWindow from "./SearchWindow";

export default function SearchOverlay() {
  const { isOpen, close } = useSearchContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-8 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl"
          >
            <SearchWindow />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
