/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        theme: {
          background: '#E0F2FE', // Light blue pastel background
          navbar: '#6366F1', // Indigo
          card: {
            pink: '#FCA5A5',   // Bright pink
            blue: '#93C5FD',   // Bright blue
            yellow: '#FCD34D', // Bright yellow
            green: '#86EFAC',  // Bright green
            purple: '#C4B5FD', // Bright purple
            orange: '#FDBA74', // Bright orange
          }
        }
      },
    },
  },
  plugins: [],
};