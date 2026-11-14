export interface Topic {
  id: string;
  label: string;
  color: string;
  emoji: string;
}

export const TOPICS: Topic[] = [
  { id: "engineering", label: "Engineering", color: "#7cc4ff", emoji: "⚙️" },
  { id: "philosophy", label: "Philosophy", color: "#a98bff", emoji: "🧠" },
  { id: "life", label: "Life", color: "#ffb27a", emoji: "🌿" },
  { id: "fitness", label: "Fitness", color: "#ff5a36", emoji: "🏋️" },
  { id: "other", label: "Other", color: "#f5deb3", emoji: "✨" },
];

export const topicById = (id: string): Topic | undefined =>
  TOPICS.find((topic) => topic.id === id);

export interface Musing {
  id: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  body: string;
}

// Placeholder entries — replace with your own musings. Each `tags` entry
// should reference a topic id from TOPICS above.
export const musings: Musing[] = [
  {
    id: "debugging-as-a-mirror",
    title: "Debugging as a Mirror",
    date: "2026-10-02",
    tags: ["engineering", "philosophy"],
    excerpt:
      "Every stubborn bug eventually stops being about the code and starts being about the assumptions you didn't know you were making.",
    body: `Every stubborn bug eventually stops being about the code and starts being about the assumptions you didn't know you were making.

You can stare at a stack trace for an hour and still miss the fix, not because the fix is hard, but because you've already decided — quietly, without noticing — what the problem *can't* be. The bug isn't hiding in the code. It's hiding in the shape of your attention.

I've started treating long debugging sessions as a kind of forced honesty. If I've been stuck for more than twenty minutes, the real question usually isn't "what's wrong with the program," it's "what am I refusing to question." Nine times out of ten, that's where the bug actually lives.`,
  },
  {
    id: "the-discipline-of-unfinished-things",
    title: "The Discipline of Unfinished Things",
    date: "2026-09-18",
    tags: ["life", "philosophy"],
    excerpt:
      "We treat unfinished work as a failure of willpower. Most of the time it's a failure of scope.",
    body: `We treat unfinished work as a failure of willpower. Most of the time it's a failure of scope.

A project doesn't stall because you got lazy halfway through. It stalls because the version of it you imagined at the start was never actually a single thing — it was five things wearing one name. The willpower was fine. The plan was the problem.

Lately I've been trying to notice the moment a task quietly grows a second task inside it, and to name that moment out loud instead of just pushing through. Most unfinished things aren't abandoned. They're just mislabeled.`,
  },
  {
    id: "progressive-overload-for-the-mind",
    title: "Progressive Overload for the Mind",
    date: "2026-08-27",
    tags: ["fitness", "life"],
    excerpt:
      "The gym taught me that growth requires a load just slightly heavier than what's comfortable. I'm not sure why I ever expected learning to work differently.",
    body: `The gym taught me that growth requires a load just slightly heavier than what's comfortable. I'm not sure why I ever expected learning to work differently.

If you lift the same weight forever, your body has no reason to change. If you read the same kind of problem forever, your thinking doesn't either. The discomfort isn't a sign you're doing it wrong — it's the actual mechanism.

The hard part isn't knowing this. It's resisting the urge to stay at a weight that still feels good to lift.`,
  },
  {
    id: "on-building-things-no-one-asked-for",
    title: "On Building Things No One Asked For",
    date: "2026-07-09",
    tags: ["engineering", "other"],
    excerpt:
      "Most of what I've built that mattered to me started as a solution to a problem exactly one person had: me.",
    body: `Most of what I've built that mattered to me started as a solution to a problem exactly one person had: me.

There's a pressure, especially early on, to justify a side project by its audience. How many users, how much traction, who else needs this. But some of the most durable engineering habits I have came from tools I built with an audience of one, because that's the only context where I was honest enough to build the thing I actually wanted rather than the thing that looked good on a resume.

Not every project needs to scale. Some just need to be true.`,
  },
  {
    id: "silence-as-input",
    title: "Silence as Input",
    date: "2026-06-14",
    tags: ["philosophy", "life"],
    excerpt:
      "We treat quiet as the absence of signal. More often it's the only place signal has room to arrive.",
    body: `We treat quiet as the absence of signal. More often it's the only place signal has room to arrive.

Every notification, every open tab, every half-finished conversation is competing for the same narrow channel. It's not that silence produces insight directly — it's that insight was always there, underneath the noise, waiting for enough bandwidth to be heard.

I don't think I need more time to think. I think I need fewer things asking for my attention at the same volume as the one thing that actually matters.`,
  },
];

export default musings;
