import "./App.css";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import Typography from "@mui/material/Typography";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Typography color="secondary">kbgj</Typography>
    </ThemeProvider>
  );
}

export default App;
