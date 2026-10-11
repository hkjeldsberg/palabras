import type { Topic } from "../types";

export const acabar: Topic = {
  slug: "acabar",
  word: "acabar",
  title: "Ways to use “acabar”",
  tagline: "Finish up, just did it, ended up here — and that’s that.",
  blurb: "Finish · have just · run out",
  hue: 95,
  group: "verbs",
  rules: [
    {
      name: "To finish",
      explanation: "Finishing something or coming to an end.",
      example: "¿Has **acabado** el informe?",
    },
    {
      name: "To have just (acabar de)",
      explanation: "“Acabar de” + infinitive says something happened a moment ago.",
      example: "**Acabo** de llegar a la estación.",
    },
    {
      name: "To end up",
      explanation: "“Acabar” + -ando/-iendo (or “acabar por” + infinitive) means to end up doing something.",
      example: "Al final **acabamos** cenando en casa.",
    },
    {
      name: "To run out (acabarse)",
      explanation: "“Acabarse” works like “gustar”: the thing that runs out is the subject.",
      example: "Se nos ha **acabado** la leche.",
    },
    {
      name: "That’s it! (¡Se acabó!)",
      explanation: "A firm way to say “enough” or “that’s the end of it”.",
      example: "¡Se **acabó**! No quiero oír ni una palabra más.",
    },
  ],
  examples: [
    {
      es: "La película **acaba** a las once.",
      en: "The film finishes at eleven.",
      rule: "To finish",
    },
    {
      es: "Lo siento, el tren **acaba** de salir.",
      en: "Sorry, the train has just left.",
      rule: "To have just (acabar de)",
    },
    {
      es: "Fui a Madrid de vacaciones y **acabé** quedándome cinco años.",
      en: "I went to Madrid on holiday and ended up staying five years.",
      rule: "To end up",
    },
    {
      es: "Se han **acabado** las entradas para el concierto.",
      en: "The concert tickets have sold out.",
      rule: "To run out (acabarse)",
    },
    {
      es: "—Cinco minutitos más… —No, se **acabó**: a la cama.",
      en: "“Five more minutes…” “No, that’s it: bed.”",
      rule: "That’s it! (¡Se acabó!)",
    },
  ],
  quiz: [
    {
      prompt: "___ de llegar a Madrid, te llamo luego.",
      hint: "I’ve just arrived in Madrid, I’ll call you later.",
      options: ["Acabo", "Acabas", "Acaba"],
      answer: "Acabo",
      explanation: "“I have just” = “acabo de” + infinitive, in the present tense.",
    },
    {
      prompt: "What does “acabar” mean here? — «Se ha acabado el café, hay que comprar más.»",
      options: ["To run out", "To have just", "To end up"],
      answer: "To run out",
      explanation: "There’s no coffee left, so you need to buy more.",
    },
    {
      prompt: "What does “acabar” mean here? — «Íbamos a salir, pero al final acabamos viendo una peli en casa.»",
      options: ["To end up", "To run out", "To have just"],
      answer: "To end up",
      explanation: "“Acabar” + gerund = to end up doing something different from the plan.",
    },
    {
      prompt: "What does “acabar” mean here? — «¿Ya has acabado los deberes? Entonces puedes salir.»",
      options: ["To finish", "To run out", "To end up"],
      answer: "To finish",
      explanation: "Homework done — you’ve finished it, so you can go out.",
    },
    {
      prompt: "¡Se ___! Apagad la tele y a la cama.",
      hint: "That’s it! Turn off the TV and off to bed.",
      options: ["acabó", "acabé", "acabaste"],
      answer: "acabó",
      explanation: "The fixed phrase is “¡Se acabó!” — that’s it, enough.",
    },
  ],
};
