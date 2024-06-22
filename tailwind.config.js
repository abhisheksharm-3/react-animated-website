/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {fontFamily: {
      'founders' : ['Founders Grotesk', 'sans-serif'],
      'montreal' : ['Neue Montreal', 'sans-serif'],
  }},
  },
  plugins: [],
}

