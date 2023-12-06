import {
  useTheme,
  FormGroup,
  FormControl,
  FormLabel,
  FormHelperText,
  Typography,
  TextField,
} from "@mui/material";
import React, { useContext, useRef, useState, useEffect } from "react";
import { stateContext } from "../App";

export default function PersonalInfo() {
  const { clicked, setIsValid } = useContext(stateContext);
  const [emailValid, setEmailValid] = useState(false);
  const [nameValid, setNameValid] = useState(false);
  const [phoneValid, setPhoneValid] = useState(false);
  const nameRef = useRef();
  const mailRef = useRef();
  const phoneRef = useRef();
  useEffect(() => {
    if (clicked) {
      nameValid && emailValid && phoneValid && setIsValid(true);
    } else setIsValid(true);
  }, [clicked, nameValid, phoneValid, emailValid]);

  return (
    <FormGroup>
      <Typography variant="h1" color="primary.main">
        Personal Info
      </Typography>
      <Typography variant="body1" color="primary.contrastText">
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
          ref={nameRef}
          onChange={(e) => {
            nameRef.current = e.target.value;
            if (!nameRef.current.trim()) {
              setNameValid(false);
            } else {
              setNameValid(true);
            }
          }}
        />
        <FormHelperText
          sx={{ color: useTheme().palette.error.main, textAlign: "right" }}
        >
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
          ref={mailRef}
          onChange={(e) => {
            const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            mailRef.current = e.target.value;
            regex.test(mailRef.current) && setEmailValid(true);
          }}
        />
        <FormHelperText
          sx={{ color: useTheme().palette.error.main, textAlign: "right" }}
        >
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
          ref={phoneRef}
          onClick={(e) => {
            phoneRef.current = e.target.value;
            const regex = /^[+]?[\d]{9,13}$/;
            regex.test(phoneRef.current) && setPhoneValid(true);
          }}
        />
        <FormHelperText
          sx={{ color: useTheme().palette.error.main, textAlign: "right" }}
        >
          {clicked && !phoneValid ? "error" : ""}
        </FormHelperText>
      </FormControl>
    </FormGroup>
  );
}
