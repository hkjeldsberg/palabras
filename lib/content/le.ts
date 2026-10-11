import type { Topic } from "../types";

export const le: Topic = {
  slug: "le",
  word: "le",
  title: "Ways to use “le”",
  tagline: "To him, to her, to you — plus a couple of Spanish quirks.",
  blurb: "To him/her · le gusta · se lo",
  hue: 25,
  group: "small",
  rules: [
    {
      name: "Indirect object",
      explanation: "“To / for him, her or you (usted)”: the person who receives something.",
      example: "**Le** di el libro.",
    },
    {
      name: "Gustar-type verbs",
      explanation: "With gustar, encantar, doler… the person who feels it takes “le”.",
      example: "A Ana **le** encanta bailar.",
    },
    {
      name: "Le → se",
      explanation: "Before lo/la/los/las, “le” and “les” turn into “se” — never “le lo”.",
      example: "**Se** lo di ayer.",
    },
    {
      name: "Leísmo (Spain)",
      explanation: "In Spain, “le” often replaces “lo” for a male person — accepted, but only for people.",
      example: "**Le** vi ayer.",
    },
  ],
  examples: [
    { es: "**Le** he mandado un mensaje a Laura.", en: "I’ve sent Laura a message.", rule: "Indirect object" },
    { es: "¿Qué **le** pongo?", en: "What can I get you? (polite, to usted)", rule: "Indirect object" },
    { es: "A mi padre **le** encanta el fútbol.", en: "My dad loves football.", rule: "Gustar-type verbs" },
    {
      es: "—¿Le has dado las llaves a Juan? —Sí, ya **se** las he dado.",
      en: "“Have you given Juan the keys?” “Yes, I’ve already given them to him.”",
      rule: "Le → se",
    },
    { es: "A tu hermano **le** vi ayer en el metro.", en: "I saw your brother on the metro yesterday.", rule: "Leísmo (Spain)" },
  ],
  quiz: [
    {
      prompt: "A Ana ___ encanta bailar.",
      hint: "Ana loves dancing.",
      options: ["la", "le", "lo"],
      answer: "le",
      explanation: "Gustar-type verbs take the indirect object “le”, even for women.",
    },
    {
      prompt: "¿___ has dicho la verdad a tu madre?",
      hint: "Have you told your mum the truth?",
      options: ["Le", "La", "Lo"],
      answer: "Le",
      explanation: "Your mum is who the truth is told to, so indirect object “le”.",
    },
    {
      prompt: "—¿Le diste el regalo a Pablo? —Sí, ya ___ lo di.",
      hint: "“Did you give Pablo the present?” “Yes, I already gave it to him.”",
      options: ["le", "se", "les"],
      answer: "se",
      explanation: "“Le” becomes “se” before “lo”: se lo di, never “le lo di”.",
    },
    {
      prompt: "What is “le” doing here? — «A tu primo le conocí en una boda.»",
      options: ["Gustar-type verbs", "Le → se", "Leísmo (Spain)"],
      answer: "Leísmo (Spain)",
      explanation: "“Conocer” takes a direct object, so the standard form is “lo conocí”; Spain accepts “le” for a male person.",
    },
    {
      prompt: "—¿Has visto mi abrigo? —Sí, ___ he dejado en tu cuarto.",
      hint: "“Have you seen my coat?” “Yes, I’ve left it in your room.”",
      options: ["lo", "le"],
      answer: "lo",
      explanation: "Trick question! The coat is a thing, so “lo”. Leísmo only works for people, never objects.",
    },
  ],
};
