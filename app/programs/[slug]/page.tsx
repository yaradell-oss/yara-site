import { notFound } from "next/navigation";
import Footer from "../../_components/Footer";
import Nav from "../../_components/Nav";
import NewsletterBand from "../../_components/NewsletterBand";
import {
  PROGRAM_DETAILS,
  ProgramCommerceSection,
  ProgramDetailHero,
  WeekRow,
} from "../../_components/ProgramDetail";

/* ============================================================
   Dynamic program detail page, data-driven via PROGRAM_DETAILS.

   We use a Latin slug for the URL because Next.js 16's static-
   export pipeline chokes when serializing Cyrillic path segments
   at build time (InvalidCharacterError in prerender).
   ============================================================ */

const KNOWN_SLUGS = Object.keys(PROGRAM_DETAILS);

export function generateStaticParams() {
  return KNOWN_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "taste-of-freedom") {
    return {
      title: "Вкус свободы · Сезон 3 — Яра Делл",
      description:
        "Авторская программа Яры Делл: двадцать восемь дней живой кухни, ферментов и ритуалов — четыре недели от Освобождения к Свободе.",
    };
  }
  if (slug === "blooming-garden") {
    return {
      title: "Цветущий Сад · Сезон 2 — Яра Делл",
      description:
        "Авторская программа Яры Делл: двадцать один день микробиоты, рецептов и ритуалов.",
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
  const detail = PROGRAM_DETAILS[slug];
  if (!detail) {
    notFound();
  }

  return (
    <>
      <Nav />
      <main>
        <ProgramDetailHero detail={detail} />
        <ProgramCommerceSection detail={detail} />
        {detail.weeks.map((week, i) => (
          <WeekRow key={week.title} week={week} index={i} />
        ))}
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
