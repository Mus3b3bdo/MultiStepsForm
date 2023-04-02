import { createTheme, responsiveFontSizes } from "@mui/material/styles";
export let theme = createTheme({
  palette: {
    primary: {
      main: "hsl(213, 96%, 18%)", //Marine blue
      dark: "hsl(243, 100%, 62%)", //Purplish blue
      light: "hsl(228, 100%, 84%)", //Pastel blue
      contrastText: "#fff",
    },
    secondary: {
      main: "hsl(354, 84%, 57%)", //Strawberry red:
      contrastText: "#000",
    },
    info: {
      main: "hsl(206, 94%, 87%)", //Light blue
    },
  },
  typography: {
    fontFamily: ["Ubuntu"].join(","),
    fontSize: 2,
    h1: {
      fontWeight: 700,
      fontSize: 40,
    },
    h2: {
      fontWeight: 500,
      fontSize: 30,
    },
    body1: {
      fontWeight: 400,
      fontSize: 16,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: "376px",
      laptop: "1440px",
    },
  },
});

theme = responsiveFontSizes(theme);
