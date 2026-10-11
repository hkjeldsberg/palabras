import type { Topic } from "../types";

export const mismo: Topic = {
  slug: "mismo",
  word: "mismo",
  title: "Ways to use “mismo”",
  tagline: "Same, -self, right now — or “whatever, I don’t mind”.",
  blurb: "Same · myself · ahora mismo",
  hue: 300,
  group: "small",
  rules: [
    {
      name: "Same",
      explanation: "Before a noun, it means “same” and agrees with it (mismo, misma, mismos, mismas).",
      example: "Nacimos el **mismo** día.",
    },
    {
      name: "-self",
      explanation: "After a person, it adds emphasis — “myself”, “herself”, “themselves”.",
      example: "Lo hice yo **mismo**.",
    },
    {
      name: "Right (now / here)",
      explanation: "After “ahora” or “aquí”, it means “right” and never changes form.",
      example: "Voy ahora **mismo**.",
    },
    {
      name: "Lo mismo",
      explanation: "“Me da lo mismo” means “I don’t mind” or “it’s all the same to me”.",
      example: "Me da lo **mismo**.",
    },
  ],
  examples: [
    { es: "Vivimos en la **misma** calle.", en: "We live on the same street.", rule: "Same" },
    { es: "Ella **misma** me lo dijo.", en: "She told me herself.", rule: "-self" },
    { es: "Pare aquí **mismo**, por favor.", en: "Stop right here, please.", rule: "Right (now / here)" },
    { es: "Te llamo ahora **mismo**.", en: "I’ll call you right now.", rule: "Right (now / here)" },
    { es: "—¿Vino o cerveza? —Me da lo **mismo**.", en: "“Wine or beer?” “I don’t mind.”", rule: "Lo mismo" },
  ],
  quiz: [
    {
      prompt: "Mi hermana y yo vamos al ___ gimnasio.",
      hint: "My sister and I go to the same gym.",
      options: ["mismo", "misma", "mismos"],
      answer: "mismo",
      explanation: "“Gimnasio” is masculine singular, so it’s “mismo”.",
    },
    {
      prompt: "Lo hicieron ellas ___.",
      hint: "They (the women) did it themselves.",
      options: ["mismo", "mismas", "mismos"],
      answer: "mismas",
      explanation: "“-self” agrees with the person: ellas → mismas.",
    },
    {
      prompt: "What is “mismo” doing here? — «Bájate aquí mismo.»",
      options: ["Same", "-self", "Right (now / here)"],
      answer: "Right (now / here)",
      explanation: "After “aquí” it means “right”: get off right here.",
    },
    {
      prompt: "Your friend asks «¿Playa o montaña?» and you answer «Me da lo mismo.» What do you mean?",
      options: ["I don’t mind.", "It’s the same place.", "I’ll do it myself."],
      answer: "I don’t mind.",
      explanation: "“Me da lo mismo” means either option is fine with you.",
    },
    {
      prompt: "Ya voy, salgo ahora ___.",
      hint: "I’m coming, I’m leaving right now.",
      options: ["mismo", "misma", "mismos"],
      answer: "mismo",
      explanation: "In “ahora mismo”, “mismo” never changes form.",
    },
  ],
};
