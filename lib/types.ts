// Spanish target words in `es` / `example` strings are wrapped in **double asterisks**
// so the UI can highlight them. Quiz prompts use "___" to mark the blank.

export const topicSlugs = [
  // Small words
  "se",
  "por",
  "ya",
  "me",
  "para",
  "lo",
  "le",
  "que",
  "como",
  "si",
  "de",
  "a",
  "mismo",
  "pues",
  "en",
  "con",
  "sin",
  "ni",
  "tan",
  "aunque",
  "cuando",
  "donde",
  "nos",
  // Verbs
  "quedar",
  "echar",
  "dar",
  "llevar",
  "hacer",
  "tener",
  "poner",
  "pasar",
  "sacar",
  "coger",
  "volver",
  "acabar",
  "haber",
  // Everyday expressions
  "vale",
  "tal",
  "nada",
  "hecho",
  "venga",
  "vaya",
  "anda",
  "hombre",
  "bueno",
  "igual",
  // Pairs
  "ser-estar",
  "saber-conocer",
  "pedir-preguntar",
  "llevar-traer",
  "ir-venir",
  "pero-sino",
  "por-para",
] as const;

export type TopicSlug = (typeof topicSlugs)[number];

export type TopicGroup = "small" | "verbs" | "everyday" | "pairs";

export interface Rule {
  name: string;
  explanation: string;
  example: string;
}

export interface Example {
  es: string;
  en: string;
  /** Must equal one of the topic's `rules[].name`. */
  rule: string;
}

export interface Question {
  /** Sentence with a "___" blank, or a question about a sentence. */
  prompt: string;
  /** Optional hint shown under the prompt, e.g. an English gloss. */
  hint?: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Topic {
  slug: TopicSlug;
  /**
   * Word as shown on the tile, lowercase (e.g. "que", "como").
   * Pair topics use "a / b" (e.g. "ser / estar"); the UI stacks the two words.
   */
  word: string;
  title: string;
  tagline: string;
  /** Short summary shown on the dashboard tile, "A · B · C". */
  blurb: string;
  /** OKLCH hue (0–360) that drives the tile, wash and ink colours. */
  hue: number;
  group: TopicGroup;
  rules: Rule[];
  examples: Example[];
  quiz: Question[];
}
