// The big word is sized against its own box (container query units), so it fills a
// phone tile and a desktop tile the same way. Size comes from the longest line:
// a bold, tightly tracked lowercase glyph is roughly 0.6em wide.

/** "ser / estar" → ["ser", "estar"]; single words → [word]. */
export function wordLines(word: string): string[] {
  return word.split(" / ");
}

function fit(word: string, availableCqw: number, maxCqw: number) {
  const longest = Math.max(...wordLines(word).map((w) => w.length));
  return Math.min(maxCqw, availableCqw / (longest * 0.6)).toFixed(1);
}

/** Font size for the dashboard tile word (tile padding is 10cqw each side). */
export function tileWordSize(word: string) {
  return `${fit(word, 78, 32)}cqw`;
}

/** Font size for the topic hero word, capped for wide screens. */
export function heroWordSize(word: string) {
  const longest = Math.max(...wordLines(word).map((w) => w.length));
  return `min(${fit(word, 85, 30)}cqw, ${longest > 6 ? 9 : 11.5}rem)`;
}
