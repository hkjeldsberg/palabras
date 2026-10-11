import type { Topic } from "../types";

export const cuando: Topic = {
  slug: "cuando",
  word: "cuando",
  title: "Ways to use “cuando” / “cuándo”",
  tagline: "No accent for “when…”, an accent for “when?”",
  blurb: "Habits · future · ¿cuándo?",
  hue: 230,
  group: "small",
  rules: [
    {
      name: "Present habits",
      explanation: "For things that always happen, “cuando” takes the normal present (indicative).",
      example: "**Cuando** llego a casa, me ducho.",
    },
    {
      name: "Future",
      explanation: "For something that hasn’t happened yet, “cuando” takes the subjunctive — never the future tense.",
      example: "Llámame **cuando** llegues.",
    },
    {
      name: "Past events",
      explanation: "For things that already happened, use a past tense after “cuando”.",
      example: "**Cuando** era pequeño, vivía en Bilbao.",
    },
    {
      name: "Questions",
      explanation: "Asking “when?” — directly or inside a sentence — needs the accent: “cuándo”.",
      example: "¿**Cuándo** abre la farmacia?",
    },
  ],
  examples: [
    { es: "**Cuando** hace calor, vamos a la piscina.", en: "When it’s hot, we go to the pool.", rule: "Present habits" },
    { es: "**Cuando** termine la carrera, me voy a vivir a Barcelona.", en: "When I finish my degree, I’m moving to Barcelona.", rule: "Future" },
    { es: "**Cuando** llegamos al restaurante, ya estaba cerrado.", en: "When we got to the restaurant, it was already closed.", rule: "Past events" },
    { es: "¿**Cuándo** sale el próximo tren?", en: "When does the next train leave?", rule: "Questions" },
    { es: "No sé **cuándo** vuelve Ana.", en: "I don’t know when Ana is coming back.", rule: "Questions" },
  ],
  quiz: [
    {
      prompt: "Te llamo cuando ___ al hotel.",
      hint: "I’ll call you when I get to the hotel (tomorrow).",
      options: ["llegue", "llegaré", "llegar"],
      answer: "llegue",
      explanation: "A future “when” takes the subjunctive; “cuando” is never followed by the future tense or an infinitive.",
    },
    {
      prompt: "¿___ empieza el concierto?",
      hint: "When does the concert start?",
      options: ["Cuándo", "Cuando"],
      answer: "Cuándo",
      explanation: "It’s a question, so it needs the accent.",
    },
    {
      prompt: "What is “cuando” doing here? — «Cuando llegué a Madrid, no conocía a nadie.»",
      options: ["Present habits", "Future", "Past events"],
      answer: "Past events",
      explanation: "“Llegué” is past: it happened once, in the past.",
    },
    {
      prompt: "No sé ___ sale el tren.",
      hint: "I don’t know when the train leaves.",
      options: ["cuándo", "cuando", "que"],
      answer: "cuándo",
      explanation: "An indirect question (“I don’t know when…”) still takes the accent.",
    },
    {
      prompt: "What is “cuando” doing here? — «Siempre desayuno cuando me levanto.»",
      options: ["Present habits", "Future", "Questions"],
      answer: "Present habits",
      explanation: "“Siempre” and the present “me levanto” show a routine.",
    },
  ],
};
