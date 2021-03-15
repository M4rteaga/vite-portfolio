const colors = require("windicss/colors");

module.exports = {
  purge: [],
  theme: {
    backdropFilter: {
      none: "none",
      blur: "blur(4px)",
      "blur-20": "blur(20px)",
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
        glass: {
          whiteBl: "rgba(255, 255, 255, 0.1)",
          whiteTr: "rgba(255, 255, 255, 0.5)",
        },
      },
      zIndex: {
        "-10": "-10",
      },
      scale: {
        min: "-1",
      },
      boxShadow: {
        "white-lg":
          "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
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
