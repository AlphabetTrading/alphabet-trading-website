const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "2k": "2048px",
      "4k": "3840px",
      "8k": "7680px",
    },
    extend: {
      fontFamily: {
        Raleway: [
          "var(--font-raleway)",
          "sans-serif",
          ...defaultTheme.fontFamily.sans,
        ],
        DM_Serif: ["var(--font-dm-serif)", "DM Serif Display", "sans-serif"],
      },
      colors: {
        primary: "#0A1026",
        secondary: "#086965",
        text_primary: "#5956E9",
        navy: "#0a1026",
        bg_green: "#086965",
      },
      aspectRatio: {
        "4/3": "4/3",
        "3/2": "3/2",
        "4/5": "4/5",
      },
      animation: {
        slide_left: "slide_left 0.1s forwards",
        slide_right: "slide_right 0.1s backwards",
        animate_circle_in: "animate_circle_in 0.5s forwards",
        animate_circle_out: "animate_circle_out 1s backwards",
        rotateY_full_forward: "rotateY_full_forward 0.5s forwards",
        rotateY_full_reverse: "rotateY_full_reverse 0.5s backwards",
      },
      keyframes: {
        slide_left: {
          "0%": { transform: "translateX(-100%)" },
          "50%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        slide_right: {
          "0%": { transform: "translateX(100%)" },
          "50%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        animate_circle_in: {
          "0%": {
            borderRadius: "50%",
            inset: "100%",
          },

          "100%": {
            inset: "0%",
          },
        },
        animate_circle_out: {
          "0%": {
            // borderRadius: "50%",
            inset: "0%",
          },
          "100%": {
            inset: "100%",
          },
        },
        rotateY_full_forward: {
          from: {
            transform: "rotateY(0deg)",
          },
          to: {
            transform: "rotateY(180deg)",
          },
        },
        rotateY_full_reverse: {
          from: {
            transform: "rotateY(180deg)",
          },
          to: {
            transform: "rotateY(0deg)",
          },
        },
      },
      boxShadow: {
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "t-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "t-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "b-xl":
          "0 20px -25px 5px rgba(0, 0, 0, 0.1), 0 -10px -10px 5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "-5px -5px 50px -5px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [],
};
