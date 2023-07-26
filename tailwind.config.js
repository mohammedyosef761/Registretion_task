/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF8C1E",
      },
      borderRadius: {
        buttonBorder: "8px", // Add your custom size here
      },
    },
  },
  plugins: [],
};
