import type { Topic } from "../types";

export const en: Topic = {
  slug: "en",
  word: "en",
  title: "Ways to use “en”",
  tagline: "In, on, at — and the way you do things.",
  blurb: "Place · time · by train",
  hue: 345,
  group: "small",
  rules: [
    {
      name: "Place",
      explanation: "Where something is: “in”, “on” or “at” all become “en”.",
      example: "Las llaves están **en** la mesa.",
    },
    {
      name: "Time",
      explanation: "Months, seasons and years — but never days of the week.",
      example: "**En** verano hace mucho calor.",
    },
    {
      name: "Transport",
      explanation: "How you travel: “en tren”, “en coche” (but “a pie” on foot).",
      example: "Vamos a Toledo **en** tren.",
    },
    {
      name: "Manner",
      explanation: "The way something is done, including which language you use.",
      example: "¿Lo dices **en** serio?",
    },
  ],
  examples: [
    { es: "Te espero **en** el bar de la esquina.", en: "I’ll wait for you at the bar on the corner.", rule: "Place" },
    { es: "**En** agosto media España está de vacaciones.", en: "In August, half of Spain is on holiday.", rule: "Time" },
    { es: "Prefiero ir al aeropuerto **en** taxi.", en: "I’d rather go to the airport by taxi.", rule: "Transport" },
    { es: "¿Me lo puedes explicar **en** inglés?", en: "Can you explain it to me in English?", rule: "Manner" },
    { es: "Lee el menú **en** voz alta, porfa.", en: "Read the menu out loud, please.", rule: "Manner" },
  ],
  quiz: [
    {
      prompt: "Nací ___ 1995.",
      hint: "I was born in 1995.",
      options: ["en", "a", "de"],
      answer: "en",
      explanation: "Time: years take “en”, just like months and seasons.",
    },
    {
      prompt: "Siempre voy al trabajo ___ metro.",
      hint: "I always go to work by metro.",
      options: ["en", "a", "de"],
      answer: "en",
      explanation: "Transport: “en metro”, “en bus”, “en tren” — only “a pie” is different.",
    },
    {
      prompt: "What is “en” doing here? — «Te espero en la puerta del cine.»",
      options: ["Place", "Time", "Transport", "Manner"],
      answer: "Place",
      explanation: "The cinema door is where you’ll be waiting.",
    },
    {
      prompt: "What is “en” doing here? — «En invierno anochece muy pronto.»",
      options: ["Place", "Time", "Manner"],
      answer: "Time",
      explanation: "“En invierno” tells you when: in winter.",
    },
    {
      prompt: "What is “en” doing here? — «¿Me lo dices en serio?»",
      options: ["Place", "Transport", "Manner"],
      answer: "Manner",
      explanation: "“En serio” describes how something is said: seriously.",
    },
  ],
};
