import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { UbuntuBold } from "./fonts/Ubuntu-Bold.ttf";
import { UbuntuRegular } from "./fonts/Ubuntu-Regular.ttf";
import { UbuntuMedium } from "./fonts/Ubuntu-Medium.ttf";
export let theme = createTheme({
  palette: {
    primary: {
      main: "hsl(213, 96%, 18%)", //Marine blue
      dark: "hsl(243, 100%, 62%)", //Purplish blue
      light: "hsl(228, 100%, 84%)", //Pastel blue
      contrastText: "hsl(206, 94%, 87%)", //Light blue
    },
    error: {
      main: "hsl(354, 84%, 57%)", //Strawberry red:
      contrastText: "#000",
    },
    secondary: {
      dark: "hsl(231, 11%, 63%)", //Cool gray
      main: "hsl(217, 100%, 97%)", //Magnolia
      light: "hsl(229, 24%, 87%)", //Light gray
      contrastText: "hsl(231, 100%, 99%)", //Alabaster
    },
  },
  typography: {
    h1: {
      fontSize: 20,
      fontWeight: 700,
      styleOverrides: `
        @font-face {
          font-family: 'Ubuntu';
          font-style: normal;
          font-display: swap;
          font-weight: 700;
          src: local('Ubuntu-Bold'), local('Ubuntu-Bold'), url(${UbuntuBold}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    h2: {
      fontSize: 16,
      fontWeight: 500,
      tyleOverrides: `
        @font-face {
          font-size:'10px';
          font-family: 'Ubuntu';
          font-style: normal;
          font-display: swap;
          font-weight: 500;
          src: local('Ubuntu-Medium'), local('Ubuntu-Medium'), url(${UbuntuMedium}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-size:'16px';
          font-family: 'Ubuntu';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('Ubuntu-Regular'), local('Ubuntu-Regular'), url(${UbuntuRegular}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiStepLabel: {
      styleOverrides: {
        root: {
          "& .MuiStepLabel-label": {
            display: "grid",
            placeItems: "center",
            border: "1px solid",
            borderRadius: "5rem",
            borderColor: "hsl(228, 100%, 84%)",
            color: "hsl(228, 100%, 84%)",
            width: 35,
            height: 35,
            textAlign: "center",
          },
          "& .MuiStepLabel-label.Mui-active": {
            color: "hsl(213, 96%, 18%)",
            backgroundColor: "hsl(228, 100%, 84%)",
          },
          ".MuiStepLabel-iconContainer": {
            display: "none",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {},
      },
    },
  },
});

theme = responsiveFontSizes(theme);
