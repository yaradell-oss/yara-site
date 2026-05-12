export type VideoCategory =
  | "Завтраки"
  | "Техника"
  | "Море"
  | "Мясо и птица"
  | "Овощи"
  | "Соусы"
  | "Выпечка"
  | "Домашняя кухня";

export type YaraVideo = {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  transcript: string;
  category: VideoCategory;
  format: "short" | "video";
  tags: string[];
  views: number;
};

export const YOUTUBE_CHANNEL_URL =
  "https://www.youtube.com/channel/UCDPauwCeyuEtWiXO2h5K8IQ";
export const YOUTUBE_FEED_URL =
  "https://www.youtube.com/feeds/videos.xml?channel_id=UCDPauwCeyuEtWiXO2h5K8IQ";

export const VIDEO_CATEGORIES: ReadonlyArray<"Все" | VideoCategory> = [
  "Все",
  "Завтраки",
  "Техника",
  "Море",
  "Мясо и птица",
  "Овощи",
  "Соусы",
  "Выпечка",
  "Домашняя кухня",
];

const FALLBACK_VIDEOS: YaraVideo[] = [
  makeVideo({
    id: "-OZryxNoFG0",
    title: "Нори с тунцом - японское блюдо, готовим правильно",
    url: "https://www.youtube.com/shorts/-OZryxNoFG0",
    thumbnail: "https://i2.ytimg.com/vi/-OZryxNoFG0/hqdefault.jpg",
    publishedAt: "2026-05-11T13:00:00+00:00",
    updatedAt: "2026-05-11T13:00:00+00:00",
    description:
      "Нори, рис для суши, тартар из тунца, юдзу, понзу, панко, красная икра. Главная техника: тонкая хрустящая ракушка и прозрачная заправка без тяжёлого майонеза.",
    views: 0,
  }),
  makeVideo({
    id: "iBhkDdS-Vng",
    title: "Как жарить Wagyu правильно",
    url: "https://www.youtube.com/shorts/iBhkDdS-Vng",
    thumbnail: "https://i2.ytimg.com/vi/iBhkDdS-Vng/hqdefault.jpg",
    publishedAt: "2026-05-09T13:00:00+00:00",
    updatedAt: "2026-05-12T19:28:30+00:00",
    description:
      "Тонкий срез Wagyu, сухая поверхность, горячая стальная или чугунная сковорода, короткая жарка и отдых мяса.",
    views: 0,
  }),
  makeVideo({
    id: "BwzpHbVFoEE",
    title: "Идеальный завтрак из спаржи: 3 простых рецепта",
    url: "https://www.youtube.com/watch?v=BwzpHbVFoEE",
    thumbnail: "https://i3.ytimg.com/vi/BwzpHbVFoEE/hqdefault.jpg",
    publishedAt: "2026-05-07T13:00:00+00:00",
    updatedAt: "2026-05-08T20:46:59+00:00",
    description:
      "Спаржа, яйцо пашот и быстрый голландез. Всё должно быть подготовлено заранее: тарелки тёплые, соус шелковый, подача немедленная.",
    views: 0,
  }),
];

export async function getYaraVideos(): Promise<YaraVideo[]> {
  try {
    const response = await fetch(YOUTUBE_FEED_URL, {
      next: { revalidate: 60 * 60 * 6 },
      headers: { accept: "application/atom+xml, application/xml;q=0.9, */*;q=0.8" },
    });

    if (!response.ok) return FALLBACK_VIDEOS;

    const xml = await response.text();
    const parsed = parseYouTubeFeed(xml);
    return parsed.length ? parsed : FALLBACK_VIDEOS;
  } catch {
    return FALLBACK_VIDEOS;
  }
}

function parseYouTubeFeed(xml: string): YaraVideo[] {
  return Array.from(xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g))
    .map((match) => parseEntry(match[1]))
    .filter((video): video is YaraVideo => Boolean(video));
}

function parseEntry(entry: string): YaraVideo | null {
  const id = readTag(entry, "yt:videoId");
  const title = readTag(entry, "title");
  const publishedAt = readTag(entry, "published");
  const updatedAt = readTag(entry, "updated");
  const description = readTag(entry, "media:description");
  const url = readAttribute(entry, /<link rel="alternate" href="([^"]+)"/);
  const thumbnail = readAttribute(entry, /<media:thumbnail url="([^"]+)"/);
  const views = Number(readAttribute(entry, /<media:statistics views="(\d+)"/) || 0);

  if (!id || !title || !url) return null;

  return makeVideo({
    id,
    title,
    url,
    thumbnail: thumbnail || `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    publishedAt,
    updatedAt,
    description,
    views,
  });
}

function makeVideo(input: {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  publishedAt: string;
  updatedAt: string;
  description: string;
  views: number;
}): YaraVideo {
  const transcript = cleanText(input.description);
  const title = cleanText(input.title);
  const category = classifyVideo(`${title} ${transcript}`);
  return {
    ...input,
    title,
    description: transcript,
    transcript,
    category,
    format: input.url.includes("/shorts/") ? "short" : "video",
    tags: extractTags(`${title} ${transcript}`, category),
    views: Number.isFinite(input.views) ? input.views : 0,
  };
}

function readTag(entry: string, tag: string) {
  const escaped = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = entry.match(new RegExp(`<${escaped}>([\\s\\S]*?)<\\/${escaped}>`));
  return cleanText(match?.[1] || "");
}

function readAttribute(entry: string, pattern: RegExp) {
  return decodeXml(entry.match(pattern)?.[1] || "");
}

function cleanText(value: string) {
  return decodeXml(value)
    .replace(/<!\[CDATA\[|\]\]>/g, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\r/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]{2,}/g, " ")
    .trim();
}

function decodeXml(value: string) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

function classifyVideo(text: string): VideoCategory {
  const haystack = text.toLowerCase();
  if (has(haystack, ["завтрак", "пашот", "спарж", "голландез", "яйцо"])) return "Завтраки";
  if (has(haystack, ["тунец", "лосос", "севиче", "нори", "икра", "юдзу", "морск"])) return "Море";
  if (has(haystack, ["wagyu", "wague", "стейк", "мяс", "куриц", "филе"])) return "Мясо и птица";
  if (has(haystack, ["соус", "умами", "майонез", "понзу", "заправк"])) return "Соусы";
  if (has(haystack, ["морков", "чеснок", "овощ", "спарж"])) return "Овощи";
  if (has(haystack, ["тарт", "пирог", "выпеч", "тесто"])) return "Выпечка";
  if (has(haystack, ["нож", "сковород", "инструмент", "температур", "реакц", "ошибк"])) return "Техника";
  return "Домашняя кухня";
}

function extractTags(text: string, category: VideoCategory) {
  const haystack = text.toLowerCase();
  const dictionary = [
    "спаржа",
    "голландез",
    "пашот",
    "тунец",
    "нори",
    "юдзу",
    "лосось",
    "севиче",
    "wagyu",
    "курица",
    "морковь",
    "чеснок",
    "соус",
    "умами",
    "суп",
    "тарт",
    "техника",
    "ошибки",
  ];
  const tags = dictionary.filter((tag) => haystack.includes(tag.toLowerCase()));
  return Array.from(new Set([category, ...tags])).slice(0, 7);
}

function has(text: string, needles: string[]) {
  return needles.some((needle) => text.includes(needle));
}
