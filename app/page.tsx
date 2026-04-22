export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-8 py-16 text-center"
      style={{
        background:
          "radial-gradient(circle at 15% 10%, rgba(232,184,165,0.45) 0%, transparent 45%), radial-gradient(circle at 85% 35%, rgba(216,195,175,0.40) 0%, transparent 50%), radial-gradient(circle at 50% 85%, rgba(217,221,201,0.35) 0%, transparent 50%), linear-gradient(180deg, #F7EADF 0%, #F3DFCD 45%, #F6E5D4 100%)",
        color: "#5D4030",
      }}
    >
      <p
        className="mb-8 font-raleway text-xs uppercase"
        style={{ letterSpacing: "0.38em", color: "#B5768A", fontWeight: 500 }}
      >
        Яра Делл · Dubai
      </p>

      <h1
        className="font-cormorant mb-8"
        style={{
          fontSize: "clamp(56px, 9vw, 128px)",
          fontWeight: 300,
          lineHeight: 0.98,
          letterSpacing: "-0.012em",
          maxWidth: "14ch",
        }}
      >
        Вкус, который{" "}
        <em style={{ fontStyle: "italic", color: "#B5768A", fontWeight: 300 }}>
          возвращает
        </em>{" "}
        к себе.
      </h1>

      <p
        className="font-cormorant italic"
        style={{
          fontSize: "clamp(18px, 2.1vw, 24px)",
          maxWidth: "36ch",
          lineHeight: 1.5,
          color: "#8A6B56",
          marginBottom: "3rem",
        }}
      >
        Сайт в разработке. Скоро здесь — программы, рецепты и журнал о
        микробиоте, гастрономии и внутренней экологии.
      </p>

      <div
        className="font-raleway"
        style={{
          fontSize: "10px",
          letterSpacing: "0.32em",
          textTransform: "uppercase",
          color: "#8A6B56",
          fontWeight: 500,
        }}
      >
        ожидается весна 2026
      </div>
    </main>
  );
}
