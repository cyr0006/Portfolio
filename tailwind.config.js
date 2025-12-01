/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/Chat/**/*.{js,ts,jsx,tsx}",
    "./src/pages/Chat.tsx",
    "./src/hooks/useChatbot.ts",
    "./src/hooks/useChatScroll.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  // IMPORTANT: Disable Tailwind's base reset styles
  corePlugins: {
    preflight: true,
  }
}