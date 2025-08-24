import { createTheme } from "@mui/material";

const DarkBaseColors = {
  background: "#121212",
  pureWhite: "#ffffff",
  offWhite: "#2C2C2C",
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
  offWhite: "#f6f6f6",
  lightGray: "#b8b8b8",
  textPrimary: "#1f1f1f",
  textSecondary: "#6f6f6f",
  deepTeal: "#0F3E3E",
  gold: "#D4AF37",
  black: "#000000",
};

// ✅ Shared typography
const typography = {
  h1: {
    fontWeight: 700,
    fontSize: "2.5rem",
    "@media (min-width:600px)": {
      fontSize: "3rem",
    },
    "@media (min-width:900px)": {
      fontSize: "3.5rem",
    },
  },
  h2: {
    fontWeight: 600,
    fontSize: "2rem",
    "@media (min-width:600px)": {
      fontSize: "2.5rem",
    },
    "@media (min-width:900px)": {
      fontSize: "3rem",
    },
  },
  body1: {
    fontSize: "0.9rem",
    "@media (min-width:600px)": {
      fontSize: "1rem",
    },
    "@media (min-width:900px)": {
      fontSize: "1.1rem",
    },
  },
  body2: {
    fontSize: "0.8rem",
    "@media (min-width:600px)": {
      fontSize: "0.9rem",
    },
    "@media (min-width:900px)": {
      fontSize: "1rem",
    },
  },
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
  typography,
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
  typography,
});
