import { Button, Box } from "@mui/material";
import React, { useContext } from "react";
import { theme } from "../theme";
import { stateContext } from "../App";

export default function Buttons() {
  const {
    activeStep,
    setActiveStep,
    steps,
    handlesubmit,
    setClicked,
    setIsValid,
    isValid,
  } = useContext(stateContext);
  const handleNext = () => {
    setClicked(true);
    if (activeStep !== steps.length - 1 && isValid) {
      setActiveStep((prev) => prev + 1);
      setIsValid(false);
      setClicked(false);
    } else if (activeStep === steps.length - 1 && isValid) {
      setActiveStep(steps.length - 1);
      setClicked(false);
      setIsValid(false);
    } else setIsValid(false);
  };
  const handleBack = () => {
    setClicked(false);
    setIsValid(false);
    if (activeStep !== 0) setActiveStep((prev) => prev - 1);
    else setActiveStep(0);
  };
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-between",
      }}
    >
      <Button
        variant="contained"
        type={activeStep === 3 ? "submit" : "button"}
        color="primary"
        onClick={activeStep === 3 ? handlesubmit : handleNext}
        sx={{
          fontSize: 15,
          textTransform: "capitalize",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        {activeStep === 3 ? "confirm" : "Next Step"}
      </Button>

      <Button
        variant={activeStep === 3 ? "text" : "contained"}
        color="primary"
        disabled={activeStep === 3}
        onClick={handleBack}
        sx={{
          opacity: activeStep === 0 ? 0 : 1,
          fontSize: 15,
          textTransform: "capitalize",
          transition: "opacity 500ms",
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
          },
        }}
      >
        Go Back
      </Button>
    </Box>
  );
}
