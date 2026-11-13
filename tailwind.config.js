/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dsvv: {
          blue: {
            50: '#f0f5fa',
            100: '#e1ebf5',
            200: '#bdd5eb',
            300: '#87b6dd',
            400: '#4c92cb',
            500: '#2373b3',
            600: '#175994',
            700: '#154877',
            800: '#133a60',
            900: '#0c2340', // Deep DSVV Navy Blue
            950: '#071526',
          },
          gold: {
            50: '#fffbeb',
            100: '#fef3c7',
            200: '#fde68a',
            300: '#fcd34d',
            400: '#fbbf24',
            500: '#f59e0b', // Warm sacred yellow / amber
            600: '#d97706',
            700: '#b45309',
            800: '#92400e',
            900: '#78350f',
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
