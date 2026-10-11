import type { Topic } from "../types";

export const irVenir: Topic = {
  slug: "ir-venir",
  word: "ir / venir",
  title: "“Ir” or “venir”?",
  tagline: "It all depends on where you’re standing.",
  blurb: "There vs here · ¡Ya voy! · ir a…",
  hue: 80,
  group: "pairs",
  rules: [
    {
      name: "Ir: away from here",
      explanation: "Movement towards any place where the speaker isn’t right now.",
      example: "Mañana **voy** a Toledo.",
    },
    {
      name: "Venir: towards here",
      explanation: "Movement to where the speaker is — or joining the speaker, as in “¿Vienes conmigo?”.",
      example: "¿**Vienes** conmigo al cine?",
    },
    {
      name: "¡Ya voy!",
      explanation: "Moving towards the listener counts as going, so “I’m coming!” is “¡Ya voy!”.",
      example: "—¡Marta, a comer! —¡Ya **voy**!",
    },
    {
      name: "Ir a + infinitive",
      explanation: "“Going to” do something: the everyday way to talk about plans.",
      example: "**Vamos** a cenar fuera esta noche.",
    },
    {
      name: "Venir de",
      explanation: "“To have come from” somewhere — often where you’ve just been.",
      example: "**Vengo** del gimnasio.",
    },
  ],
  examples: [
    { es: "Este verano **voy** a Galicia con mis padres.", en: "This summer I’m going to Galicia with my parents.", rule: "Ir: away from here" },
    { es: "¿Por qué no **vienes** a casa esta noche? Hago tortilla.", en: "Why don’t you come over tonight? I’m making tortilla.", rule: "Venir: towards here" },
    { es: "—¡Alguien llama a la puerta! —¡Ya **voy**!", en: "“Someone’s at the door!” “I’m coming!”", rule: "¡Ya voy!" },
    { es: "Creo que **va** a llover.", en: "I think it’s going to rain.", rule: "Ir a + infinitive" },
    { es: "**Venimos** de la playa y estamos muertos de hambre.", en: "We’ve just come from the beach and we’re starving.", rule: "Venir de" },
  ],
  quiz: [
    {
      prompt: "Voy al súper. ¿___ conmigo?",
      hint: "I’m going to the supermarket. Are you coming with me?",
      options: ["Vas", "Vienes"],
      answer: "Vienes",
      explanation: "Venir: joining the speaker is “venir”, so “¿Vienes conmigo?”.",
    },
    {
      prompt: "—¡Pablo, la cena está lista! —¡Ya ___!",
      hint: "“Pablo, dinner’s ready!” “Coming!”",
      options: ["voy", "vengo"],
      answer: "voy",
      explanation: "¡Ya voy!: you’re moving towards the other person, so Spanish says “voy”.",
    },
    {
      prompt: "Estoy en casa. ¿Por qué no ___ a tomar algo?",
      hint: "I’m at home. Why don’t you come over for a drink?",
      options: ["vas", "vienes"],
      answer: "vienes",
      explanation: "Venir: the movement is towards the speaker’s home.",
    },
    {
      prompt: "Mañana ___ a llamar al casero.",
      hint: "Tomorrow I’m going to call the landlord.",
      options: ["voy", "vengo"],
      answer: "voy",
      explanation: "Ir a + infinitive: “voy a llamar” = I’m going to call.",
    },
    {
      prompt: "Estamos cansados porque ___ del trabajo.",
      hint: "We’re tired because we’ve just come from work.",
      options: ["vamos", "venimos"],
      answer: "venimos",
      explanation: "Venir de: “venimos del trabajo” = we’ve come from work.",
    },
  ],
};
