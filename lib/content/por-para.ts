import type { Topic } from "../types";

export const porPara: Topic = {
  slug: "por-para",
  word: "por / para",
  title: "“Por” or “para”?",
  tagline: "Por looks back at the why; para looks ahead to the goal.",
  blurb: "Why vs what for · via vs to · by when",
  hue: 330,
  group: "pairs",
  rules: [
    {
      name: "Cause vs purpose",
      explanation: "“Por” gives the reason behind something; “para” gives the goal you’re aiming for.",
      example: "Me mudé a Valencia **por** el clima y **para** estar cerca del mar.",
    },
    {
      name: "Through vs destination",
      explanation: "“Por” is the route you pass through; “para” is where you’re heading.",
      example: "El tren **para** Bilbao pasa **por** Burgos.",
    },
    {
      name: "Duration vs deadline",
      explanation: "“Por” says how long something lasts; “para” says when it has to be ready.",
      example: "Me voy **por** una semana, pero vuelvo **para** el día 20.",
    },
    {
      name: "Exchange vs recipient",
      explanation: "“Por” is what you trade or pay for; “para” is who ends up with it.",
      example: "Pagué treinta euros **por** estas flores: son **para** mi madre.",
    },
  ],
  examples: [
    { es: "No pude dormir **por** el ruido de la calle.", en: "I couldn’t sleep because of the noise from the street.", rule: "Cause vs purpose" },
    { es: "Me levanté temprano **para** coger el primer tren.", en: "I got up early to catch the first train.", rule: "Cause vs purpose" },
    { es: "Dimos una vuelta **por** el casco antiguo.", en: "We went for a wander around the old town.", rule: "Through vs destination" },
    { es: "¿Me lo puedes tener listo **para** el jueves?", en: "Can you have it ready for me by Thursday?", rule: "Duration vs deadline" },
    { es: "Me dieron cien euros **por** mi bici vieja.", en: "They gave me a hundred euros for my old bike.", rule: "Exchange vs recipient" },
  ],
  quiz: [
    {
      prompt: "Cancelaron el concierto ___ la lluvia.",
      hint: "The concert was cancelled because of the rain.",
      options: ["por", "para"],
      answer: "por",
      explanation: "Cause vs purpose: the rain is the reason, so “por”.",
    },
    {
      prompt: "Voy a la biblioteca ___ estudiar tranquila.",
      hint: "I’m going to the library (in order) to study in peace.",
      options: ["por", "para"],
      answer: "para",
      explanation: "Cause vs purpose: studying is the goal, so “para” + infinitive.",
    },
    {
      prompt: "Tienes que entregar el trabajo ___ el lunes.",
      hint: "You have to hand in the assignment by Monday.",
      options: ["por", "para"],
      answer: "para",
      explanation: "Duration vs deadline: Monday is the deadline, so “para”.",
    },
    {
      prompt: "Me cobraron tres euros ___ un café.",
      hint: "They charged me three euros for a coffee.",
      options: ["por", "para"],
      answer: "por",
      explanation: "Exchange vs recipient: money traded for the coffee takes “por”.",
    },
    {
      prompt: "Mañana salimos ___ Lisboa a primera hora.",
      hint: "Tomorrow we set off for Lisbon first thing.",
      options: ["por", "para"],
      answer: "para",
      explanation: "Through vs destination: Lisbon is where we’re heading, so “para”.",
    },
  ],
};
