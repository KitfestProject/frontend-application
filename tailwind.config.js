/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        // xl: "5rem",
        "2xl": "6rem",
      },
      center: true,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "#732E1C",
        primaryLight: "#813c2a",
        primaryTransparent: "#732d1c61",
        secondary: "#B40000",
        dark: "#090808",
        gray: "#808080",
        themeGreen: "#00913C",
        themeGray: "#6A6A6A",
        lightGray: "#F2F4FF",
        light: "#fad8cf",
        // Dark Theme Colors
        darkGray: "#1F1F1F",
        darkBlue: "#1A202C",
        darkBlueHover: "#2D3748",
        darkGreen: "#2F855A",
        darkRed: "#9B2C2C",
        darkYellow: "#D97706",
        darkPurple: "#6B46C1",
      },
    },
  },
  plugins: [],
};
