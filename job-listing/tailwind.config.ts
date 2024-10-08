import { Epilogue, Poppins } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily:{
        Epilogue : ['Epilogue', 'sans-serif'],
        Poppins : ['Poppins', 'sans-serif']
      },
      fontWeight :{
        Poppins400 : "#202430",
        Poppins500: "#25324B",
        Epilogue300: "#202430",
        Epilogue400: "#A8ADB7",
        Epilogue500: "#7C8493",
        Epilogue600: "#D6DDEB",
        Epilogue700: "#515B6F"
      }
    },
  },
  plugins: [],
};
export default config;
