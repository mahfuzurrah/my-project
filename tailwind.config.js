/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        primary: '#f3c55a',
        secondary: '#62a6e1',
        success: '#0c9662',
        warning: '#d87d05',
        error: '#fc2548',
        white: '#ffffff',
        border: '#9fb3c1',
        title: '#0c0e11',
        description: '#616D86',
        typography100: '#e4e7ec',
      },
      fontFamily: {
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        h1: '32px',
        h2: '24px',
        h3: '20px',
        h4: '18px',
        normal: '16px',
        small: '14px',
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        'extra-bold': 800,
      },
      boxShadow: {
        'xs': '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
        'sm': '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.1)',
        'md': '0px 2px 4px -2px rgba(16, 24, 40, 0.06), 0px 4px 8px -2px rgba(16, 24, 40, 0.1)',
        'lg': '0px 4px 6px -2px rgba(16, 24, 40, 0.03), 0px 12px 16px -4px rgba(16, 24, 40, 0.08)',
        'xl': '0px 8px 8px -4px rgba(16, 24, 40, 0.03), 0px 20px 24px -4px rgba(16, 24, 40, 0.08)',
        '2xl': '0px 24px 48px -12px rgba(16, 24, 40, 0.18)',
        '3xl': '0px 32px 64px -12px rgba(16, 24, 40, 0.14)',
      },
    },
  },
  variants: {},
  plugins: [],
};