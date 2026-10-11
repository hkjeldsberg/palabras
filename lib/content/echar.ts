import type { Topic } from "../types";

export const echar: Topic = {
  slug: "echar",
  word: "echar",
  title: "Ways to use “echar”",
  tagline: "Throw it, pour it, kick it out — and miss it afterwards.",
  blurb: "Throw · pour · echar de menos",
  hue: 130,
  group: "verbs",
  rules: [
    {
      name: "To throw",
      explanation: "To toss or put something somewhere.",
      example: "**Echa** el papel a la papelera.",
    },
    {
      name: "To pour / add",
      explanation: "Adding salt, sugar, petrol — anything you pour or sprinkle in.",
      example: "**Échale** un poco de sal.",
    },
    {
      name: "To kick out",
      explanation: "To throw someone out of a place, or fire them from a job.",
      example: "Nos **echaron** del bar a las tres.",
    },
    {
      name: "To miss",
      explanation: "In Spain, “echar de menos” is the everyday way to say you miss someone.",
      example: "**Echo** de menos a mi familia.",
    },
    {
      name: "To burst out",
      explanation: "“Echarse a” + verb: to suddenly start laughing, crying or running.",
      example: "Se **echó** a reír.",
    },
  ],
  examples: [
    {
      es: "Me **echó** las llaves desde el balcón.",
      en: "She threw me the keys from the balcony.",
      rule: "To throw",
    },
    {
      es: "¿Le **echas** azúcar al café?",
      en: "Do you put sugar in your coffee?",
      rule: "To pour / add",
    },
    {
      es: "A Marcos lo **echaron** del trabajo la semana pasada.",
      en: "Marcos got fired last week.",
      rule: "To kick out",
    },
    {
      es: "¡Te **echo** mucho de menos!",
      en: "I miss you so much!",
      rule: "To miss",
    },
    {
      es: "Cuando vio la nota, se **echó** a llorar.",
      en: "When she saw the grade, she burst into tears.",
      rule: "To burst out",
    },
  ],
  quiz: [
    {
      prompt: "What does “echar” mean here? — «Echo de menos el sol de Málaga.»",
      options: ["I throw", "I miss", "I pour"],
      answer: "I miss",
      explanation: "“Echar de menos” = to miss — the sunshine back in Málaga.",
    },
    {
      prompt: "Te ___ mucho de menos.",
      hint: "I miss you a lot.",
      options: ["dejo", "echo", "tengo"],
      answer: "echo",
      explanation: "Only “echar” forms the fixed phrase “echar de menos”.",
    },
    {
      prompt: "What does “echar” mean here? — «Échale un poco más de sal a la sopa.»",
      options: ["Throw it away", "Add / pour", "Kick it out"],
      answer: "Add / pour",
      explanation: "You’re adding salt to the soup, not throwing anything away.",
    },
    {
      prompt: "What does “echar” mean here? — «Lo echaron del trabajo.»",
      options: ["They missed him", "They fired him", "They poured it"],
      answer: "They fired him",
      explanation: "“Echar a alguien” from a place or job = to kick them out.",
    },
    {
      prompt: "What does “echarse a” mean here? — «Al oír el chiste, se echó a reír.»",
      options: ["He burst out laughing", "He threw himself down", "He was kicked out"],
      answer: "He burst out laughing",
      explanation: "“Echarse a” + infinitive = to suddenly start doing something.",
    },
  ],
};
