import React, { useContext } from "react";
import PersonalInfo from "./PersonalInfo";
import SelectPlan from "./SelectPlan";
import AddsOn from "./AddsOn";
import Summary from "./Summary";
import { stateContext } from "../App";
export default function Switch() {
  const { activeStep } = useContext(stateContext);
  switch (activeStep) {
    case 0:
      return <PersonalInfo />;
    case 1:
      return <SelectPlan />;
    case 2:
      return <AddsOn />;
    case 3:
      return <Summary />;
    default:
      return <p>I don't know that fruit.</p>;
  }
}
