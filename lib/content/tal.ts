import type { Topic } from "../types";

export const tal: Topic = {
  slug: "tal",
  word: "tal",
  title: "Ways to use “tal”",
  tagline: "How’s it going, maybe, as long as — and some guy called Pedro.",
  blurb: "¿Qué tal? · tal vez · un tal…",
  hue: 340,
  group: "everyday",
  rules: [
    {
      name: "¿Qué tal?",
      explanation: "“How’s it going?” or “How was…?” — the everyday greeting.",
      example: "¿Qué **tal** el viaje?",
    },
    {
      name: "Tal vez",
      explanation: "“Maybe” — often followed by the subjunctive.",
      example: "**Tal** vez vayamos a la playa mañana.",
    },
    {
      name: "Con tal de que",
      explanation: "“As long as” — always followed by the subjunctive.",
      example: "Te dejo el coche con **tal** de que me lo devuelvas lleno.",
    },
    {
      name: "Un tal…",
      explanation: "“Some guy called…” — for someone you don’t really know.",
      example: "Ha llamado un **tal** Pedro.",
    },
  ],
  examples: [
    { es: "¡Hola, Marta! ¿Qué **tal** estás?", en: "Hi, Marta! How are you?", rule: "¿Qué tal?" },
    { es: "¿Qué **tal** el fin de semana?", en: "How was the weekend?", rule: "¿Qué tal?" },
    { es: "**Tal** vez nos vemos luego en el bar.", en: "Maybe we’ll see each other at the bar later.", rule: "Tal vez" },
    { es: "Voy contigo con **tal** de que no lleguemos tarde.", en: "I’ll go with you as long as we’re not late.", rule: "Con tal de que" },
    { es: "En la oficina preguntaba por ti un **tal** Javier.", en: "Some guy called Javier was asking for you at the office.", rule: "Un tal…" },
  ],
  quiz: [
    {
      prompt: "¿Qué ___? ¿Todo bien?",
      hint: "How’s it going? All good?",
      options: ["tal", "tan", "tales"],
      answer: "tal",
      explanation: "“¿Qué tal?” is the fixed greeting — it never changes.",
    },
    {
      prompt: "___ vez llueva esta tarde.",
      hint: "Maybe it’ll rain this afternoon.",
      options: ["Tal", "Tan", "Tanta"],
      answer: "Tal",
      explanation: "“Tal vez” = maybe, here with the subjunctive “llueva”.",
    },
    {
      prompt: "Voy a la fiesta con tal de que ___ tú también.",
      hint: "I’ll go to the party as long as you come too.",
      options: ["vengas", "vienes", "venir"],
      answer: "vengas",
      explanation: "“Con tal de que” always takes the subjunctive: “vengas”.",
    },
    {
      prompt: "What does “tal” mean here? — «Te ha escrito un tal Javier.»",
      options: ["Some guy called", "Maybe", "As long as"],
      answer: "Some guy called",
      explanation: "“Un tal” + name = someone called Javier that you don’t really know.",
    },
    {
      prompt: "What does “tal” mean here? — «¿Qué tal la película?»",
      options: ["How was…?", "Maybe", "Some guy called"],
      answer: "How was…?",
      explanation: "“¿Qué tal?” + a thing asks how it was: “How was the film?”",
    },
  ],
};
