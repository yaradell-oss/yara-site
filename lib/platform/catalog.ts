import { FEATURE_KEYS, type ContentItem, type FeatureKey, type ProgramOffer } from "./types";

export const PROGRAM_OFFERS: ProgramOffer[] = [
  {
    slug: "taste-of-freedom",
    featureKey: FEATURE_KEYS.tasteOfFreedom,
    stripePriceEnv: "STRIPE_PRICE_TASTE_OF_FREEDOM",
    title: "Вкус свободы · Сезон 3",
    subtitle:
      "28 дней программы «Цветок Жизни»: живая кухня, ферменты, клетчатка, желчный ритм и сон — четыре недели от Освобождения к Свободе",
    kicker: "Текущий запуск · Сезон 3 · 28 дней",
    summary:
      "Четыре недели материалов: ежедневные PDF с рецептами и ритуалами, дни закупок и заготовок, чайная и десертная карты, карта ферментации и объяснения биохимии человеческим языком.",
    priceLabel: "доступ после оплаты",
    duration: "28 дней",
    format: "личный кабинет + PDF + Agatha concierge",
    status: "available",
    libraryHref: "/library/taste-of-freedom",
    publicHref: "/programs/taste-of-freedom",
    coverSrc: "/generated/season3-cover-program.jpg",
    includes: [
      "ежедневные материалы дней 1–28",
      "дни закупок и заготовок каждой недели",
      "чайная и десертная карты, карта ферментации",
      "закрытая библиотека PDF",
      "базовый доступ к Agatha concierge",
    ],
  },
  {
    slug: "blooming-garden-v2",
    featureKey: FEATURE_KEYS.bloomingGardenV2,
    stripePriceEnv: "STRIPE_PRICE_BLOOMING_GARDEN_V2",
    title: "Цветущий Сад · Сезон 2",
    subtitle: "21 день микробиоты, вкуса и спокойной дисциплины с Ярой Делл",
    kicker: "Прошлый сезон · 21 день",
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
    coverSrc: "/generated/season3-cover-archive.jpg",
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
    id: "tof-welcome",
    programSlug: "taste-of-freedom",
    featureKey: FEATURE_KEYS.tasteOfFreedom,
    title: "Вход в Сезон 3",
    type: "guide",
    summary:
      "Как устроены 28 дней: подготовка кухни, дни закупок и заготовок, ритм утра и логика четырёх недель — от Освобождения к Свободе.",
    sourceLabel: "Цветок Жизни · Вкус свободы · Введение",
    available: true,
  },
  {
    id: "tof-week-1",
    programSlug: "taste-of-freedom",
    featureKey: FEATURE_KEYS.tasteOfFreedom,
    title: "Неделя 1 · Освобождение",
    type: "recipe",
    summary:
      "Мягкий старт: тёплая вода до еды, тарелка начинается с клетчатки, фриттата со шпинатом, курица с оливками, полпетте в золотистом бульоне.",
    sourceLabel: "Цветок Жизни · Вкус свободы · Неделя 1",
    available: true,
  },
  {
    id: "tof-week-2",
    programSlug: "taste-of-freedom",
    featureKey: FEATURE_KEYS.tasteOfFreedom,
    title: "Неделя 2 · Опора",
    type: "recipe",
    summary:
      "Плотность и глубина: утиный рийет-тартин, кнели в прозрачном фюме, говядина по-сицилийски с апельсиновой гремолатой и фенхелем.",
    sourceLabel: "Цветок Жизни · Вкус свободы · Неделя 2",
    available: true,
  },
  {
    id: "tof-week-3",
    programSlug: "taste-of-freedom",
    featureKey: FEATURE_KEYS.tasteOfFreedom,
    title: "Неделя 3 · Наполнение",
    type: "recipe",
    summary:
      "Щедрость к себе: вителло-тоннато, треска на гриле с соусом ромеско, яичные роллы с творогом и зеленью.",
    sourceLabel: "Цветок Жизни · Вкус свободы · Неделя 3",
    available: true,
  },
  {
    id: "tof-week-4",
    programSlug: "taste-of-freedom",
    featureKey: FEATURE_KEYS.tasteOfFreedom,
    title: "Неделя 4 · Свобода",
    type: "recipe",
    summary:
      "Свобода выбора: смёрребрёд с печенью трески, скандинавское рыбное рагу с мидиями, бараньи отбивные с чимичурри.",
    sourceLabel: "Цветок Жизни · Вкус свободы · Неделя 4",
    available: true,
  },
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

export const TASTE_OF_FREEDOM_DAYS = [
  {
    week: "Неделя 1",
    title: "Освобождение",
    tone: "rose",
    focus: "мягкий старт: тёплая вода до еды, тарелка начинается с клетчатки",
    days: ["День закупок", "День заготовок", "Дни 1–7"],
  },
  {
    week: "Неделя 2",
    title: "Опора",
    tone: "sage",
    focus: "плотность и глубина вкуса: рийет, фюме, медленное тушение",
    days: ["День закупок", "День заготовок", "Дни 8–14"],
  },
  {
    week: "Неделя 3",
    title: "Наполнение",
    tone: "lavender",
    focus: "щедрость к себе: яркие текстуры и наполняющие блюда без тяжести",
    days: ["День закупок", "День заготовок", "Дни 15–21"],
  },
  {
    week: "Неделя 4",
    title: "Свобода",
    tone: "rose",
    focus: "свобода выбора, выросшая из ежедневных решений в свою сторону",
    days: ["День закупок", "День заготовок", "Дни 22–28"],
  },
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
