import type { Topic } from "../types";

export const de: Topic = {
  slug: "de",
  word: "de",
  title: "Ways to use “de”",
  tagline: "Of, from, made of — and a sneaky “if”.",
  blurb: "Of · from · made of",
  hue: 220,
  group: "small",
  rules: [
    {
      name: "Possession",
      explanation: "Spanish has no ’s — “de” says whose something is.",
      example: "El coche **de** Juan.",
    },
    {
      name: "Origin",
      explanation: "Says where someone or something comes from.",
      example: "Soy **de** Noruega.",
    },
    {
      name: "Material / description",
      explanation: "Describes what something is made of, what it’s for, or what someone is wearing.",
      example: "Una mesa **de** madera.",
    },
    {
      name: "Cause",
      explanation: "Gives the reason for a feeling or state, often with “morirse” or “estar”.",
      example: "Me muero **de** hambre.",
    },
    {
      name: "“If” (de + infinitive)",
      explanation: "With an infinitive at the start of a sentence, it works like “if” or “had I…”.",
      example: "**De** haberlo sabido, no habría venido.",
    },
  ],
  examples: [
    { es: "¿Es esta la maleta **de** tu hermana?", en: "Is this your sister’s suitcase?", rule: "Possession" },
    { es: "Este jamón es **de** Salamanca.", en: "This ham is from Salamanca.", rule: "Origin" },
    { es: "Ponme un bocadillo **de** tortilla, por favor.", en: "Can I have a tortilla sandwich, please?", rule: "Material / description" },
    { es: "Estoy muerto **de** sueño.", en: "I’m dead tired.", rule: "Cause" },
    { es: "**De** tener más tiempo, iría a Granada.", en: "If I had more time, I’d go to Granada.", rule: "“If” (de + infinitive)" },
  ],
  quiz: [
    {
      prompt: "Soy ___ Noruega, ¿y tú?",
      hint: "I’m from Norway, and you?",
      options: ["de", "a", "en"],
      answer: "de",
      explanation: "Origin with “ser” takes “de”: soy de…",
    },
    {
      prompt: "Quiero una camiseta ___ algodón.",
      hint: "I want a cotton T-shirt.",
      options: ["de", "a", "por"],
      answer: "de",
      explanation: "What something is made of goes with “de”.",
    },
    {
      prompt: "___ haberlo sabido, habría venido antes.",
      hint: "Had I known, I’d have come earlier.",
      options: ["De", "En", "Para"],
      answer: "De",
      explanation: "“De” + infinitive at the start works as “if”: had I known…",
    },
    {
      prompt: "What is “de” doing here? — «Me muero de sed.»",
      options: ["Possession", "Origin", "Cause"],
      answer: "Cause",
      explanation: "Thirst is the reason you’re “dying”: I’m dying of thirst.",
    },
    {
      prompt: "What is “de” doing here? — «¿Quién es la chica de rojo?»",
      options: ["Possession", "Origin", "Material / description"],
      answer: "Material / description",
      explanation: "It describes what she’s wearing: the girl in red.",
    },
  ],
};
