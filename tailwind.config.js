/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "white-glow": "0 0 52px 27px rgba(255, 255, 255, 0.6)",
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        "favorite-gradient":
          "linear-gradient(99deg, #FFF 3.36%, rgba(255, 255, 255, 0.00) 238.16%)",
      },
      keyframes: {
        expand: {
          "0%": { width: "0%" },
          "100%": { width: "50%" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        expand: "expand 1.5s ease-in-out forwards",
        fadeIn: "fadeIn 1.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
