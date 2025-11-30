/** @type {import('tailwindcss').Config} */
export default {
  // Only scan these files for Tailwind classes
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
    preflight: false, // ← This prevents Tailwind from resetting your CSS
  }
}