import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import SecondCarouselItem from "./SecondCarouselItem";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function SecondCarouselContainer(
    {maxSteps=1}
) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box width="100%">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {new Array(4).fill(0).map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? <SecondCarouselItem /> : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            style={{ order: 3 }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            startIcon={<img src="/img/chevron-forward.png" />}
          ></Button>
        }
        backButton={
          <Button
            style={{ order: 2 }}
            size="small"
            startIcon={<img src="/img/chevron-backward.png" />}
            onClick={handleBack}
            disabled={activeStep === 0}
          ></Button>
        }
      />
    </Box>
  );
}

export default SecondCarouselContainer;
