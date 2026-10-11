"use client";

import { motion } from "motion/react";

/** Materialises content as it scrolls into view: rises, sharpens, fades in — once. */
export function Reveal({
  children,
  delay = 0,
  className,
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "li";
}) {
  const Tag = as === "li" ? motion.li : motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", bounce: 0, duration: 0.8, delay }}
    >
      {children}
    </Tag>
  );
}
