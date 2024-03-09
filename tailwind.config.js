/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: "540px",
      md: "768px",
      mdl: "976px",
      lg: "1024px",
      mxl: "1162px",
      xl: "1440px",
      "2xl": "1570px",
    },
  },
  plugins: [],
};
