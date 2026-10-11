import type { Topic } from "../types";

export const peroSino: Topic = {
  slug: "pero-sino",
  word: "pero / sino",
  title: "“Pero” or “sino”?",
  tagline: "One adds a “but”, the other sets the record straight.",
  blurb: "But · but rather · not only…",
  hue: 200,
  group: "pairs",
  rules: [
    {
      name: "Pero: adds a contrast",
      explanation: "“But”: adds a contrasting idea, even after a negative, as long as the first part stays true.",
      example: "No hablo alemán, **pero** lo entiendo un poco.",
    },
    {
      name: "Sino: corrects",
      explanation: "“But rather”: after a negative, it replaces the wrong idea with the right one.",
      example: "No es francés **sino** belga.",
    },
    {
      name: "Sino que + verb",
      explanation: "When the correction is a whole clause with a conjugated verb, use “sino que”.",
      example: "No lo compré, **sino que** lo alquilé.",
    },
    {
      name: "No solo… sino también",
      explanation: "“Not only… but also”: always “sino”, never “pero”.",
      example: "**No solo** habla inglés **sino también** chino.",
    },
  ],
  examples: [
    { es: "El piso es pequeño, **pero** tiene mucha luz.", en: "The flat is small, but it gets lots of light.", rule: "Pero: adds a contrast" },
    { es: "No hablo mucho español, **pero** me defiendo.", en: "I don’t speak much Spanish, but I get by.", rule: "Pero: adds a contrast" },
    { es: "No vamos en coche **sino** en tren.", en: "We’re not going by car but by train.", rule: "Sino: corrects" },
    { es: "No me llamó, **sino que** me mandó un wasap.", en: "She didn’t call me — she sent me a WhatsApp instead.", rule: "Sino que + verb" },
    { es: "En esta tienda venden **no solo** ropa **sino también** zapatos.", en: "This shop sells not only clothes but also shoes.", rule: "No solo… sino también" },
  ],
  quiz: [
    {
      prompt: "No quiero café ___ té.",
      hint: "I don’t want coffee — I want tea.",
      options: ["pero", "sino"],
      answer: "sino",
      explanation: "Sino: tea replaces coffee, a correction after a negative.",
    },
    {
      prompt: "Hace frío, ___ hace sol.",
      hint: "It’s cold, but it’s sunny.",
      options: ["pero", "sino"],
      answer: "pero",
      explanation: "Pero: both things are true; there’s no negative to correct.",
    },
    {
      prompt: "No tengo coche, ___ tengo bici.",
      hint: "I don’t have a car, but I do have a bike.",
      options: ["pero", "sino"],
      answer: "pero",
      explanation: "Pero: the bike doesn’t correct anything, it just adds a contrast (and “sino” can’t go straight before a verb).",
    },
    {
      prompt: "No lo arregló, ___ lo rompió todavía más.",
      hint: "He didn’t fix it — instead he broke it even more.",
      options: ["sino", "sino que"],
      answer: "sino que",
      explanation: "Sino que + verb: the correction has a conjugated verb, “rompió”.",
    },
    {
      prompt: "No solo es guapo, ___ también simpático.",
      hint: "He’s not only good-looking but also nice.",
      options: ["pero", "sino"],
      answer: "sino",
      explanation: "No solo… sino también: “no solo… pero también” is a common mistake.",
    },
  ],
};
