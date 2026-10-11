import type { Topic } from "../types";

export const donde: Topic = {
  slug: "donde",
  word: "donde",
  title: "Ways to use “donde” / “dónde”",
  tagline: "Where it is, where you’re going, where you’re from.",
  blurb: "Where… · ¿dónde? · ¿de dónde?",
  hue: 75,
  group: "small",
  rules: [
    {
      name: "Relative",
      explanation: "No accent when it links to a place you’ve already mentioned: “the place where…”.",
      example: "Esta es la casa **donde** vivo.",
    },
    {
      name: "Direct question",
      explanation: "Asking “where?” needs the accent: “dónde”.",
      example: "¿**Dónde** está la estación?",
    },
    {
      name: "Indirect question",
      explanation: "A “where” question tucked inside a sentence keeps the accent.",
      example: "No sé **dónde** está mi móvil.",
    },
    {
      name: "Movement",
      explanation: "With verbs of going, use “adónde” (or “a dónde”): where to?",
      example: "¿**Adónde** vas?",
    },
    {
      name: "Origin",
      explanation: "“De dónde” asks where someone or something comes from.",
      example: "¿**De dónde** eres?",
    },
  ],
  examples: [
    { es: "Es el bar **donde** nos conocimos.", en: "It’s the bar where we met.", rule: "Relative" },
    { es: "Perdona, ¿**dónde** está el baño?", en: "Excuse me, where’s the bathroom?", rule: "Direct question" },
    { es: "¿Sabes **dónde** hay una farmacia?", en: "Do you know where there’s a pharmacy?", rule: "Indirect question" },
    { es: "¿**Adónde** vais este verano?", en: "Where are you (all) going this summer?", rule: "Movement" },
    { es: "¿**De dónde** viene este vino?", en: "Where does this wine come from?", rule: "Origin" },
  ],
  quiz: [
    {
      prompt: "Este es el bar ___ nos conocimos.",
      hint: "This is the bar where we met.",
      options: ["donde", "dónde", "adónde"],
      answer: "donde",
      explanation: "It links back to “el bar” — a relative, so no accent.",
    },
    {
      prompt: "¿___ eres?",
      hint: "Where are you from?",
      options: ["De dónde", "Dónde", "Adónde"],
      answer: "De dónde",
      explanation: "Origin needs “de”: ¿De dónde eres? = where are you from?",
    },
    {
      prompt: "¿___ vais este fin de semana?",
      hint: "Where are you (all) going this weekend?",
      options: ["Adónde", "Donde", "De dónde"],
      answer: "Adónde",
      explanation: "“Ir” is movement towards a place, so “adónde”; “donde” without an accent can’t ask a question.",
    },
    {
      prompt: "What is “dónde” doing here? — «No sé dónde he dejado las llaves.»",
      options: ["Relative", "Direct question", "Indirect question"],
      answer: "Indirect question",
      explanation: "The question “where?” is inside the sentence “No sé…”, so it’s indirect — and keeps its accent.",
    },
    {
      prompt: "What is “donde” doing here? — «El pueblo donde nació mi abuela es precioso.»",
      options: ["Relative", "Indirect question", "Origin"],
      answer: "Relative",
      explanation: "It links back to “el pueblo” (the village where…), so no accent.",
    },
  ],
};
