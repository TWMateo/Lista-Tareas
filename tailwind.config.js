/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "pastel-green": {
          50: "hsl(138, 76%, 97%)",
          100: "hsl(141, 89%, 93%)",
          200: "hsl(141, 82%, 85%)",
          300: "hsl(141, 80%, 73%)",
          400: "hsl(141, 71%, 62%)",
          500: "hsl(142, 73%, 45%)",
          600: "hsl(142, 78%, 36%)",
          700: "hsl(142, 74%, 29%)",
          800: "hsl(142, 66%, 24%)",
          900: "hsl(143, 63%, 20%)",
          950: "hsl(145, 84%, 10%)",
        },
      },
    },
  },
  plugins: [],
};
