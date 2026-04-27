/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#102A43",
        "deep-blue": "#1F67B3",
        "eco-green": "#0B6B2B",
        "fresh-green": "#57B947",
        "soft-blue": "#EAF4FF",
        "soft-green": "#EEF9F0",
        "warm-white": "#FAFBF8",
        "light-gray": "#F3F5F6",
        "dark-text": "#14213D",
      },
      fontFamily: {
        sans: [
          "Inter",
          "Manrope",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 4px 24px rgba(16, 42, 67, 0.08), 0 1px 3px rgba(16, 42, 67, 0.06)",
        "card-lg": "0 20px 50px -12px rgba(16, 42, 67, 0.12)",
        header: "0 1px 0 0 rgba(16, 42, 67, 0.06), 0 4px 20px rgba(16, 42, 67, 0.04)",
      },
    },
  },
  plugins: [],
};
