import type { Topic } from "../types";

export const me: Topic = {
  slug: "me",
  word: "me",
  title: "Ways to use “me”",
  tagline: "How to ask for things like a local.",
  blurb: "Me pones · me das",
  hue: 5,
  group: "small",
  rules: [
    {
      name: "Direct object",
      explanation: "“Me” receives the action directly: someone sees, calls or helps me.",
      example: "Mi madre **me** llama.",
    },
    {
      name: "Indirect object",
      explanation: "“To me” or “for me”: something is given, sent or bought for me.",
      example: "Ana **me** escribe una carta.",
    },
    {
      name: "Asking for things",
      explanation: "Spaniards order with “¿Me pones…?” / “¿Me das…?” — literally “will you put/give me…?”",
      example: "¿**Me** pones un café?",
    },
    {
      name: "Placement",
      explanation: "Goes before a conjugated verb, but sticks onto commands and infinitives.",
      example: "Pon**me** dos cañas.",
    },
  ],
  examples: [
    {
      es: "¿**Me** pones un café con leche, por favor?",
      en: "Could I get a coffee with milk, please?",
      rule: "Asking for things",
    },
    {
      es: "¿**Me** cobras cuando puedas?",
      en: "Can I pay whenever you’re ready? (lit. “will you charge me?”)",
      rule: "Asking for things",
    },
    {
      es: "Mi abuela **me** llama todos los domingos.",
      en: "My grandmother calls me every Sunday.",
      rule: "Direct object",
    },
    { es: "Mi novio **me** compró flores.", en: "My boyfriend bought me flowers.", rule: "Indirect object" },
    { es: "Di**me** la verdad.", en: "Tell me the truth.", rule: "Placement" },
  ],
  quiz: [
    {
      prompt: "¿___ pones una caña, por favor?",
      hint: "Can I get a small beer, please?",
      options: ["Mi", "Me", "Yo"],
      answer: "Me",
      explanation: "“¿Me pones…?” is the go-to way to order at a bar.",
    },
    {
      prompt: "Is “me” direct or indirect here? — «Ana me escribe una carta.»",
      options: ["Direct object", "Indirect object"],
      answer: "Indirect object",
      explanation: "The letter is what’s written (direct); I’m who it’s written to (indirect).",
    },
    {
      prompt: "Is “me” direct or indirect here? — «Mi jefe me llama cada día.»",
      options: ["Direct object", "Indirect object"],
      answer: "Direct object",
      explanation: "I’m the one being called — I receive the action directly.",
    },
    {
      prompt: "___ la verdad.",
      hint: "Tell me the truth.",
      options: ["Me di", "Dime", "Di mí"],
      answer: "Dime",
      explanation: "With commands, “me” attaches to the end: di + me = dime.",
    },
  ],
};
