"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Highlight } from "./Highlight";
import type { MeaningBranch } from "@/lib/topics";

// The word sits in a hand-drawn loop; each meaning hangs off it on a curved arrow.
// Branches are laid out by CSS grid (so text sizes itself), then the arrows are
// measured from the DOM and drawn on an overlay.

/** A slightly spiralling ellipse that overshoots its start, like a pen loop. */
function loopPath() {
  const start = (-100 * Math.PI) / 180;
  const steps = 90;
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const a = start + t * Math.PI * 2 * 1.1;
    const r = 1 + 0.03 * Math.sin(2 * a + 1) - 0.05 * t;
    d += `${i ? "L" : "M"}${(100 + 96 * r * Math.cos(a)).toFixed(2)} ${(50 + 46 * r * Math.sin(a)).toFixed(2)}`;
  }
  return d;
}
const LOOP = loopPath();

type Slot = "left" | "right" | "below";

/**
 * Grid placement. ≥md: pairs either side of the word, an odd one out below it.
 * Phones: first pair above the word, the rest below (columns keep a centre corridor
 * free so an odd last arrow can pass between them).
 */
function layout(n: number) {
  const pairs = Math.floor(n / 2);
  const odd = n % 2 === 1;
  const row = (i: number) => `"b${2 * i} hub b${2 * i + 1}"`;
  const rowSm = (i: number) => `"b${2 * i} b${2 * i + 1}"`;
  const md = [...Array.from({ length: pairs }, (_, i) => row(i)), ...(odd ? [`". b${n - 1} ."`] : [])];
  const sm = [
    ...(pairs ? [rowSm(0)] : []),
    `"hub hub"`,
    ...Array.from({ length: Math.max(0, pairs - 1) }, (_, i) => rowSm(i + 1)),
    ...(odd ? [`"b${n - 1} b${n - 1}"`] : []),
  ];
  const slot = (i: number): Slot => (odd && i === n - 1 ? "below" : i % 2 === 0 ? "left" : "right");
  return { md: md.join(" "), sm: sm.join(" "), slot };
}

const slotClass: Record<Slot, string> = {
  left: "md:justify-self-end",
  right: "md:justify-self-start",
  below: "justify-self-center md:mt-2",
};

interface Arrow {
  shaft: string;
  head: string;
}

/** Curved arrow from the loop's edge towards the middle of a branch box. */
function arrowTo(hub: DOMRect, box: DOMRect, origin: DOMRect): Arrow {
  const cx = hub.left + hub.width / 2 - origin.left;
  const cy = hub.top + hub.height / 2 - origin.top;
  const bx = box.left + box.width / 2 - origin.left;
  const by = box.top + box.height / 2 - origin.top;
  const dx = bx - cx;
  const dy = by - cy;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;

  // Leave the loop where the ray crosses the ellipse, plus a little air.
  const rx = hub.width / 2;
  const ry = hub.height / 2;
  const tEllipse = 1 / Math.hypot(ux / rx, uy / ry) + 10;
  const sx = cx + ux * tEllipse;
  const sy = cy + uy * tEllipse;

  // Stop short of where the ray enters the branch box.
  const tBox = Math.min(box.width / 2 / Math.abs(dx || 1e-6), box.height / 2 / Math.abs(dy || 1e-6));
  const ex = bx - dx * tBox - ux * 14;
  const ey = by - dy * tBox - uy * 14;

  // Bow every arrow the same way round, so the set reads as a pinwheel.
  const span = Math.hypot(ex - sx, ey - sy);
  const bend = Math.min(span * 0.25, 28);
  const qx = (sx + ex) / 2 - uy * bend;
  const qy = (sy + ey) / 2 + ux * bend;

  // Arrowhead follows the curve's final tangent.
  const tx = ex - qx;
  const ty = ey - qy;
  const tl = Math.hypot(tx, ty) || 1;
  const head = (angle: number) => {
    const c = Math.cos(angle);
    const s = Math.sin(angle);
    const hx = (-tx / tl) * c - (-ty / tl) * s;
    const hy = (-tx / tl) * s + (-ty / tl) * c;
    return `${(ex + hx * 11).toFixed(1)} ${(ey + hy * 11).toFixed(1)}`;
  };

  return {
    shaft: `M${sx.toFixed(1)} ${sy.toFixed(1)} Q${qx.toFixed(1)} ${qy.toFixed(1)} ${ex.toFixed(1)} ${ey.toFixed(1)}`,
    head: `M${head(0.5)} L${ex.toFixed(1)} ${ey.toFixed(1)} L${head(-0.5)}`,
  };
}

function hubWordSize(word: string) {
  const fit = (max: number, room: number) => Math.min(max, room / (word.length * 0.6)).toFixed(2);
  return {
    "--hub": `${fit(4.5, 13)}rem`,
    "--hub-md": `${fit(7.5, 16)}rem`,
  } as React.CSSProperties;
}

const draw = { type: "tween", ease: [0.4, 0, 0.2, 1] } as const;

export function MeaningMap({ word, branches }: { word: string; branches: MeaningBranch[] }) {
  const root = useRef<HTMLDivElement>(null);
  const hub = useRef<HTMLDivElement>(null);
  const boxes = useRef<(HTMLDivElement | null)[]>([]);
  const [arrows, setArrows] = useState<Arrow[]>([]);
  const { md, sm, slot } = layout(branches.length);

  useLayoutEffect(() => {
    const measure = () => {
      if (!root.current || !hub.current) return;
      const origin = root.current.getBoundingClientRect();
      const h = hub.current.getBoundingClientRect();
      setArrows(boxes.current.flatMap((b) => (b ? [arrowTo(h, b.getBoundingClientRect(), origin)] : [])));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (root.current) ro.observe(root.current);
    return () => ro.disconnect();
  }, [branches.length]);

  return (
    <div
      ref={root}
      className="relative mx-auto grid max-w-5xl grid-cols-2 gap-x-[16%] gap-y-14 [grid-template-areas:var(--areas)] md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] md:gap-x-16 md:gap-y-16 md:[grid-template-areas:var(--areas-md)]"
      style={{ "--areas": sm, "--areas-md": md } as React.CSSProperties}
    >
      <svg aria-hidden className="text-tile-ink pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        {arrows.map((a, i) => (
          <g key={i} fill="none" stroke="currentColor" strokeWidth={2.25} strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              d={a.shaft}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ ...draw, duration: 0.55, delay: 0.55 + i * 0.12 }}
            />
            <motion.path
              d={a.head}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ...draw, duration: 0.15, delay: 1.05 + i * 0.12 }}
            />
          </g>
        ))}
      </svg>

      <div className="flex items-center justify-center self-center [grid-area:hub]">
        <div
          ref={hub}
          lang="es"
          className="type-word text-tile-ink relative px-[0.5em] pt-[0.32em] pb-[0.42em] text-[length:var(--hub)] md:text-[length:var(--hub-md)]"
          style={hubWordSize(word)}
        >
          <svg
            aria-hidden
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            className="text-tile-accent absolute inset-0 h-full w-full overflow-visible"
          >
            <motion.path
              d={LOOP}
              fill="none"
              stroke="currentColor"
              strokeWidth={4}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ ...draw, duration: 0.8, delay: 0.1 }}
            />
          </svg>
          <motion.span
            className="relative block"
            initial={{ opacity: 0, scale: 0.85, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ type: "spring", bounce: 0.2, duration: 0.7 }}
          >
            {word}
          </motion.span>
        </div>
      </div>

      {branches.map((b, i) => (
        <motion.div
          key={b.label}
          ref={(el) => {
            boxes.current[i] = el;
          }}
          className={`flex max-w-[19rem] flex-col items-center text-center ${slotClass[slot(i)]}`}
          style={{ gridArea: `b${i}` }}
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            type: "spring",
            bounce: 0,
            duration: 0.6,
            delay: 0.75 + i * 0.12,
          }}
        >
          <h3 className="decoration-tile-accent mb-2.5 text-[1.1875rem] leading-snug underline decoration-[3px] underline-offset-[0.3em] text-balance font-medium tracking-[-0.02em] sm:text-[1.625rem]">
            {b.label}
          </h3>
          <p lang="es" className="text-[1rem] leading-snug font-bold tracking-[-0.015em] sm:text-[1.1875rem]">
            <Highlight text={b.es} delay={1.1 + i * 0.12} />
          </p>
          <p className="text-ink-2 mt-1 text-[0.875rem] leading-snug sm:text-[1rem]">{b.en}</p>
        </motion.div>
      ))}
    </div>
  );
}
