import type { Topic } from "../types";

export const llevar: Topic = {
  slug: "llevar",
  word: "llevar",
  title: "Ways to use “llevar”",
  tagline: "Carry it, wear it, give a lift — and count the time.",
  blurb: "Carry · wear · llevo dos años",
  hue: 205,
  group: "verbs",
  rules: [
    {
      name: "Carry / take along",
      explanation: "Have something with you or take it somewhere.",
      example: "Siempre **llevo** agua en la mochila.",
    },
    {
      name: "Wear",
      explanation: "What you have on: clothes, glasses, a hairstyle.",
      example: "Hoy **llevo** vaqueros y una camiseta blanca.",
    },
    {
      name: "Time (have been)",
      explanation: "llevar + time = how long something has been going on.",
      example: "**Llevo** dos años aquí.",
    },
    {
      name: "Give a lift",
      explanation: "Take someone somewhere, usually by car.",
      example: "¿Te **llevo** a casa?",
    },
  ],
  examples: [
    { es: "¿Me **llevas** la maleta? Pesa muchísimo.", en: "Can you carry my suitcase? It’s really heavy.", rule: "Carry / take along" },
    { es: "Mi jefe siempre **lleva** traje.", en: "My boss always wears a suit.", rule: "Wear" },
    { es: "**Llevo** media hora esperando el autobús.", en: "I’ve been waiting for the bus for half an hour.", rule: "Time (have been)" },
    { es: "¿Cuánto tiempo **llevas** en Madrid?", en: "How long have you been in Madrid?", rule: "Time (have been)" },
    { es: "Si quieres, te **llevo** al aeropuerto.", en: "If you like, I’ll take you to the airport.", rule: "Give a lift" },
  ],
  quiz: [
    {
      prompt: "Hace frío, así que yo ___ un abrigo.",
      hint: "It’s cold, so I’m wearing a coat.",
      options: ["llevo", "lleva", "llevan"],
      answer: "llevo",
      explanation: "With “yo” you need the first-person form: “llevo”.",
    },
    {
      prompt: "Mi novia y yo ___ cinco años juntos.",
      hint: "My girlfriend and I have been together for five years.",
      options: ["llevamos", "llevan", "lleváis"],
      answer: "llevamos",
      explanation: "“Mi novia y yo” = nosotros, so “llevamos” + time.",
    },
    {
      prompt: "¿Puedes ___ estas bolsas? Tengo las manos ocupadas.",
      hint: "Can you carry these bags? My hands are full.",
      options: ["llevar", "llevas", "llevado"],
      answer: "llevar",
      explanation: "After “puedes” the verb stays in the infinitive: “llevar”.",
    },
    {
      prompt: "What does “llevar” mean here? — «¿Te llevo a casa? Tengo el coche aquí.»",
      options: ["To wear", "To give someone a lift", "To have been (time)"],
      answer: "To give someone a lift",
      explanation: "The car is right there — they’re offering to drive you home.",
    },
    {
      prompt: "What does “llevar” mean here? — «Llevo tres meses estudiando español.»",
      options: ["To carry", "To wear", "To have been (time)"],
      answer: "To have been (time)",
      explanation: "llevar + a length of time = “I’ve been studying Spanish for three months”.",
    },
  ],
};
