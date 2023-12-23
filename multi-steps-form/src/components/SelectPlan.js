import {
  Typography,
  CardHeader,
  Avatar,
  Paper,
  Grid,
  Switch,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { stateContext } from "../App";
import { plans } from "../DUMMY";
import { classes } from "../styles";
export default function SelectPlan() {
  const { isMobile, setIsValid, setUserDate, userData } = useContext(
    stateContext
  );
  const [choosen, setChoosen] = useState(null);
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    choosen !== null && setIsValid(true);
    choosen !== null &&
      setUserDate({
        ...userData,
        plan: plans[choosen].name,
        price: checked ? plans[choosen].yearly : plans[choosen].monthly,
        yearly: checked,
      });
  }, [choosen, checked]);

  return (
    <>
      <Typography variant="h1" color="primary.main" mb={2}>
        Select your plan
      </Typography>
      <Typography variant="body1" color="secondary.dark" mb={2}>
        You have the option of monthly or yearly billing.
      </Typography>
      <Grid container sx={classes.planContainer}>
        {plans.map((plan) => {
          return (
            <Grid item key={plan.id} flexGrow={1}>
              <Paper
                onClick={() => {
                  setChoosen(plan.id);
                }}
                elevation={0}
                sx={{
                  borderRaduis: 2,
                  border: "2px solid",
                  borderColor:
                    choosen === plan.id ? "primary.main" : "secondary.dark",
                  backgroundColor:
                    choosen === plan.id ? "secondary.contrastText" : "#FFF",
                  cursor: "pointer",
                }}
              >
                <CardHeader
                  sx={{
                    padding: "10px",
                    flexDirection: isMobile ? "row" : "column",
                    justifyContent: isMobile ? "" : "space-between",
                    alignItems: isMobile ? "stretch" : "flex-start",
                    gap: isMobile ? 0 : 7,
                  }}
                  avatar={<Avatar src={plan.icon} aria-label={plan.name} />}
                  title={
                    <Typography
                      variant="body1"
                      color="primary.main"
                      textTransform="capitalize"
                    >
                      {plan.name}
                    </Typography>
                  }
                  subheader={
                    <Typography
                      variant="body1"
                      color="secondary.dark"
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
                      {checked ? plan.yearly : plan.monthly}
                      <span style={{ color: "primary.main" }}>
                        {checked ? "2 months free" : ""}
                      </span>
                    </Typography>
                  }
                />
              </Paper>
            </Grid>
          );
        })}
      </Grid>
      <Paper
        component="div"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "secondary.contrastText",
        }}
      >
        <Typography
          variant="body1"
          color={checked ? "secondary.dark" : "primary.main"}
        >
          Monthly
        </Typography>
        <Switch
          checked={checked}
          onChange={(e) => {
            setChecked(!checked);
          }}
          id="switch"
        />
        <Typography
          variant="body1"
          color={checked ? "primary.main" : "secondary.dark"}
        >
          Yearly
        </Typography>
      </Paper>
    </>
  );
}
