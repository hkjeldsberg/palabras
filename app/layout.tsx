import type { Metadata, Viewport } from "next";
import { MotionProvider } from "@/components/MotionProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "palabras · Spanish words",
  description: "Master tricky Spanish words — se, por, ya, me and more — in a few focused minutes.",
  applicationName: "palabras",
  appleWebApp: { capable: true, title: "palabras", statusBarStyle: "default" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Draw under the notch / home indicator; layouts pad with env(safe-area-inset-*).
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full">
        <MotionProvider>
          <main>{children}</main>
        </MotionProvider>
      </body>
    </html>
  );
}
