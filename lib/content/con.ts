import type { Topic } from "../types";

export const con: Topic = {
  slug: "con",
  word: "con",
  title: "Ways to use “con”",
  tagline: "Who you’re with, how you do it, and what’s in your coffee.",
  blurb: "With · conmigo · café con leche",
  hue: 255,
  group: "small",
  rules: [
    {
      name: "Company",
      explanation: "“With” someone: who you are, go or do things with.",
      example: "Voy al cine **con** mis amigos.",
    },
    {
      name: "Conmigo / contigo",
      explanation: "“With me” and “with you” are single special words — never “con mí” or “con ti”.",
      example: "¿Te vienes **conmigo** al concierto?",
    },
    {
      name: "Manner",
      explanation: "How something is done, often “con” + a feeling or quality.",
      example: "Abre la caja **con** cuidado.",
    },
    {
      name: "Contents",
      explanation: "What food or drink comes with or contains.",
      example: "Un café **con** leche, por favor.",
    },
    {
      name: "Con + infinitive",
      explanation: "“Just by doing…” — the action alone is enough.",
      example: "**Con** llamar mañana basta.",
    },
  ],
  examples: [
    { es: "Vivo **con** dos compañeros de piso.", en: "I live with two flatmates.", rule: "Company" },
    { es: "Tranquilo, puedes contar **conmigo**.", en: "Don’t worry, you can count on me.", rule: "Conmigo / contigo" },
    { es: "Me lo explicó **con** mucha paciencia.", en: "She explained it to me very patiently.", rule: "Manner" },
    { es: "¿Me pones un bocadillo de jamón **con** tomate?", en: "Can I have a ham sandwich with tomato?", rule: "Contents" },
    { es: "**Con** ver la foto ya me entra hambre.", en: "Just seeing the photo makes me hungry.", rule: "Con + infinitive" },
  ],
  quiz: [
    {
      prompt: "¿Quieres venir al cine ___?",
      hint: "Do you want to come to the cinema with me?",
      options: ["conmigo", "con mí", "con yo"],
      answer: "conmigo",
      explanation: "“With me” is always the single word “conmigo”.",
    },
    {
      prompt: "Un café ___ leche, por favor.",
      hint: "A white coffee (coffee with milk), please.",
      options: ["con", "en", "por"],
      answer: "con",
      explanation: "Contents: “café con leche” is coffee with milk in it.",
    },
    {
      prompt: "Los sábados salgo ___ mis compañeros de trabajo.",
      hint: "On Saturdays I go out with my workmates.",
      options: ["con", "en", "de"],
      answer: "con",
      explanation: "Company: you go out “con” someone.",
    },
    {
      prompt: "What is “con” doing here? — «Lleva el pastel con cuidado.»",
      options: ["Company", "Manner", "Contents"],
      answer: "Manner",
      explanation: "“Con cuidado” says how to carry it: carefully.",
    },
    {
      prompt: "What is “con” doing here? — «Con pedir perdón no basta.»",
      options: ["Company", "Contents", "Con + infinitive"],
      answer: "Con + infinitive",
      explanation: "“Con” + infinitive: just apologising isn’t enough.",
    },
  ],
};
