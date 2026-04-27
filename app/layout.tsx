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

const SITE_URL = "https://yara.dellight.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Яра Делл — медленная кухня и биохимия внимания",
    template: "%s · Яра Делл",
  },
  description:
    "Письма и программы для женщин, которым интересна биохимия собственного тела — без маркетинга и без спешки. Дубай.",
  applicationName: "Яра Делл",
  authors: [{ name: "Яра Делл" }],
  keywords: [
    "биохакинг",
    "женское здоровье",
    "медленная кухня",
    "микробиота",
    "перименопауза",
    "программы питания",
    "Дубай",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: SITE_URL,
    siteName: "Яра Делл",
    title: "Яра Делл — медленная кухня и биохимия внимания",
    description:
      "Письма и программы для женщин, которым интересна биохимия собственного тела — без маркетинга и без спешки.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Яра Делл — медленная кухня и биохимия внимания",
    description:
      "Письма и программы для женщин, которым интересна биохимия собственного тела.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
