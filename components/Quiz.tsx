"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, animate, motion, useMotionValue, useReducedMotion, useTransform } from "motion/react";
import { ProgressRing } from "./ProgressRing";
import { springBouncy } from "./MotionProvider";
import { saveResult } from "@/lib/progress";
import type { Question, TopicSlug } from "@/lib/types";

export interface QuizProps {
  slug: TopicSlug;
  questions: Question[];
  /** The topic to suggest after finishing. */
  next: { slug: TopicSlug; word: string };
}

interface Props extends QuizProps {
  /** Set when the quiz lives in a phone bottom sheet: the header becomes the drag handle. */
  handleProps?: React.HTMLAttributes<HTMLDivElement>;
  expanded?: boolean;
}

export function Quiz({ slug, questions, next, handleProps, expanded }: Props) {
  const [answers, setAnswers] = useState<(string | null)[]>(() => questions.map(() => null));
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  const picked = answers[index];
  const isLast = index === questions.length - 1;
  const score = answers.filter((a, i) => a === questions[i].answer).length;

  const choose = useCallback(
    (option: string) => {
      if (picked !== null || finished) return;
      const next = answers.map((a, i) => (i === index ? option : a));
      setAnswers(next);
      if (next.every((a) => a !== null)) {
        // Persist as soon as the last answer lands, so leaving early still counts.
        saveResult(slug, next.filter((a, i) => a === questions[i].answer).length, questions.length);
      }
    },
    [answers, index, picked, finished, questions, slug],
  );

  const advance = useCallback(() => {
    if (picked === null) return;
    if (isLast) setFinished(true);
    // Absolute, not functional: a stale "Next" on the exiting card must not skip a question.
    else setIndex(index + 1);
  }, [picked, isLast, index]);

  const restart = () => {
    setAnswers(questions.map(() => null));
    setIndex(0);
    setFinished(false);
  };

  // Keyboard: 1–9 picks an option, Enter moves on.
  useEffect(() => {
    if (finished) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (n >= 1 && n <= q.options.length) choose(q.options[n - 1]);
      else if (e.key === "Enter" && picked !== null) {
        e.preventDefault();
        advance();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [q, picked, finished, choose, advance]);

  return (
    <div className="bg-surface shadow-lift border-hairline flex flex-col overflow-hidden rounded-[2rem] border max-lg:h-full max-lg:rounded-b-none max-lg:border-b-0">
      <div
        {...handleProps}
        className={`relative flex shrink-0 items-center justify-between px-8 pt-7 max-lg:px-6 max-lg:pt-8 max-lg:pb-5 ${
          handleProps ? "cursor-grab touch-none select-none active:cursor-grabbing" : ""
        }`}
      >
        {handleProps && (
          <span
            aria-hidden
            className="bg-ink-2/30 absolute top-2.5 left-1/2 h-1.5 w-10 -translate-x-1/2 rounded-full"
          />
        )}
        <p className="type-eyebrow text-tile-ink flex items-center gap-2">
          Quick quiz
          {handleProps && (
            <motion.svg
              viewBox="0 0 24 24"
              width="14"
              height="14"
              aria-hidden
              animate={{ rotate: expanded ? 180 : 0 }}
              className="opacity-70"
            >
              <path
                d="M6 15l6-6 6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          )}
        </p>
        <div className="flex gap-1.5" aria-label={`Question ${index + 1} of ${questions.length}`}>
          {questions.map((question, i) => {
            const a = answers[i];
            const color = a === null ? "var(--hairline)" : a === question.answer ? "var(--success)" : "var(--error)";
            return (
              <motion.span
                key={i}
                className="h-1.5 rounded-full"
                animate={{ width: i === index && !finished ? 20 : 6, backgroundColor: color }}
              />
            );
          })}
        </div>
      </div>

      <div className="relative min-h-[26rem] max-lg:min-h-0 max-lg:flex-1 max-lg:overflow-y-auto max-lg:overscroll-contain max-lg:pb-[env(safe-area-inset-bottom)]">
        {/* No initial={false} here: it would propagate to everything inside question 1 and skip its feedback. */}
        <AnimatePresence mode="popLayout">
          {finished ? (
            <motion.div
              key="results"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
            >
              <Results score={score} total={questions.length} next={next} onRestart={restart} />
            </motion.div>
          ) : (
            <motion.div
              key={index}
              className="px-8 pt-6 pb-8 max-lg:px-6 max-lg:pt-1"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
            >
              <p className="text-ink-2 mb-2 text-sm tabular-nums">
                {index + 1} / {questions.length}
              </p>
              <Prompt question={q} picked={picked} />
              {q.hint && <p className="text-ink-2 mt-2 italic">{q.hint}</p>}

              <div className="mt-7 flex flex-col gap-2.5" role="group" aria-label="Answer options">
                {q.options.map((option, i) => (
                  <OptionButton
                    key={option}
                    label={option}
                    shortcut={i + 1}
                    state={optionState(option, picked, q.answer)}
                    disabled={picked !== null}
                    onSelect={() => choose(option)}
                  />
                ))}
              </div>

              <AnimatePresence>
                {picked !== null && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-6"
                    role="status"
                  >
                    <p className="text-[0.9375rem] leading-relaxed">
                      <strong className={picked === q.answer ? "text-success" : "text-error"}>
                        {picked === q.answer ? "Correct. " : "Not quite. "}
                      </strong>
                      <span className="text-ink-2">{q.explanation}</span>
                    </p>
                    <motion.button
                      type="button"
                      onClick={advance}
                      autoFocus
                      whileTap={{ scale: 0.97 }}
                      className="bg-tile-ink text-on-ink mt-5 w-full rounded-full py-3.5 text-[0.9375rem] font-semibold"
                    >
                      {isLast ? "See results" : "Next question"}
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

type OptionState = "idle" | "correct" | "wrong" | "reveal" | "dim";

function optionState(option: string, picked: string | null, answer: string): OptionState {
  if (picked === null) return "idle";
  if (option === answer) return option === picked ? "correct" : "reveal";
  return option === picked ? "wrong" : "dim";
}

/** Renders the prompt, filling the "___" blank with the chosen word once answered. */
function Prompt({ question, picked }: { question: Question; picked: string | null }) {
  const [before, after] = question.prompt.split("___");
  const isBlank = after !== undefined;
  if (!isBlank) {
    return <h3 className="text-[1.3125rem] leading-snug font-semibold tracking-tight">{question.prompt}</h3>;
  }
  const correct = picked === question.answer;
  return (
    <h3 lang="es" className="text-[1.5rem] leading-snug font-semibold tracking-tight">
      {before}
      <span className="relative mx-0.5 inline-flex min-w-[3.5rem] justify-center align-baseline">
        <AnimatePresence mode="popLayout" initial={false}>
          {picked === null ? (
            <motion.span
              key="blank"
              exit={{ opacity: 0 }}
              className="border-ink-2/40 inline-block w-14 translate-y-[-0.15em] border-b-2"
            >
              &nbsp;
            </motion.span>
          ) : (
            <motion.span
              key="filled"
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={springBouncy}
              className={`rounded-md px-1.5 ${correct ? "bg-success-bg text-success" : "bg-error-bg text-error line-through"}`}
            >
              {picked}
            </motion.span>
          )}
        </AnimatePresence>
      </span>
      {after}
    </h3>
  );
}

const optionStyles: Record<OptionState, string> = {
  idle: "bg-surface border-hairline hover:border-ink-2/40",
  correct: "bg-success-bg border-success text-success",
  wrong: "bg-error-bg border-error text-error",
  reveal: "bg-surface border-success text-success",
  dim: "bg-surface border-hairline opacity-45",
};

function OptionButton({
  label,
  shortcut,
  state,
  disabled,
  onSelect,
}: {
  label: string;
  shortcut: number;
  state: OptionState;
  disabled: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onSelect}
      disabled={disabled}
      aria-pressed={state === "correct" || state === "wrong"}
      className={`relative flex items-center justify-between rounded-2xl border-[1.5px] px-5 py-3.5 text-left text-[1.0625rem] font-medium transition-[background-color,border-color,color,opacity] duration-200 disabled:cursor-default ${optionStyles[state]}`}
      whileHover={disabled ? undefined : { scale: 1.01 }}
      whileTap={disabled ? undefined : { scale: 0.98, transition: { type: "spring", bounce: 0, duration: 0.15 } }}
      animate={
        state === "wrong"
          ? { x: [0, -7, 7, -4, 4, 0], transition: { type: "tween", duration: 0.4, ease: "easeOut" } }
          : state === "correct"
            ? { scale: [1, 1.03, 1], transition: { type: "tween", duration: 0.3, ease: "easeOut" } }
            : { x: 0, scale: 1 }
      }
    >
      <span lang="es">{label}</span>
      <span className="text-ink-2 relative flex items-center text-sm">
        {state === "correct" && <Burst />}
        {state === "correct" || state === "reveal" ? (
          <Icon path="M5 12.5l4.5 4.5L19 7.5" />
        ) : state === "wrong" ? (
          <Icon path="M6 6l12 12M18 6L6 18" />
        ) : (
          <kbd className="border-hairline rounded-md border px-1.5 font-sans text-xs pointer-coarse:hidden">
            {shortcut}
          </kbd>
        )}
      </span>
    </motion.button>
  );
}

function Icon({ path }: { path: string }) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden className="text-current">
      <path
        d={path}
        fill="none"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Results({
  score,
  total,
  next,
  onRestart,
}: {
  score: number;
  total: number;
  next: Props["next"];
  onRestart: () => void;
}) {
  const perfect = score === total;
  const message = perfect ? "¡Perfecto!" : score / total >= 0.6 ? "¡Muy bien!" : "¡Sigue practicando!";
  return (
    <div className="flex flex-col items-center px-8 pt-10 pb-8 text-center max-lg:px-6 max-lg:pt-4" role="status">
      <div className="relative mb-6">
        {perfect && (
          <span className="absolute inset-0 m-auto flex h-0 w-0 items-center justify-center">
            <Burst count={18} distance={110} size={9} delay={0.55} />
          </span>
        )}
        <ProgressRing value={score / total} accent="var(--ink)" size={132} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-tile-ink text-[2.5rem] leading-none font-bold tracking-tight tabular-nums">
            <CountUp to={score} />
            <span className="text-ink-2 text-xl font-semibold">/{total}</span>
          </span>
        </div>
      </div>
      <h3 className="type-title mb-2" lang="es">
        {message}
      </h3>
      <p className="text-ink-2 mb-8 max-w-xs">
        {perfect
          ? "You nailed every question. Progress saved."
          : "Progress saved. Review the examples on the left and try again to improve your best score."}
      </p>
      <div className="flex w-full flex-col gap-2.5">
        <Link
          href="/"
          transitionTypes={["nav-back"]}
          scroll={false}
          className="bg-tile-ink text-on-ink w-full rounded-full py-3.5 text-[0.9375rem] font-semibold transition-transform active:scale-[0.97]"
        >
          Back to topics
        </Link>
        <Link
          href={`/topic/${next.slug}`}
          transitionTypes={["nav-forward"]}
          className="text-tile-ink bg-tile-soft w-full rounded-full py-3.5 text-[0.9375rem] font-semibold transition-transform active:scale-[0.97]"
        >
          Next: <span className="italic">{next.word}</span> →
        </Link>
        <button
          type="button"
          onClick={onRestart}
          className="text-tile-ink hover:bg-tile-soft w-full rounded-full py-3.5 text-[0.9375rem] font-semibold transition-[transform,background-color] active:scale-[0.97]"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

/** Counts up from 0 on a critically damped spring, so the score lands rather than appears. */
function CountUp({ to }: { to: number }) {
  const value = useMotionValue(0);
  const rounded = useTransform(value, (v) => Math.round(v));
  useEffect(() => {
    const controls = animate(value, to, { type: "spring", bounce: 0, duration: 1.1, delay: 0.25 });
    return () => controls.stop();
  }, [to, value]);
  return <motion.span>{rounded}</motion.span>;
}

const burstColors = ["var(--success)", "var(--ink)", "var(--tile)"];

/** A small radial burst of particles plus a ripple ring: fires once, on the causal frame. */
function Burst({
  count = 12,
  distance = 52,
  size = 7,
  delay = 0,
}: {
  count?: number;
  distance?: number;
  size?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <span aria-hidden className="pointer-events-none absolute inset-0 m-auto h-0 w-0">
      <motion.span
        className="border-success absolute rounded-full border-2"
        style={{ width: distance, height: distance, left: -distance / 2, top: -distance / 2 }}
        initial={{ scale: 0.2, opacity: 0.9 }}
        animate={{ scale: 1.6, opacity: 0 }}
        transition={{ type: "tween", duration: 0.6, ease: [0.2, 0.8, 0.2, 1], delay }}
      />
      {Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const d = distance * (i % 2 ? 0.75 : 1.05);
        return (
          <motion.span
            key={i}
            className="absolute rounded-full"
            style={{ width: size, height: size, left: -size / 2, top: -size / 2, background: burstColors[i % 3] }}
            initial={{ x: 0, y: 0, scale: 1, opacity: 1 }}
            animate={{ x: Math.cos(angle) * d, y: Math.sin(angle) * d, scale: 0, opacity: 0 }}
            transition={{ type: "tween", duration: 0.75, ease: [0.15, 0.85, 0.3, 1], delay }}
          />
        );
      })}
    </span>
  );
}
