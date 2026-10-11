import type { Topic } from "../types";

export const ni: Topic = {
  slug: "ni",
  word: "ni",
  title: "Ways to use “ni”",
  tagline: "Neither, nor, not even — and a firm “no way”.",
  blurb: "Ni… ni… · ni siquiera · ¡ni hablar!",
  hue: 180,
  group: "small",
  rules: [
    {
      name: "Ni… ni…",
      explanation: "“Neither… nor…”: two things that are both ruled out.",
      example: "No me gusta **ni** el café **ni** el té.",
    },
    {
      name: "Ni siquiera",
      explanation: "“Not even”: the minimum didn’t happen.",
      example: "**Ni** siquiera me ha llamado.",
    },
    {
      name: "Set phrases",
      explanation: "Short replies like “¡Ni hablar!” (no way) and “Ni idea” (no idea).",
      example: "—¿Dónde está Pablo? —**Ni** idea.",
    },
    {
      name: "After a negative",
      explanation: "After “no”, “ni un/una” means “not a single”.",
      example: "No tengo **ni** un euro.",
    },
  ],
  examples: [
    { es: "**Ni** Ana **ni** Luis vienen esta noche.", en: "Neither Ana nor Luis is coming tonight.", rule: "Ni… ni…" },
    { es: "**Ni** siquiera sabe freír un huevo.", en: "He can’t even fry an egg.", rule: "Ni siquiera" },
    { es: "¿Prestarle dinero otra vez? ¡**Ni** hablar!", en: "Lend him money again? No way!", rule: "Set phrases" },
    { es: "No he entendido **ni** una palabra.", en: "I didn’t understand a single word.", rule: "After a negative" },
  ],
  quiz: [
    {
      prompt: "Ni Ana ___ Luis saben nadar.",
      hint: "Neither Ana nor Luis can swim.",
      options: ["ni", "o", "y"],
      answer: "ni",
      explanation: "“Ni… ni…” works as a pair: neither… nor…",
    },
    {
      prompt: "___ siquiera me saludó.",
      hint: "He didn’t even say hello to me.",
      options: ["Ni", "No", "Tampoco"],
      answer: "Ni",
      explanation: "“Not even” is always “ni siquiera”.",
    },
    {
      prompt: "No tengo ___ un euro.",
      hint: "I don’t have a single euro.",
      options: ["ni", "o", "y"],
      answer: "ni",
      explanation: "After “no”, “ni un…” means not a single one.",
    },
    {
      prompt: "What is “ni” doing here? — «—¿Me dejas el coche? —¡Ni hablar!»",
      options: ["Ni… ni…", "Ni siquiera", "Set phrases"],
      answer: "Set phrases",
      explanation: "“¡Ni hablar!” is a fixed reply meaning “no way”.",
    },
    {
      prompt: "What is “ni” doing here? — «No queda ni una galleta.»",
      options: ["Ni… ni…", "Set phrases", "After a negative"],
      answer: "After a negative",
      explanation: "After “no”, “ni una galleta” = not a single biscuit.",
    },
  ],
};
