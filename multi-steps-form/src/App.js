import React, { createContext, useState } from "react";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import { steps, userDataInitial } from "./DUMMY";
import { theme } from "./theme";
import MainLayout from "./components/Layout/MainLayout";
export const stateContext = createContext();
function App() {
  const [isValid, setIsValid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [userData, setUserDate] = useState(userDataInitial);
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [submit, setSubmit] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  const stateContextValue = {
    userData,
    setUserDate,
    handlesubmit,
    clicked,
    setClicked,
    setActiveStep,
    activeStep,
    steps,
    setIsValid,
    isValid,
    isMobile,
    submit,
  };
  return (
    <stateContext.Provider value={stateContextValue}>
      <ThemeProvider theme={theme}>
        <MainLayout />
      </ThemeProvider>
    </stateContext.Provider>
  );
}

export default App;
