import type { Topic } from "../types";

export const que: Topic = {
  slug: "que",
  word: "que",
  title: "Ways to use “que” / “qué”",
  tagline: "Probably the busiest word in Spanish — one accent changes everything.",
  blurb: "That · than · ¡qué bonito!",
  hue: 110,
  group: "small",
  rules: [
    {
      name: "That / which",
      explanation: "Links a description to a noun: “that”, “which” or “who”.",
      example: "El libro **que** compré es buenísimo.",
    },
    {
      name: "Than",
      explanation: "Compares two things after más or menos.",
      example: "Es más alto **que** yo.",
    },
    {
      name: "Wishes",
      explanation: "“¡Que…!” + subjunctive wishes someone well (or badly).",
      example: "¡**Que** te mejores!",
    },
    {
      name: "Because (casual)",
      explanation: "In speech, “que” after a request or comment means “because”.",
      example: "Abrígate, **que** hace frío.",
    },
    {
      name: "Qué = what / how",
      explanation: "With an accent, “qué” asks “what?” or exclaims “how …!”.",
      example: "¡**Qué** bonito!",
    },
  ],
  examples: [
    { es: "La chica **que** trabaja en el bar es de Bilbao.", en: "The girl who works in the bar is from Bilbao.", rule: "That / which" },
    { es: "Este piso es más barato **que** el otro.", en: "This flat is cheaper than the other one.", rule: "Than" },
    { es: "¡**Que** lo pases bien!", en: "Have a good time!", rule: "Wishes" },
    { es: "Date prisa, **que** perdemos el tren.", en: "Hurry up, we’re going to miss the train.", rule: "Because (casual)" },
    { es: "¿**Qué** quieres tomar?", en: "What would you like to drink?", rule: "Qué = what / how" },
  ],
  quiz: [
    {
      prompt: "Mi hermano es más alto ___ yo.",
      hint: "My brother is taller than me.",
      options: ["como", "que", "de"],
      answer: "que",
      explanation: "Comparisons with “más … que” = more … than.",
    },
    {
      prompt: "¡___ tengas buen viaje!",
      hint: "Have a good trip!",
      options: ["Que", "Qué", "Como"],
      answer: "Que",
      explanation: "Wishes use “que” + subjunctive, with no accent.",
    },
    {
      prompt: "What is “que” doing here? — «Abrígate, que hace frío.»",
      options: ["That / which", "Than", "Because (casual)"],
      answer: "Because (casual)",
      explanation: "Wrap up, because it’s cold — casual “que” gives the reason.",
    },
    {
      prompt: "¿___ hora es?",
      hint: "What time is it?",
      options: ["Que", "Qué", "Cuál"],
      answer: "Qué",
      explanation: "Trick question! A direct question needs the accent: “¿Qué hora es?”. “¿Cuál hora…?” isn’t used in Spain.",
    },
    {
      prompt: "What is “qué” doing here? — «¡Qué bonito es Toledo!»",
      options: ["Wishes", "That / which", "Qué = what / how"],
      answer: "Qué = what / how",
      explanation: "An exclamation: “How beautiful Toledo is!” — hence the accent.",
    },
  ],
};
