import groundtruth from "../../assets/projects/groundtruth.svg";
import arkhive from "../../assets/projects/arkhive.svg";
import goalBot from "../../assets/projects/goal-bot.svg";
import metroPipeline from "../../assets/projects/metro-pipeline.svg";
import financeFitness from "../../assets/projects/finance-fitness.svg";
import type { InfiniteMenuItem } from "../InfiniteMenu";

// Sourced from resume "Notable Projects". Add new entries here as projects ship.
const projects: InfiniteMenuItem[] = [
  {
    image: groundtruth,
    title: "GroundTruth",
    description:
      "Native iOS app helping Victorian property owners navigate planning permits and building regs via a RAG-powered compliance assistant. Swift, SwiftUI, Firebase, Gemini API, on-device ML.",
    link: "https://github.com/cyr0006",
  },
  {
    image: arkhive,
    title: "ARKHIVE",
    description:
      "Open-source app turning photos of documents, receipts and forms into structured data, with LLM-powered chat validation. Led architecture and CI/CD for a 14-person team.",
    link: "https://github.com/cyr0006",
  },
  {
    image: goalBot,
    title: "Goal-Tracking Bot",
    description:
      "Bot that lets users log, track, and stay accountable to daily goals. Self-hosted on a Raspberry Pi, serving 13+ daily active users.",
    link: "https://github.com/cyr0006",
  },
  {
    image: metroPipeline,
    title: "Melbourne Metro Transit Data Pipeline",
    description:
      "Self-directed data engineering project ingesting live train delay data from PTV's GTFS-Realtime feeds into a star-schema Postgres warehouse.",
    link: "https://github.com/cyr0006",
  },
  {
    image: financeFitness,
    title: "Finance & Fitness Monitor",
    description:
      "Multi-agent AI system monitoring personal finances and fitness metrics, demonstrating coordinator pattern and agent orchestration with the Claude API.",
    link: "https://github.com/cyr0006",
  },
];

export default projects;
