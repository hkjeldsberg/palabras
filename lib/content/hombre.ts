import type { Topic } from "../types";

export const hombre: Topic = {
  slug: "hombre",
  word: "hombre",
  title: "Ways to use “hombre”",
  tagline: "Not always about a man — and said to women too.",
  blurb: "¡hombre, claro! · ¡hombre, Juan! · hombre, tampoco…",
  hue: 300,
  group: "everyday",
  rules: [
    {
      name: "Of course",
      explanation: "Adds emphasis to an obvious “yes” — “well, obviously!” — and in Spain it’s said to women too.",
      example: "—¿Vienes a la fiesta? —¡**Hombre**, claro!",
    },
    {
      name: "Come on (protest)",
      explanation: "A mild, friendly protest — “come on, don’t be like that”.",
      example: "**Hombre**, no te pongas así.",
    },
    {
      name: "Surprise on meeting",
      explanation: "Greets someone you didn’t expect to see — friends might also say “¡tío!” or “¡tía!”.",
      example: "¡**Hombre**, Juan! ¡Cuánto tiempo!",
    },
    {
      name: "Softening disagreement",
      explanation: "Cushions a “not really” so it sounds less blunt — “well…”.",
      example: "**Hombre**, tampoco es para tanto.",
    },
  ],
  examples: [
    {
      es: "—¿Me ayudas con la mudanza, Laura? —¡**Hombre**, claro! ¿A qué hora?",
      en: "“Will you help me move, Laura?” “Of course! What time?”",
      rule: "Of course",
    },
    {
      es: "**Hombre**, no te enfades, que era una broma.",
      en: "Come on, don’t get angry — it was a joke.",
      rule: "Come on (protest)",
    },
    {
      es: "¡**Hombre**, Marta! ¿Qué haces tú por aquí?",
      en: "Marta! What a surprise — what are you doing here?",
      rule: "Surprise on meeting",
    },
    {
      es: "—Este piso es carísimo. —**Hombre**, para estar en el centro, no está mal.",
      en: "“This flat is really expensive.” “Well, for the city centre, it’s not bad.”",
      rule: "Softening disagreement",
    },
  ],
  quiz: [
    {
      prompt: "Hombre, tampoco es ___ tanto.",
      hint: "Well, it’s not that big a deal.",
      options: ["para", "por", "de"],
      answer: "para",
      explanation: "The fixed phrase is “no es para tanto” — it’s not that bad.",
    },
    {
      prompt: "Hombre, no te ___ así, que solo era una broma.",
      hint: "Come on, don’t get like that — it was only a joke.",
      options: ["pongas", "pones", "poner"],
      answer: "pongas",
      explanation: "Negative commands use the subjunctive: “no te pongas”.",
    },
    {
      prompt: "What does “hombre” mean here? — «—¿Te gusta el jamón? —¡Hombre, claro! Me encanta.»",
      options: ["Of course / obviously", "Come on, don’t be like that", "What a surprise to see you!"],
      answer: "Of course / obviously",
      explanation: "With “claro” and “me encanta”, it stresses an obvious yes.",
    },
    {
      prompt: "What does “hombre” mean here? — «¡Hombre, Marta! ¡Cuánto tiempo! ¿Qué tal estás?»",
      options: ["What a surprise to see you!", "A man", "Of course"],
      answer: "What a surprise to see you!",
      explanation: "It greets someone unexpected — and Marta is a woman, so it can’t mean “a man”.",
    },
    {
      prompt: "What does “hombre” mean here? — «—Esta paella es la peor del mundo. —Hombre, tampoco es para tanto. Está un poco salada, nada más.»",
      options: ["Well… (softening disagreement)", "Of course", "What a surprise!"],
      answer: "Well… (softening disagreement)",
      explanation: "The speaker gently disagrees — it’s just a bit salty, not the worst.",
    },
  ],
};
