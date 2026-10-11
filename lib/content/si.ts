import type { Topic } from "../types";

export const si: Topic = {
  slug: "si",
  word: "si",
  title: "Ways to use “si” / “sí”",
  tagline: "One little accent turns “if” into “yes”.",
  blurb: "If · yes · ¡sí que sí!",
  hue: 50,
  group: "small",
  rules: [
    {
      name: "If / whether",
      explanation: "Without an accent, “si” sets a condition or means “whether”.",
      example: "**Si** llueve, me quedo en casa.",
    },
    {
      name: "Protest “but…”",
      explanation: "At the start of an exclamation, it pushes back — like “but…!” or “come on, …!”.",
      example: "¡**Si** ya te lo dije!",
    },
    {
      name: "Yes",
      explanation: "With an accent, “sí” is simply “yes”.",
      example: "—¿Te apetece una caña? —**Sí**, claro.",
    },
    {
      name: "Emphatic sí",
      explanation: "Before a verb, “sí” stresses that something really is true, often as a contrast.",
      example: "Ella **sí** sabe cocinar.",
    },
    {
      name: "Himself / herself",
      explanation: "After a preposition, “sí” means “himself”, “herself” or “themselves”.",
      example: "Habla para **sí**.",
    },
  ],
  examples: [
    { es: "No sé **si** abren los domingos.", en: "I don’t know whether they open on Sundays.", rule: "If / whether" },
    { es: "¡**Si** son las tres de la mañana!", en: "But it’s three in the morning!", rule: "Protest “but…”" },
    { es: "—¿Has reservado mesa? —**Sí**, para las nueve.", en: "“Have you booked a table?” “Yes, for nine.”", rule: "Yes" },
    { es: "Yo no fumo, pero mi novio **sí**.", en: "I don’t smoke, but my boyfriend does.", rule: "Emphatic sí" },
    { es: "Siempre habla de **sí** mismo.", en: "He always talks about himself.", rule: "Himself / herself" },
  ],
  quiz: [
    {
      prompt: "No sé ___ viene mañana.",
      hint: "I don’t know whether he’s coming tomorrow.",
      options: ["si", "sí"],
      answer: "si",
      explanation: "“Whether” is “si” without an accent.",
    },
    {
      prompt: "—¿Quieres un café? —___, gracias.",
      hint: "“Do you want a coffee?” “Yes, thanks.”",
      options: ["Si", "Sí"],
      answer: "Sí",
      explanation: "“Yes” always carries the accent: “sí”.",
    },
    {
      prompt: "Mi hermano no baila, pero yo ___ bailo.",
      hint: "My brother doesn’t dance, but I do.",
      options: ["si", "sí"],
      answer: "sí",
      explanation: "Emphatic “sí” stresses the contrast, so it needs the accent.",
    },
    {
      prompt: "What is “si” doing here? — «¡Si te lo dije ayer!»",
      options: ["If / whether", "Protest “but…”", "Yes"],
      answer: "Protest “but…”",
      explanation: "There’s no condition and no accent — it’s pushing back: “But I told you yesterday!”",
    },
    {
      prompt: "What is “sí” doing here? — «Lo quiere todo para sí.»",
      options: ["Yes", "Emphatic sí", "Himself / herself"],
      answer: "Himself / herself",
      explanation: "After the preposition “para”, “sí” means “himself/herself”: he wants it all for himself.",
    },
  ],
};
