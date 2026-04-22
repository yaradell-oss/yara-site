import EditorialHero from "./_components/EditorialHero";
import Footer from "./_components/Footer";
import { JournalList } from "./_components/Journal";
import Nav from "./_components/Nav";
import NewsletterBand from "./_components/NewsletterBand";
import { PhilosophyTeaser } from "./_components/Philosophy";
import Programs from "./_components/Programs";
import QuoteStrip from "./_components/QuoteStrip";

/* ============================================================
   Editorial home. Composition:
     Nav
     EditorialHero
     QuoteStrip (rose wash)
     Programs (three asymmetric rows)
     PhilosophyTeaser
     JournalList (three latest)
     NewsletterBand (peach gradient)
     Footer
   ============================================================ */

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <EditorialHero />

        <QuoteStrip
          quote="Это не детокс и не марафон. Это способ вернуть себе утро, вкус и тишину — медленно, как распускается пион."
          author="из первого письма сезона"
        />

        <Programs />

        <PhilosophyTeaser />

        <JournalList limit={3} />

        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
