import type { Topic } from "../types";

export const quedar: Topic = {
  slug: "quedar",
  word: "quedar",
  title: "Ways to use “quedar”",
  tagline: "Meet up, stay put, run out — and look good doing it.",
  blurb: "Meet up · be left · fit · stay",
  hue: 250,
  group: "verbs",
  rules: [
    {
      name: "To meet up",
      explanation: "Arranging to see friends — Spain’s go-to verb for plans.",
      example: "¿**Quedamos** a las ocho?",
    },
    {
      name: "To be left",
      explanation: "What remains — it works like “gustar”: the thing left is the subject.",
      example: "No **queda** pan.",
    },
    {
      name: "To fit / suit",
      explanation: "How clothes look on someone: “te queda bien” = it suits you.",
      example: "Esa chaqueta te **queda** genial.",
    },
    {
      name: "To agree on",
      explanation: "“Quedar en” + something means to agree on or settle a plan.",
      example: "**Quedamos** en vernos el lunes.",
    },
    {
      name: "To stay (quedarse)",
      explanation: "With me/te/se it means to stay or remain somewhere.",
      example: "Hoy me **quedo** en casa.",
    },
  ],
  examples: [
    {
      es: "He **quedado** con Lucía para tomar un café.",
      en: "I’ve arranged to meet Lucía for a coffee.",
      rule: "To meet up",
    },
    {
      es: "Solo nos **quedan** diez euros.",
      en: "We’ve only got ten euros left.",
      rule: "To be left",
    },
    {
      es: "Estos pantalones me **quedan** pequeños.",
      en: "These trousers are too small for me.",
      rule: "To fit / suit",
    },
    {
      es: "¿En qué **quedamos**, cenamos fuera o no?",
      en: "So what are we doing — are we eating out or not?",
      rule: "To agree on",
    },
    {
      es: "Nos **quedamos** una semana más en Granada.",
      en: "We’re staying another week in Granada.",
      rule: "To stay (quedarse)",
    },
  ],
  quiz: [
    {
      prompt: "What does “quedar” mean here? — «¿Quedamos mañana en la plaza?»",
      options: ["To meet up", "To be left", "To fit / suit"],
      answer: "To meet up",
      explanation: "You’re arranging to see each other in the square tomorrow.",
    },
    {
      prompt: "What does “quedar” mean here? — «No queda leche en la nevera.»",
      options: ["To stay (quedarse)", "To be left", "To meet up"],
      answer: "To be left",
      explanation: "There’s no milk left — nothing remains in the fridge.",
    },
    {
      prompt: "¿Te ___ bien estos vaqueros?",
      hint: "Do these jeans fit you well?",
      options: ["queda", "quedan", "quedas"],
      answer: "quedan",
      explanation: "The jeans are the subject (plural), so “quedan” — just like “gustar”.",
    },
    {
      prompt: "What does “quedar” mean here? — «Estoy cansado, esta noche me quedo en casa.»",
      options: ["To fit / suit", "To meet up", "To stay (quedarse)"],
      answer: "To stay (quedarse)",
      explanation: "“Me quedo en casa” = I’m staying in.",
    },
    {
      prompt: "What does “quedar” mean here? — «Quedamos en pagar a medias.»",
      options: ["To agree on", "To be left", "To fit / suit"],
      answer: "To agree on",
      explanation: "“Quedar en” = to agree on something: we agreed to split the bill.",
    },
  ],
};
