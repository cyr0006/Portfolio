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
    id: "fighting-the-system",
    title: "Fighting the system - an indicator a system doesn't quite work anymore",
    date: "2026-10-02",
    tags: ["engineering", "philosophy"],
    excerpt:
      "Think back to a time you were fighting to make something work; anything. Your code, a business idea, a relationship, a task. If you have to fight the system at every step to make things work, ask yourself if the system is wrong.",
    body: `This is a philosophical realisation which was inspired by a Java project of mine at Monash University.
In short, I was trying to implement a simple turn-based game in Java. This was during one of my early design iterations. I found that every addition, every idea and every change involved an ever-growing level of effort, exceptions and workarounds. An additional attribute here, a change to the logic there.
The whole point of OOP is to make extension easier, not harder. With my approach, I had all the constrains of OOP, and none of the extensibility. It quickly became apparent that the schema of my app, the fundamental classes and inheritances were wrong. 

This pattern can be seen everywhere in life. Let me give you an example:
Let assume a corporate professional wants to lose weight, gain muscle or get lean. They have a clear goal and a fine-tuned workout plan. When these are put through the battery of work and life, it all breaks down. The goals and methods remain clear; the outcome, much to the ire and confusion of the person falls victim to a system. This system is their life, their job, their schedule. 
It’s like buying a coupe and complaining about the offroad capability; the fitness plan was never made with the schedule of such a busy person.  They are not compatible. They are not congruent. 

The same train of thought can easily be transposed into a multitude of situation like relationships, goals, work, etc. 
So, if you ever feel like every step, is a slog. If you’re fighting to make things work, as yourself, is it the system you’re fighting and if so, should the system change?
    `,
  },
  {
    id: "progressive-overload-for-the-mind",
    title: "Progressive Overload for the Mind",
    date: "2026-08-27",
    tags: ["fitness", "life"],
    excerpt:
      "The gym taught me that growth requires a load just slightly heavier than what's comfortable. I'm not sure why I ever expected learning to work differently.",
    body: `The gym taught me that growth requires a load just slightly heavier than what's comfortable. I'm not sure why I ever expected learning to work differently.

If you lift the same weight forever, your body has no reason to change. If you read the same kind of problem forever, your thinking doesn't either. The discomfort is a symptom of growth.

The hard part isn't knowing this. It's resisting the urge to stay at a weight that still feels good to lift.`,
  },

];

export default musings;
