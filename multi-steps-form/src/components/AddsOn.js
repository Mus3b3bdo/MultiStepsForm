import { Box, Typography, Grid, Paper, Checkbox } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { stateContext } from "../App";
import { theme } from "../theme";
import { addson } from "../DUMMY";
export default function AddsOn() {
  const { setIsValid, setUserDate, userData } = useContext(stateContext);
  const [checked, setChecked] = useState([false, false, false]);
  useEffect(() => {
    checked.some((value) => value !== false) && setIsValid(true);
    const selectedAdd = checked
      .map((item, index) => (item === true ? addson[index] : null))
      .filter(Boolean);
    setUserDate({
      ...userData,
      addson: selectedAdd,
    });
  }, [checked]);
  return (
    <>
      <Typography variant="h1" color="primary.main" mb={2}>
        Pick add-ons Add-ons
      </Typography>
      <Typography variant="body1" color="secondary.dark" mb={2}>
        help enhance your gaming experience.
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        flexDirection="column"
        gap={2}
        mb={2}
      >
        {addson.map((addon) => {
          return (
            <Paper
              key={addon.id}
              elevation={0}
              onClick={() => {
                setChecked((prevChecked) => [
                  ...prevChecked.slice(0, addon.id),
                  !checked[addon.id],
                  ...prevChecked.slice(addon.id + 1),
                ]);
              }}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderRaduis: 2,
                border: "2px solid",
                padding: "0.75rem 1.5rem",
                borderColor: checked[addon.id]
                  ? theme.palette.primary.dark
                  : theme.palette.secondary.dark,
                cursor: "pointer",
              }}
            >
              <Checkbox
                checked={checked[addon.id]}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Box component="div" ml={1.7}>
                <Typography variant="body1" color="primary.main">
                  {addon.name}
                </Typography>
                <Typography variant="body2" color="secondary.dark">
                  {addon.description}
                </Typography>
              </Box>
              <Typography variant="body2" color="primary.dark">
                {userData.yearly ? addon.yearly : addon.monthly}
              </Typography>
            </Paper>
          );
        })}
      </Grid>
    </>
  );
}
