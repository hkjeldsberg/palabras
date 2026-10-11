import type { Topic } from "../types";

export const venga: Topic = {
  slug: "venga",
  word: "venga",
  title: "Ways to use “venga”",
  tagline: "Come on, deal, hurry up, bye — Spain’s favourite nudge.",
  blurb: "Come on! · OK, deal · see you",
  hue: 160,
  group: "everyday",
  rules: [
    {
      name: "Come on! (encouragement)",
      explanation: "Cheering someone on or nudging them to do something.",
      example: "¡**Venga**, que tú puedes!",
    },
    {
      name: "OK / deal",
      explanation: "A quick “yes, let’s do it” when you agree to a plan.",
      example: "—¿Vamos al cine esta tarde? —**Venga**.",
    },
    {
      name: "Hurry up",
      explanation: "Often doubled — “¡venga, venga!” — to get people moving.",
      example: "¡**Venga**, venga, que perdemos el tren!",
    },
    {
      name: "Bye / see you",
      explanation: "Used to wrap up a chat or phone call before saying goodbye.",
      example: "**Venga**, hasta luego.",
    },
    {
      name: "No way! (¡venga ya!)",
      explanation: "“¡Venga ya!” shows disbelief — “come off it!”",
      example: "¡**Venga** ya! No me lo creo.",
    },
  ],
  examples: [
    {
      es: "—No sé si atreverme a bailar. —¡**Venga**, anímate!",
      en: "“I don’t know if I dare dance.” “Come on, go for it!”",
      rule: "Come on! (encouragement)",
    },
    {
      es: "—¿Pagamos a medias? —**Venga**, perfecto.",
      en: "“Shall we split it?” “Deal, perfect.”",
      rule: "OK / deal",
    },
    {
      es: "¡**Venga**, chicos, que cierran en cinco minutos!",
      en: "Come on, guys, they close in five minutes!",
      rule: "Hurry up",
    },
    {
      es: "—Pues nada, mañana hablamos. —**Venga**, un beso.",
      en: "“Right then, we’ll talk tomorrow.” “OK, bye, take care.”",
      rule: "Bye / see you",
    },
    {
      es: "—He visto a Rosalía en el súper. —¡**Venga** ya!",
      en: "“I saw Rosalía at the supermarket.” “No way!”",
      rule: "No way! (¡venga ya!)",
    },
  ],
  quiz: [
    {
      prompt: "What does “venga” mean here? — «Solo te queda un kilómetro. ¡Venga, que tú puedes!»",
      options: ["Come on! (you can do it)", "See you then", "No way!"],
      answer: "Come on! (you can do it)",
      explanation: "Cheering a runner on through the last kilometre.",
    },
    {
      prompt: "What does “venga” mean here? — «—Te dejo, que tengo que irme. —Venga, hasta mañana.»",
      options: ["OK, bye", "Hurry up", "No way!"],
      answer: "OK, bye",
      explanation: "The other person is leaving, so “venga” wraps up the goodbye.",
    },
    {
      prompt: "What does “venga” mean here? — «—¿Quedamos el sábado para comer? —Venga, ¿a las dos?»",
      options: ["OK, deal", "Come off it!", "Hurry up"],
      answer: "OK, deal",
      explanation: "Agreeing to the plan and suggesting a time.",
    },
    {
      prompt: "What does “venga” mean here? — «¡Venga, venga, que el tren sale ya!»",
      options: ["Hurry up!", "See you!", "No way!"],
      answer: "Hurry up!",
      explanation: "The train is leaving — everyone needs to move fast.",
    },
    {
      prompt: "—Me ha tocado la lotería. —¡Venga ___! No me lo creo.",
      hint: "“I’ve won the lottery.” “Come off it! I don’t believe it.”",
      options: ["ya", "luego", "bien"],
      answer: "ya",
      explanation: "“¡Venga ya!” is the fixed phrase for “no way / come off it”.",
    },
  ],
};
