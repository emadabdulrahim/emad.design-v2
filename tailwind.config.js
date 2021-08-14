module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      sans: [
        "ar-gr",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      1: ["0.75rem", { lineHeight: "1.5" }],
      2: ["0.875rem", { lineHeight: "1.5" }],
      3: ["1rem", { lineHeight: "1.5" }],
      4: ["1.25rem", { lineHeight: "1.25" }],
      5: ["1.5rem", { lineHeight: "1.25" }],
      6: ["1.875rem", { lineHeight: "1.2" }],
      7: ["2.25rem", { lineHeight: "1.1" }],
      8: ["3rem", { lineHeight: "1" }],
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
