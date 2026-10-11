import type { Topic } from "../types";

export const haber: Topic = {
  slug: "haber",
  word: "haber",
  title: "Ways to use “haber”",
  tagline: "There is, there was, you have to — and “I have done”.",
  blurb: "Hay · hay que · he comido",
  hue: 320,
  group: "verbs",
  rules: [
    {
      name: "There is / there are",
      explanation: "“Hay” means both “there is” and “there are” — it never goes plural.",
      example: "En mi calle **hay** tres bares.",
    },
    {
      name: "Hay vs. está",
      explanation: "Use “hay” for something new or unspecified (a, some); use “está” for a specific thing (the, my).",
      example: "Cerca de casa **hay** un mercado; está en la plaza.",
    },
    {
      name: "Hay que",
      explanation: "“Hay que” + infinitive = you have to / one must, without saying who.",
      example: "**Hay** que reservar mesa.",
    },
    {
      name: "Past & future",
      explanation: "“Había” = there was/were, “habrá” = there will be — still always singular.",
      example: "Ayer **había** mucha gente en la playa.",
    },
    {
      name: "Perfect tenses",
      explanation: "He, has, ha… + past participle = “I have done”, “you have done”…",
      example: "Ya **he** comido.",
    },
  ],
  examples: [
    { es: "¿**Hay** wifi en el hotel?", en: "Is there wifi in the hotel?", rule: "There is / there are" },
    { es: "Perdone, ¿**hay** una farmacia por aquí?", en: "Excuse me, is there a pharmacy around here?", rule: "Hay vs. está" },
    { es: "Para entrar **hay** que enseñar el pasaporte.", en: "To get in, you have to show your passport.", rule: "Hay que" },
    { es: "Mañana **habrá** tormentas en el norte.", en: "Tomorrow there will be storms in the north.", rule: "Past & future" },
    { es: "¿**Has** probado el salmorejo?", en: "Have you tried salmorejo?", rule: "Perfect tenses" },
  ],
  quiz: [
    {
      prompt: "En la fiesta ___ muchas personas.",
      hint: "There were lots of people at the party.",
      options: ["había", "habían", "estaba"],
      answer: "había",
      explanation: "“There was/were” is always singular “había”, even with a plural noun.",
    },
    {
      prompt: "Perdona, ¿___ un cajero por aquí?",
      hint: "Excuse me, is there a cash machine around here?",
      options: ["hay", "está", "es"],
      answer: "hay",
      explanation: "“Un cajero” is any cash machine, not a specific one, so “hay”.",
    },
    {
      prompt: "El cajero ___ al lado del banco.",
      hint: "The cash machine is next to the bank.",
      options: ["está", "hay", "es"],
      answer: "está",
      explanation: "“El cajero” is a specific thing, and its location takes “estar”, not “hay”.",
    },
    {
      prompt: "Mañana ___ que madrugar.",
      hint: "Tomorrow we have to get up early.",
      options: ["hay", "es", "está"],
      answer: "hay",
      explanation: "“Hay que” + infinitive = you/we have to.",
    },
    {
      prompt: "What is “haber” doing here? — «¿Has estado alguna vez en Granada?»",
      options: ["There is / there are", "Hay que", "Perfect tenses"],
      answer: "Perfect tenses",
      explanation: "“Has” + past participle “estado” = have you been.",
    },
  ],
};
