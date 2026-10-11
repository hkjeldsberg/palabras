"use client";

import { MotionConfig } from "motion/react";

/** House spring: critically damped, no overshoot (Apple default). */
export const spring = { type: "spring", bounce: 0, duration: 0.4 } as const;
/** Slight bounce, reserved for momentary physical feedback. */
export const springBouncy = { type: "spring", bounce: 0.25, duration: 0.45 } as const;

export function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={spring}>
      {children}
    </MotionConfig>
  );
}
