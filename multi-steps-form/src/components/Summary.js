import React, { useContext } from "react";
import { stateContext } from "../App";
import { Box, Grid, Typography, Button, Divider } from "@mui/material";
import { classes } from "../styles";

export default function Summary() {
  const { userData } = useContext(stateContext);
  return (
    <>
      <Typography variant="h1" color="primary.main" mb={2}>
        Finishing up
      </Typography>
      <Typography variant="body1" color="secondary.dark" mb={2}>
        Double-check everything looks OK before confirming
      </Typography>
      <Box component="div" sx={classes.summaryBox}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item container flexDirection="column" sx={classes.planSummary}>
            <Grid item>
              <Typography variant="body1" color="primary.main">
                {userData.plan}
                <span>{userData.yearly ? "(Yearly)" : "(Monthly)"}</span>
              </Typography>
            </Grid>
            <Grid item>
              <Button variant="text" sx={classes.changePlanBtn}>
                Change
              </Button>
            </Grid>
          </Grid>
          <Grid item>{userData.price}</Grid>
        </Grid>
        <Divider />
        {userData.addson.map((addon) => {
          return (
            <Grid
              container
              key={addon.id}
              justifyContent="space-between"
              alignItems="center"
              gap={3.5}
            >
              <Grid item>{addon.name}</Grid>
              <Grid item>{userData.yearly ? addon.yearly : addon.monthly}</Grid>
            </Grid>
          );
        })}
      </Box>
    </>
  );
}
