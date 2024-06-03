import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      primary: "#FFDEDE" /*"#fbdadd"*/,
      secondary: "#C5ECBE",
      accent: "#F7F3CE",
      text: "#4797B1",
      danger: "#e74c3c",

      neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        default: {
          primary: "#FFDEDE",
        },
      },
    ],
  },
};
export default config;
