// The big word is sized against its own box (container query units), so it fills a
// phone tile and a desktop tile the same way. Longer words step down to stay inside.
// Class strings are written out in full so Tailwind can see them.

export function tileWordSize(word: string) {
  if (word.length <= 4) return "text-[32cqw]";
  if (word.length === 5) return "text-[25cqw]";
  return "text-[22cqw]";
}

export function heroWordSize(word: string) {
  if (word.length <= 4) return "text-[min(30cqw,11.5rem)]";
  if (word.length === 5) return "text-[min(25cqw,11.5rem)]";
  return "text-[min(21cqw,10.5rem)]";
}
