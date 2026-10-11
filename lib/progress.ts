"use client";

import { useSyncExternalStore } from "react";
import type { TopicSlug } from "./types";

export interface TopicProgress {
  bestScore: number;
  total: number;
  completedAt: string;
}

export type Progress = Partial<Record<TopicSlug, TopicProgress>>;

const STORAGE_KEY = "palabras:progress:v1";
// Saved before the app was renamed; migrated once so nobody loses progress.
const LEGACY_KEY = "quick-bites:progress:v1";
const EMPTY: Progress = {};

const listeners = new Set<() => void>();
let cachedRaw: string | null | undefined;
let cachedValue: Progress = EMPTY;

function readRaw(): string | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw !== null) return raw;
    const legacy = window.localStorage.getItem(LEGACY_KEY);
    if (legacy !== null) {
      window.localStorage.setItem(STORAGE_KEY, legacy);
      window.localStorage.removeItem(LEGACY_KEY);
    }
    return legacy;
  } catch {
    return null;
  }
}

function getSnapshot(): Progress {
  const raw = readRaw();
  // Return a stable reference unless storage actually changed.
  if (raw !== cachedRaw) {
    cachedRaw = raw;
    try {
      cachedValue = raw ? (JSON.parse(raw) as Progress) : EMPTY;
    } catch {
      cachedValue = EMPTY;
    }
  }
  return cachedValue;
}

function getServerSnapshot(): Progress | null {
  return null;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) listener();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Returns `null` until hydrated from localStorage on the client. */
export function useProgress(): Progress | null {
  return useSyncExternalStore<Progress | null>(subscribe, getSnapshot, getServerSnapshot);
}

export function saveResult(slug: TopicSlug, score: number, total: number) {
  const current = getSnapshot();
  const prev = current[slug];
  const next: Progress = {
    ...current,
    [slug]: {
      bestScore: Math.max(score, prev?.bestScore ?? 0),
      total,
      completedAt: new Date().toISOString(),
    },
  };
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage unavailable (private mode, quota) — progress just won't persist.
  }
  listeners.forEach((l) => l());
}

export function resetProgress() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch {}
  listeners.forEach((l) => l());
}
