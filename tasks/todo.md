# Spanish Grammar Quick-Bites — Implementation Plan

- [x] Scaffold Next.js (App Router) + TypeScript + Tailwind in project root (all routes prerendered static)
- [x] Add Framer Motion (`motion` package)
- [x] Content data: `lib/topics.ts` — se/por/ya/me intro bullets, 4–5 examples, 4–5 quiz questions
- [x] Progress store: `lib/progress.ts` — localStorage (try/catch), hydrate on load, `useProgress` hook via useSyncExternalStore
- [x] Dashboard `/`: hero + 2x2 topic grid, progress ring / checkmark per card
- [x] Topic route `/topic/[slug]` (static params): split pane — left intro + examples, right quiz
- [x] Quiz: dropdown-style choice chips, instant green/red feedback w/ springs, score + save on completion
- [x] Apple design: system font, size-specific tracking, translucent sticky nav, soft shadows, critically damped springs, reduced-motion/transparency support
- [x] Verify: `npm run build` (static export), lint, run in browser

## Review
- Next 16.4 + cacheComponents: `dynamicParams` segment config not allowed — rely on `generateStaticParams` only.
- Kept Vercel-native build instead of `output: 'export'`; build output shows `/`, `/topic/{se,por,ya,me}` prerendered.
- Verified in Chrome: quiz green/red feedback, blank fill-in, keyboard (1–9, Enter), results screen, localStorage persistence → dashboard ring + check, no console errors. Lint + build clean.
- Fixed: progress ring showed a dot at 0% (round linecap).
- Not done: dark-mode visual pass, deployment.

## 2026-10-10 — 18 new topics

- [x] `lib/types.ts` contract (slug union, `hue`, `group`); topics split into `lib/content/<slug>.ts`, `lib/topics.ts` is the registry
- [x] 18 topics written by 4 parallel agents (para, lo, le, que, como, si, de, a, mismo, pues, vale, quedar, echar, dar, llevar, tal, nada, hecho)
- [x] Hue-driven OKLCH theme (`.theme` + `--h`), light + dark
- [x] Dashboard grouped (Small / Everyday), CSS scroll-linked tile reveal, intro only on first row
- [x] "Next: word →" on quiz results
- [x] Back from a lower tile scrolls it into view before the morph
- [x] Long tile words scale down (no overflow at 1280/1440/1920)
- [x] Verified headless: 22 tiles, all 22 topic pages render header + quiz, back-morph lands in view, no console errors; tsc, lint, build clean
- [ ] Review Spain-specific quiz calls listed in TODO.md

## 2026-10-11 — Mobile + installable web app

- [x] Viewport: `viewport-fit=cover`, theme colours (light/dark), `touch-action: manipulation`, no tap highlight
- [x] Container-query tile + hero word sizing (word scales with its box, any width)
- [x] Dashboard on phones: 2-col grid, 20px gutters, smaller radii, safe-area top
- [x] Topic page on phones: floating translucent back pill (no browser chrome in standalone), compact hero, stacked examples
- [x] Mobile quiz = draggable bottom sheet (apple-design §2–9): header-only drag, velocity projection to snap, rubber-band, spring with release velocity, scrim dims, tap/Esc toggles, body scroll lock. Desktop keeps the sticky side pane (same single Quiz instance)
- [x] "Test yourself" CTA after examples (phones) opens the sheet
- [x] PWA: `app/manifest.ts`, generated icons (`app/icon.tsx`, `app/apple-icon.tsx`), `appleWebApp` metadata
- [x] Verify: headless at 390×844 (iPhone) + 1440×900, sheet drag/flick/tap, no overflow, tsc/lint/build
- [x] Renamed to **palabras** (title, manifest, home-screen name, package); progress key migrated from `quick-bites:` → `palabras:`
- [x] New icon (agent): heavy SVG "p" on the green tile + three colour dots; maskable-safe; 32px variant simplified
- [x] README: about, experience, install, structure, adding a topic, potential extensions

### Review
- Phone 390×844: no horizontal overflow, no tile-word overflow; sheet peek at 776px. Tap opens (page scroll locked), fast drag down closes, slow short drag up snaps back, fast flick up opens, scrim tap and Esc close.
- Desktop 1440: unchanged side pane, no drag handle.
- Manifest + icons 200; tsc, lint, build clean.

## 2026-10-11 — 31 more topics (53 total), four sections

- [x] Sections: Small words (23) · Verbs (13, moved quedar/echar/dar/llevar here) · Everyday expressions (10) · Pairs (7, new topic kind)
- [x] `TopicGroup` = small | verbs | everyday | pairs; pair `word` = "a / b", stacked by `WordMark`
- [x] Word size from a fit formula on the longest line (container-query units), replaces fixed steps
- [x] Hues hand-picked: each new tile ≥ ~75° from its left and upper neighbour
- [x] Registry generated from `topicSlugs` (hyphenated slugs → camelCase exports)
- [x] 7 parallel content agents; content check: every example rule matches, every answer in options, ≤1 blank, 4–5 rules/questions → clean
- [x] Verified: 53 tiles at 390/1280/1440/1920, no word or page overflow, all 53 pages render with quiz, no page errors; tsc/lint/build clean
- [x] README: four-section topic table, pair topics, updated "adding a topic", new extension wish list (only unbuilt words)
