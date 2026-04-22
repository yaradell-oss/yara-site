import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";

/**
 * Cormorant Garamond — the reading voice.
 * Italic used heavily for body copy; roman for kickers inside headlines.
 */
const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "cyrillic"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

/**
 * Raleway — reserved for uppercase kickers / labels / nav. Never reading text.
 */
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Яра Делл — медленная кухня и биохимия внимания",
  description:
    "Письма и программы для женщин, которым интересна биохимия собственного тела — без маркетинга и без спешки. Дубай.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ru"
      className={`${cormorant.variable} ${raleway.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
