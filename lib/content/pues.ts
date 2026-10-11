import type { Topic } from "../types";

export const pues: Topic = {
  slug: "pues",
  word: "pues",
  title: "Ways to use “pues”",
  tagline: "Well… then… of course! Spain’s favourite way to start a sentence.",
  blurb: "Well… · then · ¡pues claro!",
  hue: 90,
  group: "small",
  rules: [
    {
      name: "Filler “well…”",
      explanation: "Buys you a second to think, like “well…” or “um…” in English.",
      example: "**Pues**… no sé, la verdad.",
    },
    {
      name: "Then / so",
      explanation: "Reacts to what someone just said with a logical next step.",
      example: "¿No te gusta? **Pues** no lo comas.",
    },
    {
      name: "Emphasis",
      explanation: "Adds punch to a reply — “well, obviously!”",
      example: "¡**Pues** claro que voy!",
    },
    {
      name: "Formal “because”",
      explanation: "In careful or written Spanish it means “as” or “since”.",
      example: "No vino, **pues** estaba enfermo.",
    },
  ],
  examples: [
    {
      es: "—¿Qué tal el examen? —**Pues**… regular.",
      en: "“How did the exam go?” “Well… so-so.”",
      rule: "Filler “well…”",
    },
    {
      es: "—Tengo frío. —**Pues** ponte una chaqueta.",
      en: "“I’m cold.” “Then put a jacket on.”",
      rule: "Then / so",
    },
    {
      es: "—¿Te apetece una caña? —¡**Pues** claro!",
      en: "“Fancy a beer?” “Well, of course!”",
      rule: "Emphasis",
    },
    {
      es: "**Pues** yo no pienso pagar eso.",
      en: "Well, I’m certainly not paying that.",
      rule: "Emphasis",
    },
    {
      es: "Se cerró la tienda, **pues** no había clientes.",
      en: "The shop closed, as there were no customers.",
      rule: "Formal “because”",
    },
  ],
  quiz: [
    {
      prompt: "—¿Vienes a la fiesta? —___… no sé, estoy cansado.",
      hint: "“Are you coming to the party?” “Well… I don’t know, I’m tired.”",
      options: ["Pues", "Porque", "Para"],
      answer: "Pues",
      explanation: "Filler “pues”: you’re hesitating before answering.",
    },
    {
      prompt: "—Tengo hambre. —___ come algo.",
      hint: "“I’m hungry.” “Then eat something.”",
      options: ["Porque", "Pues", "Para"],
      answer: "Pues",
      explanation: "“Pues” = then: the obvious next step after what they said.",
    },
    {
      prompt: "—¿Me ayudas con la mudanza? —¡___ claro!",
      hint: "“Will you help me move house?” “Well, of course!”",
      options: ["Por", "Pues", "Para"],
      answer: "Pues",
      explanation: "“¡Pues claro!” is the classic emphatic “of course!”.",
    },
    {
      prompt: "What does “pues” mean here? — «No fue a clase, pues estaba enfermo.»",
      options: ["Filler “well…”", "Then / so", "Formal “because”"],
      answer: "Formal “because”",
      explanation: "The second half gives the reason: he didn’t go, as he was ill.",
    },
    {
      prompt: "What does “pues” mean here? — «—No me gusta el pescado. —Pues no lo pidas.»",
      options: ["Formal “because”", "Then / so"],
      answer: "Then / so",
      explanation: "It’s a reaction with a logical consequence: then don’t order it.",
    },
  ],
};
