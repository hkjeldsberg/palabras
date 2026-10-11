import type { Topic } from "../types";

export const vaya: Topic = {
  slug: "vaya",
  word: "vaya",
  title: "Ways to use “vaya”",
  tagline: "Wow, what a day, oh no — one little word for all of it.",
  blurb: "¡Vaya día! · wow · oh no",
  hue: 60,
  group: "everyday",
  rules: [
    {
      name: "What a…! (¡vaya + noun!)",
      explanation: "Put a noun after it to react strongly — good or bad.",
      example: "¡**Vaya** día llevo!",
    },
    {
      name: "Wow! (surprise)",
      explanation: "On its own, it shows surprise at news or a sight.",
      example: "¡**Vaya**! ¡Qué piso tan bonito!",
    },
    {
      name: "Oh no / what a shame",
      explanation: "A soft, sympathetic reaction to bad news.",
      example: "—He perdido el vuelo. —**Vaya**, lo siento.",
    },
    {
      name: "From “ir”: wishes and commands",
      explanation: "It’s also the subjunctive of “ir”, used in wishes and polite “usted” commands.",
      example: "¡Que te **vaya** bien!",
    },
  ],
  examples: [
    {
      es: "¡**Vaya** calor hace hoy!",
      en: "It’s so hot today!",
      rule: "What a…! (¡vaya + noun!)",
    },
    {
      es: "—Me han dado el trabajo en Barcelona. —¡**Vaya**! ¡Enhorabuena!",
      en: "“I got the job in Barcelona.” “Wow! Congratulations!”",
      rule: "Wow! (surprise)",
    },
    {
      es: "—No puedo ir a tu fiesta, estoy malo. —**Vaya**, qué pena.",
      en: "“I can’t come to your party, I’m ill.” “Oh no, what a shame.”",
      rule: "Oh no / what a shame",
    },
    {
      es: "Para la catedral, **vaya** usted todo recto.",
      en: "For the cathedral, go straight ahead.",
      rule: "From “ir”: wishes and commands",
    },
    {
      es: "¡Que os **vaya** muy bien el viaje!",
      en: "Have a great trip!",
      rule: "From “ir”: wishes and commands",
    },
  ],
  quiz: [
    {
      prompt: "¡___ día! No ha parado de llover.",
      hint: "What a day! It hasn’t stopped raining.",
      options: ["Vaya", "Venga", "Vale"],
      answer: "Vaya",
      explanation: "“¡Vaya + noun!” = “what a…!”",
    },
    {
      prompt: "What does “vaya” mean here? — «—Mi abuela está en el hospital. —Vaya, lo siento mucho.»",
      options: ["Oh no, I’m sorry", "Wow, amazing!", "Go!"],
      answer: "Oh no, I’m sorry",
      explanation: "A sympathetic reaction to bad news.",
    },
    {
      prompt: "What does “vaya” mean here? — «—Me han subido el sueldo un 20 %. —¡Vaya! ¡Qué bien!»",
      options: ["Wow!", "What a shame", "Go (polite command)"],
      answer: "Wow!",
      explanation: "Happy surprise at good news — “¡Qué bien!” confirms it.",
    },
    {
      prompt: "¡Que te ___ bien en la entrevista!",
      hint: "Hope the interview goes well!",
      options: ["vaya", "va", "vas"],
      answer: "vaya",
      explanation: "Wishes with “que” take the subjunctive of “ir”: “vaya”.",
    },
    {
      prompt: "What does “vaya” mean here? — «—Perdone, ¿la estación? —Vaya usted todo recto y luego a la izquierda.»",
      options: ["Go (polite command)", "What a…!", "Oh no"],
      answer: "Go (polite command)",
      explanation: "Giving directions to “usted” — “vaya” is the polite command of “ir”.",
    },
  ],
};
