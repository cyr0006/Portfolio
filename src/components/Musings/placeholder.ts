import type { Topic } from "./musingsData";

// Generates a small gradient + emoji tile as a data URI so grid cards have
// imagery to show even though musings aren't photographed.
export const makePlaceholder = (topic: Topic): string => {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <defs>
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${topic.color}" stop-opacity="0.85" />
          <stop offset="100%" stop-color="#160049" stop-opacity="0.95" />
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#g)" />
      <text x="50%" y="54%" font-size="96" text-anchor="middle" dominant-baseline="middle">${topic.emoji}</text>
    </svg>`.trim();
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
};

export default makePlaceholder;
