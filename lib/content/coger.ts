import type { Topic } from "../types";

export const coger: Topic = {
  slug: "coger",
  word: "coger",
  title: "Ways to use “coger”",
  tagline: "Spain’s all-purpose “take” — buses, cake, colds and calls.",
  blurb: "Take the bus · grab · catch",
  hue: 45,
  group: "verbs",
  rules: [
    {
      name: "To take transport",
      explanation: "In Spain you “coger” a bus, train, taxi or plane.",
      example: "Siempre **cojo** el metro para ir al trabajo.",
    },
    {
      name: "To take / grab",
      explanation: "Picking something up or helping yourself to it.",
      example: "**Coge** un trozo de tortilla, que está buenísima.",
    },
    {
      name: "To catch",
      explanation: "Catching a ball, a cold, or someone in the act.",
      example: "Creo que he **cogido** un resfriado.",
    },
    {
      name: "To answer the phone",
      explanation: "“Coger el teléfono” is how you say you pick up a call.",
      example: "Te llamé tres veces, pero no **cogiste** el teléfono.",
    },
    {
      name: "Careful in Latin America",
      explanation:
        "In much of Latin America “coger” has a rude meaning, so people say “tomar” or “agarrar” instead.",
      example: "En España **cojo** el autobús; en México, mejor di «tomo el autobús».",
    },
  ],
  examples: [
    {
      es: "Si perdemos este tren, **cogemos** un taxi.",
      en: "If we miss this train, we’ll get a taxi.",
      rule: "To take transport",
    },
    {
      es: "**Coge** lo que quieras de la nevera.",
      en: "Help yourself to anything in the fridge.",
      rule: "To take / grab",
    },
    {
      es: "¡**Coge** la pelota!",
      en: "Catch the ball!",
      rule: "To catch",
    },
    {
      es: "Está sonando el fijo, ¿lo **coges** tú?",
      en: "The landline’s ringing, can you get it?",
      rule: "To answer the phone",
    },
    {
      es: "En Argentina no digas «**coger** el colectivo»: di «tomar el colectivo».",
      en: "In Argentina don’t say “coger el colectivo” — say “tomar el colectivo”.",
      rule: "Careful in Latin America",
    },
  ],
  quiz: [
    {
      prompt: "Todos los días ___ el autobús de las ocho.",
      hint: "Every day I take the eight o’clock bus.",
      options: ["cojo", "coge", "coges"],
      answer: "cojo",
      explanation: "“Yo” form: the g changes to j before o to keep the sound — “cojo”.",
    },
    {
      prompt: "What does “coger” mean here? — «No salgas sin abrigo, que vas a coger un resfriado.»",
      options: ["To catch (an illness)", "To take transport", "To answer the phone"],
      answer: "To catch (an illness)",
      explanation: "“Coger un resfriado” = to catch a cold.",
    },
    {
      prompt: "What does “coger” mean here? — «Está sonando tu móvil, ¿no lo vas a coger?»",
      options: ["To answer it", "To take the bus", "To catch a cold"],
      answer: "To answer it",
      explanation: "A ringing phone you “coger” is one you answer.",
    },
    {
      prompt: "What does “coger” mean here? — «Coge otro trozo de tarta, que sobra mucha.»",
      options: ["Take / help yourself to", "Catch (an illness)", "Answer"],
      answer: "Take / help yourself to",
      explanation: "You’re being offered another slice — take one.",
    },
    {
      prompt: "In Mexico, instead of «coger el autobús», it’s safer to say «___ el autobús».",
      hint: "to take the bus",
      options: ["tomar", "coger", "echar"],
      answer: "tomar",
      explanation: "In much of Latin America “coger” has a rude meaning, so “tomar” is used.",
    },
  ],
};
