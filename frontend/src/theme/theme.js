import { createTheme } from "@mui/material";

const baseColors = {
  black: "#000000",
  dark1: "#222831",
  dark2: "#393E46",
  dark3: "#1e242b",
  accent1: "#948979",
  accent2: "#DFD0B8",
  accent3: "#f9df91",
  white: "#ffffff",
  offWhite: "#f2f2f2",
  lightGray: "#b8b8b8",
};

const LightBaseColors = {
  background: "#f2f2f2",
  pureWhite: "#ffffff",
  offWhite: "#f2f2f2",
  lightGray: "#b8b8b8",
  textPrimary: "#1f1f1f",
  textSecondary: "#6f6f6f",
  deepTeal: "#0F3E3E",
  gold: "#D4AF37", 
  black: "#000000",
};

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: baseColors.dark1,
      paper: baseColors.dark2,
    },
    primary: {
      main: baseColors.accent2,
      contrastText: baseColors.dark3,
    },
    secondary: {
      main: baseColors.accent1,
      contrastText: baseColors.offWhite,
    },
    text: {
      primary: baseColors.accent2,
      secondary: baseColors.lightGray,
    },
    divider: baseColors.black,
    darkPaper: baseColors.dark3,
  },
});


export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: LightBaseColors.background,
      paper: LightBaseColors.offWhite,
    },
    primary: {
      main: LightBaseColors.deepTeal,
      contrastText: LightBaseColors.pureWhite,
    },
    secondary: {
      main: LightBaseColors.pureWhite,
      contrastText: LightBaseColors.textPrimary,
    },
    text: {
      primary: LightBaseColors.textPrimary,
      secondary: LightBaseColors.textSecondary,
    },
    divider: LightBaseColors.lightGray,
  },
});
