import type { Topic } from "../types";

export const igual: Topic = {
  slug: "igual",
  word: "igual",
  title: "Ways to use “igual”",
  tagline: "Same, maybe, whatever — one word, lots of shrugs.",
  blurb: "iguales · igual llueve · me da igual",
  hue: 230,
  group: "everyday",
  rules: [
    {
      name: "Same / equal",
      explanation: "The basic adjective: two things are the same; plural “iguales”.",
      example: "Tu móvil y el mío son **iguales**.",
    },
    {
      name: "Maybe (Spain)",
      explanation: "In Spain, “igual” before a verb often means “maybe” — and it takes the indicative.",
      example: "**Igual** llueve mañana.",
    },
    {
      name: "Me da igual",
      explanation: "“I don’t mind” or “it’s all the same to me” when given a choice.",
      example: "—¿Pizza o pasta? —Me da **igual**.",
    },
    {
      name: "Igual que",
      explanation: "“Just like” or “the same as” for comparing.",
      example: "Habla **igual** que su padre.",
    },
    {
      name: "Da igual",
      explanation: "“Never mind” or “it doesn’t matter” — brushing something off.",
      example: "—Perdona, se me ha olvidado el libro. —Da **igual**.",
    },
  ],
  examples: [
    {
      es: "Las dos camisetas son **iguales**, pero una es más barata.",
      en: "The two T-shirts are the same, but one is cheaper.",
      rule: "Same / equal",
    },
    {
      es: "—¿Vienes a cenar? —No sé, **igual** me paso más tarde.",
      en: "“Are you coming for dinner?” “Not sure — maybe I’ll drop by later.”",
      rule: "Maybe (Spain)",
    },
    {
      es: "—¿Vamos en metro o andando? —Me da **igual**, tú decides.",
      en: "“Shall we take the metro or walk?” “I don’t mind — you choose.”",
      rule: "Me da igual",
    },
    {
      es: "Mi hermana es **igual** que mi madre: no para nunca.",
      en: "My sister is just like my mum: she never stops.",
      rule: "Igual que",
    },
    {
      es: "—Uy, he roto un vaso. —Da **igual**, eran baratos.",
      en: "“Oops, I’ve broken a glass.” “Never mind, they were cheap.”",
      rule: "Da igual",
    },
  ],
  quiz: [
    {
      prompt: "Igual ___ tarde, que hay mucho tráfico.",
      hint: "Maybe I’ll be late — there’s a lot of traffic.",
      options: ["llego", "llegue", "llegar"],
      answer: "llego",
      explanation: "“Igual” meaning “maybe” takes the indicative: “llego”.",
    },
    {
      prompt: "—¿Vino tinto o blanco? —Me da ___.",
      hint: "Red or white wine? — I don’t mind.",
      options: ["igual", "mismo", "bien"],
      answer: "igual",
      explanation: "“Me da igual” is the fixed way to say “I don’t mind”.",
    },
    {
      prompt: "Cocina ___ que su abuela.",
      hint: "She cooks just like her grandmother.",
      options: ["igual", "mismo", "tan"],
      answer: "igual",
      explanation: "“Igual que” means “just like”.",
    },
    {
      prompt: "What does “igual” mean here? — «No sé si iré a la fiesta. Igual voy un rato después de cenar.»",
      options: ["Maybe", "Equally", "Just like"],
      answer: "Maybe",
      explanation: "The speaker isn’t sure, so “igual” + verb means “maybe”.",
    },
    {
      prompt: "What does “da igual” mean here? — «—Uy, perdona, te he manchado la camisa. —Da igual, no pasa nada.»",
      options: ["Never mind / it doesn’t matter", "Maybe", "It’s the same shirt"],
      answer: "Never mind / it doesn’t matter",
      explanation: "With “no pasa nada”, it brushes off the apology.",
    },
  ],
};
