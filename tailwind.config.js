/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
