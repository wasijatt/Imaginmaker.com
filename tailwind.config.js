/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Satoshi', 'sans-serif'],  // Satoshi for paragraphs
      heading: ['Clash Grotesk', 'sans-serif'],  // Clash Grotesk for headings
    },
    screens: {
     'sm': '640px',   // Small screens: min-width of 640px
      'md': '768px',   // Medium screens: min-width of 768px
      'lg': '1024px',  // Large screens: min-width of 1024px
      'xl': '1280px',  // Extra large screens: min-width of 1280px
      '2xl': '1536px'
    },
  },
  plugins: [],
};
