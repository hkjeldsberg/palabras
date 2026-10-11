import type { Topic } from "../types";

export const para: Topic = {
  slug: "para",
  word: "para",
  title: "Ways to use “para”",
  tagline: "The goal, the destination, the deadline — and who it’s for.",
  blurb: "Purpose · deadline · for me",
  hue: 280,
  group: "small",
  rules: [
    {
      name: "Purpose",
      explanation: "“In order to”: the goal behind an action, usually followed by an infinitive.",
      example: "Estudio **para** aprender.",
    },
    {
      name: "Destination",
      explanation: "Where someone or something is heading.",
      example: "Salgo **para** Madrid.",
    },
    {
      name: "Deadline",
      explanation: "“By” a certain time: when something must be ready.",
      example: "Lo necesito **para** el lunes.",
    },
    {
      name: "Recipient",
      explanation: "Who something is for or meant for.",
      example: "Este regalo es **para** ti.",
    },
    {
      name: "Opinion",
      explanation: "“Para mí / para ti…” = in my / your opinion.",
      example: "**Para** mí, es demasiado caro.",
    },
  ],
  examples: [
    {
      es: "Ahorro dinero **para** viajar a Japón.",
      en: "I’m saving money to travel to Japan.",
      rule: "Purpose",
    },
    { es: "¿A qué hora sale el tren **para** Sevilla?", en: "What time does the train for Seville leave?", rule: "Destination" },
    { es: "Tengo que terminar el informe **para** el viernes.", en: "I have to finish the report by Friday.", rule: "Deadline" },
    { es: "Una caña **para** mí y un tinto **para** ella.", en: "A small beer for me and a red wine for her.", rule: "Recipient" },
    { es: "**Para** mí, el mejor jamón es el de Jabugo.", en: "In my opinion, the best ham is from Jabugo.", rule: "Opinion" },
  ],
  quiz: [
    {
      prompt: "Estudio español ___ trabajar en Madrid.",
      hint: "I’m studying Spanish (in order) to work in Madrid.",
      options: ["en", "para", "a"],
      answer: "para",
      explanation: "Purpose: “para” + infinitive = in order to.",
    },
    {
      prompt: "Necesito las fotos ___ el viernes.",
      hint: "I need the photos by Friday.",
      options: ["para", "en", "a"],
      answer: "para",
      explanation: "Deadline: “para el viernes” = by Friday (days never take “en” in Spanish).",
    },
    {
      prompt: "What is “para” doing here? — «Mañana salgo para Valencia.»",
      options: ["Purpose", "Destination", "Deadline"],
      answer: "Destination",
      explanation: "Valencia is where you’re heading.",
    },
    {
      prompt: "What is “para” doing here? — «Para mí, este bar es el mejor del barrio.»",
      options: ["Recipient", "Deadline", "Opinion"],
      answer: "Opinion",
      explanation: "“Para mí” at the start of the sentence = in my opinion; nothing is being given to me.",
    },
    {
      prompt: "Muchas gracias ___ todo.",
      hint: "Thanks a lot for everything.",
      options: ["para", "por"],
      answer: "por",
      explanation: "Trick question! You thank someone “por” something — it’s the reason, not a goal or recipient.",
    },
  ],
};
