import type { Topic } from "../types";

export const pasar: Topic = {
  slug: "pasar",
  word: "pasar",
  title: "Ways to use “pasar”",
  tagline: "What’s up, come on in — and don’t go too far.",
  blurb: "¿Qué pasa? · pasarlo bien · ¡pasa!",
  hue: 340,
  group: "verbs",
  rules: [
    {
      name: "To happen",
      explanation: "“¿Qué pasa?” = what’s going on; “¿qué te pasa?” = what’s wrong?",
      example: "¿Qué **pasa** aquí?",
    },
    {
      name: "To spend time",
      explanation: "To spend a period somewhere; “pasarlo bien / mal” = to have a good / bad time.",
      example: "Lo **pasamos** genial en la playa.",
    },
    {
      name: "To come in / pass by",
      explanation: "“¡Pasa!” invites someone in; “pasar por” = to drop by a place.",
      example: "¡**Pasa**, pasa!",
    },
    {
      name: "To overdo it (pasarse)",
      explanation: "“Pasarse” = to go too far — too much salt, or a comment that’s out of line.",
      example: "Te has **pasado** con la sal.",
    },
  ],
  examples: [
    {
      es: "¿Qué te **pasa**? Pareces triste.",
      en: "What’s wrong? You look sad.",
      rule: "To happen",
    },
    {
      es: "¡Lo **pasamos** genial en la boda!",
      en: "We had a great time at the wedding!",
      rule: "To spend time",
    },
    {
      es: "Mañana **paso** el día en Toledo.",
      en: "I’m spending the day in Toledo tomorrow.",
      rule: "To spend time",
    },
    {
      es: "Luego **paso** por tu casa a por las llaves.",
      en: "I’ll drop by your place later to get the keys.",
      rule: "To come in / pass by",
    },
    {
      es: "Tío, te has **pasado**, eso no se dice.",
      en: "Mate, that was out of line — you don’t say that.",
      rule: "To overdo it (pasarse)",
    },
  ],
  quiz: [
    {
      prompt: "What does “pasar” mean here? — «¿Qué te pasa?»",
      options: ["What’s wrong?", "What are you doing?", "Where are you going?"],
      answer: "What’s wrong?",
      explanation: "“¿Qué te pasa?” asks what’s happening to you — what’s wrong.",
    },
    {
      prompt: "Anoche lo ___ genial en el concierto.",
      hint: "We had a great time at the concert last night.",
      options: ["pasamos", "estuvimos", "fuimos"],
      answer: "pasamos",
      explanation: "“Pasarlo genial” = to have a great time.",
    },
    {
      prompt: "What does “pasar” mean here? — «¡Hola! Pasa, pasa, estás en tu casa.»",
      options: ["Come in", "Go away", "Hurry up"],
      answer: "Come in",
      explanation: "“¡Pasa!” is how you invite someone in.",
    },
    {
      prompt: "What does “pasarse” mean here? — «Te has pasado con el picante.»",
      options: ["You’ve overdone the spice", "You’ve forgotten the spice", "You’ve passed me the hot sauce"],
      answer: "You’ve overdone the spice",
      explanation: "“Pasarse con” something = to use too much of it.",
    },
    {
      prompt: "What does “pasar” mean here? — «¿Puedes pasar por la farmacia al volver?»",
      options: ["To spend time", "To come in / pass by", "To happen"],
      answer: "To come in / pass by",
      explanation: "“Pasar por” a place = to drop by on the way.",
    },
  ],
};
