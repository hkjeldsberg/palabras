import type { Topic } from "../types";

export const hecho: Topic = {
  slug: "hecho",
  word: "hecho",
  title: "Ways to use “hecho”",
  tagline: "Done, a fact, in fact — deal!",
  blurb: "Done · de hecho · ¡hecho!",
  hue: 100,
  group: "everyday",
  rules: [
    {
      name: "Done / made",
      explanation: "The past participle of “hacer” — done or made.",
      example: "Este bolso está **hecho** a mano.",
    },
    {
      name: "A fact",
      explanation: "“Un hecho” is something that’s true or that happened.",
      example: "Es un **hecho**: en España se cena tarde.",
    },
    {
      name: "De hecho",
      explanation: "“In fact / actually” — adds or backs up a point.",
      example: "No estoy cansado. De **hecho**, me apetece salir.",
    },
    {
      name: "¡Hecho!",
      explanation: "“Deal!” — you agree to a plan or offer.",
      example: "—¿Quedamos a las nueve? —¡**Hecho**!",
    },
  ],
  examples: [
    { es: "¿Ya has **hecho** la maleta?", en: "Have you packed your suitcase yet?", rule: "Done / made" },
    { es: "Esta tortilla la ha **hecho** mi abuela.", en: "My grandmother made this tortilla.", rule: "Done / made" },
    { es: "Es un **hecho** que el alquiler ha subido mucho.", en: "It’s a fact that rent has gone up a lot.", rule: "A fact" },
    { es: "Conozco bien Sevilla. De **hecho**, viví allí dos años.", en: "I know Seville well. In fact, I lived there for two years.", rule: "De hecho" },
    { es: "—Tú pagas las cañas y yo las tapas. —¡**Hecho**!", en: "—You pay for the beers and I’ll get the tapas. —Deal!", rule: "¡Hecho!" },
  ],
  quiz: [
    {
      prompt: "Ya he ___ la cena.",
      hint: "I’ve already made dinner.",
      options: ["hecho", "echo", "hacido"],
      answer: "hecho",
      explanation: "“Hecho” (with h) is from “hacer”; “echo” is from “echar”, and “hacido” doesn’t exist.",
    },
    {
      prompt: "No es caro. De ___, es bastante barato.",
      hint: "It’s not expensive. In fact, it’s quite cheap.",
      options: ["hecho", "echo", "hacer"],
      answer: "hecho",
      explanation: "“De hecho” = in fact, always spelt with h.",
    },
    {
      prompt: "What does “hecho” mean here? — «—Te invito a una caña si me ayudas con la mudanza. —¡Hecho!»",
      options: ["Deal!", "In fact", "Made"],
      answer: "Deal!",
      explanation: "“¡Hecho!” on its own accepts the offer: “Deal!”",
    },
    {
      prompt: "What does “hecho” mean here? — «Estos zapatos están hechos a mano.»",
      options: ["Made", "A fact", "Deal!"],
      answer: "Made",
      explanation: "“Hechos a mano” = handmade; “hecho” agrees with “zapatos”.",
    },
    {
      prompt: "What does “hecho” mean here? — «Es un hecho que los españoles cenan tarde.»",
      options: ["A fact", "Done", "Deal!"],
      answer: "A fact",
      explanation: "“Un hecho” is a noun here: it’s a fact that Spaniards eat late.",
    },
  ],
};
