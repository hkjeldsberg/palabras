import type { Topic } from "../types";

export const nos: Topic = {
  slug: "nos",
  word: "nos",
  title: "Ways to use “nos” / “os”",
  tagline: "“Us” and Spain’s very own “you all”.",
  blurb: "Us · you all · each other",
  hue: 290,
  group: "small",
  rules: [
    {
      name: "Direct object",
      explanation: "“Nos” = us, “os” = you all (in Spain): the people who receive the action.",
      example: "Mi abuela **nos** ve los domingos.",
    },
    {
      name: "Indirect object",
      explanation: "To or for us / you all — often with give, bring, tell.",
      example: "**Os** doy las llaves mañana.",
    },
    {
      name: "Each other / ourselves",
      explanation: "With reflexive verbs, or when people do something to each other.",
      example: "**Nos** vemos mañana.",
    },
    {
      name: "With gustar",
      explanation: "With gustar, encantar and friends, “nos/os” is the person who likes it.",
      example: "**Nos** encanta este barrio.",
    },
  ],
  examples: [
    { es: "Mi madre **nos** llama todos los domingos.", en: "My mother calls us every Sunday.", rule: "Direct object" },
    { es: "¿**Os** traigo la carta?", en: "Shall I bring you (all) the menu?", rule: "Indirect object" },
    { es: "**Nos** vemos el sábado.", en: "See you on Saturday.", rule: "Each other / ourselves" },
    { es: "¿A qué hora **os** levantáis?", en: "What time do you (all) get up?", rule: "Each other / ourselves" },
    { es: "¿**Os** gusta el jamón?", en: "Do you (all) like ham?", rule: "With gustar" },
  ],
  quiz: [
    {
      prompt: "A nosotros ___ encanta la paella.",
      hint: "We love paella.",
      options: ["nos", "os", "les"],
      answer: "nos",
      explanation: "“A nosotros” must be matched by “nos”.",
    },
    {
      prompt: "¿Vosotros ___ quedáis a cenar?",
      hint: "Are you (all) staying for dinner?",
      options: ["os", "nos", "se"],
      answer: "os",
      explanation: "“Quedáis” is the vosotros form, so the reflexive pronoun must be “os”.",
    },
    {
      prompt: "What is “nos” doing here? — «Ana y yo nos conocemos desde el colegio.»",
      options: ["Indirect object", "Each other / ourselves", "With gustar"],
      answer: "Each other / ourselves",
      explanation: "Ana and I know each other — the action goes both ways.",
    },
    {
      prompt: "What is “os” doing here? — «Os doy mi número y me llamáis.»",
      options: ["Direct object", "Indirect object", "Each other / ourselves"],
      answer: "Indirect object",
      explanation: "The number is what’s given; “os” is who it’s given to.",
    },
    {
      prompt: "What is “nos” doing here? — «Nos encanta ir de tapas.»",
      options: ["Direct object", "Each other / ourselves", "With gustar"],
      answer: "With gustar",
      explanation: "With “encantar”, “nos” is the people who love it.",
    },
  ],
};
