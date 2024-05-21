/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{jsx, js}"],
  theme: {
    extend: {
      colors: {
        White: "hsl(0, 0%, 100%)",
        SoftRed: "hsl(358, 79%, 66%)",
        DarkBlue: "hsl(212, 24%, 26%)",
        PaleRed: "hsl(357, 100%, 86%)",
        LightGray: "hsl(223, 19%, 93%)",
        GrayishBlue: "hsl(211, 10%, 45%)",
        ModerateBlue: "hsl(238, 40%, 52%)",
        VeryLightGray: "hsl(228, 33%, 97%)",
        LightGrayishBlue: "hsl(239, 57%, 85%)",
      },
    },
  },
  plugins: [],
};
