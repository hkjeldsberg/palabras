import type { Topic } from "../types";

export const tener: Topic = {
  slug: "tener",
  word: "tener",
  title: "Ways to use “tener”",
  tagline: "Have it, have to, have hunger — Spanish has a lot.",
  blurb: "Have · tener que · tengo hambre",
  hue: 300,
  group: "verbs",
  rules: [
    {
      name: "To have",
      explanation: "Owning something, or having family, friends and plans.",
      example: "**Tengo** dos hermanos.",
    },
    {
      name: "Must (tener que)",
      explanation: "“Tener que” + infinitive = to have to do something.",
      example: "**Tengo** que irme ya.",
    },
    {
      name: "Feelings & age",
      explanation: "Where English says “I am” hungry, cold, sleepy or 30, Spanish says “I have”.",
      example: "**Tengo** muchísima hambre.",
    },
    {
      name: "To feel like",
      explanation: "“Tener ganas de” + something = to feel like or look forward to it.",
      example: "**Tengo** ganas de verte.",
    },
    {
      name: "To be right",
      explanation: "“Tener razón” = to be right; “no tener razón” = to be wrong.",
      example: "**Tienes** razón.",
    },
  ],
  examples: [
    {
      es: "¿**Tienes** coche?",
      en: "Do you have a car?",
      rule: "To have",
    },
    {
      es: "Mañana **tenemos** que madrugar.",
      en: "We have to get up early tomorrow.",
      rule: "Must (tener que)",
    },
    {
      es: "Mi hija **tiene** seis años.",
      en: "My daughter is six.",
      rule: "Feelings & age",
    },
    {
      es: "No **tengo** ganas de salir esta noche.",
      en: "I don’t feel like going out tonight.",
      rule: "To feel like",
    },
    {
      es: "Vale, **tenías** razón.",
      en: "OK, you were right.",
      rule: "To be right",
    },
  ],
  quiz: [
    {
      prompt: "Yo ___ mucho frío.",
      hint: "I’m really cold.",
      options: ["tengo", "hace", "estoy"],
      answer: "tengo",
      explanation: "A person feeling cold “tiene frío”; “hace frío” is the weather, and “estoy frío” isn’t how you say it.",
    },
    {
      prompt: "Mi abuela ___ noventa años.",
      hint: "My grandmother is ninety.",
      options: ["tiene", "es", "está"],
      answer: "tiene",
      explanation: "Age always uses “tener” in Spanish.",
    },
    {
      prompt: "Mañana ___ que trabajar.",
      hint: "Tomorrow I have to work.",
      options: ["tengo", "debo", "voy"],
      answer: "tengo",
      explanation: "“Tener que” + infinitive = to have to; “deber” never takes “que”.",
    },
    {
      prompt: "What does “tener” mean here? — «Tienes toda la razón.»",
      options: ["You’re absolutely right", "You have every reason", "You’re totally crazy"],
      answer: "You’re absolutely right",
      explanation: "“Tener razón” = to be right, not “to have a reason”.",
    },
    {
      prompt: "What does “tener” mean here? — «Tengo ganas de ir a la playa.»",
      options: ["I have to go to the beach", "I feel like going to the beach", "I’ve been to the beach"],
      answer: "I feel like going to the beach",
      explanation: "“Tener ganas de” = to feel like; “I have to” would be “tengo que”.",
    },
  ],
};
