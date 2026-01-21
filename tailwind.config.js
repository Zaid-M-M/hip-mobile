/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    {
      pattern:
        /^(bw|barlow|inter)-(r|b|m|l|xl|t|sb|xb|bk|ti|xli|li|ri|mi|sbi|bi|xbi|bki)$/,
      variants: ["hover", "focus"],
    },
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};








// /** @type {import('tailwindcss').Config} */
// // module.exports = {
// //   content: [
// //     './pages/**/*.{js,ts,jsx,tsx}',
// //     './components/**/*.{js,ts,jsx,tsx}',
// //     './layouts/**/*.{js,ts,jsx,tsx}',
// //     './sections/**/*.{js,ts,jsx,tsx}',
// //   ],
// //   theme: {
// //     extend: {
// //       screens: {
// //         'xs': '480px',
// //         'sm': '640px',
// //         'md': '768px',
// //         'lg': '1024px',
// //         'xl': '1280px',
// //         '2xl': '1536px',
// //       },
// //     },
// //   },
// //   plugins: [],
// // };

// export const content = [
//   "./pages/**/*.{js,ts,jsx,tsx}",
//   "./components/**/*.{js,ts,jsx,tsx}",
//   "./layouts/**/*.{js,ts,jsx,tsx}",
//   "./sections/**/*.{js,ts,jsx,tsx}",
// ];
// export const safelist = [
//   {
//     pattern:
//       /^(bw|barlow|inter)-(r|b|m|l|xl|t|sb|xb|bk|ti|xli|li|ri|mi|sbi|bi|xbi|bki)$/,
//     variants: ["hover", "focus"],
//   },
// ];
// export const theme = {
//   extend: {
//     screens: {
//       xs: "480px",
//       sm: "640px",
//       md: "768px",
//       lg: "1024px",
//       xl: "1280px",
//     },
//   },
// };
// export const plugins = [];
