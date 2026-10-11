"use client";

import { motion } from "motion/react";

/** Renders `**word**` segments in the topic ink, with a highlighter that sweeps in behind them. */
export function Highlight({ text, delay = 0.35 }: { text: string; delay?: number }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <mark key={i} className="text-tile-ink relative isolate bg-transparent font-bold">
            <motion.span
              aria-hidden
              className="bg-tile absolute inset-x-[-0.14em] top-[0.42em] bottom-[0.04em] -z-10 origin-left rounded-[0.2em]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0, duration: 0.6, delay }}
            />
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
