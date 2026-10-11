import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense, ViewTransition } from "react";
import { Highlight } from "@/components/Highlight";
import { OpenQuizButton, QuizDock } from "@/components/QuizDock";
import { Reveal } from "@/components/Reveal";
import { RuleChips } from "@/components/RuleChips";
import { LastTopicMarker } from "@/lib/lastTopic";
import { getNextTopic, getTopic, topics } from "@/lib/topics";
import { heroWordSize } from "@/lib/wordSize";

export function generateStaticParams() {
  return topics.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps<"/topic/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const topic = getTopic(slug);
  return { title: topic ? `${topic.title} · palabras` : "palabras" };
}

const paneGrid = "grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,30rem)] xl:gap-16";

export default function TopicPage({ params }: PageProps<"/topic/[slug]">) {
  // URL-independent shell renders instantly; the slug-specific content streams in.
  return (
    <div className="mx-auto max-w-[90rem] px-4 pt-[calc(env(safe-area-inset-top)+0.75rem)] pb-36 sm:px-8 sm:pt-8 lg:px-16 lg:pb-24">
      {/* Floating material pill: always reachable, including in the installed app with no browser chrome. */}
      <Link
        href="/"
        transitionTypes={["nav-back"]}
        scroll={false}
        className="material-pill text-ink hover:text-ink sticky top-[calc(env(safe-area-inset-top)+0.75rem)] z-30 mb-4 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-transform active:scale-95 sm:mb-6"
      >
        <span aria-hidden>←</span> All topics
      </Link>
      <Suspense fallback={<TopicSkeleton />}>
        <TopicContent params={params} />
      </Suspense>
    </div>
  );
}

function TopicSkeleton() {
  return (
    <div aria-busy="true">
      <div className="bg-hairline mb-8 h-64 rounded-[2rem] sm:mb-12 sm:h-[22rem] sm:rounded-[2.5rem]" />
      <div className={paneGrid}>
        <div className="bg-hairline h-80 rounded-3xl" />
        <div className="bg-hairline h-[26rem] rounded-[2rem]" />
      </div>
    </div>
  );
}

async function TopicContent({ params }: { params: PageProps<"/topic/[slug]">["params"] }) {
  const { slug } = await params;
  const topic = getTopic(slug);
  if (!topic) notFound();
  const next = getNextTopic(topic.slug);

  return (
    <div className="theme" style={{ "--h": topic.hue } as React.CSSProperties}>
      <LastTopicMarker slug={topic.slug} />
      {/* The dashboard tile morphs into this hero (and back). */}
      <ViewTransition name={`tile-${topic.slug}`} share="morph" default="none">
        <section className="bg-tile @container relative mb-8 flex min-h-64 flex-col justify-end overflow-hidden rounded-[2rem] px-6 pt-20 pb-7 sm:mb-12 sm:min-h-[22rem] sm:rounded-[2.5rem] sm:px-10 sm:pt-24 sm:pb-10 lg:px-14 lg:pb-12">
          <div className="flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <ViewTransition name={`word-${topic.slug}`} share="morph-word" default="none">
                <h1 className={`type-word text-tile-ink w-fit ${heroWordSize(topic.word)}`}>{topic.word}</h1>
              </ViewTransition>
              <p className="text-tile-ink mt-6 text-[1.0625rem] tracking-[-0.01em] opacity-85 sm:mt-9 sm:text-[1.3125rem]">
                {topic.tagline}
              </p>
            </div>
            <RuleChips names={topic.rules.map((r) => r.name)} />
          </div>
        </section>
      </ViewTransition>

      <div className={paneGrid}>
        {/* Left pane — the "why" and the "how" */}
        <article>
          <section aria-labelledby="rules-heading" className="mb-12 sm:mb-16">
            <Reveal>
              <h2 id="rules-heading" className="type-title mb-4 sm:mb-6">
                How it works
              </h2>
            </Reveal>
            <ul className="grid grid-cols-1 gap-3 sm:gap-4 xl:grid-cols-2">
              {topic.rules.map((rule, i) => (
                <Reveal as="li" key={rule.name} delay={i * 0.06} className="bg-tile-soft rounded-3xl p-5 sm:p-7">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="bg-tile-ink text-on-ink flex h-7 w-7 items-center justify-center rounded-full text-[0.8125rem] font-semibold tabular-nums">
                      {i + 1}
                    </span>
                    <h3 className="text-tile-ink text-[1.125rem] font-semibold tracking-tight">{rule.name}</h3>
                  </div>
                  <p className="text-ink-2 mb-4">{rule.explanation}</p>
                  <p lang="es" className="text-[1.0625rem] font-medium tracking-[-0.01em] sm:text-[1.1875rem]">
                    <Highlight text={rule.example} delay={0.4 + i * 0.06} />
                  </p>
                </Reveal>
              ))}
            </ul>
          </section>

          <section aria-labelledby="examples-heading">
            <Reveal>
              <h2 id="examples-heading" className="type-title mb-2 sm:mb-6">
                In context
              </h2>
            </Reveal>
            <ol className="divide-hairline divide-y">
              {topic.examples.map((ex, i) => (
                <Reveal
                  as="li"
                  key={ex.es}
                  delay={i * 0.05}
                  className="flex flex-col-reverse items-start gap-2 py-5 sm:flex-row sm:justify-between sm:gap-6 sm:py-6"
                >
                  <div>
                    <p
                      lang="es"
                      className="text-[1.1875rem] leading-snug font-semibold tracking-[-0.02em] sm:text-[1.375rem]"
                    >
                      <Highlight text={ex.es} />
                    </p>
                    <p className="text-ink-2 mt-1 text-[0.9375rem] italic sm:mt-1.5 sm:text-[1.0625rem]">{ex.en}</p>
                  </div>
                  <span className="bg-tile-soft text-tile-ink shrink-0 rounded-full sm:mt-1.5 px-3 py-1 text-xs font-semibold whitespace-nowrap">
                    {ex.rule}
                  </span>
                </Reveal>
              ))}
            </ol>
            <OpenQuizButton />
          </section>
        </article>

        {/* Right pane — the "test", pinned alongside the reference (a bottom sheet on phones) */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <QuizDock slug={topic.slug} questions={topic.quiz} next={{ slug: next.slug, word: next.word }} />
        </aside>
      </div>
    </div>
  );
}
