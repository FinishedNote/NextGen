/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#0088FF",
        secondary: "#00c3ff",
        tint: "#1e1e1e",
        tintLight: "#cccccc",
        background: "#f4f4f4",
        white: "#ffffff",
        border: "#f2f2f2",
        error: "#fb3c3c",
        success: "#3cfb7e",
        warning: "#fb953c",
      },
      fontFamily: {},
      fontSize: {
        heading1: ["28px", { lineHeight: "38px", fontWeight: "800" }],
        heading2: ["24px", { lineHeight: "34px", fontWeight: "700" }],
        heading3: ["20px", { lineHeight: "30px", fontWeight: "600" }],
        text1: ["16px", { lineHeight: "26px", fontWeight: "500" }],
        text2: ["14px", { lineHeight: "24px", fontWeight: "500" }],
        text3: ["12px", { lineHeight: "20px", fontWeight: "500" }],
        caption: ["10px", { lineHeight: "18px", fontWeight: "400" }],
      },
    },
  },
  plugins: [],
};
