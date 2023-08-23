import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

const steps = {
  steptitle: [
    { label: "Connect with US" },
    { label: "Choose Your Product" },
    { label: "Quality Check" },
    { label: "On-Time delivery" },
  ],
  steptext: [
    { label: "Stay in touch for personalized assistance." },
    { label: "Explore our diverse range of offerings." },
    { label: "Ensuring excellence & precision at every step." },
    { label: "Ensuring excellence & precision at every step." },
  ],
};

export default function Stepperslide() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.steptext.map((item, index) => (
          <Step key={index}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
        {steps.steptext.map((item, index) => (
          <Step key={index}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
