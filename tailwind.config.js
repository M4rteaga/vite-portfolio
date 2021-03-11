const colors = require("windicss/colors");
module.exports = {
  purge: [],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(4px)",
    },
    extend: {
      colors: {
        primary: {
          solid: "#1E00FF",
          opacity: "rgba(30, 0, 255, 0.24)",
        },
        secondary: {
          green: {
            solid: "#03CEA4",
            opacity: "rgba(3, 206, 164, 0.16)",
          },
          pink: {
            solid: "#FF1B6B",
            opacity: "rgba(255, 27, 107, 0.16)",
          },
        },
        base: {
          black: "#020305",
          white: "#FFFFFF",
          notThatWhite: "#FBFEF9",
        },
      },
      zIndex: {
        "-10": "-10",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      gradientColorStops: ["active", "group-hover"],
    },
    filter: ["responsive"],
    backdropFilter: ["responsive"],
  },
  plugins: [require("windicss/plugin/filters")],
};
