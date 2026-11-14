import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import FadeContent from "../FadeContent/FadeContent";
import ChromaGrid, { type ChromaItem } from "../ChromaGrid/ChromaGrid";
import JellyRadio from "../JellyRadio/JellyRadio";
import { TOPICS, musings, topicById, type Musing } from "./musingsData";
import { makePlaceholder } from "./placeholder";
import { formatDate } from "./utils";
import "./Musings.css";

type ViewMode = "feed" | "grid";

const VIEW_ITEMS = [
  { value: "feed", label: "Feed" },
  { value: "grid", label: "Grid" },
];

const FILTER_ITEMS = [
  { value: "all", label: "All" },
  ...TOPICS.map((topic) => ({ value: topic.id, label: `${topic.emoji} ${topic.label}` })),
];

const MusingCard = ({ entry, onOpen }: { entry: Musing; onOpen: () => void }) => (
  <article
    className="musing-card musing-card-clickable"
    onClick={onOpen}
    role="link"
    tabIndex={0}
    onKeyDown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        onOpen();
      }
    }}
  >
    <div className="musing-card-meta">
      {entry.tags.map((tagId) => {
        const topic = topicById(tagId);
        if (!topic) return null;
        return (
          <span key={tagId} className="musing-tag" style={{ background: topic.color }}>
            {topic.emoji} {topic.label}
          </span>
        );
      })}
      <span className="musing-card-date">{formatDate(entry.date)}</span>
    </div>
    <h2>{entry.title}</h2>
    <p className="musing-card-excerpt">{entry.excerpt}</p>
    <span className="musing-card-readmore">Read more →</span>
  </article>
);

const Musings = () => {
  const navigate = useNavigate();
  const [view, setView] = useState<ViewMode>("feed");
  const [filter, setFilter] = useState("all");

  const filtered = useMemo(
    () => (filter === "all" ? musings : musings.filter((entry) => entry.tags.includes(filter))),
    [filter]
  );

  const openMusing = (id: string) => navigate(`/musings/${id}`);

  const gridItems = useMemo<ChromaItem[]>(
    () =>
      filtered.map((entry) => {
        const topic = topicById(entry.tags[0]) ?? TOPICS[TOPICS.length - 1];
        return {
          image: makePlaceholder(topic),
          title: entry.title,
          subtitle: `${formatDate(entry.date)}`,
          accent: topic.color,
          onClick: () => openMusing(entry.id),
        };
      }),
    [filtered]
  );

  return (
    <div className="musings">
      <div className="musings-header">
        <h1>Musings</h1>
        <p>A collection of thoughts on engineering, philosophy, life, and fitness.</p>
      </div>

      <div className="musings-controls">
        <div className="musings-filter">
          <JellyRadio
            items={FILTER_ITEMS}
            value={filter}
            onChange={setFilter}
            ariaLabel="Filter musings by topic"
            chipColor="#2a1458"
            activeColor="#f5deb3"
            activeTextColor="#050011"
            textColor="#f5f5f5"
          />
        </div>
        <JellyRadio
          items={VIEW_ITEMS}
          value={view}
          onChange={(value) => setView(value as ViewMode)}
          ariaLabel="Toggle between feed and grid view"
          chipColor="#2a1458"
          activeColor="#f5deb3"
          activeTextColor="#050011"
          textColor="#f5f5f5"
        />
      </div>

      {filtered.length === 0 && <p className="musings-empty">No musings for this topic yet.</p>}

      {view === "feed" ? (
        <div className="musings-feed">
          {filtered.map((entry) => (
            <FadeContent key={entry.id} effect="fade" blur duration={0.8} threshold={0.15}>
              <MusingCard entry={entry} onOpen={() => openMusing(entry.id)} />
            </FadeContent>
          ))}
        </div>
      ) : (
        <ChromaGrid items={gridItems} columns={3} showInfo frame theme="dark" reveal="spotlight" />
      )}
    </div>
  );
};

export default Musings;
