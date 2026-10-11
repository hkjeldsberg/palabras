"use client";

import { AnimatePresence, motion } from "motion/react";
import { TopicTile } from "./TopicTile";
import { useIntro } from "@/lib/intro";
import { resetProgress, useProgress } from "@/lib/progress";
import type { Topic, TopicGroup } from "@/lib/types";

const groups: { id: TopicGroup; title: string; subtitle: string }[] = [
  { id: "small", title: "Small words", subtitle: "Tiny words doing big grammatical jobs." },
  { id: "everyday", title: "Everyday words", subtitle: "Common words with a surprising number of lives." },
];

export function TopicGrid({ topics }: { topics: Topic[] }) {
  const progress = useProgress();
  const intro = useIntro();
  const hasProgress = !!progress && topics.some((t) => progress[t.slug]);
  let index = 0;

  return (
    <div className="space-y-16 sm:space-y-24">
      {groups.map((group) => {
        const items = topics.filter((t) => t.group === group.id);
        const done = progress ? items.filter((t) => progress[t.slug]).length : 0;
        return (
          <section key={group.id} aria-labelledby={`group-${group.id}`}>
            <header className="mb-5 flex items-end justify-between gap-6 sm:mb-8">
              <div>
                <h2 id={`group-${group.id}`} className="type-title">
                  {group.title}
                </h2>
                <p className="text-ink-2 mt-1.5 text-[0.9375rem] sm:mt-2 sm:text-[1.0625rem]">{group.subtitle}</p>
              </div>
              {progress && (
                <p className="text-ink-2 shrink-0 text-sm tabular-nums" aria-live="polite">
                  {done} of {items.length} done
                </p>
              )}
            </header>
            <div className="grid grid-cols-2 gap-3 sm:gap-6 xl:grid-cols-4">
              {items.map((topic) => (
                <TopicTile
                  key={topic.slug}
                  topic={topic}
                  progress={progress?.[topic.slug]}
                  index={index++}
                  intro={intro}
                />
              ))}
            </div>
          </section>
        );
      })}

      <div className="flex h-8 justify-end">
        <AnimatePresence>
          {hasProgress && (
            <motion.button
              type="button"
              onClick={resetProgress}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              whileTap={{ scale: 0.96 }}
              className="text-ink-2 hover:text-ink rounded-full px-4 text-sm transition-colors"
            >
              Reset progress
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
