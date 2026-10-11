import type { Topic } from "../types";

export const poner: Topic = {
  slug: "poner",
  word: "poner",
  title: "Ways to use “poner”",
  tagline: "Put it down, order a caña — and try not to go red.",
  blurb: "Put · ¿me pones…? · ponerse",
  hue: 175,
  group: "verbs",
  rules: [
    {
      name: "To put",
      explanation: "The basic meaning: to put or place something somewhere.",
      example: "**Pon** las llaves en la mesa.",
    },
    {
      name: "To order (bar)",
      explanation: "In a Spanish bar, “¿me pones…?” is the casual, normal way to order.",
      example: "¿Me **pones** una caña?",
    },
    {
      name: "To become (ponerse)",
      explanation: "“Ponerse” + adjective = a sudden change of mood or state: nervous, red, ill.",
      example: "Me **pongo** nervioso en los exámenes.",
    },
    {
      name: "To put on (clothes)",
      explanation: "“Ponerse” + clothing = to put it on.",
      example: "**Ponte** el abrigo, que hace frío.",
    },
    {
      name: "To start",
      explanation: "“Ponerse a” + infinitive = to start doing something.",
      example: "Se **puso** a llover.",
    },
  ],
  examples: [
    {
      es: "¿Dónde has **puesto** mi móvil?",
      en: "Where have you put my phone?",
      rule: "To put",
    },
    {
      es: "¿Nos **pones** dos cafés con leche, por favor?",
      en: "Can we have two white coffees, please?",
      rule: "To order (bar)",
    },
    {
      es: "Se **puso** rojísimo cuando ella le habló.",
      en: "He went bright red when she spoke to him.",
      rule: "To become (ponerse)",
    },
    {
      es: "Hoy me **pongo** el vestido nuevo.",
      en: "I’m wearing my new dress today.",
      rule: "To put on (clothes)",
    },
    {
      es: "Llegó a casa y se **puso** a estudiar.",
      en: "He got home and started studying.",
      rule: "To start",
    },
  ],
  quiz: [
    {
      prompt: "What does “poner” mean here? — «¿Me pones un café, por favor?»",
      options: ["To order (bar)", "To put on (clothes)", "To start"],
      answer: "To order (bar)",
      explanation: "“¿Me pones…?” is how you order at the bar: “Can I have a coffee?”.",
    },
    {
      prompt: "Antes de una entrevista, siempre me ___ nervioso.",
      hint: "I always get nervous before an interview.",
      options: ["pongo", "hago", "tengo"],
      answer: "pongo",
      explanation: "“Ponerse nervioso” = to get nervous — a change of state.",
    },
    {
      prompt: "What does “ponerse a” mean here? — «De repente se puso a llover.»",
      options: ["It started to rain", "It stopped raining", "It put the rain away"],
      answer: "It started to rain",
      explanation: "“Ponerse a” + infinitive = to start doing something.",
    },
    {
      prompt: "What does “ponerse” mean here? — «Ponte la chaqueta, que hace frío.»",
      options: ["Put your jacket on", "Put your jacket away", "Take your jacket off"],
      answer: "Put your jacket on",
      explanation: "“Ponerse” + clothing = to put it on.",
    },
    {
      prompt: "What does “ponerse” mean here? — «Cuando vio la nota, se puso muy contenta.»",
      options: ["To put on (clothes)", "To become (ponerse)", "To order (bar)"],
      answer: "To become (ponerse)",
      explanation: "“Ponerse contenta” = she got really happy — a sudden change of mood.",
    },
  ],
};
