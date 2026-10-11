import { a } from "./content/a";
import { como } from "./content/como";
import { dar } from "./content/dar";
import { de } from "./content/de";
import { echar } from "./content/echar";
import { hecho } from "./content/hecho";
import { le } from "./content/le";
import { llevar } from "./content/llevar";
import { lo } from "./content/lo";
import { me } from "./content/me";
import { mismo } from "./content/mismo";
import { nada } from "./content/nada";
import { para } from "./content/para";
import { por } from "./content/por";
import { pues } from "./content/pues";
import { que } from "./content/que";
import { quedar } from "./content/quedar";
import { se } from "./content/se";
import { si } from "./content/si";
import { tal } from "./content/tal";
import { vale } from "./content/vale";
import { ya } from "./content/ya";
import { topicSlugs, type Topic } from "./types";

export type { Example, Question, Rule, Topic, TopicGroup, TopicSlug } from "./types";

const bySlug: Record<Topic["slug"], Topic> = {
  se,
  por,
  ya,
  me,
  para,
  lo,
  le,
  que,
  como,
  si,
  de,
  a,
  mismo,
  pues,
  vale,
  quedar,
  echar,
  dar,
  llevar,
  tal,
  nada,
  hecho,
};

/** All topics in dashboard order. */
export const topics: Topic[] = topicSlugs.map((slug) => bySlug[slug]);

export function getTopic(slug: string): Topic | undefined {
  return topics.find((t) => t.slug === slug);
}

/** The topic after this one, wrapping around — for "next topic" wayfinding. */
export function getNextTopic(slug: string): Topic {
  const i = topics.findIndex((t) => t.slug === slug);
  return topics[(i + 1) % topics.length];
}
