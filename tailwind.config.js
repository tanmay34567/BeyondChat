/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#edf0ff',
          200: '#dfe3ff',
          300: '#c8ceff',
          400: '#a5adff',
          500: '#818cff',
          600: '#5f66f5',
          700: '#4b4fdc',
          800: '#3d40b3',
          900: '#383d8e',
          950: '#1e2055',
        },
        intercom: {
          dark: '#1F1F1F',
          darker: '#0e0e0e',
          light: '#f8fafc',
          blue: '#286efa',
          hover: '#f5f5f5',
          border: '#e5e7eb',
          text: '#1d1d1d',
          sidebar: '#f7f7f7',
          muted: '#6b7280',
        }
      },
      boxShadow: {
        'intercom': '0 1px 2px 0 rgba(0, 0, 0, 0.05), 0 1px 5px 0 rgba(0, 0, 0, 0.1)',
      }
    },
  },
  plugins: [],
};