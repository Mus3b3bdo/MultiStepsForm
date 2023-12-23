import bgDesktopSidebar from "./images/bg-sidebar-desktop.svg";
import bgMobileSidebar from "./images/bg-sidebar-mobile.svg";

import { theme } from "./theme";
export const classes = {
  //container for the main content the area in the blue
  mainContainerClass: {
    display: "grid",
    placeItems: "center",
    minHeight: "100vh",
    backgroundColor: "secondary.main",
    [theme.breakpoints.down("sm")]: {
      position: "relative",
      display: "block",
      minHeight: "80vh",
    },
  },
  //the style of the two columns container
  twoColumnsClass: {
    minHeight: "75%",
    width: "65%",
    gap: 1,
    flexWrap: "nowrap",
    justifyContent: "space-between",
    backgroundColor: "secondary.contrastText",
    boxShadow: "5px 7px 26px -13px rgba(0,0,0,0.75)",
    position: "relative",
    padding: 2,
    borderRadius: 2,
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      direction: "column",
      padding: 0,
    },
  },
  //the sidebar (left colum)
  sidebarClass: {
    borderRadius: 2,
    backgroundImage: `url(${bgDesktopSidebar})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "35%",
    paddingTop: 4.25,
    paddingLeft: 3,
    paddingRight: 3,
    [theme.breakpoints.down("sm")]: {
      position: "absolute",
      borderRadius: 0,
      width: "100vw",
      minHeight: "170px",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundImage: `url(${bgMobileSidebar})`,
    },
  },
  //the form (right column)
  formClass: {
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "0 auto",
    padding: "40px 50px 0 50px",
    [theme.breakpoints.down("sm")]: {
      width: "90vw",
      minHeight: "60vh",
      position: "absolute",
      left: "50%",
      transform: "translate(-50%,20%)",
      padding: 0,
      margin: 0,
    },
  },
  formContainer: {
    backgroundColor: "secondary.contrastText",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 2,
      boxShadow: "5px 7px 26px -13px rgba(0,0,0,0.75)",
      padding: "35px 25px",
    },
  },
  //Stepper
  mobileStepper: {
    width: "100% ",
    display: "flex",
    justifyContent: "center",
  },

  desktopStepper: {
    display: "flex",
    flexWrap: "nowrap",
    gap: 2,
    padding: 0,
    marginTop: 1.2,
    marginBottom: 1.2,
  },
  errorText: { color: "error.main", textAlign: "right" },
  planContainer: {
    justifyContent: "space-between",
    gap: 2,
    marginBottom: 3,
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  summaryBox: {
    backgroundColor: "primary.light",
    width: "100%",
    borderRadius: 2,
    padding: 1.2,
  },
  planSummary: { width: "auto" },
  changePlanBtn: {
    color: "secondary.dark",
    cursor: "pointer",
    textDecoration: "underline",
    textTransform: "lowercase",
  },
  NavigationBtns: {
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  thankContainer: {
    display: "grid",
    placeItems: "center",
    minHeight: "100%",
    backgroundColor: "secondary.contrastText",
    [theme.breakpoints.down("sm")]: {
      borderRadius: 2,
      boxShadow: "5px 7px 26px -13px rgba(0,0,0,0.75)",
      padding: "35px 25px",
    },
  },
};
