import { a } from "./content/a";
import { acabar } from "./content/acabar";
import { anda } from "./content/anda";
import { aunque } from "./content/aunque";
import { bueno } from "./content/bueno";
import { coger } from "./content/coger";
import { como } from "./content/como";
import { con } from "./content/con";
import { cuando } from "./content/cuando";
import { dar } from "./content/dar";
import { de } from "./content/de";
import { donde } from "./content/donde";
import { echar } from "./content/echar";
import { en } from "./content/en";
import { haber } from "./content/haber";
import { hacer } from "./content/hacer";
import { hecho } from "./content/hecho";
import { hombre } from "./content/hombre";
import { igual } from "./content/igual";
import { irVenir } from "./content/ir-venir";
import { le } from "./content/le";
import { llevar } from "./content/llevar";
import { llevarTraer } from "./content/llevar-traer";
import { lo } from "./content/lo";
import { me } from "./content/me";
import { mismo } from "./content/mismo";
import { nada } from "./content/nada";
import { ni } from "./content/ni";
import { nos } from "./content/nos";
import { para } from "./content/para";
import { pasar } from "./content/pasar";
import { pedirPreguntar } from "./content/pedir-preguntar";
import { peroSino } from "./content/pero-sino";
import { poner } from "./content/poner";
import { por } from "./content/por";
import { porPara } from "./content/por-para";
import { pues } from "./content/pues";
import { que } from "./content/que";
import { quedar } from "./content/quedar";
import { saberConocer } from "./content/saber-conocer";
import { sacar } from "./content/sacar";
import { se } from "./content/se";
import { serEstar } from "./content/ser-estar";
import { si } from "./content/si";
import { sin } from "./content/sin";
import { tal } from "./content/tal";
import { tan } from "./content/tan";
import { tener } from "./content/tener";
import { vale } from "./content/vale";
import { vaya } from "./content/vaya";
import { venga } from "./content/venga";
import { volver } from "./content/volver";
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
  en,
  con,
  sin,
  ni,
  tan,
  aunque,
  cuando,
  donde,
  nos,
  quedar,
  echar,
  dar,
  llevar,
  hacer,
  tener,
  poner,
  pasar,
  sacar,
  coger,
  volver,
  acabar,
  haber,
  vale,
  tal,
  nada,
  hecho,
  venga,
  vaya,
  anda,
  hombre,
  bueno,
  igual,
  "ser-estar": serEstar,
  "saber-conocer": saberConocer,
  "pedir-preguntar": pedirPreguntar,
  "llevar-traer": llevarTraer,
  "ir-venir": irVenir,
  "pero-sino": peroSino,
  "por-para": porPara,
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

export interface MeaningBranch {
  label: string;
  es: string;
  en: string;
}

/**
 * One branch per rule for the meaning map, each with its shortest example.
 * Pair topics contrast two words rather than fan one word out, so they get none.
 */
export function meaningBranches(topic: Topic): MeaningBranch[] | null {
  if (topic.group === "pairs") return null;
  return topic.rules.map((rule) => {
    const examples = topic.examples.filter((ex) => ex.rule === rule.name);
    const shortest = examples.reduce((a, b) => (b.es.length < a.es.length ? b : a));
    return { label: rule.name, es: shortest.es, en: shortest.en };
  });
}
