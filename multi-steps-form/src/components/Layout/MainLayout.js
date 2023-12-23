import React from "react";
import { Grid as MuiGrid, Box as Container } from "@mui/material";

import Sidbar from "./Sidbar";
import FormContainer from "./FormContainer";
import { classes } from "../../styles";
import NavigationButtons from "./NavigationButtons";
export default function MainLayout() {
  return (
    <Container component="div" sx={classes.mainContainerClass}>
      <MuiGrid container sx={classes.twoColumnsClass}>
        <MuiGrid item sx={classes.sidebarClass}>
          <Sidbar />
        </MuiGrid>
        <MuiGrid item container sx={classes.formClass}>
          <FormContainer />
          <NavigationButtons />
        </MuiGrid>
      </MuiGrid>
    </Container>
  );
}
