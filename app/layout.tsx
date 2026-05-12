import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import "./globals.css";
import { isClerkConfigured } from "../lib/platform/env";

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
    default: "Яра Делл — кухня, микробиота и авторские программы",
    template: "%s · Яра Делл",
  },
  description:
    "Авторские программы Яры Делл о вкусе, микробиоте, ритуалах и спокойной дисциплине кухни. Дубай.",
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
    title: "Яра Делл — кухня, микробиота и авторские программы",
    description:
      "Авторские программы о вкусе, микробиоте, ритуалах и спокойной дисциплине кухни.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Яра Делл — кухня, микробиота и авторские программы",
    description:
      "Авторские программы о вкусе, микробиоте и спокойной дисциплине кухни.",
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
  const document = (
    <html
      lang="ru"
      className={`${cormorant.variable} ${raleway.variable}`}
    >
      <body>{children}</body>
    </html>
  );

  if (!isClerkConfigured()) {
    return document;
  }

  return <ClerkProvider>{document}</ClerkProvider>;
}
