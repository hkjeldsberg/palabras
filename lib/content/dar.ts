import type { Topic } from "../types";

export const dar: Topic = {
  slug: "dar",
  word: "dar",
  title: "Ways to use “dar”",
  tagline: "It gives, it scares, it faces the sea — and sometimes you just don’t care.",
  blurb: "Give · me da igual · darse cuenta",
  hue: 60,
  group: "verbs",
  rules: [
    {
      name: "To give",
      explanation: "The basic meaning — handing something over, or asking for it.",
      example: "¿Me **das** tu número?",
    },
    {
      name: "Not caring",
      explanation: "“Me da igual” = I don’t mind / it’s all the same to me.",
      example: "—¿Pizza o pasta? —Me **da** igual.",
    },
    {
      name: "Causing a feeling",
      explanation: "Like “gustar”: the thing causes the feeling — miedo, pena, vergüenza.",
      example: "Me **dan** miedo las arañas.",
    },
    {
      name: "Facing / overlooking",
      explanation: "“Dar a” says which way a window, room or balcony faces.",
      example: "La habitación **da** al mar.",
    },
    {
      name: "To realise",
      explanation: "“Darse cuenta (de)” = to notice or realise something.",
      example: "No me **di** cuenta de la hora.",
    },
  ],
  examples: [
    {
      es: "¿Me **das** un café con leche, por favor?",
      en: "Can I have a white coffee, please?",
      rule: "To give",
    },
    {
      es: "Me **da** igual dónde cenemos.",
      en: "I don’t mind where we have dinner.",
      rule: "Not caring",
    },
    {
      es: "Me **da** pena que te vayas tan pronto.",
      en: "It’s a shame you’re leaving so soon.",
      rule: "Causing a feeling",
    },
    {
      es: "Nuestro piso **da** a un patio muy tranquilo.",
      en: "Our flat looks onto a very quiet courtyard.",
      rule: "Facing / overlooking",
    },
    {
      es: "¿Te **has dado** cuenta de que ha dejado de llover?",
      en: "Have you noticed it’s stopped raining?",
      rule: "To realise",
    },
  ],
  quiz: [
    {
      prompt: "—¿Vamos al cine o al teatro? —Me ___ igual.",
      hint: "“Shall we go to the cinema or the theatre?” “I don’t mind.”",
      options: ["tiene", "da", "hace"],
      answer: "da",
      explanation: "The fixed phrase is “me da igual” — I don’t mind.",
    },
    {
      prompt: "What does “dar” mean here? — «Me dan miedo las alturas.»",
      options: ["I’m scared of heights", "I give heights a scare", "Heights don’t bother me"],
      answer: "I’m scared of heights",
      explanation: "Heights cause fear in me — “dar miedo” works like “gustar”.",
    },
    {
      prompt: "What does “dar” mean here? — «El balcón da a la playa.»",
      options: ["To give", "Facing / overlooking", "To realise"],
      answer: "Facing / overlooking",
      explanation: "“Dar a” = to face: the balcony looks out onto the beach.",
    },
    {
      prompt: "No me ___ cuenta de que era tan tarde.",
      hint: "I didn’t realise it was so late.",
      options: ["hice", "di", "tuve"],
      answer: "di",
      explanation: "“Darse cuenta” = to realise; past tense “me di cuenta”.",
    },
    {
      prompt: "What does “dar” mean here? — «¿Me das la sal, por favor?»",
      options: ["Could you pass me the salt?", "I don’t care about the salt", "I realised about the salt"],
      answer: "Could you pass me the salt?",
      explanation: "Plain “give”: asking someone to hand you the salt.",
    },
  ],
};
