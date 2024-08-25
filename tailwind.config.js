/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

const myClass = plugin(function ({ addUtilities }) {
  addUtilities({
    ".my-rotate-y-180": {
      transform: "rotateY(180deg)"
    },
    ".preserve-3d": { // Fixed class name and spelling
      transformStyle: "preserve-3d" // Fixed property name and spelling
    },
    ".perspective": {
      perspective: '1000px'
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden"
    }
  }, ['responsive', 'hover']); // Optional: Add variants if needed
});

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html"

  ],
  theme: {
    extend: {
      colors: {
        'semi-transparent-black': 'rgba(0, 0, 0, 0.5)',
        'customPurple': '#8D65EA',
        'customGray': '#777'
      },
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(1px)'
      },
      fontFamily: {
        times: 'Times New Roman'
      },
      rotate: {
        'y-180': 'rotateY(180deg)'
      },
      boxShadow: {
        customShadow: 'rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px'
      },
      perspective: {
        'none': 'none',
        '100': '100px',
        '150': '150rem',
        '200': '200px',
      }

    },
  },
  plugins: [myClass],
};
