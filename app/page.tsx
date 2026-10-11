import { HeroTitle } from "@/components/HeroTitle";
import { TopicGrid } from "@/components/TopicGrid";
import { topics } from "@/lib/topics";

export default function Home() {
  return (
    <div className="mx-auto max-w-[90rem] px-5 pt-[calc(env(safe-area-inset-top)+2.5rem)] pb-[calc(env(safe-area-inset-bottom)+4rem)] sm:px-8 sm:pt-16 sm:pb-24 lg:px-16 lg:pt-20">
      <section className="mb-12 sm:mb-16">
        <HeroTitle lines={["Master tricky", "Spanish words."]} subtitle="One color per word, so the rules stick." />
      </section>
      <TopicGrid topics={topics} />
    </div>
  );
}
