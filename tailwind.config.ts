import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        main: {
          1: "#F1E3B5",
          2: "#0B0436",
        },
      },
      backgroundImage: {
        bgteam1:
          "url('https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Partner/Core%20Team_Victor.png')",
        bgteam2:
          "url('https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Partner/Core%20Team_View.png')",
        bgteam3:
          "url('https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Partner/Core%20Team_Grace.png')",
        bgExplore:
          "url('https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_3dHover/Website%20BG.png')",
        bgWave:
          "url('https://storage.googleapis.com/evermoon_website_bucket/HOME_IMG/component_HomePage_Roadmap/road-repeat.webp')",
      },
      screens: {
        xsm: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1440px",
        // => @media (min-width: 1536px) { ... }
        "3xl": "1921px",
        // => @media (min-width: 1536px) { ... }
        "2xlm": { max: "1439px" },
        // => @media (max-width: 1535px) { ... }

        xlm: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        lgm: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        mdm: { max: "767px" },
        // => @media (max-width: 767px) { ... }

        smm: { max: "639px" },
        // => @media (max-width: 639px) { ... }
        xsmm: { max: "374px" },
        pr: { max: "816px" },
      },
    },
  },
  plugins: [],
} satisfies Config;
