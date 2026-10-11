"use client";

import { motion } from "motion/react";

/** Rule names that pop into the hero one by one, after the tile has landed. */
export function RuleChips({ names }: { names: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2.5 max-sm:hidden lg:justify-end" aria-label="Rules covered">
      {names.map((name, i) => (
        <motion.li
          key={name}
          className="text-tile-ink rounded-full bg-white/55 px-4 py-2 text-[0.9375rem] font-medium backdrop-blur-md dark:bg-black/25"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0.35, duration: 0.6, delay: 0.45 + i * 0.07 }}
        >
          {name}
        </motion.li>
      ))}
    </ul>
  );
}
