import { wordLines } from "@/lib/wordSize";

/** The topic's big word; pair topics ("ser / estar") stack their two words. */
export function WordMark({ word }: { word: string }) {
  const lines = wordLines(word);
  if (lines.length === 1) return <>{word}</>;
  return (
    <>
      <span className="sr-only">{lines.join(" or ")}</span>
      {lines.map((line, i) => (
        <span key={line} aria-hidden className={`block ${i > 0 ? "opacity-55" : ""}`}>
          {line}
        </span>
      ))}
    </>
  );
}
