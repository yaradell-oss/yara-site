import Footer from "../_components/Footer";
import { JournalHeader, JournalList } from "../_components/Journal";
import Nav from "../_components/Nav";
import NewsletterBand from "../_components/NewsletterBand";

export const metadata = {
  title: "Журнал — Яра Делл",
  description: "Записки с кухни и немного биохимии. Раз в неделю, по воскресеньям.",
};

export default function JournalPage() {
  return (
    <>
      <Nav />
      <main>
        <JournalHeader />
        <JournalList />
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
