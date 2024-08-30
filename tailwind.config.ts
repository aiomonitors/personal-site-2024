import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        spaceGrotesk: "var(--font-spaceGrotesk)",
        jetBrainsMono: "var(--font-jetbrainsMono)",
      },
      colors: {
        background: "hsla(var(--background-color))",
        header: "hsla(var(--header-color))",
        primary: "hsla(var(--primary))",
        secondary: "hsla(var(--secondary))",
        imageBorder: "hsla(var(--image-border))",
        yellow: "hsla(var(--yellow))",
        green: "hsla(var(--green))",
        red: "hsla(var(--red))",
      },
      boxShadow: {
        yellow: "0 0 2px 1px hsla(var(--yellow), 0.1)",
        green: "0 0 2px 1px hsla(var(--green), 0.1)",
        red: "0 0 2px 1px hsla(var(--red), 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
