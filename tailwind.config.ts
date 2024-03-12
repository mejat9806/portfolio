import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightpurple: "#cdb4db",
        lightPink: "#ffc8dd",
        darkpink: "#ffafcc",
        darkerpink: "#cc8ba2",
        lightBlue: "#bde0fe",
        slightDarkBlue: "#a2d2ff",
        darkBlue: "#789dbf",
      },
    },
  },
  plugins: [],
};
export default config;
