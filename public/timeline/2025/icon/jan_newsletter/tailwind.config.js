/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    content: ["./*.html"],
    screens: {
      // ✅ Minimum width breakpoints
      "min-600": { min: "600px" },
      "min-1024": { min: "1024px" },
      "min-1280": { min: "1280px" },
      "min-1366": { min: "1366px" },
      "min-1440": { min: "1440px" },
      "min-1536": { min: "1536px" },
      "min-1600": { min: "1600px" },
      "min-1920": { min: "1920px" },

      // ✅ Maximum width breakpoints
      "max-599": { max: "599px" },
      "max-1023": { max: "1023px" },
      "max-1279": { max: "1279px" },
      "max-1365": { max: "1365px" },
      "max-1439": { max: "1439px" },
      "max-1535": { max: "1535px" },
      "max-1599": { max: "1599px" },
      "max-1919": { max: "1919px" },
    },
  },
  plugins: [],
};
