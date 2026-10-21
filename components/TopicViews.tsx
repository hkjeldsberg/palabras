"use client";

import { Activity, useRef, useState } from "react";
import { motion } from "motion/react";

type View = "map" | "details";

const views: { id: View; label: string }[] = [
  { id: "map", label: "Meaning map" },
  { id: "details", label: "Rules & quiz" },
];

/**
 * Meaning map first, rules + examples + quiz one tap away. The details stay mounted in
 * a hidden <Activity>, so a half-done quiz survives the switch and its keyboard
 * shortcuts are off while the map is showing.
 */
export function TopicViews({ map, children }: { map: React.ReactNode; children: React.ReactNode }) {
  const [view, setView] = useState<View>("map");
  const top = useRef<HTMLDivElement>(null);

  const show = (next: View) => {
    setView(next);
    if (top.current && top.current.getBoundingClientRect().top < 0) top.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div ref={top} className="mb-10 flex scroll-mt-20 justify-center sm:mb-14 lg:justify-start">
        <div role="tablist" aria-label="View" className="bg-hairline inline-flex rounded-full p-1">
          {views.map((v) => (
            <button
              key={v.id}
              type="button"
              role="tab"
              aria-selected={view === v.id}
              onClick={() => show(v.id)}
              className={`relative rounded-full px-5 py-2 text-[0.9375rem] font-semibold transition-colors ${
                view === v.id ? "text-ink" : "text-ink-2 hover:text-ink"
              }`}
            >
              {view === v.id && (
                <motion.span
                  layoutId="topic-view-pill"
                  className="bg-surface shadow-card absolute inset-0 rounded-full"
                />
              )}
              <span className="relative">{v.label}</span>
            </button>
          ))}
        </div>
      </div>

      {view === "map" && (
        <div role="tabpanel" aria-label="Meaning map">
          {map}
          <div className="mt-16 flex justify-center sm:mt-20">
            <motion.button
              type="button"
              onClick={() => show("details")}
              whileTap={{ scale: 0.97 }}
              className="bg-tile-ink text-on-ink rounded-full px-7 py-3.5 text-[1.0625rem] font-semibold"
            >
              Rules, examples & quiz →
            </motion.button>
          </div>
        </div>
      )}
      <Activity mode={view === "details" ? "visible" : "hidden"}>
        <div role="tabpanel" aria-label="Rules & quiz">
          {children}
        </div>
      </Activity>
    </>
  );
}
