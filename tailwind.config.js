export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // braz: "#340A0D",
        primary: "#482029",
        primaryLight: "#6b3a44",
        primaryDark: "#2f151b",

        accent: "#e7dcd8", // delikatne tło
        textMain: "#2d2d2d",
        textSoft: "#6b6b6b",
        beige: "#F5F0E6",
        brown: "#6B4F3A",
        sand: "#E8D8C3",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
