"use client";

import { useEffect, useState } from "react";

// Survives client-side navigations, resets on full reload.
let introPlayed = false;
const INTRO_MS = 2000;

/**
 * True only while the dashboard's first-load intro is playing. Returning via a
 * view transition must render final state immediately, or the morph would land
 * on an invisible, still-animating element.
 *
 * The flag also flips to false after the intro: Next keeps visited pages alive
 * in a hidden <Activity>, preserving state, and Motion replays `initial` when
 * the page is shown again — so a stale `true` would replay the intro on Back.
 */
export function useIntro(): boolean {
  const [play, setPlay] = useState(() => !introPlayed);
  useEffect(() => {
    introPlayed = true;
    if (!play) return;
    const t = setTimeout(() => setPlay(false), INTRO_MS);
    return () => clearTimeout(t);
  }, [play]);
  return play;
}
