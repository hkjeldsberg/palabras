import type { Topic } from "../types";

export const sacar: Topic = {
  slug: "sacar",
  word: "sacar",
  title: "Ways to use “sacar”",
  tagline: "Take it out, take a photo — and get that ten.",
  blurb: "Take out · sacar un 8 · sacar fotos",
  hue: 145,
  group: "verbs",
  rules: [
    {
      name: "To take out",
      explanation: "To take something out of a bag, pocket or place.",
      example: "**Saca** la basura, por favor.",
    },
    {
      name: "To get a grade",
      explanation: "Exams in Spain are marked out of 10, and you “sacar” your mark.",
      example: "**Saqué** un ocho en el examen.",
    },
    {
      name: "To take photos",
      explanation: "In Spain you “sacar” (or “hacer”) a photo.",
      example: "¿Nos **sacas** una foto?",
    },
    {
      name: "To get tickets / money",
      explanation: "Buying tickets or taking money out of a cashpoint.",
      example: "Mañana **saco** las entradas del concierto.",
    },
    {
      name: "To drive mad",
      explanation: "“Sacar de quicio” = to drive someone up the wall.",
      example: "Ese ruido me **saca** de quicio.",
    },
  ],
  examples: [
    {
      es: "**Sacó** la cartera para pagar.",
      en: "He took out his wallet to pay.",
      rule: "To take out",
    },
    {
      es: "Mi hermano **sacó** un diez en mates.",
      en: "My brother got a ten in maths.",
      rule: "To get a grade",
    },
    {
      es: "**Sacamos** muchísimas fotos en Granada.",
      en: "We took loads of photos in Granada.",
      rule: "To take photos",
    },
    {
      es: "¿Has **sacado** ya los billetes del tren?",
      en: "Have you got the train tickets yet?",
      rule: "To get tickets / money",
    },
    {
      es: "Me **saca** de quicio que siempre llegue tarde.",
      en: "It drives me mad that he’s always late.",
      rule: "To drive mad",
    },
  ],
  quiz: [
    {
      prompt: "En el examen de inglés ___ un siete.",
      hint: "I got a seven in the English exam.",
      options: ["saqué", "gané", "hice"],
      answer: "saqué",
      explanation: "You “sacar” a grade in Spain: “saqué un siete”.",
    },
    {
      prompt: "What does “sacar” mean here? — «¿Nos sacas una foto?»",
      options: ["Can you take a photo of us?", "Can you show us a photo?", "Can you delete our photo?"],
      answer: "Can you take a photo of us?",
      explanation: "“Sacar una foto” = to take a photo.",
    },
    {
      prompt: "What does “sacar” mean here? — «Espera, voy a sacar dinero del cajero.»",
      options: ["I’m going to take out money", "I’m going to save money", "I’m going to pay in money"],
      answer: "I’m going to take out money",
      explanation: "“Sacar dinero” = to withdraw cash from the cashpoint.",
    },
    {
      prompt: "What does “sacar de quicio” mean here? — «Su actitud me saca de quicio.»",
      options: ["It drives me mad", "It makes me laugh", "It takes me out"],
      answer: "It drives me mad",
      explanation: "“Sacar de quicio” = to drive someone up the wall.",
    },
    {
      prompt: "What does “sacar” mean here? — «Saca la basura antes de irte.»",
      options: ["To take out", "To get a grade", "To get tickets / money"],
      answer: "To take out",
      explanation: "You’re taking the rubbish out of the house.",
    },
  ],
};
