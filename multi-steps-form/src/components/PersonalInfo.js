import {
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";
import React, { useContext, useState, useEffect } from "react";
import { stateContext } from "../App";
import { classes } from "../styles";

export default function PersonalInfo() {
  const { clicked, setIsValid } = useContext(stateContext);
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  useEffect(() => {
    nameValid && emailValid && phoneValid && setIsValid(true);
  }, [nameValid, phoneValid, emailValid]);

  return (
    <FormGroup>
      <Typography variant="h1" color="primary.main" mb={2}>
        Personal Info
      </Typography>
      <Typography variant="body1" color="secondary.dark" mb={3}>
        Please provide your name, email address, and phone number.
      </Typography>
      <FormControl component="fieldset">
        <FormLabel component="legend"> Name</FormLabel>
        <TextField
          error={clicked && !nameValid}
          id="name"
          type="text"
          autoComplete="off"
          placeholder="e.g. Stephen King"
          onChange={(e) => {
            if (!e.target.value.trim()) {
              setNameValid(false);
            } else {
              setNameValid(true);
            }
          }}
        />
        <FormHelperText sx={classes.errorText}>
          {clicked && !nameValid ? "error" : ""}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel component="legend">Email Address</FormLabel>
        <TextField
          error={clicked && !emailValid}
          id="email"
          type="email"
          autoComplete="off"
          placeholder="e.g. stephenking@lorem.com"
          onChange={(e) => {
            const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            regex.test(e.target.value) && setEmailValid(true);
          }}
        />
        <FormHelperText sx={classes.errorText}>
          {clicked && !emailValid ? "error" : ""}
        </FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel component="legend">Phone Number</FormLabel>
        <TextField
          error={clicked && !phoneValid}
          id="phone"
          type="text"
          autoComplete="off"
          placeholder="e.g. +1 234 567 890"
          onChange={(e) => {
            const regex = /^[+]?[\d]{9,13}$/;
            regex.test(e.target.value) && setPhoneValid(true);
          }}
        />
        <FormHelperText sx={classes.errorText}>
          {clicked && !phoneValid ? "error" : ""}
        </FormHelperText>
      </FormControl>
    </FormGroup>
  );
}
