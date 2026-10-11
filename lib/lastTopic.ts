"use client";

import { useEffect } from "react";

// The topic most recently open, so the dashboard can bring its tile into view on return.
let lastTopic: string | null = null;

export function getLastTopic() {
  return lastTopic;
}

/** Marks a topic page as the one the dashboard should return to. */
export function LastTopicMarker({ slug }: { slug: string }) {
  useEffect(() => {
    lastTopic = slug;
  }, [slug]);
  return null;
}
