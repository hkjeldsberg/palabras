import type { Topic } from "../types";

export const llevarTraer: Topic = {
  slug: "llevar-traer",
  word: "llevar / traer",
  title: "“Llevar” or “traer”?",
  tagline: "It all depends on where you’re standing.",
  blurb: "There vs here · the bill · voy y llevo",
  hue: 320,
  group: "pairs",
  rules: [
    {
      name: "Take there",
      explanation: "“Llevar” is moving something or someone away from where the speaker is.",
      example: "Te **llevo** al aeropuerto.",
    },
    {
      name: "Bring here",
      explanation: "“Traer” is moving something or someone towards where the speaker is.",
      example: "¿Me **traes** un vaso de agua?",
    },
    {
      name: "At the bar",
      explanation: "When you ask a waiter for something, it comes to you, so use “traer”.",
      example: "¿Me **trae** la cuenta, por favor?",
    },
    {
      name: "Voy y llevo",
      explanation: "Going to someone else’s place is “ir” + “llevar”, even when English says “come” and “bring”.",
      example: "Ahora **voy** y te lo **llevo**.",
    },
  ],
  examples: [
    { es: "¿Puedes **llevar** estas cajas al coche?", en: "Can you take these boxes to the car?", rule: "Take there" },
    { es: "¿Quién ha **traído** estas flores?", en: "Who brought these flowers?", rule: "Bring here" },
    { es: "¿Nos **trae** dos cañas, por favor?", en: "Could you bring us two small beers, please?", rule: "At the bar" },
    {
      es: "No te preocupes, **voy** a tu casa y te **llevo** las llaves.",
      en: "Don’t worry, I’ll come over to your place and bring you the keys.",
      rule: "Voy y llevo",
    },
  ],
  quiz: [
    {
      prompt: "Cariño, ¿me ___ las gafas? Están en la mesa de la cocina.",
      hint: "Honey, can you bring me my glasses? They’re on the kitchen table.",
      options: ["traes", "llevas"],
      answer: "traes",
      explanation: "Bring here: the glasses move towards the speaker, so “traer”.",
    },
    {
      prompt: "Esta tarde ___ a los niños al parque.",
      hint: "This afternoon I’m taking the kids to the park.",
      options: ["llevo", "traigo"],
      answer: "llevo",
      explanation: "Take there: the kids go away from here to the park, so “llevar”.",
    },
    {
      prompt: "Perdone, ¿nos ___ la cuenta, por favor?",
      hint: "Excuse me, could you bring us the bill, please?",
      options: ["trae", "lleva"],
      answer: "trae",
      explanation: "At the bar: the bill comes to your table, so “traer”.",
    },
    {
      prompt: "—¿Vienes a la cena? —Sí, ahora voy y ___ el vino.",
      hint: "“Are you coming to dinner?” “Yes, I’m on my way and I’ll bring the wine.”",
      options: ["llevo", "traigo"],
      answer: "llevo",
      explanation: "Voy y llevo: you’re going to their place, so Spanish says “llevo”, even though English says “bring”.",
    },
    {
      prompt: "¿Quién ha ___ esta tarta? ¡Está buenísima!",
      hint: "Who brought this cake? It’s delicious!",
      options: ["traído", "llevado"],
      answer: "traído",
      explanation: "Bring here: the cake arrived where the speaker is, so “traer”.",
    },
  ],
};
