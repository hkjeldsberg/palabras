import type { Topic } from "../types";

export const sin: Topic = {
  slug: "sin",
  word: "sin",
  title: "Ways to use “sin”",
  tagline: "Without — and a couple of phrases you’ll hear every day.",
  blurb: "Without · sin que · sin embargo",
  hue: 40,
  group: "small",
  rules: [
    {
      name: "Without + noun",
      explanation: "“Without” something, just like in English.",
      example: "Un café **sin** azúcar, por favor.",
    },
    {
      name: "Sin + infinitive",
      explanation: "“Without doing” uses the infinitive, never the -ing form.",
      example: "Se fue **sin** decir adiós.",
    },
    {
      name: "Sin que + subjunctive",
      explanation: "When someone else is involved, use “sin que” + subjunctive.",
      example: "Salimos **sin** que nadie nos viera.",
    },
    {
      name: "Set phrases",
      explanation: "Fixed expressions like “sin embargo” (however) and “sin duda” (no doubt).",
      example: "**Sin** embargo, el hotel estaba genial.",
    },
  ],
  examples: [
    { es: "¿Tienes cerveza **sin** alcohol?", en: "Do you have alcohol-free beer?", rule: "Without + noun" },
    { es: "Entré en casa **sin** hacer ruido.", en: "I came into the house without making a noise.", rule: "Sin + infinitive" },
    { es: "Me lo llevo **sin** que lo sepa mi madre.", en: "I’ll take it without my mum knowing.", rule: "Sin que + subjunctive" },
    { es: "Es, **sin** duda, la mejor paella del barrio.", en: "It’s without a doubt the best paella in the neighbourhood.", rule: "Set phrases" },
  ],
  quiz: [
    {
      prompt: "Se fue sin ___ nada.",
      hint: "He left without saying anything.",
      options: ["decir", "dice", "diciendo"],
      answer: "decir",
      explanation: "After “sin” the verb stays in the infinitive — “sin diciendo” is a classic mistake.",
    },
    {
      prompt: "Lo hice sin que mis padres lo ___.",
      hint: "I did it without my parents knowing.",
      options: ["supieran", "sabían", "saber"],
      answer: "supieran",
      explanation: "“Sin que” always takes the subjunctive; in the past that’s “supieran”.",
    },
    {
      prompt: "Una tortilla ___ cebolla, por favor.",
      hint: "A Spanish omelette without onion, please.",
      options: ["sin", "sin que", "ni"],
      answer: "sin",
      explanation: "Before a plain noun you just need “sin”; “sin que” needs a verb.",
    },
    {
      prompt: "What is “sin” doing here? — «Es caro; sin embargo, merece la pena.»",
      options: ["Sin + infinitive", "Sin que + subjunctive", "Set phrases"],
      answer: "Set phrases",
      explanation: "“Sin embargo” is a fixed phrase meaning “however”.",
    },
    {
      prompt: "What is “sin” doing here? — «No puedo vivir sin ver el mar.»",
      options: ["Without + noun", "Sin + infinitive", "Set phrases"],
      answer: "Sin + infinitive",
      explanation: "“Ver” is an infinitive: without seeing the sea.",
    },
  ],
};
