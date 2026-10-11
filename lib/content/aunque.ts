import type { Topic } from "../types";

export const aunque: Topic = {
  slug: "aunque",
  word: "aunque",
  title: "Ways to use “aunque”",
  tagline: "Although, even if, even though — the verb after it decides.",
  blurb: "Although · even if · but",
  hue: 10,
  group: "small",
  rules: [
    {
      name: "Known fact",
      explanation: "With the indicative, “aunque” = although: you state something you know is true.",
      example: "**Aunque** llueve, vamos a salir.",
    },
    {
      name: "Even if",
      explanation: "With the subjunctive, it’s hypothetical: you don’t know if it will happen, and it doesn’t matter.",
      example: "**Aunque** llueva mañana, vamos a salir.",
    },
    {
      name: "Conceded fact",
      explanation: "Subjunctive with something already known: “even though, I grant you” — it’s true, but irrelevant.",
      example: "**Aunque** sea caro, lo compro.",
    },
    {
      name: "Meaning “but”",
      explanation: "After a full sentence, “aunque” softly adds a contrast, like “but” or “though”.",
      example: "El piso es pequeño, **aunque** tiene mucha luz.",
    },
  ],
  examples: [
    { es: "**Aunque** estoy cansado, voy al gimnasio.", en: "Although I’m tired, I’m going to the gym.", rule: "Known fact" },
    { es: "**Aunque** me lo pidas, no te lo voy a contar.", en: "Even if you ask me, I’m not going to tell you.", rule: "Even if" },
    { es: "—Es muy tarde. —Ya, pero **aunque** sea tarde, quiero un café.", en: "“It’s very late.” “I know, but even though it’s late, I want a coffee.”", rule: "Conceded fact" },
    { es: "La comida estaba rica, **aunque** un poco salada.", en: "The food was tasty, though a bit salty.", rule: "Meaning “but”" },
    { es: "**Aunque** no hablaba español, se entendía con todo el mundo.", en: "Although he didn’t speak Spanish, he got along with everyone.", rule: "Known fact" },
  ],
  quiz: [
    {
      prompt: "No sé si mañana va a llover, pero aunque ___, iremos a la playa.",
      hint: "I don’t know if it’ll rain tomorrow, but even if it does, we’ll go to the beach.",
      options: ["llueve", "llueva", "llovía"],
      answer: "llueva",
      explanation: "You don’t know whether it will rain, so it’s hypothetical: “aunque” + subjunctive.",
    },
    {
      prompt: "Ayer, aunque ___ cansada, María fue a trabajar.",
      hint: "Yesterday, although she was tired, María went to work.",
      options: ["estaba", "esté", "estar"],
      answer: "estaba",
      explanation: "A known past fact takes the indicative; present subjunctive “esté” can’t refer to yesterday.",
    },
    {
      prompt: "What is “aunque” doing here? — «—Este vino es carísimo. —Ya, aunque sea caro, me lo llevo.»",
      options: ["Known fact", "Conceded fact", "Meaning “but”"],
      answer: "Conceded fact",
      explanation: "Both speakers know it’s expensive; the subjunctive says “granted, but I don’t care”.",
    },
    {
      prompt: "La película está bien, ___ es un poco larga.",
      hint: "The film is good, though it’s a bit long.",
      options: ["aunque", "sino", "ni"],
      answer: "aunque",
      explanation: "“Aunque” after a full sentence adds a soft “but”; “sino” needs a negative before it, and “ni” makes no sense here.",
    },
    {
      prompt: "What is “aunque” doing here? — «El hotel es barato, aunque está lejos del centro.»",
      options: ["Even if", "Conceded fact", "Meaning “but”"],
      answer: "Meaning “but”",
      explanation: "It follows a complete sentence and adds a contrast: cheap, but far from the centre.",
    },
  ],
};
