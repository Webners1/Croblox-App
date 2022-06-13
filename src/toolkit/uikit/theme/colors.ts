import { Colors } from "./types";

export const baseColors = {
  // primary: "#EA1E62",
  primary: "#AC41CC",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#03A9F4",
  success: "#8BC44A",
  warning: "#FFB237",
  failure: "#EA1E62",
  white: "#F6F6F6",
  pink: "#EA1E62",
  buttongreen: "#F0B90B",
  buttonblue: "#AC41CC"
};

export const additionalColors = {
  binance: "#F0B90B",
  overlay: "rgba(12, 15, 19, 0.8)"
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  background: "#333131",
  backgroundDisabled: "#1C1C1C",
  backgroundAlt: "#1C1C1C",
  cardBorder: "#1C1C1C",
  contrast: "#191326",
  dropdown: "#757575",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#1C1C1C",
  input: "#333131",
  inputSecondary: "#d7caec",
  tertiary: "#1F1F1F",
  text: "#FFFFFF",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #2B1C45 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  secondary: "#9682CF",
  background: "#08060B",
  backgroundDisabled: "#3c3742",
  backgroundAlt: "#27262c",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#191326",
  input: "#372F47",
  inputSecondary: "#262130",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#F4EEFF",
  textDisabled: "#666171",
  textSubtle: "#B8ADD2",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #3D2A54 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #3B4155 0%, #3A3045 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #eade47 0%, #eade47 100%)",
  },
};
