import ContactForm from "../_components/ContactForm";
import Footer from "../_components/Footer";
import Nav from "../_components/Nav";

export const metadata = {
  title: "Контакт — Яра Делл",
  description:
    "Приёмы в Дубае, онлайн-сопровождение, медиа-запросы. Ответ — в течение трёх дней.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
