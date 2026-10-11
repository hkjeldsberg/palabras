# palabras

**Master tricky Spanish words in a few focused minutes.**

palabras is a small, focused web app for beginner-to-intermediate learners heading to Spain. Each topic takes one deceptively simple word (*se*, *por*, *ya*, *quedar*, *venga*…) or a pair English squeezes into one (*ser / estar*), explains its different jobs in plain English, shows it in real sentences, and ends with a quick quiz. One colour per word, so the rules stick.

It runs in any browser, adapts to phones, and can be installed to the home screen as an app.

---

## What's inside

**53 topics** in four sections:

| Section | Topics |
| --- | --- |
| **Small words** (23) | se · por · ya · me · para · lo · le · que · como · si · de · a · mismo · pues · en · con · sin · ni · tan · aunque · cuando · donde · nos |
| **Verbs** (13) | quedar · echar · dar · llevar · hacer · tener · poner · pasar · sacar · coger · volver · acabar · haber |
| **Everyday expressions** (10) | vale · tal · nada · hecho · venga · vaya · anda · hombre · bueno · igual |
| **Pairs** (7) | ser / estar · saber / conocer · pedir / preguntar · llevar / traer · ir / venir · pero / sino · por / para |

**Pairs** are contrast topics: two words where English uses one. Their tiles stack both words, and their quizzes make you choose between them.

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
  WordMark.tsx                   The big word (pairs stack their two words)
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
   - `hue` (0–360): pick one that differs clearly from the tiles to its left and above
   - `group`: `"small"`, `"verbs"`, `"everyday"` or `"pairs"`
   - For a pair, set `word` to `"a / b"` (for example `"ser / estar"`) and the title to `“A” or “B”?`
   - `rules`, `examples`, `quiz`
2. Add the slug to `topicSlugs` in `lib/types.ts`, in the position you want it on the dashboard.
3. Import it in `lib/topics.ts` and add it to `bySlug` (hyphenated slugs export camelCase names, e.g. `serEstar`).

Content conventions:

- Wrap the target word in Spanish strings with `**double asterisks**` so it gets highlighted.
- Mark a quiz blank with `___`.
- Every example's `rule` must match a rule `name`.
- **Wrong options must be truly wrong.** If a distractor would make a grammatical sentence with a different meaning, it's a bug.

---

## Potential extensions

### More words

Everything from the first wish list is now built. Next candidates:

**Small words**

- **hasta / desde**: "until", "even" (*hasta mi abuela lo sabe*), *desde* vs *desde hace* (*vivo aquí desde 2020 / desde hace dos años*).
- **también / tampoco**: "me too" vs "me neither", and why *yo tampoco* answers a negative.
- **muy / mucho**: before adjectives vs nouns and verbs (*muy cansado*, *mucho trabajo*, *me gusta mucho*).
- **todavía / aún**: "still" vs "not yet" (*todavía no*), and *aún* vs *aun*.
- **qué / cuál**: which question word goes before a noun, before *ser*, and in choices.
- **algo / alguien / alguno**: and their negatives *nada / nadie / ninguno*, with the double negative.
- **mientras**: "while" (indicative) vs "as long as" (subjunctive).

**Verbs**

- **dejar**: to leave, to let (*déjame ver*), to lend, *dejar de* (to stop doing).
- **salir**: to go out, to turn out (*salió bien*), to date (*salir con*), to appear in (*salir en la tele*).
- **caer**: to fall, *caer bien/mal* (to like or dislike someone), *caer en la cuenta*.
- **tocar**: to touch, to play an instrument, "your turn" (*te toca*), to win (*me tocó la lotería*).
- **meter / meterse**: to put in, *meterse en* (to get involved in), *meter la pata* (to put your foot in it).
- **parecer / parecerse**: to seem, *¿qué te parece?*, to look like someone.
- **soler**: "usually" (*suelo cenar tarde*).

**Everyday expressions**

- **a ver**: "let's see", "OK, listen", calling attention.
- **claro**: "of course", *claro que sí/no*, *¡claro!* as agreement.
- **qué va**: "no way / not at all".
- **menos mal**: "thank goodness".
- **ojalá**: "hopefully / I wish", with the subjunctive.
- **o sea / en plan**: "I mean", "like" (young Spain).
- **tío / tía**: friendly address, "mate".

**Pairs**

- ver / mirar · oír / escuchar · tocar / jugar · salir / irse · aquí / ahí / allí · tú / usted · desde / desde hace

### Features

- **Audio pronunciation** for examples (Web Speech API or recorded clips).
- **Spaced repetition**: a daily "review" deck that resurfaces questions you got wrong.
- **Offline support**: a service worker that caches all topic pages, which suits the local-only data model.
- **Mixed quiz**: random questions across completed topics.
- **Search and filter** on the dashboard (by group, by not-started or completed).
- **Cross-device sync**: would require moving away from local-only storage (out of scope by design).
- **Latin American variants**: per-topic notes where usage differs from Spain (*coger*, *vale*, *quedar*, leísmo).
