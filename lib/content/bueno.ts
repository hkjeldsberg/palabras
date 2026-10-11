import type { Topic } from "../types";

export const bueno: Topic = {
  slug: "bueno",
  word: "bueno",
  title: "Ways to use “bueno”",
  tagline: "Good, well…, fine — and the art of buying time.",
  blurb: "buen día · bueno… · o sea",
  hue: 30,
  group: "everyday",
  rules: [
    {
      name: "Good (adjective)",
      explanation: "Means “good”; it shortens to “buen” before a masculine singular noun and becomes “buena” for feminine ones.",
      example: "Hoy hace muy **buen** tiempo.",
    },
    {
      name: "Well… (filler)",
      explanation: "Starts a sentence, buys thinking time or changes the subject.",
      example: "**Bueno**, cambiando de tema, ¿qué tal el trabajo?",
    },
    {
      name: "OK / fine",
      explanation: "A slightly reluctant or relaxed “OK” when agreeing.",
      example: "—¿Pedimos una pizza? —**Bueno**, vale.",
    },
    {
      name: "Bueno, bueno",
      explanation: "Said twice with a knowing tone, it means “yeah, sure…” — you doubt it.",
      example: "—Mañana empiezo la dieta. —**Bueno, bueno**…",
    },
    {
      name: "O sea",
      explanation: "A related filler meaning “I mean” or “in other words”, used to rephrase or sum up.",
      example: "Llego a las diez, **o sea**, una hora tarde.",
    },
  ],
  examples: [
    {
      es: "Es un restaurante muy **bueno**, y la tortilla está **buenísima**.",
      en: "It’s a really good restaurant, and the tortilla is amazing.",
      rule: "Good (adjective)",
    },
    {
      es: "**Bueno**, me voy ya, que es tardísimo.",
      en: "Well, I’m off — it’s really late.",
      rule: "Well… (filler)",
    },
    {
      es: "—¿Vamos al cine esta noche? —**Bueno**. ¿A qué hora?",
      en: "“Shall we go to the cinema tonight?” “OK. What time?”",
      rule: "OK / fine",
    },
    {
      es: "—Este año voy a ahorrar muchísimo. —**Bueno, bueno**… ya veremos.",
      en: "“This year I’m going to save loads.” “Yeah, sure… we’ll see.”",
      rule: "Bueno, bueno",
    },
    {
      es: "No me apetece salir, **o sea**, estoy cansadísimo.",
      en: "I don’t feel like going out — I mean, I’m exhausted.",
      rule: "O sea",
    },
  ],
  quiz: [
    {
      prompt: "Hoy hace muy ___ tiempo.",
      hint: "The weather’s really good today.",
      options: ["buen", "bueno", "buena"],
      answer: "buen",
      explanation: "Before a masculine singular noun (“tiempo”), “bueno” shortens to “buen”.",
    },
    {
      prompt: "La paella está muy ___.",
      hint: "The paella is really good.",
      options: ["buena", "bueno", "buen"],
      answer: "buena",
      explanation: "“Paella” is feminine, so it’s “buena”.",
    },
    {
      prompt: "What does “bueno” mean here? — «—Mañana me levanto a las seis para ir al gimnasio. —Bueno, bueno… ya veremos.»",
      options: ["Yeah, sure… (I doubt it)", "Good (quality)", "Great, let’s go!"],
      answer: "Yeah, sure… (I doubt it)",
      explanation: "Doubled, with “ya veremos” (we’ll see), it shows scepticism.",
    },
    {
      prompt: "What does “bueno” mean here? — «—¿Vamos a la playa? —Bueno, vale. Cojo la toalla.»",
      options: ["OK / fine", "Yeah, sure… (I doubt it)", "Good (quality)"],
      answer: "OK / fine",
      explanation: "The speaker agrees and gets ready to go.",
    },
    {
      prompt: "What does “o sea” mean here? — «El tren sale a las ocho, o sea, dentro de diez minutos.»",
      options: ["In other words", "Of course", "Even though"],
      answer: "In other words",
      explanation: "“O sea” rephrases the time in a different way.",
    },
  ],
};
