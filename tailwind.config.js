module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        posBlue: "#1B2C5B",
        posDarkBlue: "#0B2142",
        posOrange: "#F46752",
        gradientCus: "#954D56",
        "gradient-purple": "#5B2D8C",
        "gradient-blue": "#2D6BC4",
        "success-green": "#16A34A",
        "process-orange": "#F59E0B",
      },

      keyframes: {
        slideFadeLoop: {
          "0%": { transform: "translateX(30px)" },
          "50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(30px)" },
        },

        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },

      animation: {
        slideFadeLoop: "slideFadeLoop 3s ease-in-out infinite",
        spinSlow: "spinSlow 25s linear infinite",
      },
    },
  },
  plugins: [],
};
