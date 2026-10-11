import type { Topic } from "../types";

export const lo: Topic = {
  slug: "lo",
  word: "lo",
  title: "Ways to use “lo”",
  tagline: "“It” and “him” — and a shortcut for turning adjectives into ideas.",
  blurb: "It / him · lo bueno · lo que",
  hue: 195,
  group: "small",
  rules: [
    {
      name: "Direct object",
      explanation: "“It” or “him”: replaces a masculine thing or person that receives the action.",
      example: "**Lo** veo.",
    },
    {
      name: "Lo + adjective",
      explanation: "Turns an adjective into an idea: “the … thing / part”.",
      example: "**Lo** bueno es que mañana no trabajo.",
    },
    {
      name: "Lo que",
      explanation: "“What” or “the thing that” in the middle of a sentence.",
      example: "No entiendo **lo** que dices.",
    },
    {
      name: "Lo + adj + que",
      explanation: "“How …” for emphasis: lo + adjective/adverb + que.",
      example: "No sabes **lo** difícil que es.",
    },
  ],
  examples: [
    { es: "—¿Has visto a Pablo? —Sí, **lo** vi ayer en el bar.", en: "“Have you seen Pablo?” “Yes, I saw him in the bar yesterday.”", rule: "Direct object" },
    { es: "¿Mi móvil? No **lo** encuentro por ningún lado.", en: "My phone? I can’t find it anywhere.", rule: "Direct object" },
    { es: "**Lo** mejor de Madrid es la gente.", en: "The best thing about Madrid is the people.", rule: "Lo + adjective" },
    { es: "Pide **lo** que quieras, invito yo.", en: "Order whatever you want, it’s on me.", rule: "Lo que" },
    { es: "No te imaginas **lo** cansada que estoy.", en: "You can’t imagine how tired I am.", rule: "Lo + adj + que" },
  ],
  quiz: [
    {
      prompt: "—¿Dónde está el vino? —___ he puesto en la nevera.",
      hint: "“Where’s the wine?” “I’ve put it in the fridge.”",
      options: ["La", "Lo", "Los"],
      answer: "Lo",
      explanation: "“El vino” is masculine and singular, so it becomes “lo”.",
    },
    {
      prompt: "___ bueno de vivir en Sevilla es el clima.",
      hint: "The good thing about living in Seville is the weather.",
      options: ["El", "La", "Lo"],
      answer: "Lo",
      explanation: "Lo + adjective = “the good thing”, an idea rather than a noun.",
    },
    {
      prompt: "Perdona, no entiendo ___ que dices.",
      hint: "Sorry, I don’t understand what you’re saying.",
      options: ["lo", "le", "se"],
      answer: "lo",
      explanation: "“Lo que” = what / the thing that.",
    },
    {
      prompt: "What is “lo” doing here? — «No sabes lo difícil que es aprender alemán.»",
      options: ["Direct object", "Lo que", "Lo + adj + que"],
      answer: "Lo + adj + que",
      explanation: "Lo + difícil + que = “how difficult”, said for emphasis.",
    },
    {
      prompt: "—¿Has visto mi móvil? —No, no ___ he visto.",
      hint: "“Have you seen my phone?” “No, I haven’t seen it.”",
      options: ["le", "lo"],
      answer: "lo",
      explanation: "Trick question! Things always take “lo”. In Spain “le” can replace “lo” only for male people (leísmo), never for objects.",
    },
  ],
};
