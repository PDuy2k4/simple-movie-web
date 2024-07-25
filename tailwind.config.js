/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "favorite-gradient":
          "linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)",
      },
    },
  },
  plugins: [],
};
