/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".text-outline": {
          "text-shadow":
            "-2px -2px 0 rgb(250, 250, 249), 2px -2px 0 rgb(250, 250, 249), -2px 2px 0 rgb(250, 250, 249), 2px 2px 0 rgb(250, 250, 249)",
        },
      });
    }),
  ],
};
