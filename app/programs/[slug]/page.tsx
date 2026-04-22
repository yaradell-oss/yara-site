import { notFound } from "next/navigation";
import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import NewsletterBand from "../../_components/NewsletterBand";
import {
  ProgramDetailHero,
  WEEKS,
  WeekRow,
} from "../../_components/ProgramDetail";

/* ============================================================
   Dynamic program detail page. Currently only "blooming-garden"
   (a.k.a. Цветущий сад) is fully designed — other programs 404
   here until their content lands.

   We use a Latin slug for the URL because Next.js 16's static-
   export pipeline chokes when serializing Cyrillic path segments
   at build time (InvalidCharacterError in prerender).
   ============================================================ */

const KNOWN_SLUGS = ["blooming-garden"] as const;
type KnownSlug = (typeof KNOWN_SLUGS)[number];

export function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "blooming-garden") {
    return {
      title: "Цветущий сад — программа, Яра Делл",
      description:
        "Двадцать один день внимания к себе. Три недели — по одной на каждую весну, которая живёт внутри.",
    };
  }
  return { title: "Программа — Яра Делл" };
}

export default async function ProgramDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!KNOWN_SLUGS.includes(slug as KnownSlug)) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main>
        <ProgramDetailHero />
        {WEEKS.map((week, i) => (
          <WeekRow key={week.num} week={week} index={i} />
        ))}
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
