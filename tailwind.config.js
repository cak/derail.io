module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      mono: ["Fira Code", "ui-monospace"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: {
        DEFAULT: "#eaded0",
      },
      background: {
        DEFAULT: "#0b121c",
      },
      black: {
        DEFAULT: "#000",
      },
      blue: {
        DEFAULT: "#69c",
      },
      gray: {
        DEFAULT: "#ccccff",
      },
    },
  },
  variants: {
    extend: {},
  },
  // eslint-disable-next-line global-require
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#1c150b",
          secondary: "#0b1b1c",
          accent: "#dc8530",
        },
      },
    ],
  },
};
