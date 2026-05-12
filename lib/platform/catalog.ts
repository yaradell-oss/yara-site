import { FEATURE_KEYS, type ContentItem, type FeatureKey, type ProgramOffer } from "./types";

export const PROGRAM_OFFERS: ProgramOffer[] = [
  {
    slug: "blooming-garden-v2",
    featureKey: FEATURE_KEYS.bloomingGardenV2,
    stripePriceEnv: "STRIPE_PRICE_BLOOMING_GARDEN_V2",
    title: "Цветущий Сад · Сезон 2",
    subtitle: "21 день микробиоты, вкуса и спокойной дисциплины с Ярой Делл",
    kicker: "Текущий запуск · 21 день",
    summary:
      "Три недели материалов, ритуалов, рецептов и объяснений по микробиоте: Корни, Ствол, Крона.",
    priceLabel: "доступ после оплаты",
    duration: "21 день",
    format: "личный кабинет + PDF + Agatha concierge",
    status: "available",
    libraryHref: "/library/blooming-garden-v2",
    publicHref: "/programs/blooming-garden",
    includes: [
      "ежедневные материалы программы",
      "рецепты и ритуалы в рабочем порядке",
      "закрытая библиотека PDF",
      "базовый доступ к Agatha concierge",
    ],
  },
  {
    slug: "flower-of-life-archive",
    featureKey: FEATURE_KEYS.evergreenLibrary,
    stripePriceEnv: "STRIPE_PRICE_EVERGREEN_LIBRARY",
    title: "Архив программ Яры",
    subtitle: "вечнозелёная библиотека старших материалов",
    kicker: "Будущий архив",
    summary:
      "Архив программ и рецептов, которые остаются коммерчески ценными после окончания сопровождения.",
    priceLabel: "будет добавлено",
    duration: "постоянный доступ",
    format: "библиотека",
    status: "archive",
    libraryHref: "/library/flower-of-life-archive",
    publicHref: "/programs",
    includes: ["старшие программы", "архив рецептов", "тематические подборки"],
  },
  {
    slug: "concierge-plus",
    featureKey: FEATURE_KEYS.conciergePlus,
    stripePriceEnv: "STRIPE_PRICE_CONCIERGE_PLUS",
    title: "Agatha concierge plus",
    subtitle: "расширенный слой вопросов и сопровождения",
    kicker: "Сопровождение",
    summary:
      "Платный уровень для более глубоких вопросов по доступным программам без втягивания Яры в бесконечную переписку.",
    priceLabel: "будет добавлено",
    duration: "ежемесячно",
    format: "чат + эскалации",
    status: "coming-soon",
    libraryHref: "/concierge",
    publicHref: "/pricing",
    includes: ["расширенные лимиты", "приоритетные эскалации", "история вопросов"],
  },
];

export const CONTENT_ITEMS: ContentItem[] = [
  {
    id: "bgv2-welcome",
    programSlug: "blooming-garden-v2",
    featureKey: FEATURE_KEYS.bloomingGardenV2,
    title: "Вход в Сезон 2",
    type: "guide",
    summary:
      "Как устроены 21 день: ритм утра, структура недели, подготовка кухни и правила мягкой дисциплины.",
    sourceLabel: "Цветущий Сад · Сезон 2 · Введение",
    available: true,
  },
  {
    id: "bgv2-week-1",
    programSlug: "blooming-garden-v2",
    featureKey: FEATURE_KEYS.bloomingGardenV2,
    title: "Неделя 1 · Корни",
    type: "ritual",
    summary:
      "Разгрузка печени, желчный ритм, бульон, крестоцветные и первые микробиотические опоры.",
    sourceLabel: "Цветущий Сад · Сезон 2 · Неделя 1",
    available: true,
  },
  {
    id: "bgv2-week-2",
    programSlug: "blooming-garden-v2",
    featureKey: FEATURE_KEYS.bloomingGardenV2,
    title: "Неделя 2 · Ствол",
    type: "recipe",
    summary:
      "Плотность вкуса, ферментируемая клетчатка, полифенолы и спокойное насыщение без сахарных качелей.",
    sourceLabel: "Цветущий Сад · Сезон 2 · Неделя 2",
    available: true,
  },
  {
    id: "bgv2-week-3",
    programSlug: "blooming-garden-v2",
    featureKey: FEATURE_KEYS.bloomingGardenV2,
    title: "Неделя 3 · Крона",
    type: "recipe",
    summary:
      "Финальная неделя: мисо, фенхель, гранат, ясность и поддержка микробиоты после программы.",
    sourceLabel: "Цветущий Сад · Сезон 2 · Неделя 3",
    available: true,
  },
];

export const LIBRARY_FILTERS = [
  "Все материалы",
  "Неделя",
  "Рецепты",
  "Ритуалы",
  "Биохакинг",
  "Заготовки",
] as const;

export const BLOOMING_GARDEN_DAYS = [
  {
    week: "Неделя 1",
    title: "Корни",
    tone: "rose",
    focus: "мягкий старт, желчный ритм, крестоцветные, бульон",
    days: ["Вход в сезон", "День заготовок", "Дни 1-7", "Закупки недели"],
  },
  {
    week: "Неделя 2",
    title: "Ствол",
    tone: "sage",
    focus: "плотность вкуса, полифенолы, ферментируемая клетчатка",
    days: ["День заготовок", "Дни 8-14", "Биохакинг недели", "Замены"],
  },
  {
    week: "Неделя 3",
    title: "Крона",
    tone: "lavender",
    focus: "мисо, фенхель, гранат, лёгкость после программы",
    days: ["День заготовок", "Дни 15-21", "Финальный ритуал", "После сезона"],
  },
] as const;

export const COMMERCIAL_MILESTONES = [
  {
    title: "Публичный слой",
    body: "Главная, программы, доступ и журнал дают доверие до покупки: кто такая Яра, что внутри Сезона 2 и почему это не очередной марафон.",
  },
  {
    title: "Закрытая библиотека",
    body: "После оплаты участница попадает не в папку с PDF, а в аккуратную программу: недели, дни, рецепты, ритуалы, источники и доступ к материалам.",
  },
  {
    title: "Agatha concierge",
    body: "Первый контур вопросов отвечает из разрешённых материалов, цитирует источник и эскалирует только то, что действительно требует человека.",
  },
] as const;

export function getProgramOffer(slug: string) {
  return PROGRAM_OFFERS.find((program) => program.slug === slug);
}

export function getContentForProgram(slug: string) {
  return CONTENT_ITEMS.filter((item) => item.programSlug === slug);
}

export function hasFeature(featureKey: FeatureKey, active: FeatureKey[]) {
  return active.includes(featureKey);
}
