import type { Topic } from "../types";

export const vale: Topic = {
  slug: "vale",
  word: "vale",
  title: "Ways to use “vale”",
  tagline: "The word you’ll hear a hundred times a day in Spain.",
  blurb: "OK · ¿cuánto vale? · vale la pena",
  hue: 15,
  group: "everyday",
  rules: [
    {
      name: "OK / agreed",
      explanation: "Spain’s everyday “OK”, “fine” or “sounds good”.",
      example: "—Nos vemos a las nueve. —**Vale**.",
    },
    {
      name: "It costs",
      explanation: "From “valer”: asking or saying how much something is.",
      example: "¿Cuánto **vale** esta camiseta?",
    },
    {
      name: "It’s worth it",
      explanation: "“Valer la pena” means something is worth the effort or money.",
      example: "Esta película **vale** la pena.",
    },
    {
      name: "Tag question",
      explanation: "Added at the end to check the other person agrees — “…, OK?”",
      example: "Te llamo luego, ¿**vale**?",
    },
  ],
  examples: [
    {
      es: "—¿Tomamos algo después del trabajo? —¡**Vale**!",
      en: "“Shall we grab a drink after work?” “Sure!”",
      rule: "OK / agreed",
    },
    { es: "¿Cuánto **vale** un billete a Toledo?", en: "How much is a ticket to Toledo?", rule: "It costs" },
    {
      es: "La Alhambra **vale** la pena, aunque haya cola.",
      en: "The Alhambra is worth it, even if there’s a queue.",
      rule: "It’s worth it",
    },
    { es: "No llegues tarde, ¿**vale**?", en: "Don’t be late, OK?", rule: "Tag question" },
  ],
  quiz: [
    {
      prompt: "¿Cuánto ___ este bolso?",
      hint: "How much is this bag?",
      options: ["valen", "vale", "valgo"],
      answer: "vale",
      explanation: "One bag, so third-person singular “vale”.",
    },
    {
      prompt: "El museo del Prado ___ la pena.",
      hint: "The Prado museum is worth it.",
      options: ["vale", "cuesta", "tiene"],
      answer: "vale",
      explanation: "The fixed phrase is “valer la pena” — to be worth it.",
    },
    {
      prompt: "What does “vale” mean here? — «—¿Quedamos a las ocho? —Vale.»",
      options: ["It costs", "OK / agreed", "It’s worth it"],
      answer: "OK / agreed",
      explanation: "A one-word reply agreeing to the plan.",
    },
    {
      prompt: "What does “vale” mean here? — «Cierra la puerta al salir, ¿vale?»",
      options: ["…, OK? (checking you agree)", "How much is it?", "It’s worth it"],
      answer: "…, OK? (checking you agree)",
      explanation: "Tag “¿vale?” at the end checks the other person is on board.",
    },
  ],
};
