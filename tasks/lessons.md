# Lessons

- **Verify in `next dev`, not only `next start`.** Motion throws on 3+ keyframes with spring in dev; Next 16 instant-nav insights (params outside `<Suspense>`) only show in dev. Prod build passing ≠ clean.
- **Motion keyframe arrays need `type: "tween"` explicitly** — `MotionConfig` default spring is inherited otherwise.
- **AnimatePresence exit keeps old nodes interactive.** State transitions triggered from them must be idempotent (`setIndex(index + 1)`, not `i => i + 1`).
- **Click-through tests must wait for exit animations** (~1s) or target the last-rendered element.
- **Next 16 + cacheComponents keeps visited pages in a hidden `<Activity>` (state + DOM preserved).** Motion replays `initial` entrances when the page is re-shown, even if `initial` is now `false`. Use a CSS class that's only present while the intro plays.
- **`<AnimatePresence initial={false}>` propagates to every descendant of the first child**, skipping mount animations deep inside it (e.g. feedback bursts). Only use it where that's intended.
- **Turbopack dev sometimes misses `globals.css` writes made by scripts (python/prettier `--write`); the dev server keeps serving an older stylesheet** while `next build` is correct. (Earlier I wrongly blamed a CSS comment.) Fix: re-save the file with a normal edit; check by grepping the served CSS chunk.
- **Chrome extension tab may be `visibilityState: hidden` → rAF paused, animations frozen.** For motion verification use headless Playwright (cached Chromium in ~/Library/Caches/ms-playwright) and sample computed styles over time.
- **React `<ViewTransition enter>` on a wrapper inside a Suspense'd page didn't fire on nav** (types arrived, no animation). Shared-element `name` morphs work; for content entrance use Motion.
- **Fan-out content work needs a typed contract first.** Wrote `lib/types.ts` (slug union, `hue`, `group`) before spawning 4 content agents; each wrote its own `lib/content/<slug>.ts`, nobody touched shared files, registry swapped in at the end.
- **Quiz distractors must be wrong, not just different.** Agents caught several (e.g. *cuesta* in "¿Cuánto ___?", *sí* in "___ tienes tiempo") — always ask "is this option grammatical with another meaning?"
- **Back-navigation to a dashboard: use `scroll={false}` + scroll the target into view in `useLayoutEffect`** so the view-transition morph lands on a visible element.
- **Renaming storage keys loses user data** — migrate the legacy key on first read.
- **Satori (`next/og`) has no `inset`, only flexbox, and a thin default font** — draw glyphs as SVG shapes.
