"use client";

import { useIntro } from "@/lib/intro";

type Delay = React.CSSProperties & { "--intro-delay": string };

/** Headline whose words come into focus one after another — a material arriving, not a fade. */
export function HeroTitle({ lines, subtitle }: { lines: string[]; subtitle: string }) {
  const intro = useIntro();
  const words = lines.map((line) => line.split(" "));
  const count = words.flat().length;
  let n = 0;
  return (
    <>
      <p
        className={`type-word text-ink mb-8 text-[1.625rem] sm:mb-10 sm:text-[1.875rem] ${intro ? "intro-fade" : ""}`}
        style={{ "--intro-delay": "0ms" } as Delay}
      >
        palabras
      </p>
      <h1 className="type-display" aria-label={lines.join(" ")}>
        {words.map((line, l) => (
          <span key={l} className="block" aria-hidden>
            {line.map((word) => (
              <span
                key={word}
                className={`mr-[0.22em] inline-block ${intro ? "intro-word" : ""}`}
                style={{ "--intro-delay": `${80 + n++ * 70}ms` } as Delay}
              >
                {word}
              </span>
            ))}
          </span>
        ))}
      </h1>
      <p
        className={`text-ink-2 mt-4 text-[1.0625rem] tracking-[-0.01em] sm:mt-5 sm:text-[1.3125rem] ${intro ? "intro-fade" : ""}`}
        style={{ "--intro-delay": `${200 + count * 70}ms` } as Delay}
      >
        {subtitle}
      </p>
    </>
  );
}
