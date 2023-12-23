import React, { useContext } from "react";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
import { stateContext } from "../../App";
import { classes } from "../../styles";
export default function Sidbar() {
  const { isMobile, steps, activeStep } = useContext(stateContext);
  return (
    <Box component="div" sx={isMobile ? classes.mobileStepper : null}>
      <Stepper
        activeStep={activeStep}
        connector={<></>}
        orientation={isMobile ? "horizontal" : "vertical"}
      >
        {steps.map((step) => (
          <Step key={step.id} sx={isMobile ? null : classes.desktopStepper}>
            <StepLabel color="secondary.dark">{step.id + 1}</StepLabel>
            {isMobile ? (
              ""
            ) : (
              <Box component="div">
                <Typography variant="body1" color="secondary.dark">
                  Step {step.id + 1}
                </Typography>
                <Typography variant="h2" color="primary.light">
                  {step.name}
                </Typography>
              </Box>
            )}
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
