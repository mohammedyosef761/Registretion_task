import React from "react";
import {
  Box,
  Stack,
  Step,
  StepStatus,
  Stepper,
  useSteps,
} from "@chakra-ui/react";
import ActiveStep from "./ActiveStep";
import IncompleteCircle from "./IncompleteCircle";
import { StepType } from "../types";
import { steps } from "../contants/data";



function StepperComp({ step}: StepType ) {
  // const { activeStep, setActiveStep } = useSteps({
  //   index: 1,
  //   count: steps.length,
  // });


  return (
    <Box width={50}>
    <Stack >
      <Stepper size="sm" index={step}  >
        {steps.map((step, index) => (
          <Step key={index} >
            <StepStatus
              complete={<ActiveStep />}
              active={<IncompleteCircle />}
              incomplete={<IncompleteCircle />}
            />
         
          </Step>
        ))}
      </Stepper>
    </Stack>
    </Box>
  );
}

export default StepperComp;
