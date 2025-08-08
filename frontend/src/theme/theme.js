import { createTheme } from "@mui/material";

const DarkBaseColors = {
  background: "#121212",
  pureWhite: "#ffffff",
  offWhite: "#2a2a2a",
  lightGray: "#444444",
  textPrimary: "#e0e0e0",
  textSecondary: "#a0a0a0",
  deepTeal: "#20B2AA",
  gold: "#FFD700",
  black: "#000000",
};


const LightBaseColors = {
  background: "#f2f2f2",
  pureWhite: "#ffffff",
  offWhite: "#dfdfdf",
  lightGray: "#b8b8b8",
  textPrimary: "#1f1f1f",
  textSecondary: "#6f6f6f",
  deepTeal: "#0F3E3E",
  gold: "#D4AF37", 
  black: "#000000",
};

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: DarkBaseColors.background,
      paper: DarkBaseColors.offWhite,
    },
    primary: {
      main: DarkBaseColors.deepTeal,
      dark: DarkBaseColors.black,
      contrastText: DarkBaseColors.pureWhite,
    },
    secondary: {
      main: DarkBaseColors.offWhite,
      contrastText: DarkBaseColors.textPrimary,
    },
    text: {
      primary: DarkBaseColors.textPrimary,
      secondary: DarkBaseColors.textSecondary,
    },
    divider: DarkBaseColors.lightGray,
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
      dark: LightBaseColors.black,
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
