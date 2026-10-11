import type { Topic } from "../types";

export const ya: Topic = {
  slug: "ya",
  word: "ya",
  title: "Ways to use “ya”",
  tagline: "Already, right now, I know — and that’s enough!",
  blurb: "Already · now · ¡ya ves!",
  hue: 70,
  group: "small",
  rules: [
    {
      name: "Already / no longer",
      explanation: "Something has happened. “Ya no” means no longer.",
      example: "**Ya** he comido.",
    },
    {
      name: "Now, right away",
      explanation: "Immediate action — do it now, or it’s happening now.",
      example: "¡Hazlo **ya**!",
    },
    {
      name: "Agreement",
      explanation: "“Yeah, I know”, “right”, “you see” in conversation.",
      example: "¡**Ya** ves!",
    },
    {
      name: "Frustration / emphasis",
      explanation: "Signals you’ve had enough.",
      example: "¡**Ya** está bien!",
    },
  ],
  examples: [
    { es: "**Ya** he terminado los deberes.", en: "I’ve already finished my homework.", rule: "Already / no longer" },
    { es: "**Ya** no vivo en Barcelona.", en: "I no longer live in Barcelona.", rule: "Already / no longer" },
    { es: "¡Ven aquí **ya**!", en: "Come here right now!", rule: "Now, right away" },
    {
      es: "—Hace un calor horrible. —**Ya**, ni me digas.",
      en: "“It’s horribly hot.” “Yeah, tell me about it.”",
      rule: "Agreement",
    },
    { es: "¡**Ya** basta! Apaga la tele.", en: "That’s enough! Turn off the TV.", rule: "Frustration / emphasis" },
  ],
  quiz: [
    {
      prompt: "—¿Has comido? —Sí, ___ he comido.",
      hint: "“Have you eaten?” “Yes, I’ve already eaten.”",
      options: ["todavía", "ya", "nunca"],
      answer: "ya",
      explanation: "“Ya” = already: the action is done.",
    },
    {
      prompt: "Ella ___ no trabaja aquí; se fue el año pasado.",
      hint: "She no longer works here; she left last year.",
      options: ["aún", "siempre", "ya"],
      answer: "ya",
      explanation: "“Ya no” = no longer — she used to, but not anymore.",
    },
    {
      prompt: "—Llegas tarde. —¡___ lo sé!",
      hint: "“You’re late.” “I know!”",
      options: ["Ya", "Aún", "Todavía"],
      answer: "Ya",
      explanation: "“¡Ya lo sé!” = “I know!” — acknowledgement, often a bit defensive.",
    },
    {
      prompt: "Someone calls your name from the kitchen. You shout «¡Ya voy!». What do you mean?",
      options: ["I already went", "I’m coming!", "I’m not going anymore"],
      answer: "I’m coming!",
      explanation: "“Ya” = right now: you’re on your way this instant.",
    },
    {
      prompt: "What is “ya” doing here? — «¡Ya basta! Dejad de gritar.»",
      options: ["Already", "Agreement", "Frustration"],
      answer: "Frustration",
      explanation: "“¡Ya basta!” = “That’s enough!” — pure exasperation.",
    },
  ],
};
