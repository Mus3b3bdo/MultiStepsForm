import React, { createContext, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import { Grid, useMediaQuery, Box } from "@mui/material";
import bgDesktopSidebar from "./images/bg-sidebar-desktop.svg";
import bgMobileSidebar from "./images/bg-sidebar-mobile.svg";
import Sidbar from "./components/Sidbar";
import Form from "./components/Form";
import Buttons from "./components/Buttons";
export const stateContext = createContext();
function App() {
  const [isValid, setIsValid] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const handlesubmit = (e) => {
    e.preventDefault();
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const steps = [
    { id: 1, name: "Your Info" },
    { id: 2, name: "Select Plan" },
    { id: 3, name: "ADD-ONS" },
    { id: 4, name: "Summary" },
  ];
  return (
    <stateContext.Provider
      value={{
        clicked,
        setClicked,
        setActiveStep,
        activeStep,
        steps,
        setIsValid,
        isValid,
      }}
    >
      <ThemeProvider theme={theme}>
        <Box
          backgroundColor="primary.contrastText"
          sx={
            isMobile
              ? { minHeight: "100vh", margin: 0, padding: 0 }
              : {
                  minHeight: "100vh",
                  display: "grid",
                  placeContent: "center",
                }
          }
        >
          <Grid
            container
            gap={4}
            sx={{
              position: "relative",
              ...(!isMobile && {
                boxShadow: "5px 7px 26px -13px rgba(0,0,0,0.75)",
                borderRadius: 2,
              }),
            }}
            backgroundColor="secondary.contrastText"
            direction={isMobile ? "column" : "row"}
            justifyContent="space-between"
            flexWrap="nowrap"
            p={isMobile ? 0 : 1.2}
          >
            <Grid
              item
              p={4}
              sx={{
                borderRadius: 2,
                minHeight: "80vh",
                backgroundImage: `url(${bgDesktopSidebar})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                ...(isMobile && {
                  position: "absolute",
                  borderRadius: 0,
                  width: "100%",
                  minHeight: "30vh",
                  backgroundImage: `url(${bgMobileSidebar})`,
                }),
              }}
            >
              <Sidbar isMobile={isMobile} />
            </Grid>
            <Grid
              item
              container
              justifyContent="space-between"
              flexDirection="column"
              sx={{
                width: isMobile ? "90vw" : "60vw",
                minHeight: isMobile ? "100vh" : "",
                margin: "0 auto",
              }}
            >
              <Form isMobile={isMobile} handlesubmit={handlesubmit} />
              <Buttons />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </stateContext.Provider>
  );
}

export default App;
