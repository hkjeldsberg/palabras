import type { Topic } from "../types";

export const a: Topic = {
  slug: "a",
  word: "a",
  title: "Ways to use “a”",
  tagline: "To, at, by hand — and a little “a” before people.",
  blurb: "To · at · personal a",
  hue: 165,
  group: "small",
  rules: [
    {
      name: "Direction",
      explanation: "Where you’re going — “to”.",
      example: "Voy **a** Sevilla.",
    },
    {
      name: "Personal “a”",
      explanation: "Put “a” before a specific person (or pet) who receives the action. It has no English translation.",
      example: "Veo **a** María.",
    },
    {
      name: "Time",
      explanation: "Clock times — “at”.",
      example: "Quedamos **a** las tres.",
    },
    {
      name: "Manner",
      explanation: "How something is done — by hand, on foot, in a certain style.",
      example: "Está hecho **a** mano.",
    },
    {
      name: "Al + infinitive",
      explanation: "“Al” plus an infinitive means “when” or “on” doing something.",
      example: "**Al** llegar, te llamo.",
    },
  ],
  examples: [
    { es: "¿Vamos **a** la playa este finde?", en: "Shall we go to the beach this weekend?", rule: "Direction" },
    { es: "Busco **a** mi hermano, ¿lo has visto?", en: "I’m looking for my brother — have you seen him?", rule: "Personal “a”" },
    { es: "El tren sale **a** las ocho y media.", en: "The train leaves at half past eight.", rule: "Time" },
    { es: "Desde el hotel se puede ir **a** pie.", en: "You can walk there from the hotel.", rule: "Manner" },
    { es: "**Al** salir del metro, me perdí.", en: "When I came out of the metro, I got lost.", rule: "Al + infinitive" },
  ],
  quiz: [
    {
      prompt: "Mañana vamos ___ Madrid en tren.",
      hint: "Tomorrow we’re going to Madrid by train.",
      options: ["a", "en", "con"],
      answer: "a",
      explanation: "Direction after “ir” takes “a”.",
    },
    {
      prompt: "Which sentence is correct?",
      options: ["Veo a mi novia esta noche.", "Veo mi novia esta noche.", "Veo a la película esta noche."],
      answer: "Veo a mi novia esta noche.",
      explanation: "A specific person as the object needs personal “a”; a thing like a film doesn’t.",
    },
    {
      prompt: "What is “a” doing here? — «Llegamos a las diez.»",
      options: ["Direction", "Time", "Manner"],
      answer: "Time",
      explanation: "“A las diez” is a clock time: we arrive at ten.",
    },
    {
      prompt: "___ entrar en el bar, vi a mi ex.",
      hint: "When I walked into the bar, I saw my ex.",
      options: ["Al", "A", "En"],
      answer: "Al",
      explanation: "“Al” + infinitive means “when/on doing”: on walking in…",
    },
    {
      prompt: "What is “a” doing here? — «Las croquetas son caseras, hechas a mano.»",
      options: ["Direction", "Personal “a”", "Manner"],
      answer: "Manner",
      explanation: "“A mano” says how they’re made: by hand.",
    },
  ],
};
