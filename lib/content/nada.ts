import type { Topic } from "../types";

export const nada: Topic = {
  slug: "nada",
  word: "nada",
  title: "Ways to use “nada”",
  tagline: "Nothing, you’re welcome, as soon as — not at all.",
  blurb: "Nothing · de nada · para nada",
  hue: 270,
  group: "everyday",
  rules: [
    {
      name: "Nothing",
      explanation: "“Nothing / anything” — after a verb it needs “no” in front.",
      example: "No hay **nada** en la nevera.",
    },
    {
      name: "De nada",
      explanation: "The standard reply to “gracias”: “you’re welcome”.",
      example: "—Gracias. —De **nada**.",
    },
    {
      name: "Nada más + infinitive",
      explanation: "“As soon as” — the moment something happens.",
      example: "**Nada** más llegar al hotel, me fui a la piscina.",
    },
    {
      name: "Para nada",
      explanation: "A strong “not at all”.",
      example: "—¿Estás cansado? —¡Para **nada**!",
    },
  ],
  examples: [
    { es: "No he dicho **nada**, te lo prometo.", en: "I haven’t said anything, I promise.", rule: "Nothing" },
    { es: "—Muchas gracias por traerme. —De **nada**, mujer.", en: "—Thanks so much for the lift. —You’re welcome.", rule: "De nada" },
    { es: "**Nada** más salir del trabajo, te llamo.", en: "As soon as I leave work, I’ll call you.", rule: "Nada más + infinitive" },
    { es: "La película no me gustó para **nada**.", en: "I didn’t like the film at all.", rule: "Para nada" },
  ],
  quiz: [
    {
      prompt: "No quiero ___, gracias. Ya he comido.",
      hint: "I don’t want anything, thanks. I’ve already eaten.",
      options: ["nada", "algo", "nadie"],
      answer: "nada",
      explanation: "After “no” + verb, Spanish uses “nada” for “anything”.",
    },
    {
      prompt: "—Muchas gracias. —De ___.",
      hint: "—Thanks a lot. —You’re welcome.",
      options: ["nada", "algo", "nadie"],
      answer: "nada",
      explanation: "“De nada” is the fixed reply to “gracias”.",
    },
    {
      prompt: "What does “nada” mean here? — «Nada más salir de casa, empezó a llover.»",
      options: ["As soon as", "Nothing else", "Not at all"],
      answer: "As soon as",
      explanation: "“Nada más” + infinitive = the moment I left home, it started raining.",
    },
    {
      prompt: "What does “nada” mean here? — «—¿Te molesta el ruido? —Para nada.»",
      options: ["Not at all", "For nothing", "You’re welcome"],
      answer: "Not at all",
      explanation: "“Para nada” is a strong “not at all” — the noise doesn’t bother them.",
    },
  ],
};
