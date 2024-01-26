/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./components/**/*.{js,vue,ts}",
      "./layouts/**/*.vue",
      "./pages/**/*.vue",
      "./plugins/**/*.{js,ts}",
      "./app.vue",
      "./error.vue",
    ],
    theme: {
      extend: {
        boxShadow: {
            'menu': 'box-shadow: rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px;',
        },
        colors: {
            primary: "#181818",
            secondary: "#353739"
        },
        borderRadius: {
            'slightly': '0.35rem'
        }
      },
    },
    plugins: [],
  }