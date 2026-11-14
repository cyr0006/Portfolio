import { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { LuMessageCircle, LuShare2 } from "react-icons/lu";
import Markdown from "react-markdown";
import PulseHeart from "../ideas/PulseHeart";
import LineSidebar from "../ideas/LineSideBar";
import { musings, topicById } from "./musingsData";
import { AUTHOR, formatShortDate, readingTime } from "./utils";
import "./MusingDetail.css";

const MusingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  const entry = musings.find((m) => m.id === id);
  const currentIndex = musings.findIndex((m) => m.id === id);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access denied — nothing to fall back to here.
    }
  };

  if (!entry) {
    return (
      <div className="musing-detail-not-found">
        <p>Couldn't find that musing.</p>
        <Link to="/musings" className="musing-detail-back">
          ← Back to Musings
        </Link>
      </div>
    );
  }

  return (
    <div className="musing-detail">
      <aside className="musing-detail-nav">
        <p className="musing-detail-nav-label">Musings</p>
        <LineSidebar
          key={id}
          items={musings.map((m) => m.title)}
          defaultActive={currentIndex}
          accentColor="#f5deb3"
          textColor="rgba(255, 255, 255, 0.55)"
          markerColor="#6c6c6c"
          fontSize={0.95}
          onItemClick={(index) => {
            const target = musings[index];
            if (target.id !== id) navigate(`/musings/${target.id}`);
          }}
        />
      </aside>

      <article className="musing-detail-article">
        <Link to="/musings" className="musing-detail-back">
          ← Back to Musings
        </Link>

        <div className="musing-detail-tags">
          {entry.tags.map((tagId) => {
            const topic = topicById(tagId);
            if (!topic) return null;
            return (
              <span key={tagId} className="musing-tag" style={{ background: topic.color }}>
                {topic.emoji} {topic.label}
              </span>
            );
          })}
        </div>

        <h1>{entry.title}</h1>

        <div className="musing-detail-meta">
          <span>{AUTHOR}</span>
          <span>{readingTime(entry.body)} min read</span>
          <span>{formatShortDate(entry.date)}</span>
        </div>

        <div className="musing-detail-actions">
          <PulseHeart count={0} size={20} textColor="rgba(255, 255, 255, 0.75)" />
          <button type="button" className="musing-detail-action" disabled title="Comments coming soon">
            <LuMessageCircle />
            Comment
          </button>
          <button type="button" className="musing-detail-action" onClick={handleShare}>
            <LuShare2 />
            Share
            {copied && <span className="musing-detail-copied">Link copied!</span>}
          </button>
        </div>

        <div className="musing-detail-body">
          <Markdown>{entry.body}</Markdown>
        </div>
      </article>
    </div>
  );
};

export default MusingDetail;
