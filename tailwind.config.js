/** @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors');
import colors from 'tailwindcss/colors';
const extendColors = {
  red: {
    50: "#FEF2F2",
    100: "#FDDEDE",
    200: "#FCC5C5",
    300: "#F99F9F",
    400: "#F77878",
    500: "#F55858",
    600: "#E83030",
    700: "#CF1717",
    800: "#A80A0A",
    900: "#780707",
  },
  orange: {
    50: "#FEEFE7",
    100: "#FCDFCF",
    200: "#FBCFB6",
    300: "#F9AF86",
    400: "#F79964",
    500: "#F4762F",
    600: "#F25F0D",
    700: "#DA560B",
    800: "#AA4309",
    900: "#793006",
  },
  brown: {
    50: "#F8F4EC",
    100: "#F1E8DA",
    200: "#E3D1B5",
    300: "#D7BC93",
    400: "#CCAA75",
    500: "#C19857",
    600: "#AB813F",
    700: "#8A6833",
    800: "#705429",
    900: "#4A381C",
  },
  yellow: {
    50: "#FFFBF0",
    100: "#FFF1CC",
    200: "#FFE299",
    300: "#FFD466",
    400: "#FFC633",
    500: "#FFB800",
    600: "#DB9E00",
    700: "#BD8800",
    800: "#A37600",
    900: "#855F00",
  },
  green: {
    50: "#F3FCF3",
    100: "#D6F5D7",
    200: "#ADEBAF",
    300: "#70DB73",
    400: "#4DCB4E",
    500: "#2EB832",
    600: "#29A32C",
    700: "#248F27",
    800: "#1F7A21",
    900: "#145216",
  },
  mintgreen: {
    50: "#F4FBF8",
    100: "#D2EFE4",
    200: "#AFE4CF",
    300: "#74D8B1",
    400: "#38C78F",
    500: "#1DB177",
    600: "#189966",
    700: "#147C53",
    800: "#106543",
    900: "#0A402A",
  },
  blue: {
    50: "#F0F7FF",
    100: "#DAEAFE",
    200: "#B9D7FD",
    300: "#92C0FC",
    400: "#6AA9FB",
    500: "#4292FA",
    600: "#207EF9",
    700: "#066BEF",
    800: "#0555BD",
    900: "#043E8B",
  },
  indigo: {
    50: "#F0F2FB",
    100: "#D8DDF3",
    200: "#B0BAE8",
    300: "#8998DC",
    400: "#6579D2",
    500: "#4D65CB",
    600: "#3750BE",
    700: "#2E449E",
    800: "#233276",
    900: "#17214F",
  },
  purple: {
    50: "#F5F0FB",
    100: "#E5D8F3",
    200: "#CCB0E8",
    300: "#B389DC",
    400: "#9E69D3",
    500: "#8F51CC",
    600: "#8039C6",
    700: "#662E9E",
    800: "#4D2376",
    900: "#33174F",
  },
  bluegray: {
    50: "#F8FAFD",
    100: "#ECF0F7",
    200: "#CED5E0",
    300: "#A9B5C6",
    400: "#8491A4",
    500: "#6A7685",
    600: "#535C68",
    700: "#3D444D",
    800: "#262B30",
    900: "#101214",
  },
  gray: {
    50: "#F4F4F5",
    100: "#E7E7E9",
    200: "#DADADC",
    300: "#CACACD",
    400: "#A6A6AB",
    500: "#898990",
    600: "#707075",
    700: "#555558",
    800: "#323234",
    900: "#0C0C0D",
  }
}

export default {
  content: ["./src/**/*.{js,ts,html,css,scss}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["SpoqaHanSansNeo"]
      },
      colors: {
        ...extendColors,
        // brand-primary
        primary: {
          "bg": extendColors.mintgreen["50"],
          "background": extendColors.mintgreen["50"],
          "light-1": extendColors.mintgreen["100"],
          "light-2": extendColors.mintgreen["200"],
          "main": extendColors.mintgreen["500"],
          "dark-1": extendColors.mintgreen["600"],
          "dark-2": extendColors.mintgreen["700"],
        },
        secondary: {
          "bg": extendColors.bluegray["50"],
          "background": extendColors.bluegray["50"],
          "light-1": extendColors.bluegray["100"],
          "light-2": extendColors.bluegray["200"],
          "light-3": extendColors.bluegray["300"],
          "main": extendColors.bluegray["600"],
          "dark": extendColors.bluegray["700"],
        },
        text: {
          "primary": extendColors.gray["900"],
          "secondary": extendColors.gray["700"],
          "tertiary": extendColors.gray["500"],
          "caption": extendColors.gray["400"],
          "hint": extendColors.gray["300"],
          "white": colors.white,
          "link": extendColors.blue["500"],
        },
        // bg 와 동일
        background: {
          "light-1": colors.white,
          "light-2": extendColors.gray["50"],
          "light-3": extendColors.gray["100"],
          "dark-1": extendColors.gray["600"],
          "dark-2": extendColors.gray["800"],
        },
        // background 와 동일
        bg: {
          "light-1": colors.white,
          "light-2": extendColors.gray["50"],
          "light-3": extendColors.gray["100"],
          "dark-1": extendColors.gray["600"],
          "dark-2": extendColors.gray["800"],
        },
        divider: {
          "border-1": extendColors.gray["50"],
          "border-2": extendColors.gray["100"],
          "border-3": extendColors.gray["200"],
          "border-4": extendColors.gray["300"],
          "b-1": extendColors.gray["50"],
          "b-2": extendColors.gray["100"],
          "b-3": extendColors.gray["200"],
          "b-4": extendColors.gray["300"],
        },
        icon: {
          "primary": extendColors.gray["900"],
          "secondary": extendColors.gray["700"],
          "tertiary": extendColors.gray["300"],
          "caption": extendColors.gray["200"],
        },
        other: {
          naver: "#1CCB69",
          kakao: "#FFE200",
          facebook: extendColors.blue["600"]
        },
        state: {
          error: extendColors.red["500"],
          success: extendColors.green["500"],
          info: extendColors.blue["500"],
          information: extendColors.blue["500"],
          warning: extendColors.orange["600"],
        },
        "state-container": {
          error: extendColors.red["50"],
          success: extendColors.green["50"],
          info: extendColors.blue["50"],
          information: extendColors.blue["50"],
          warning: extendColors.orange["50"],
        },
        transparent: {
          "black-30": "rgba(0, 0, 0, 0.3)",
          "black-50": "rgba(0, 0, 0, 0.5)",
          "black-70": "rgba(0, 0, 0, 0.7)",
          "bluegray-90": "rgba(38, 43, 48, 0.9)", // secondary-800
          "bluegray-95": "rgba(38, 43, 48, 0.95)", // secondary-800
          "white-30": "rgba(255, 255, 255, 0.3)",
          "white-50": "rgba(255, 255, 255, 0.5)",
          "white-70": "rgba(255, 255, 255, 0.7)",
        }
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(red|orange|brown|yellow|green|mintgreen|blue|indigo|purple|bluegray|gray)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /(primary)-(bg|background|light-1|light-2|main|dark-1|dark-2)/,
    },
    {
      pattern:
        /(secondary)-(bg|background|light-1|light-2|light-3|main|dark)/,
    },
    {
      pattern:
        /(text)-(primary|secondary|tertiary|caption|hint|white|link)/,
    },
    {
      pattern:
        /(background|bg)-(light-1|light-2|light-3|dark-1|dark-2)/,
    },
    {
      pattern:
        /(divider)-(border|b)-(1|2|3|4)/,
    },
    {
      pattern:
        /(icon)-(primary|secondary|tertiary|caption)/,
    },
    {
      pattern:
        /(other)-(naver|kakao|facebook)/,
    },
    {
      pattern:
        /(state|state-container)-(error|success|info|information|warning)/,
    },
    {
      pattern:
        /(transparent)-(black-30|black-50|black-70|bluegray-90|bluegray-95|white-30|white-50|white-70)/,
    },
  ],
}

