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
          medium: "rgba(30, 0, 255, 0.50)",
        },
        secondary: {
          green: {
            solid: "#03CEA4",
            opacity: "rgba(3, 206, 164, 0.16)",
            medium: "rgba(3, 206, 164, 0.50)",
          },
          pink: {
            solid: "#FF1B6B",
            opacity: "rgba(255, 27, 107, 0.16)",
            medium: "rgba(255, 27, 107, 0.50)",
          },
        },
        base: {
          black: "#020305",
          white: "#FFFFFF",
          notThatWhite: "#FBFEF9",
          grey: "#F8F8F8",
        },
      },
      zIndex: {
        "-10": "-10",
      },
      scale: {
        min: "-1",
      },
    },
  },
  variants: {
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      borderWidth: ["hover", "focus"],
      gradientColorStops: ["active", "group-hover"],
      backgroundImage: ["hover", "focus"],
    },
    filter: ["responsive"],
    backdropFilter: ["responsive"],
  },
  plugins: [require("windicss/plugin/filters")],
};
