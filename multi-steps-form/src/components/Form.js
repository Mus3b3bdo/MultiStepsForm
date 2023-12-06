import { Box } from "@mui/material";
import React from "react";
import MobileFormContainer from "./MobileFormContainer";
import DesktopFormContainer from "./DesktopFormContainer";

export default function Form({ isMobile, handlesubmit }) {
  return (
    <Box
      component="div"
      backgroundColor="secondary.contrastText"
      sx={{
        padding: "40px 50px 0 50px",
        ...(isMobile && {
          transform: "translateY(35%)",
          borderRadius: 2,
          boxShadow: "5px 7px 26px -13px rgba(0,0,0,0.75)",
          width: "90%",
          padding: "35px 25px",
        }),
      }}
    >
      <form onSubmit={handlesubmit}>
        {isMobile ? <MobileFormContainer /> : <DesktopFormContainer />}
      </form>
    </Box>
  );
}
