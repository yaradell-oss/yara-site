import Footer from "../_components/Footer";
import Nav from "../_components/Nav";
import { Kicker } from "../_components/Primitives";
import VideoLibraryClient from "../_components/videos/VideoLibraryClient";
import { getYaraVideos } from "../../lib/youtube/videos";

export const revalidate = 21600;

export const metadata = {
  title: "Видео — Яра Делл",
  description:
    "Кулинарные видео Яры Делл: рецепты, техники, завтраки, соусы и короткие разборы с поиском по описаниям и транскриптам.",
};

export default async function VideosPage() {
  const videos = await getYaraVideos();

  return (
    <>
      <Nav />
      <main>
        <header className="video-library-hero">
          <div className="container-editorial">
            <Kicker color="var(--rose)">YouTube · видео-картотека</Kicker>
            <h1>
              Кулинарные видео, которые можно{" "}
              <em>найти, отсортировать и открыть.</em>
            </h1>
            <p>
              Здесь лента Яры собирается в спокойную библиотеку: рецепты,
              техники, продукты, ошибки и маленькие ресторанные ходы. Карточки
              открывают YouTube, а поиск проходит по названию, описанию,
              тегам и индексируемому транскрипту.
            </p>
          </div>
        </header>

        <section className="video-library-shell">
          <div className="container-editorial">
            <VideoLibraryClient videos={videos} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
