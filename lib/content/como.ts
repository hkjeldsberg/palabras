import type { Topic } from "../types";

export const como: Topic = {
  slug: "como",
  word: "como",
  title: "Ways to use “como” / “cómo”",
  tagline: "Like, since, about — and with an accent, how?",
  blurb: "Like · since · ¿cómo?",
  hue: 320,
  group: "small",
  rules: [
    {
      name: "Like / as",
      explanation: "Compares two things or says how something is done.",
      example: "Habla **como** su madre.",
    },
    {
      name: "Since",
      explanation: "At the start of a sentence, it gives the reason — “since” or “because”.",
      example: "**Como** llovía, no salimos.",
    },
    {
      name: "About",
      explanation: "Before a number or amount, it means “roughly” or “around”.",
      example: "Había **como** diez personas.",
    },
    {
      name: "Warning “if”",
      explanation: "With the subjunctive, it’s an “if” that sounds like a threat or warning.",
      example: "**Como** no vengas, me enfado.",
    },
    {
      name: "Cómo (how?)",
      explanation: "With an accent, it asks “how?” — or “sorry, what?” when you didn’t hear.",
      example: "¿**Cómo** estás?",
    },
  ],
  examples: [
    { es: "Duermo **como** un bebé.", en: "I sleep like a baby.", rule: "Like / as" },
    { es: "**Como** no había mesa, nos fuimos a otro bar.", en: "Since there was no table, we went to another bar.", rule: "Since" },
    { es: "El hotel está a **como** cinco minutos de la playa.", en: "The hotel is about five minutes from the beach.", rule: "About" },
    { es: "**Como** llegues tarde otra vez, te quedas sin cena.", en: "If you’re late again, you’re going without dinner.", rule: "Warning “if”" },
    { es: "¿**Cómo**? No te he oído.", en: "Sorry, what? I didn’t hear you.", rule: "Cómo (how?)" },
  ],
  quiz: [
    {
      prompt: "Canta ___ un ángel.",
      hint: "She sings like an angel.",
      options: ["como", "cómo", "que"],
      answer: "como",
      explanation: "A comparison (“like”) takes “como” without an accent.",
    },
    {
      prompt: "¿___ se dice “cheers” en español?",
      hint: "How do you say “cheers” in Spanish?",
      options: ["Como", "Cómo"],
      answer: "Cómo",
      explanation: "Asking “how?” always needs the accent: “cómo”.",
    },
    {
      prompt: "What is “como” doing here? — «Como no tenía hambre, no cené.»",
      options: ["Like / as", "Since", "About", "Warning “if”"],
      answer: "Since",
      explanation: "It opens the sentence with a reason and uses the indicative “tenía”: “Since I wasn’t hungry…”.",
    },
    {
      prompt: "What is “como” doing here? — «Como no me llames, no voy.»",
      options: ["Like / as", "Since", "Warning “if”"],
      answer: "Warning “if”",
      explanation: "“Llames” is subjunctive, so it’s a warning: “If you don’t call me, I’m not going.”",
    },
    {
      prompt: "What is “como” doing here? — «Tardamos como media hora en llegar.»",
      options: ["About", "Since", "Warning “if”"],
      answer: "About",
      explanation: "Before an amount of time, “como” means “roughly”: about half an hour.",
    },
  ],
};
