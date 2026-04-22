import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import NewsletterBand from "../_components/NewsletterBand";
import { PhilosophyManifesto } from "../_components/Philosophy";

export const metadata = {
  title: "Философия — Яра Делл",
  description: "Манифест: я верю в медленное.",
};

export default function PhilosophyPage() {
  return (
    <>
      <Nav />
      <main>
        <PhilosophyManifesto />
        <NewsletterBand />
      </main>
      <Footer />
    </>
  );
}
