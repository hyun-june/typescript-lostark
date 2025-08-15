import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#121212",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#000",
      paper: "#121212",
    },
    text: {
      primary: "#fff",
      secondary: "#333333",
    },
    action: {
      hover: "#282828",
      active: "#333",
    },
  },
  typography: {
    fontFamily: "NoonnuBasicGothicRegular",
    h1: {
      fontWeight: 700,
      fontSize: "24px",
    },
    h2: {
      fontSize: "1.5rem",
    },
    body1: {
      fontSize: "14px",
    },
    subtitle1: {
      fontSize: "0.6875rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "30px",
          textTransform: "none",
        },
        containedSecondary: {
          backgroundColor: "#ffffff",
          color: "#000000",
          "&:hover": {
            backgroundColor: "#e0e0e0",
          },
        },
        sizeLarge: {
          padding: "8px 32px",
          fontWeight: 700,
          fontSize: "16px",
        },
      },
    },
  },
});

export default theme;
