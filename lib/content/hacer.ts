import type { Topic } from "../types";

export const hacer: Topic = {
  slug: "hacer",
  word: "hacer",
  title: "Ways to use “hacer”",
  tagline: "Do it, make it, talk about the weather — and count the years.",
  blurb: "Do / make · hace frío · hace dos años",
  hue: 20,
  group: "verbs",
  rules: [
    {
      name: "To do / make",
      explanation: "The basic meaning: doing an activity or making something.",
      example: "¿Qué **haces** este finde?",
    },
    {
      name: "Weather",
      explanation: "Spanish says the weather “makes” cold, heat or sun: “hace frío”.",
      example: "Hoy **hace** mucho frío.",
    },
    {
      name: "Time ago",
      explanation: "“Hace” + a length of time = “… ago”.",
      example: "Llegué a Madrid **hace** dos años.",
    },
    {
      name: "To be needed",
      explanation: "“Hacer falta” means something is needed — or, with “no”, that it isn’t necessary.",
      example: "No **hace** falta reservar.",
    },
    {
      name: "To become (hacerse)",
      explanation: "With me/te/se it means to gradually become something: older, rich, famous.",
      example: "Se **hizo** rico vendiendo pisos.",
    },
  ],
  examples: [
    {
      es: "Esta noche **hago** yo la cena.",
      en: "I’m making dinner tonight.",
      rule: "To do / make",
    },
    {
      es: "En agosto **hace** un calor horrible en Sevilla.",
      en: "In August it’s horribly hot in Seville.",
      rule: "Weather",
    },
    {
      es: "Nos conocimos **hace** diez años.",
      en: "We met ten years ago.",
      rule: "Time ago",
    },
    {
      es: "¿Te **hace** falta algo del súper?",
      en: "Do you need anything from the supermarket?",
      rule: "To be needed",
    },
    {
      es: "Se **hizo** famosa con su primera canción.",
      en: "She became famous with her first song.",
      rule: "To become (hacerse)",
    },
  ],
  quiz: [
    {
      prompt: "En invierno ___ mucho frío en Burgos.",
      hint: "It’s very cold in Burgos in winter.",
      options: ["hace", "tiene", "está"],
      answer: "hace",
      explanation: "Weather uses “hace”; “tener frío” is for a person feeling cold, and “está frío” is for a thing being cold to the touch.",
    },
    {
      prompt: "What does “hace” mean here? — «Me mudé a Valencia hace tres años.»",
      options: [
        "I moved to Valencia three years ago",
        "I’ve lived in Valencia for three years",
        "I’ll move to Valencia in three years",
      ],
      answer: "I moved to Valencia three years ago",
      explanation: "Past tense + “hace” = “ago”; “for three years” would be “vivo en Valencia desde hace tres años”.",
    },
    {
      prompt: "No ___ falta que vengas.",
      hint: "You don’t need to come.",
      options: ["hace", "tiene", "es"],
      answer: "hace",
      explanation: "The fixed phrase is “hacer falta” = to be needed.",
    },
    {
      prompt: "What does “hacer” mean here? — «Mi perro se está haciendo viejo.»",
      options: ["To do / make", "To become (hacerse)", "Weather"],
      answer: "To become (hacerse)",
      explanation: "“Hacerse viejo” = to get old — a gradual change.",
    },
    {
      prompt: "What does “hacer” mean here? — «Hace sol, ¿vamos a la playa?»",
      options: ["Time ago", "Weather", "To do / make"],
      answer: "Weather",
      explanation: "“Hace sol” = it’s sunny.",
    },
  ],
};
