import React, { useContext } from "react";
import { Box, Typography } from "@mui/material";
import { stateContext } from "../../App";
import { classes } from "../../styles";
import Switch from "../Switch";
import thankYou from "../../images/icon-thank-you.svg";
export default function FormContainer() {
  const { submit, handlesubmit } = useContext(stateContext);
  return (
    <Box
      component="div"
      sx={submit ? classes.thankContainer : classes.formContainer}
    >
      {submit ? (
        <>
          <img src={thankYou} alt="thank you" />
          <Box component="div">
            <Typography variant="body1" color="primary.main">
              Thank You
            </Typography>
            <Typography variant="body1" color="secondary.dark">
              Thanks for confirming your subscription! We hope you have fun
              using our platform. If you ever need support, please feel free to
              email us at support@loremgaming.com.
            </Typography>
          </Box>
        </>
      ) : (
        <form onSubmit={handlesubmit}>
          <Box component="div">
            <Switch />
          </Box>
        </form>
      )}
    </Box>
  );
}
