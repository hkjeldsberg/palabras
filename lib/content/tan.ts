import type { Topic } from "../types";

export const tan: Topic = {
  slug: "tan",
  word: "tan",
  title: "Ways to use “tan” / “tanto”",
  tagline: "As much, so much, and what a lovely day.",
  blurb: "As… as · so much · ¡qué día tan…!",
  hue: 120,
  group: "small",
  rules: [
    {
      name: "Tan + adjective",
      explanation: "“Tan” goes before adjectives and adverbs: “so”, or “as… as” with “como”.",
      example: "Mi hermano es **tan** alto como mi padre.",
    },
    {
      name: "Tanto + noun",
      explanation: "Before a noun use “tanto/a/os/as”, agreeing with it: as much / as many.",
      example: "No tengo **tanto** tiempo como tú.",
    },
    {
      name: "Exclamations",
      explanation: "“¡Qué + noun + tan + adjective!” = what a… !",
      example: "¡Qué día **tan** bonito!",
    },
    {
      name: "Tanto alone",
      explanation: "After a verb, “tanto” never changes and means “so much”.",
      example: "No comas **tanto**.",
    },
  ],
  examples: [
    { es: "El metro no es **tan** caro como el taxi.", en: "The metro isn’t as expensive as a taxi.", rule: "Tan + adjective" },
    { es: "Nunca había visto **tantas** terrazas en una calle.", en: "I’d never seen so many terraces on one street.", rule: "Tanto + noun" },
    { es: "¡Qué vista **tan** espectacular!", en: "What a spectacular view!", rule: "Exclamations" },
    { es: "Te echo **tanto** de menos.", en: "I miss you so much.", rule: "Tanto alone" },
  ],
  quiz: [
    {
      prompt: "Este piso es ___ caro como el otro.",
      hint: "This flat is as expensive as the other one.",
      options: ["tan", "tanto", "tanta"],
      answer: "tan",
      explanation: "Before an adjective it’s always “tan”.",
    },
    {
      prompt: "Hoy no hay ___ gente como ayer.",
      hint: "There aren’t as many people today as yesterday.",
      options: ["tanta", "tanto", "tan"],
      answer: "tanta",
      explanation: "Before a noun, “tanto” agrees with it — “gente” is feminine singular.",
    },
    {
      prompt: "¡Qué playa ___ bonita!",
      hint: "What a beautiful beach!",
      options: ["tan", "tanto", "muy"],
      answer: "tan",
      explanation: "The pattern is “¡qué + noun + tan + adjective!”.",
    },
    {
      prompt: "Trabajas ___. Descansa un poco.",
      hint: "You work so much. Rest a bit.",
      options: ["tanto", "tan", "tanta"],
      answer: "tanto",
      explanation: "After a verb, use the unchanging “tanto”.",
    },
    {
      prompt: "What is “tanto” doing here? — «Tengo tantos amigos aquí como en casa.»",
      options: ["Tan + adjective", "Tanto + noun", "Tanto alone"],
      answer: "Tanto + noun",
      explanation: "“Tantos” goes with the noun “amigos” and agrees with it.",
    },
  ],
};
