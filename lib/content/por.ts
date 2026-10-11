import type { Topic } from "../types";

export const por: Topic = {
  slug: "por",
  word: "por",
  title: "Ways to use “por”",
  tagline: "The why, the how long, the through, the in-exchange-for.",
  blurb: "Cause · duration · through",
  hue: 240,
  group: "small",
  rules: [
    {
      name: "Cause / reason",
      explanation: "Because of, on account of, thanks to.",
      example: "Gracias **por** tu ayuda.",
    },
    {
      name: "Duration",
      explanation: "How long something lasts.",
      example: "Estudié **por** dos horas.",
    },
    {
      name: "Movement through",
      explanation: "Through, along, around a place.",
      example: "Caminamos **por** el parque.",
    },
    {
      name: "Exchange",
      explanation: "Trading one thing for another — including money.",
      example: "Pagué diez euros **por** el libro.",
    },
  ],
  examples: [
    { es: "Llegué tarde **por** el tráfico.", en: "I arrived late because of the traffic.", rule: "Cause / reason" },
    { es: "Viví en Sevilla **por** tres años.", en: "I lived in Seville for three years.", rule: "Duration" },
    {
      es: "Paseamos **por** la playa al atardecer.",
      en: "We strolled along the beach at sunset.",
      rule: "Movement through",
    },
    {
      es: "Te cambio mi bocadillo **por** tu manzana.",
      en: "I’ll swap my sandwich for your apple.",
      rule: "Exchange",
    },
  ],
  quiz: [
    {
      prompt: "No salimos ___ la lluvia.",
      hint: "We didn’t go out because of the rain.",
      options: ["para", "por", "a"],
      answer: "por",
      explanation: "Cause: the rain is the reason we stayed in.",
    },
    {
      prompt: "Pagué veinte euros ___ estas entradas.",
      hint: "I paid twenty euros for these tickets.",
      options: ["por", "para", "con"],
      answer: "por",
      explanation: "Exchange: money traded for the tickets.",
    },
    {
      prompt: "What does “por” express here? — «Estuve en la playa por dos horas.»",
      options: ["Cause", "Duration", "Movement", "Exchange"],
      answer: "Duration",
      explanation: "“Por dos horas” tells you how long.",
    },
    {
      prompt: "El gato entró ___ la ventana.",
      hint: "The cat came in through the window.",
      options: ["en", "para", "por"],
      answer: "por",
      explanation: "Movement through a space: through the window.",
    },
    {
      prompt: "Este regalo es ___ ti.",
      hint: "This gift is for you.",
      options: ["por", "para"],
      answer: "para",
      explanation: "Trick question! A recipient or destination takes “para”, not “por”.",
    },
  ],
};
