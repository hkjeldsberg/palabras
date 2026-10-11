import type { Topic } from "../types";

export const anda: Topic = {
  slug: "anda",
  word: "anda",
  title: "Ways to use “anda”",
  tagline: "Wow, come on, yeah right — and sometimes just walking.",
  blurb: "¡anda! · anda, porfa · ¡anda ya!",
  hue: 190,
  group: "everyday",
  rules: [
    {
      name: "Wow / no way",
      explanation: "On its own, “¡anda!” shows genuine surprise at news.",
      example: "—Me ha tocado la lotería. —¡**Anda**! ¿En serio?",
    },
    {
      name: "Come on / please",
      explanation: "At the start of a request, it nudges or coaxes someone — “go on”.",
      example: "**Anda**, ayúdame con estas bolsas.",
    },
    {
      name: "¡Anda ya!",
      explanation: "Adding “ya” turns it into disbelief or dismissal — “yeah, right!” or “get away!”",
      example: "¡**Anda** ya! No me lo creo.",
    },
    {
      name: "Walks / is doing",
      explanation: "From “andar”: to walk or go, and in questions, how someone is getting on.",
      example: "¿Cómo **anda** tu madre?",
    },
  ],
  examples: [
    {
      es: "—Ana y Luis se van a vivir a Japón. —¡**Anda**! No tenía ni idea.",
      en: "“Ana and Luis are moving to Japan.” “Wow! I had no idea.”",
      rule: "Wow / no way",
    },
    {
      es: "**Anda**, déjame tu cargador, que me quedo sin batería.",
      en: "Go on, lend me your charger — my battery’s dying.",
      rule: "Come on / please",
    },
    {
      es: "—Dice que ha corrido una maratón en dos horas. —¡**Anda** ya!",
      en: "“He says he ran a marathon in two hours.” “Yeah, right!”",
      rule: "¡Anda ya!",
    },
    {
      es: "Mi abuelo **anda** una hora todas las mañanas por el parque.",
      en: "My grandad walks for an hour every morning in the park.",
      rule: "Walks / is doing",
    },
    {
      es: "—¿Cómo **anda** tu hermano? —Bien, ahora trabaja en Valencia.",
      en: "“How’s your brother doing?” “Fine, he works in Valencia now.”",
      rule: "Walks / is doing",
    },
  ],
  quiz: [
    {
      prompt: "¡Anda ___! Eso es imposible.",
      hint: "Yeah, right! That’s impossible.",
      options: ["ya", "más", "bien"],
      answer: "ya",
      explanation: "“¡Anda ya!” is the fixed phrase for disbelief.",
    },
    {
      prompt: "—¿Cómo ___ tu abuela? —Mucho mejor, gracias.",
      hint: "How’s your grandmother doing? — Much better, thanks.",
      options: ["anda", "andas", "andan"],
      answer: "anda",
      explanation: "One grandmother, so third-person singular “anda” (from “andar”).",
    },
    {
      prompt: "What does “anda” mean here? — «—Mañana me caso. —¡Anda! ¿En serio? ¡Enhorabuena!»",
      options: ["Wow / no way", "Come on, please", "Walk!"],
      answer: "Wow / no way",
      explanation: "Followed by “¿En serio? ¡Enhorabuena!”, it’s happy surprise at the news.",
    },
    {
      prompt: "What does “anda” mean here? — «Anda, hazme un favor y saca la basura.»",
      options: ["Go on / please", "Wow!", "Yeah, right!"],
      answer: "Go on / please",
      explanation: "It opens a request, coaxing the other person to do something.",
    },
    {
      prompt: "What does “anda” mean here? — «—Pablo dice que habla diez idiomas. —¡Anda ya! Si apenas habla inglés.»",
      options: ["Yeah, right! / Get away!", "Come on, please", "He’s walking"],
      answer: "Yeah, right! / Get away!",
      explanation: "“¡Anda ya!” plus the reason it can’t be true shows disbelief.",
    },
  ],
};
