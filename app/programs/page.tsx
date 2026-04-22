import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import NewsletterBand from "../_components/NewsletterBand";
import Programs, { ProgramsHeader } from "../_components/Programs";

export const metadata = {
  title: "Программы — Яра Делл",
  description:
    "Сезонные программы и индивидуальные визиты. Каждая из них — о внимании, не о дисциплине.",
};

export default function ProgramsPage() {
  return (
    <>
      <Nav />
      <main>
        <ProgramsHeader />
        <Programs />
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
