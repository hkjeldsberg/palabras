"use client";

import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { animate, motion, useDragControls, useMotionValue, useTransform, type PanInfo } from "motion/react";
import { Quiz, type QuizProps } from "./Quiz";
import { useMediaQuery } from "@/lib/useMediaQuery";

const OPEN_EVENT = "quiz:open";

// Apple's momentum projection (apple-design §6): where a flick would come to rest.
function project(velocity: number, decelerationRate = 0.998) {
  return ((velocity / 1000) * decelerationRate) / (1 - decelerationRate);
}

/**
 * The quiz, placed for the device: a sticky side pane on desktop, a draggable bottom
 * sheet on phones. One Quiz instance either way, so progress survives a resize.
 */
export function QuizDock(props: QuizProps) {
  const desktop = useMediaQuery("(min-width: 1024px)", true);
  const sheetId = useId();
  const dock = useRef<HTMLDivElement>(null);
  const sheet = useRef<HTMLDivElement>(null);
  const controls = useDragControls();
  const dragged = useRef(false);

  // y = 0 is the peeking state; y = -travel is fully open.
  const y = useMotionValue(0);
  const [travel, setTravel] = useState(0);
  const [open, setOpen] = useState(false);
  const scrim = useTransform(y, (v) => (travel ? Math.min(1, Math.max(0, -v / travel)) : 0));

  useLayoutEffect(() => {
    if (desktop) return;
    const measure = () => setTravel(sheet.current?.offsetTop ?? 0);
    measure();
    const ro = new ResizeObserver(measure);
    if (dock.current) ro.observe(dock.current);
    return () => ro.disconnect();
  }, [desktop]);

  const snap = useCallback(
    (toOpen: boolean, velocity = 0) => {
      setOpen(toOpen);
      // Bounce only when a flick carried momentum into the snap (apple-design §4).
      animate(y, toOpen ? -travel : 0, {
        type: "spring",
        bounce: velocity ? 0.18 : 0,
        duration: 0.45,
        velocity,
      });
    },
    [travel, y],
  );

  // Back to a plain pane when the viewport grows to desktop.
  useEffect(() => {
    if (!desktop) return;
    y.set(0);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing to an external media query
    setOpen(false);
  }, [desktop, y]);

  // "Test yourself" buttons elsewhere on the page open the sheet.
  useEffect(() => {
    const onOpen = () => (desktop ? sheet.current?.scrollIntoView({ behavior: "smooth" }) : snap(true));
    window.addEventListener(OPEN_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_EVENT, onOpen);
  }, [desktop, snap]);

  // While open on a phone: Esc closes, and the page underneath stops scrolling.
  useEffect(() => {
    if (desktop || !open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && snap(false);
    window.addEventListener("keydown", onKey);
    const html = document.documentElement;
    const prev = html.style.overflow;
    html.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      html.style.overflow = prev;
    };
  }, [desktop, open, snap]);

  const onDragEnd = (_: PointerEvent, info: PanInfo) => {
    const v = info.velocity.y;
    // Choose the snap point nearest to where the gesture is *going*, not where it let go.
    const projected = y.get() + project(v);
    snap(projected < -travel / 2, v);
  };

  const handleProps = desktop
    ? undefined
    : {
        role: "button",
        tabIndex: 0,
        "aria-expanded": open,
        "aria-controls": sheetId,
        "aria-label": open ? "Collapse quiz" : "Expand quiz",
        onPointerDown: (e: React.PointerEvent) => {
          dragged.current = false;
          controls.start(e);
        },
        onClick: () => {
          if (!dragged.current) snap(!open);
        },
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key !== "Enter" && e.key !== " ") return;
          e.preventDefault();
          e.stopPropagation(); // keep Enter from also advancing the quiz
          snap(!open);
        },
      };

  return (
    <>
      {/* Dim to focus: the scrim tracks the sheet 1:1 and taps through to close. */}
      {!desktop && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-40 bg-black/35 lg:hidden"
          style={{ opacity: scrim, pointerEvents: open ? "auto" : "none" }}
          onClick={() => snap(false)}
        />
      )}
      <div ref={dock} className="quiz-dock">
        <motion.div
          ref={sheet}
          id={sheetId}
          className="quiz-sheet"
          style={{ y }}
          drag={desktop ? false : "y"}
          dragControls={controls}
          dragListener={false}
          dragConstraints={{ top: -travel, bottom: 0 }}
          dragElastic={0.12}
          dragMomentum={false}
          onDragStart={() => (dragged.current = true)}
          onDragEnd={onDragEnd}
        >
          <Quiz {...props} handleProps={handleProps} expanded={open} />
        </motion.div>
      </div>
    </>
  );
}

/** Phone-only call to action that opens the quiz sheet. */
export function OpenQuizButton() {
  return (
    <motion.button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      whileTap={{ scale: 0.97 }}
      className="bg-tile-ink text-on-ink mt-10 w-full rounded-full py-4 text-[1.0625rem] font-semibold lg:hidden"
    >
      Test yourself
    </motion.button>
  );
}
