/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        "55vh": "55vh",
        18: "72px",
      },
      width: {
        18: "72px",
        26: "104px",
        736: "736px",
      },
      colors: {
        "google-btn": "#eb4335",
        "input-focus": "#7c3aed",
      },
    },
  },
  plugins: [],
};
