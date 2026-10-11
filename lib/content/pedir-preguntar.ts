import type { Topic } from "../types";

export const pedirPreguntar: Topic = {
  slug: "pedir-preguntar",
  word: "pedir / preguntar",
  title: "“Pedir” or “preguntar”?",
  tagline: "Asking for something vs asking a question.",
  blurb: "Order vs ask · pedir que · preguntar por",
  hue: 150,
  group: "pairs",
  rules: [
    {
      name: "Ask for",
      explanation: "“Pedir” is asking for something you want — including ordering food and drinks.",
      example: "Voy a **pedir** una caña.",
    },
    {
      name: "Ask a question",
      explanation: "“Preguntar” is asking for information: what, where, when, if…",
      example: "Le **pregunté** la hora.",
    },
    {
      name: "Pedir que",
      explanation: "To ask someone to do something, use “pedir que” + subjunctive.",
      example: "Te **pido** que hables más despacio.",
    },
    {
      name: "Preguntar por",
      explanation: "“Preguntar por” someone = to ask after them, or ask to see or speak to them.",
      example: "Mi madre siempre **pregunta** por ti.",
    },
    {
      name: "Hacer una pregunta",
      explanation: "With the noun “pregunta”, the verb is “hacer” — never “pedir” or “preguntar”.",
      example: "¿Puedo **hacer** una pregunta?",
    },
  ],
  examples: [
    { es: "¿**Pedimos** la cuenta?", en: "Shall we ask for the bill?", rule: "Ask for" },
    { es: "Siempre me **preguntan** de dónde soy.", en: "People always ask me where I’m from.", rule: "Ask a question" },
    { es: "El médico me **pidió** que volviera la semana que viene.", en: "The doctor asked me to come back next week.", rule: "Pedir que" },
    { es: "Ha llamado alguien y ha **preguntado** por ti.", en: "Someone called and asked for you.", rule: "Preguntar por" },
    { es: "Perdone, ¿le puedo **hacer** una pregunta?", en: "Excuse me, may I ask you a question?", rule: "Hacer una pregunta" },
  ],
  quiz: [
    {
      prompt: "Camarero, ¿podemos ___ la carta?",
      hint: "Waiter, can we ask for the menu?",
      options: ["pedir", "preguntar"],
      answer: "pedir",
      explanation: "Ask for: you want the menu itself, not information, so “pedir”.",
    },
    {
      prompt: "Le voy a ___ a Ana a qué hora sale el tren.",
      hint: "I’m going to ask Ana what time the train leaves.",
      options: ["pedir", "preguntar"],
      answer: "preguntar",
      explanation: "Ask a question: you want information, so “preguntar”.",
    },
    {
      prompt: "Mi jefe me ___ que llegue antes mañana.",
      hint: "My boss is asking me to arrive earlier tomorrow.",
      options: ["pide", "pregunta"],
      answer: "pide",
      explanation: "Pedir que: asking someone to do something is “pedir que” + subjunctive.",
    },
    {
      prompt: "Señor García, en recepción ___ por usted.",
      hint: "Mr García, someone at reception is asking for you.",
      options: ["piden", "preguntan"],
      answer: "preguntan",
      explanation: "Preguntar por: asking to see or speak to someone is “preguntar por”.",
    },
    {
      prompt: "Perdona, ¿te puedo ___ una pregunta?",
      hint: "Sorry, can I ask you a question?",
      options: ["pedir", "preguntar", "hacer"],
      answer: "hacer",
      explanation: "Trick question! Hacer una pregunta: with the noun “pregunta”, Spanish uses “hacer”.",
    },
  ],
};
