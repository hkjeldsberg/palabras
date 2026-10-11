# palabras

**Master tricky Spanish words in a few focused minutes.**

palabras is a small, focused web app for beginner-to-intermediate learners heading to Spain. Each topic takes one deceptively simple word (*se*, *por*, *ya*, *que*, *quedar*…), explains its different jobs in plain English, shows it in real sentences, and ends with a quick quiz. One colour per word, so the rules stick.

It runs in any browser, adapts to phones, and can be installed to the home screen as an app.

---

## What's inside

**22 topics** in two groups:

| Small words | Everyday words |
| --- | --- |
| se · por · ya · me · para · lo · le · que · como · si · de · a · mismo · pues | vale · quedar · echar · dar · llevar · tal · nada · hecho |

Every topic has:

- **How it works**: 4–5 rules, each with a one-line explanation and an example.
- **In context**: 4–5 real-world sentences with English translations and the target word highlighted.
- **Quick quiz**: 4–5 fill-in-the-blank or "what does it mean here?" questions. Each answer gets instant feedback and a short explanation.

Progress (best score per topic) is saved in the browser and shown on the dashboard as a score or a checkmark.

## Experience

The design follows the project's [apple-design skill](skills/apple-design/SKILL.md): calm, colour-coded and physical.

- **Tile → topic morph.** Tapping a tile expands it into the topic page header, and the big word flies across on its own layer. Going back reverses it. Built with React `<ViewTransition>`.
- **Spring motion everywhere.** Animations use critically damped springs, with a bit of bounce only when a gesture carries momentum. CSS transitions use `linear()` curves sampled from the same spring model.
- **Desktop:** tiles tilt toward the pointer with a moving glare and parallax. The quiz sits in a sticky side pane next to the reference material.
- **Phone:** two-column tiles sized with container queries. The quiz lives in a **draggable bottom sheet**:
  - Drag it from the header.
  - When you let go, it projects where the flick was heading and snaps open or closed on a spring that starts at your release speed.
  - It rubber-bands at the ends, and a scrim dims the page as it opens.
- **Delight, sparingly.** Headline words come into focus one by one, a highlighter sweeps behind target words, correct answers get a particle burst, and the score counts up.
- **Accessible.**
  - Reduced motion: slides and springs become cross-fades.
  - Reduced transparency: frosted surfaces become solid.
  - Increased contrast: surfaces gain a solid border.
  - Full keyboard support: `1`–`9` picks an answer, `Enter` moves on, `Esc` closes the sheet.
- **Light and dark mode.** Each topic sets one OKLCH hue, and its tile, wash and ink colours derive from it, so all 22 stay equally readable in both modes.

## Install as an app

palabras has a web app manifest and generated icons:

- **iPhone / iPad (Safari):** Share → *Add to Home Screen*
- **Android / desktop Chrome:** the install icon in the address bar, or menu → *Install palabras*

It opens full-screen, and the layout respects the notch and home indicator (safe-area insets).

## Tech

- **Next.js 16** (App Router, Cache Components, Turbopack) · **React 19.3** · **TypeScript**
- **Tailwind CSS v4** · **Motion** (Framer Motion) for springs and gestures
- **No database or accounts.** All progress lives in `localStorage` under the key `palabras:progress:v1`.
- Every page is pre-rendered at build time, so it's ready for static hosting (for example Vercel).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Project structure

```
app/
  page.tsx                 Dashboard (hero + topic grid)
  topic/[slug]/page.tsx    Topic page (hero, rules, examples, quiz)
  manifest.ts              Web app manifest
  icon.tsx, apple-icon.tsx Generated favicon and app icons
  globals.css              Design tokens, themes, intro, scroll-reveal, sheet and view-transition CSS
components/
  TopicGrid.tsx, TopicTile.tsx   Dashboard sections and tilting tiles
  Quiz.tsx, QuizDock.tsx         Quiz, and the side pane / bottom sheet around it
  HeroTitle.tsx, Highlight.tsx, Reveal.tsx, RuleChips.tsx, ProgressRing.tsx
lib/
  types.ts                 Topic contract and list of slugs
  topics.ts                Topic registry (order, lookup, "next topic")
  content/<slug>.ts        One file per topic
  progress.ts              localStorage-backed progress store
  intro.ts, lastTopic.ts, useMediaQuery.ts, wordSize.ts, appIcon.tsx
skills/apple-design/       The design guidelines this app follows
```

## Adding a topic

1. Create `lib/content/<slug>.ts` that exports a `Topic` (see `lib/types.ts`):
   - `word`, `title`, `tagline`, `blurb`
   - `hue` (0–360), and `group` (`"small"` or `"everyday"`)
   - `rules`, `examples`, `quiz`
2. Add the slug to `topicSlugs` in `lib/types.ts`, in the position you want it on the dashboard.
3. Import it in `lib/topics.ts` and add it to `bySlug`.

Content conventions:

- Wrap the target word in Spanish strings with `**double asterisks**` so it gets highlighted.
- Mark a quiz blank with `___`.
- Every example's `rule` must match a rule `name`.
- **Wrong options must be truly wrong.** If a distractor would make a grammatical sentence with a different meaning, it's a bug.

---

## Potential extensions

### More words

**Small words**

- **en, con, sin**: *en* for "on/at/in" (*en la mesa, en verano*); *con* and *conmigo/contigo*; *sin* + infinitive.
- **ni**: *ni… ni…*, *ni siquiera*, *¡ni hablar!*
- **tan / tanto**: comparisons (*tan alto como*), "so much" (*¡tanto trabajo!*), *tanto… como…*.
- **sino / pero**: "but rather" vs "but". A natural contrast quiz.
- **aunque**: indicative (fact) vs subjunctive (hypothetical or conceded).
- **cuando / cuándo, donde / dónde**: relative vs question forms, and *cuando* + subjunctive for the future.
- **nos / os / les**: plural object pronouns, and *os* as the Spain-specific "you all".

**Everyday verbs with many lives**

- **hacer**: weather (*hace frío*), time ago (*hace dos años*), *hacerse* (to become), *hacer falta*.
- **tener**: *tener que*, *tener ganas de*, ages and feelings (*tengo hambre*), *tener razón*.
- **poner / ponerse**: to put, to order (*¿me pones…?*), to become (*ponerse nervioso*), to put on clothes.
- **pasar**: to happen (*¿qué pasa?*), to spend time (*pasarlo bien*), to pass by, *pasarse* (to overdo it).
- **sacar**: to take out, to get a grade (*sacar un 8*), to take photos, to buy tickets.
- **coger** (Spain): to take or catch (*coger el bus*). Includes a heads-up that it's vulgar in parts of Latin America.
- **volver / acabar / soler**: *volver a* + infinitive (to do again), *acabar de* (to have just), *suelo* (I usually).
- **haber / hay**: *hay* vs *está*, *hay que*, *había*.

**Spanish-from-Spain conversation glue**

- **venga**: "come on", "OK, bye", "let's go".
- **vaya**: "wow", "what a…" (*¡vaya día!*), "oh well".
- **anda**: surprise, disbelief, "come on".
- **hombre / tío**: emphasis and friendly address.
- **bueno / pues / o sea / igual**: fillers, and *igual* = "maybe".

**Contrast topics**, a new topic type that teaches a pair:

- ser vs estar · saber vs conocer · pedir vs preguntar · llevar vs traer · ir vs venir · pero vs sino · por vs para (a combined revision quiz)

### Features

- **Audio pronunciation** for examples (Web Speech API or recorded clips).
- **Spaced repetition**: a daily "review" deck that resurfaces questions you got wrong.
- **Offline support**: a service worker that caches all topic pages, which suits the local-only data model.
- **Mixed quiz**: random questions across completed topics.
- **Search and filter** on the dashboard (by group, by not-started or completed).
- **Cross-device sync**: would require moving away from local-only storage (out of scope by design).
- **Latin American variants**: per-topic notes where usage differs from Spain (*coger*, *vale*, *quedar*, leísmo).
