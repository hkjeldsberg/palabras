"use client";

import Link from "next/link";
import { useLayoutEffect, useRef, ViewTransition } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion, useSpring, useTransform } from "motion/react";
import { getLastTopic } from "@/lib/lastTopic";
import type { TopicProgress } from "@/lib/progress";
import type { Topic } from "@/lib/types";
import { tileWordSize } from "@/lib/wordSize";

// Critically damped (damping ≈ 2·√stiffness): follows the pointer with no wobble.
const follow = { stiffness: 220, damping: 30, mass: 1 };

interface Props {
  topic: Topic;
  progress: TopicProgress | undefined;
  index: number;
  intro: boolean;
}

export function TopicTile({ topic, progress, index, intro }: Props) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  // Returning from this topic: bring the tile into view before the view transition
  // snapshots the page, so the hero shrinks back into a visible tile, not off-screen.
  // Layout effects re-run when Next re-shows the cached dashboard.
  useLayoutEffect(() => {
    if (getLastTopic() !== topic.slug) return;
    const r = ref.current?.getBoundingClientRect();
    if (r && (r.top < 0 || r.bottom > window.innerHeight)) ref.current?.scrollIntoView({ block: "center" });
  }, [topic.slug]);

  // Pointer position over the tile, 0..1 on each axis; 0.5 is centre/rest.
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  // Independent X/Y springs (apple-design §3): tilt toward the pointer, like an Apple TV poster.
  const rotateX = useSpring(useTransform(py, [0, 1], [7, -7]), follow);
  const rotateY = useSpring(useTransform(px, [0, 1], [-9, 9]), follow);
  // The word sits on a nearer layer, so it drifts further than the tile — parallax depth.
  const wordX = useSpring(useTransform(px, [0, 1], [-12, 12]), follow);
  const wordY = useSpring(useTransform(py, [0, 1], [-8, 8]), follow);
  const glareX = useSpring(useTransform(px, [0, 1], [0, 100]), follow);
  const glareY = useSpring(useTransform(py, [0, 1], [0, 100]), follow);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.55), rgba(255,255,255,0) 60%)`;

  const track = (e: React.PointerEvent<HTMLElement>) => {
    if (reduce || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - r.left) / r.width);
    py.set((e.clientY - r.top) / r.height);
  };
  const rest = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const perfect = progress && progress.bestScore === progress.total;
  const label = progress
    ? `${topic.title}. Completed, best score ${progress.bestScore} of ${progress.total}.`
    : `${topic.title}. Not started.`;

  return (
    // First row gets the load intro; every tile reveals with the scroll (CSS view timeline).
    <div ref={ref} className="scroll-reveal">
      <div
        className={`[perspective:1100px] ${intro && index < 4 ? "intro-rise" : ""}`}
        style={{ "--intro-delay": `${350 + index * 80}ms` } as React.CSSProperties}
      >
        <Link
          href={`/topic/${topic.slug}`}
          transitionTypes={["nav-forward"]}
          aria-label={label}
          className={`theme group block rounded-[1.5rem] outline-none sm:rounded-[2rem] focus-visible:ring-4 focus-visible:ring-[color-mix(in_srgb,var(--ink)_35%,transparent)]`}
          style={{ "--h": topic.hue } as React.CSSProperties}
          onPointerMove={track}
          onPointerLeave={rest}
        >
          <ViewTransition name={`tile-${topic.slug}`} share="morph" default="none">
            <motion.div
              className="bg-tile @container relative aspect-[7/8] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem]"
              style={{ rotateX, rotateY }}
              whileHover={{ scale: 1.025, boxShadow: "var(--shadow-lift)" }}
              whileTap={{ scale: 0.97, transition: { type: "spring", bounce: 0, duration: 0.2 } }}
            >
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 mix-blend-soft-light transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: glare }}
              />

              <div className="absolute top-[9cqw] right-[9cqw]">
                {perfect ? (
                  <motion.span
                    className="bg-tile-ink text-on-ink flex size-[max(1.75rem,13cqw)] items-center justify-center rounded-full"
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      bounce: 0.45,
                      duration: 0.6,
                      delay: intro ? 0.9 + index * 0.08 : 0.15,
                    }}
                  >
                    <svg viewBox="0 0 24 24" className="size-1/2" aria-hidden>
                      <motion.path
                        d="M5.5 12.5l4 4L18.5 8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2.75}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          type: "spring",
                          bounce: 0,
                          duration: 0.5,
                          delay: intro ? 1.05 + index * 0.08 : 0.3,
                        }}
                      />
                    </svg>
                  </motion.span>
                ) : progress ? (
                  <motion.span
                    className="text-tile-ink block text-[clamp(0.8125rem,5.5cqw,1.0625rem)] font-semibold tabular-nums"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {progress.bestScore}/{progress.total}
                  </motion.span>
                ) : null}
              </div>

              <div className="absolute inset-x-0 bottom-0 p-[10cqw]">
                <ViewTransition name={`word-${topic.slug}`} share="morph-word" default="none">
                  <motion.span
                    className={`type-word text-tile-ink block w-fit ${tileWordSize(topic.word)}`}
                    style={{ x: wordX, y: wordY }}
                  >
                    {topic.word}
                  </motion.span>
                </ViewTransition>
                <p className="text-tile-ink mt-[4cqw] line-clamp-2 text-[clamp(0.75rem,5.4cqw,1.0625rem)] leading-snug tracking-[-0.005em] opacity-85">
                  {topic.blurb}
                </p>
              </div>
            </motion.div>
          </ViewTransition>
        </Link>
      </div>
    </div>
  );
}
