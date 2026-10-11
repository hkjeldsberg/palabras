import type { Topic } from "../types";

export const serEstar: Topic = {
  slug: "ser-estar",
  word: "ser / estar",
  title: "“Ser” or “estar”?",
  tagline: "Two ways to say “to be”: who you are vs how and where you are.",
  blurb: "Who vs how · where · listo",
  hue: 260,
  group: "pairs",
  rules: [
    {
      name: "Who or what",
      explanation: "“Ser” is for identity: who or what something is, where it’s from, its job and its usual traits.",
      example: "Mi madre **es** profesora y **es** muy simpática.",
    },
    {
      name: "How and where",
      explanation: "“Estar” is for states and moods that can change, and for where people and things are.",
      example: "**Estoy** cansado y el hotel **está** lejos.",
    },
    {
      name: "Events",
      explanation: "When saying where or when something happens (a party, a concert), use “ser”, not “estar”.",
      example: "La fiesta **es** en mi casa.",
    },
    {
      name: "Meaning changes",
      explanation: "Some adjectives mean different things: “ser listo” = clever, “estar listo” = ready; “ser aburrido” = boring, “estar aburrido” = bored.",
      example: "Juan **es** listo, pero hoy no **está** listo.",
    },
    {
      name: "Happening now",
      explanation: "“Estar” + an -ando/-iendo form describes what’s going on right now.",
      example: "**Estoy** comiendo, te llamo luego.",
    },
  ],
  examples: [
    { es: "**Soy** de Noruega y **soy** ingeniera.", en: "I’m from Norway and I’m an engineer.", rule: "Who or what" },
    { es: "Perdona, ¿dónde **está** el baño?", en: "Excuse me, where’s the toilet?", rule: "How and where" },
    { es: "El concierto **es** en la Plaza Mayor.", en: "The concert is (taking place) in the Plaza Mayor.", rule: "Events" },
    { es: "La película **es** aburrida, así que **estoy** aburrido.", en: "The film is boring, so I’m bored.", rule: "Meaning changes" },
    { es: "No puedo hablar, **estoy** conduciendo.", en: "I can’t talk, I’m driving.", rule: "Happening now" },
  ],
  quiz: [
    {
      prompt: "Madrid ___ la capital de España.",
      hint: "Madrid is the capital of Spain.",
      options: ["es", "está"],
      answer: "es",
      explanation: "Who or what: being the capital is Madrid’s identity, so “es”.",
    },
    {
      prompt: "Perdone, ¿dónde ___ la estación de tren?",
      hint: "Excuse me, where is the train station?",
      options: ["es", "está"],
      answer: "está",
      explanation: "How and where: the location of a place or thing takes “estar”.",
    },
    {
      prompt: "La boda ___ en una iglesia de Toledo.",
      hint: "The wedding is (taking place) in a church in Toledo.",
      options: ["es", "está"],
      answer: "es",
      explanation: "Events: where an event happens takes “ser”, even though it’s a location.",
    },
    {
      prompt: "Venga, que nos vamos. ¿___ listo?",
      hint: "Come on, we’re leaving. Are you ready?",
      options: ["Eres", "Estás"],
      answer: "Estás",
      explanation: "Meaning changes: “estar listo” = ready; “ser listo” would mean “clever”.",
    },
    {
      prompt: "Ahora mismo mis padres ___ cenando.",
      hint: "My parents are having dinner right now.",
      options: ["son", "están"],
      answer: "están",
      explanation: "Happening now: “estar” + -ando/-iendo for an action in progress.",
    },
  ],
};
