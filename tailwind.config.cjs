/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/components/*",
    "./src/App.vue",
    "./src/view/*"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}
