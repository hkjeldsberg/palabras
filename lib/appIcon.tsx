// Shared artwork for the app icons: a dashboard tile in miniature — the green pastel tile
// with a heavy geometric lowercase "p" (palabras) in its deep ink, plus the other three
// tile colours as a row of dots tucked beside the descender. Rendered by next/og (Satori): inline styles,
// plain hex, and the glyph is drawn as SVG shapes so it never depends on a font weight.

const TILE = "#d3f0d5";
const INK = "#1b3d20";
// Blue, peach, pink tiles, deepened a touch so they read on the green tile.
const DOTS = ["#a9d3f5", "#fbc98c", "#f7b3bd"];

// The "p" on a 100×100 grid: a flat-topped stem and a round bowl, ~16-unit strokes.
// The full figure spans x 22–78, y 18–84, i.e. inside the central 80% maskable safe zone.
function Glyph({ px }: { px: number }) {
  return (
    <svg width={px} height={px} viewBox="0 0 100 100">
      <rect x="22" y="18" width="16.5" height="66" rx="2" fill={INK} />
      <path
        fillRule="evenodd"
        d="M54 18a24 24 0 1 1 0 48a24 24 0 1 1 0-48zM54 33.5a8.5 8.5 0 1 0 0 17a8.5 8.5 0 1 0 0-17z"
        fill={INK}
      />
    </svg>
  );
}

export function AppIconArt({ size, rounded = false }: { size: number; rounded?: boolean }) {
  const small = size <= 32;
  const glyph = small ? size * 1.15 : size;
  const pad = (glyph - size) / 2;
  return (
    <div
      style={{
        width: size,
        height: size,
        display: "flex",
        position: "relative",
        background: TILE,
        borderRadius: rounded ? size * 0.22 : 0,
        overflow: "hidden",
      }}
    >
      {/* At favicon size the glyph is scaled up (centred) to fill the tile, and the dots are dropped. */}
      <div style={{ position: "absolute", top: -pad, left: -pad, width: glyph, height: glyph, display: "flex" }}>
        <Glyph px={glyph} />
      </div>
      {!small && (
        <div
          style={{
            position: "absolute",
            top: size * 0.765,
            left: size * 0.495,
            display: "flex",
            gap: size * 0.035,
          }}
        >
          {DOTS.map((c) => (
            <div
              key={c}
              style={{ width: size * 0.075, height: size * 0.075, borderRadius: size, background: c }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
