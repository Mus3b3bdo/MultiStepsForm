import React, { useContext } from "react";
import { Stepper, Step, StepLabel, Box } from "@mui/material";
import { theme } from "../theme";
import { stateContext } from "../App";
export default function MobileSidebar() {
  const { activeStep, steps } = useContext(stateContext);
  return (
    <Box sx={{ width: "100% ", display: "flex", justifyContent: "center" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((step) => (
          <Step key={step.id} sx={{}}>
            <StepLabel
              sx={{
                "&.MuiStepLabel-root .MuiStepLabel-label": {
                  border: "2px solid",
                  borderRadius: "5rem",
                  borderColor: theme.palette.primary.light,
                  color: theme.palette.primary.light,
                  width: 30,
                  height: 30,
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 500,
                },
                "&.MuiStepLabel-root .MuiStepLabel-label.Mui-active": {
                  color: theme.palette.primary.main,
                  backgroundColor: theme.palette.primary.light,
                },
                "&.MuiStepLabel-root .MuiStepLabel-iconContainer": {
                  display: "none",
                },
              }}
            >
              {step.id}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
