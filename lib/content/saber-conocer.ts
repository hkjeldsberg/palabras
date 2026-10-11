import type { Topic } from "../types";

export const saberConocer: Topic = {
  slug: "saber-conocer",
  word: "saber / conocer",
  title: "“Saber” or “conocer”?",
  tagline: "Knowing facts vs knowing people and places.",
  blurb: "Facts vs people · know how · met",
  hue: 30,
  group: "pairs",
  rules: [
    {
      name: "Facts",
      explanation: "“Saber” is for information: facts, answers, where, when, what.",
      example: "No **sé** dónde vive.",
    },
    {
      name: "People and places",
      explanation: "“Conocer” means being familiar with a person, place or thing — add “a” before a person.",
      example: "¿**Conoces** a Marta? Y ¿**conoces** Barcelona?",
    },
    {
      name: "Know how to",
      explanation: "“Saber” + infinitive = to know how to do something, a skill.",
      example: "¿**Sabes** nadar?",
    },
    {
      name: "Meeting someone",
      explanation: "In the past (“conocí”, “nos conocimos”), “conocer” means to meet someone for the first time.",
      example: "**Conocí** a mi novia en Valencia.",
    },
  ],
  examples: [
    { es: "¿**Sabes** a qué hora cierra el museo?", en: "Do you know what time the museum closes?", rule: "Facts" },
    { es: "¿**Conoces** a mi hermano Pablo?", en: "Do you know my brother Pablo?", rule: "People and places" },
    { es: "No **conozco** Sevilla, pero dicen que es preciosa.", en: "I’ve never been to Seville, but they say it’s beautiful.", rule: "People and places" },
    { es: "Mi hijo ya **sabe** leer.", en: "My son already knows how to read.", rule: "Know how to" },
    { es: "**Nos conocimos** en un bar de Málaga.", en: "We met in a bar in Málaga.", rule: "Meeting someone" },
  ],
  quiz: [
    {
      prompt: "No ___ dónde está mi móvil.",
      hint: "I don’t know where my phone is.",
      options: ["sé", "conozco"],
      answer: "sé",
      explanation: "Facts: where your phone is is a piece of information, so “saber”.",
    },
    {
      prompt: "¿___ a Laura? Es mi compañera de piso.",
      hint: "Do you know Laura? She’s my flatmate.",
      options: ["Sabes", "Conoces"],
      answer: "Conoces",
      explanation: "People and places: knowing a person is “conocer” (with “a” before her name).",
    },
    {
      prompt: "Mi abuela no ___ usar el ordenador.",
      hint: "My grandma doesn’t know how to use the computer.",
      options: ["sabe", "conoce"],
      answer: "sabe",
      explanation: "Know how to: “saber” + infinitive for a skill.",
    },
    {
      prompt: "Ayer ___ a los padres de mi novio.",
      hint: "Yesterday I met my boyfriend’s parents (for the first time).",
      options: ["supe", "conocí"],
      answer: "conocí",
      explanation: "Meeting someone: “conocer” in the past = to meet for the first time.",
    },
    {
      prompt: "___ muy bien este barrio; viví aquí diez años.",
      hint: "I know this neighbourhood really well; I lived here for ten years.",
      options: ["Sé", "Conozco"],
      answer: "Conozco",
      explanation: "People and places: being familiar with a place is “conocer”.",
    },
  ],
};
