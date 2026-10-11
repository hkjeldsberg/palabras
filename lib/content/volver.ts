import type { Topic } from "../types";

export const volver: Topic = {
  slug: "volver",
  word: "volver",
  title: "Ways to use “volver”",
  tagline: "Come back, do it again, or turn into something new.",
  blurb: "Come back · do again · become",
  hue: 270,
  group: "verbs",
  rules: [
    {
      name: "To come back",
      explanation: "Returning to a place — “volver a casa”, “volver de vacaciones”.",
      example: "¿A qué hora **vuelves** esta noche?",
    },
    {
      name: "To do again (volver a)",
      explanation: "“Volver a” + infinitive means doing something again.",
      example: "Mañana **vuelvo** a llamar.",
    },
    {
      name: "To become (volverse)",
      explanation: "“Volverse” + adjective describes a deep or lasting change in someone.",
      example: "Con tanto ruido me voy a **volver** loco.",
    },
    {
      name: "To come round (volver en sí)",
      explanation: "“Volver en sí” means waking up again after fainting.",
      example: "Se desmayó, pero **volvió** en sí enseguida.",
    },
  ],
  examples: [
    {
      es: "Mis padres **vuelven** de Londres el domingo.",
      en: "My parents are coming back from London on Sunday.",
      rule: "To come back",
    },
    {
      es: "¿Puedes **volver** a explicarlo, por favor?",
      en: "Can you explain it again, please?",
      rule: "To do again (volver a)",
    },
    {
      es: "No **vuelvas** a hacer eso, ¿vale?",
      en: "Don’t do that again, OK?",
      rule: "To do again (volver a)",
    },
    {
      es: "Desde que es famoso, se ha **vuelto** muy creído.",
      en: "Since he got famous, he’s become really full of himself.",
      rule: "To become (volverse)",
    },
    {
      es: "Cuando **volvió** en sí, estaba en el hospital.",
      en: "When she came round, she was in hospital.",
      rule: "To come round (volver en sí)",
    },
  ],
  quiz: [
    {
      prompt: "Lo siento, no ___ a pasar, te lo prometo.",
      hint: "Sorry, it won’t happen again, I promise.",
      options: ["vuelve", "vuelves", "volver"],
      answer: "vuelve",
      explanation: "“It” is the subject, so third-person “vuelve”, with the o → ue stem change.",
    },
    {
      prompt: "What does “volver” mean here? — «—¿Cuándo vuelves de Sevilla? —El lunes.»",
      options: ["To come back", "To do again", "To become"],
      answer: "To come back",
      explanation: "You’re asking when someone returns from Seville.",
    },
    {
      prompt: "What does “volver” mean here? — «Mi jefe se ha vuelto muy simpático últimamente.»",
      options: ["To become", "To come back", "To come round"],
      answer: "To become",
      explanation: "“Volverse” + adjective = to become — he’s become very nice lately.",
    },
    {
      prompt: "What does “volver a” mean here? — «Volví a leer el libro en verano.»",
      options: ["I read it again", "I finished reading it", "I became a reader"],
      answer: "I read it again",
      explanation: "“Volver a” + infinitive = to do something again.",
    },
    {
      prompt: "What does “volver en sí” mean? — «El ciclista se cayó, pero volvió en sí a los pocos segundos.»",
      options: ["He came round", "He came back home", "He did it again"],
      answer: "He came round",
      explanation: "“Volver en sí” = to regain consciousness.",
    },
  ],
};
