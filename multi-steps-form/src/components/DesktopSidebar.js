import React, { useContext } from "react";
import { Stepper, Step, StepLabel, Box, Typography } from "@mui/material";
import { theme } from "../theme";
import { stateContext } from "../App";
export default function DesktopSidebar() {
  const { steps, activeStep } = useContext(stateContext);
  return (
    <Box sx={{ width: "100% " }}>
      <Stepper activeStep={activeStep} connector={<></>} orientation="vertical">
        {steps.map((step) => (
          <Step
            key={step.id}
            sx={{
              display: "flex",
              flexWrap: "nowrap",
              gap: 2,
              padding: 0,
              marginTop: 1.2,
              marginBottom: 1.2,
            }}
          >
            <StepLabel
              sx={{
                "&.MuiStepLabel-root .MuiStepLabel-label": {
                  display: "grid",
                  placeItems: "center",
                  border: "2px solid",
                  borderRadius: "5rem",
                  borderColor: theme.palette.primary.light,
                  color: theme.palette.primary.light,
                  width: 35,
                  height: 35,
                  textAlign: "center",
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
            <Box component="div" sx={{ textTransform: "uppercase" }}>
              <Typography variant="body1" color="primary.light">
                Step {step.id}
              </Typography>
              <Typography
                variant="h2"
                color="primary.contrastText"
                sx={{ whiteSpace: "nowrap" }}
              >
                {step.name}
              </Typography>
            </Box>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
