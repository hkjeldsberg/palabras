import type { Topic } from "../types";

export const se: Topic = {
  slug: "se",
  word: "se",
  title: "Ways to use “se”",
  tagline: "One tiny word, four very different jobs.",
  blurb: "Reflexive · accidental",
  hue: 150,
  group: "small",
  rules: [
    {
      name: "Reflexive",
      explanation: "Someone does the action to themselves.",
      example: "Ella **se** lava las manos.",
    },
    {
      name: "Impersonal",
      explanation: "General statements about what “people” or “one” does.",
      example: "Aquí **se** come muy bien.",
    },
    {
      name: "Passive",
      explanation: "The thing matters, not who does it. The verb agrees with the thing.",
      example: "**Se** venden pisos.",
    },
    {
      name: "Accidental",
      explanation: "Unplanned mishaps — it “happened to” you. Add me/te/le for the victim.",
      example: "**Se** me cayó el móvil.",
    },
  ],
  examples: [
    { es: "Mi hermano **se** levanta a las siete.", en: "My brother gets up at seven.", rule: "Reflexive" },
    { es: "En España **se** cena muy tarde.", en: "In Spain, people have dinner very late.", rule: "Impersonal" },
    { es: "**Se** dice que va a llover mañana.", en: "They say it’s going to rain tomorrow.", rule: "Impersonal" },
    { es: "**Se** alquilan bicicletas.", en: "Bikes for rent.", rule: "Passive" },
    { es: "**Se** me olvidaron las llaves.", en: "I (accidentally) forgot my keys.", rule: "Accidental" },
  ],
  quiz: [
    {
      prompt: "Mi hermana ___ ducha por la mañana.",
      hint: "My sister showers in the morning.",
      options: ["se", "me", "te"],
      answer: "se",
      explanation: "Reflexive: she showers herself, so third-person “se”.",
    },
    {
      prompt: "Aquí ___ habla inglés.",
      hint: "English is spoken here.",
      options: ["le", "se", "lo"],
      answer: "se",
      explanation: "Passive/impersonal “se”: who speaks it doesn’t matter.",
    },
    {
      prompt: "What kind of “se” is this? — «Se me rompió el vaso.»",
      options: ["Reflexive", "Impersonal", "Passive", "Accidental"],
      answer: "Accidental",
      explanation: "The glass broke on me — an unplanned mishap, with “me” as the victim.",
    },
    {
      prompt: "___ venden entradas en la taquilla.",
      hint: "Tickets are sold at the box office.",
      options: ["Se", "Me", "Les"],
      answer: "Se",
      explanation: "Passive “se”: the verb “venden” agrees with “entradas”.",
    },
  ],
};
