import arcade from "./images/icon-arcade.svg";
import advanced from "./images/icon-advanced.svg";
import pro from "./images/icon-pro.svg";

export const addson = [
  {
    id: 0,
    name: "Online service",
    description: "Access to multiplayer games",
    monthly: "+$1/mo",
    yearly: "+$10/yr",
  },
  {
    id: 1,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthly: "+$2/mo",
    yearly: "+$20/yr",
  },
  {
    id: 2,
    name: "Customizable Profile",
    description: "Custom theme on your profile",
    monthly: "+$2/mo",
    yearly: "+$20/yr",
  },
];
export const plans = [
  { id: 0, name: "arcade", icon: arcade, monthly: "$9/mo", yearly: "$90/yr" },
  {
    id: 1,
    name: "advanced",
    icon: advanced,
    monthly: "$12/mo",
    yearly: "$120/yr",
  },
  { id: 2, name: "pro", icon: pro, monthly: "$15/mo", yearly: "$150yr" },
];

export const steps = [
  { id: 0, name: "YOUR INFO" },
  { id: 1, name: "SELECT PLAN" },
  { id: 2, name: "ADD-ONS" },
  { id: 3, name: "Summary" },
];

export const userDataInitial = {
  plan: "",
  price: "",
  addson: null,
  yearly: false,
};
