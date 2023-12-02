import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      backgroundImage: {
        "past-work-gradient": "linear-gradient(180deg, #111132, #0c0c1d)",
        "portfolio-gradient": "linear-gradient(180deg, #111132, #505064)",
        "hero-gradient": "linear-gradient(180deg, #0c0c1d, #111132)",
        "mountains-image": "url('/assets/mountains.png')",
        "planets-image": "url('/assets/planets.png')",
        "sun-image": "url('/assets/sun.png')",
        "stars-image": "url('/assets/stars.png')",
      },
      colors: {
        "purple-shade": "rebeccapurple",
        "hero-bottom": "#ffffff09",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
} satisfies Config;
