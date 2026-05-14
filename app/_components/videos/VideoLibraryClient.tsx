"use client";

import { ExternalLink, MousePointerClick, Search, SlidersHorizontal } from "lucide-react";
import { LayoutGroup, motion } from "motion/react";
import { useDeferredValue, useMemo, useState, useTransition } from "react";
import { flushSync } from "react-dom";
import type { VideoCategory, YaraVideo } from "../../../lib/youtube/videos";
import { VIDEO_CATEGORIES, YOUTUBE_CHANNEL_URL } from "../../../lib/youtube/videos";

type SortMode = "newest" | "oldest" | "popular" | "title" | "category";

const SORT_LABELS: Record<SortMode, string> = {
  newest: "сначала новые",
  oldest: "сначала старые",
  popular: "по просмотрам",
  title: "по алфавиту",
  category: "по категориям",
};

export default function VideoLibraryClient({ videos }: { videos: YaraVideo[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<"Все" | VideoCategory>("Все");
  const [sort, setSort] = useState<SortMode>("newest");
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const needle = normalize(deferredQuery);
    return videos
      .filter((video) => category === "Все" || video.category === category)
      .filter((video) => {
        if (!needle) return true;
        return normalize(
          [
            video.title,
            video.category,
            video.description,
            video.transcript,
            video.tags.join(" "),
          ].join(" "),
        ).includes(needle);
      })
      .sort((a, b) => sortVideos(a, b, sort));
  }, [category, deferredQuery, sort, videos]);

  function transitionUpdate(update: () => void) {
    if (document.startViewTransition) {
      document.startViewTransition(() => flushSync(update));
      return;
    }
    startTransition(update);
  }

  const searchNeedle = normalize(deferredQuery);

  return (
    <section className="video-workbench" aria-label="Видео Яры Делл">
      <div className="video-controls">
        <label className="video-search">
          <Search size={18} strokeWidth={1.8} aria-hidden />
          <input
            value={query}
            onChange={(event) => {
              const next = event.target.value;
              setQuery(next);
            }}
            placeholder="Поиск: блюдо, техника, транскрипт"
          />
        </label>

        <label className="video-sort">
          <SlidersHorizontal size={18} strokeWidth={1.8} aria-hidden />
          <select
            value={sort}
            onChange={(event) => transitionUpdate(() => setSort(event.target.value as SortMode))}
          >
            {Object.entries(SORT_LABELS).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="video-category-row" aria-label="Категории видео">
        {VIDEO_CATEGORIES.map((item) => (
          <button
            key={item}
            type="button"
            className={item === category ? "is-active" : undefined}
            onClick={() => transitionUpdate(() => setCategory(item))}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="video-result-line" aria-live="polite">
        <span>{filtered.length} видео</span>
        {isPending ? <span>перестраиваю подборку</span> : null}
        <a href={YOUTUBE_CHANNEL_URL} target="_blank" rel="noreferrer">
          открыть канал <ExternalLink size={14} strokeWidth={1.8} />
        </a>
      </div>

      <LayoutGroup>
        <motion.div className="video-card-grid" layout>
        {filtered.map((video) => (
          <motion.a
            layout
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.42, ease: [0.19, 1, 0.22, 1] }}
            className="video-card"
            href={video.url}
            key={video.id}
            target="_blank"
            rel="noreferrer"
            aria-label={`Открыть видео: ${video.title}`}
            style={{ ["--video-transition-name" as string]: `video-${video.id}` }}
          >
            <div className="video-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={video.thumbnail} alt="" />
              <span className="video-play-mark">
                <MousePointerClick size={18} strokeWidth={1.9} />
                открыть
              </span>
              <span className="video-format">{video.format === "short" ? "shorts" : "video"}</span>
            </div>

            <div className="video-card-body">
              <div className="video-card-meta">
                <span>{video.category}</span>
                <span>{formatDate(video.publishedAt)}</span>
              </div>
              <h2>{highlightText(video.title, searchNeedle)}</h2>
              <p>{highlightExcerpt(video.transcript, 210, searchNeedle)}</p>
              <div className="video-tag-row">
                {video.tags.slice(0, 4).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="video-transcript-note">
                Поиск видит название, описание и индексируемый транскрипт.
              </div>
            </div>
          </motion.a>
        ))}
        </motion.div>
      </LayoutGroup>

      {filtered.length === 0 ? (
        <div className="video-empty">
          Ничего не найдено. Попробуйте искать по продукту, технике или настроению блюда.
        </div>
      ) : null}
    </section>
  );
}

function sortVideos(a: YaraVideo, b: YaraVideo, sort: SortMode) {
  switch (sort) {
    case "oldest":
      return dateValue(a.publishedAt) - dateValue(b.publishedAt);
    case "popular":
      return b.views - a.views;
    case "title":
      return a.title.localeCompare(b.title, "ru");
    case "category":
      return a.category.localeCompare(b.category, "ru") || b.views - a.views;
    case "newest":
    default:
      return dateValue(b.publishedAt) - dateValue(a.publishedAt);
  }
}

function normalize(value: string) {
  return value.toLowerCase().replace(/ё/g, "е").trim();
}

function dateValue(value: string) {
  return value ? new Date(value).getTime() : 0;
}

function formatDate(value: string) {
  if (!value) return "без даты";
  return new Intl.DateTimeFormat("ru", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(value));
}

function excerpt(value: string, max: number) {
  const clean = value.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max).trim()}…`;
}

function highlightExcerpt(value: string, max: number, needle: string) {
  return highlightText(excerpt(value, max), needle);
}

function highlightText(text: string, needle: string) {
  if (!needle || needle.length < 2) return text;

  const normalizedText = normalize(text);
  const index = normalizedText.indexOf(needle);
  if (index < 0) return text;

  const before = text.slice(0, index);
  const match = text.slice(index, index + needle.length);
  const after = text.slice(index + needle.length);

  return (
    <>
      {before}
      <mark className="video-highlight">{match}</mark>
      {after}
    </>
  );
}
