import type { Config } from "tailwindcss";

const sizes = {
  26: "26px",
};

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/design-systems/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "769px",
      xmd: "980px",
      lg: "1025px",
      xl: "1280px",
      xlg: "1366px",
      "2xl": "1536px",
    },

    fontFamily: {
      Inter: ["Inter"],
    },
    fontSize: {
      h1: "64px",
      h2: "48px",
      h3: "38px",
      h4: "28px",
      subtitle: "24px",
      paragraph: "20px",
      lg: "18px",
      body: "16px",
      md: "14px",
      sm: "12px",
      small: "10px",
    },
    lineHeight: {
      h1: "90%",
      h2: "90%",
      h3: "90%",
      h4: "90%",
      h5: "80%",
      subtitle: "120%",
      paragraph: "100%",
      body: "140%",
      caption: "120%",
      small: "120%",
      sm: "150%",
      md: "150%",
      lg: "150%",
      xlg: "160%",
    },
    letterSpacing: {
      h1: "-0.8px",
      h2: "-0.5px",
      h3: "-0.5px",
      h4: "-0.5px",
      subtitle: "-0.2px",
      paragraph: "-0.2px",
      body: "-0.2px",
      caption: "0px",
      small: "0px",
      sm: "0px",
      md: "0px",
      lg: "0px",
      logo1: "0px",
      logo: "3px",
    },
    extend: {
      colors: {
        transparent: "transparent",
        blue: "rgb(49, 110, 255)",
        lightBlack: "rgb(0, 34, 55)",
        grayNav: "rgba(36, 35, 38)",
        white: "#FFF",
        gray2: "rgba(49, 110, 255, 0.2)",
        blue225: "rgb(49, 110, 255)",
        lightGray: "rgba(0, 0, 0, 0.54)",
        yellow: "#ECAD09",
        purple236: "rgb(121, 77, 236)",
        darkBlue: "rgb(0, 34, 55)",
        black6: "rgba(0, 0, 0, 0.6)",
        primary: "#6370e5",
        orange4c: "#ffc74c",
        yellow00: "#ffefcc",
        blue135:"rgb(102, 122, 135)",
        gray04:"rgba(0, 34, 55, 0.04)",
        black54:"rgba(0, 0, 0, 0.54)",
        blue245:"rgb(245, 245, 245)",
        skyBlue:"rgb(226, 232, 247)",
        gray221:"rgb(193, 207, 221)",
        neutral: {
          100: "#141414",
          200: "#292929",
          300: "#3B3B3B",
          400: "#595959",
          500: "#B4B4B4",
          600: "#E2E2E1",
          700: "#F6F6F6",
          800: "#FFFFFF",
        },
        brand: {
          800: "#EAFB06",
          500: "#F8FF99",
        },
        secondary: {
          800: "#0809EC",
          500: "#8A8BFF",
        },
        warning: {
          600: "#664600",
          800: "#EBA013",
          500: "#FFCF76",
        },
        error: {
          800: "#F35858",
          500: "#FF9292",
        },
      },
      width: sizes,
      height: sizes,
      minWidth: sizes,
      minHeight: sizes,
      maxWidth: sizes,
      maxHeight: sizes,
      spacing: {
        xs: "4px",
        sm: "6px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "64": "64px",
        "110": "110px",
        "133": "133px",
      },
      borderRadius: {
        xs: "8px",
        sm: "16px",
        md: "24px",
        lg: "32px",
        xl: "40px",
        "2xl": "48px",
        "20": "20px",
      },

      boxShadow: (theme: any) => ({
        "button-active": `rgba(49, 110, 255, 0.5) 0px 0px 0px 4px`,
        "card-shadow":"rgba(0, 0, 0, 0.1) 0px 0px 4px",
        "border-shadow":"rgba(0, 0, 0, 0.1) 0px 4px 4px 0px",
      }),
      backgroundImage: () => ({
        "gradient-radial-main":
          "linear-gradient(90deg, #E91224 0%, #F86E30 24.5%, #FEB92F 50.5%, #0BB875 70%, #1A78D7 81.5%, #5A46A1 100%);",
          "theme-gradient": "linear-gradient(90deg, rgb(255, 0, 0) 0%, rgb(235, 255, 0) 32.81%, rgb(0, 240, 255) 70.31%, rgb(250, 0, 255) 100%);"
      }),
    },
    backgroundColor: {
      transparent: "transparent",
      light: "#f6f6f6",
      lightBlack: "rgb(0, 34, 55)",
      lightBlue: "rgb(49, 110, 255)",
      dark: "#f6f6f6",
      grayNav: "rgb(36, 35, 38)",
      white: "#FFF",
      gray2: "rgba(49, 110, 255, 0.2)",
      blue225: "rgb(49, 110, 255)",
      lightBlueSecondary: "rgba(49, 110, 255,0.5)",
      yellow: "#ECAD09",
      purple236: "rgb(121, 77, 236)",
      darkBlue: "rgb(0, 34, 55)",
      black6: "rgba(0, 0, 0, 0.6)",
      primary: "#6370e5",
      black: "#000",
      gray211: "rgb(206 204 211)",
      orange4c: "#ffc74c",
      yellow00: "#ffefcc",
      blue135:"rgb(102, 122, 135)",
      gray04:"rgba(0, 34, 55, 0.04)",
      black54:"rgba(0, 0, 0, 0.54)",
      blue245:"rgb(245, 245, 245)",
      skyBlue:"rgb(226, 232, 247)",
      gray221:"rgb(193, 207, 221)",
      warning: {
        600: "#664600",
        800: "#EBA013",
        500: "#FFCF76",
      },
    },
  },
  plugins: [],
};
export default config;
