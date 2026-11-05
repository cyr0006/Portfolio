/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Chat/**/*.{js,ts,jsx,tsx}",
    "./src/pages/Chat.tsx",
    "./src/hooks/useChatbot.ts",
    "./src/hooks/useChatScroll.ts",
    "./src/components/BlurText/**/*.{js,ts,jsx,tsx}",
    "./src/components/TypeText/**/*.{js,ts,jsx,tsx}",
    "./src/components/Lanyard/**/*.{js,ts,jsx,tsx}",
    "./src/components/ScrollExpand/**/*.{js,ts,jsx,tsx}",
    "./src/components/Horizon/**/*.{js,ts,jsx,tsx}",
    "./src/components/DotGrid/**/*.{js,ts,jsx,tsx}",
    "./src/components/FlexCarousel/**/*.{js,ts,jsx,tsx}",
    "./src/components/CircularGallery/**/*.{js,ts,jsx,tsx}",
    "./src/components/CrystalisedBall/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // IMPORTANT: Disable Tailwind's base reset styles
  corePlugins: {
    preflight: true,
    // This project already has its own hand-written `.container` class
    // (src/index.css) with different semantics (percentage padding, no
    // max-width cap). Tailwind's built-in container utility collides with
    // it under the same selector and caps width at 1536px on wide screens.
    container: false,
  }
}