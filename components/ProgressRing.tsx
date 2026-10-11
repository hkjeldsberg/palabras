"use client";

import { motion } from "motion/react";

interface Props {
  value: number; // 0..1
  accent: string;
  size?: number;
  complete?: boolean;
}

export function ProgressRing({ value, accent, size = 44, complete }: Props) {
  const stroke = 4;
  const r = (size - stroke) / 2;
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90" aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="var(--hairline)" strokeWidth={stroke} />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={accent}
          strokeWidth={stroke}
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          // Round caps draw a dot at length 0, so hide the arc until there is progress.
          animate={{ pathLength: value, opacity: value > 0 ? 1 : 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.9 }}
        />
      </svg>
      {complete && (
        <motion.svg
          viewBox="0 0 24 24"
          className="absolute inset-0 m-auto"
          width={size * 0.45}
          height={size * 0.45}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", bounce: 0.3, duration: 0.5, delay: 0.3 }}
          aria-hidden
        >
          <path
            d="M5 12.5l4.5 4.5L19 7.5"
            fill="none"
            stroke={accent}
            strokeWidth={3}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      )}
    </div>
  );
}
