import { ImageResponse } from "next/og";
import { AppIconArt } from "@/lib/appIcon";

const sizes = [32, 192, 512];

export function generateImageMetadata() {
  return sizes.map((s) => ({ id: String(s), size: { width: s, height: s }, contentType: "image/png" }));
}

export default async function Icon({ id }: { id: Promise<string> }) {
  const size = Number(await id);
  // Full-bleed artwork so it also works as a maskable icon; the browser applies its own mask.
  return new ImageResponse(<AppIconArt size={size} rounded={size <= 32} />, { width: size, height: size });
}
