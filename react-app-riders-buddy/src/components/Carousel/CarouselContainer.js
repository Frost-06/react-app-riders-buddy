import Container from "@mui/material/Box";
import Button from "@mui/material/Button";
import MobileStepper from "@mui/material/MobileStepper";
import { useTheme } from "@mui/material/styles";
import * as React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CarouselItems from "./CarouselItems";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

function CarouselContainer({ maxSteps = 3 }) {
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
    <Container width="100%">
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {new Array(10).fill(0).map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 1 ? <CarouselItems /> : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            variant="chevron"
            style={{ order: 2 }}
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            startIcon={<img src="/img/chevron-forward.png" />} />
        }
        backButton={
          <Button
            variant="chevron"
            style={{ order: 2 }}
            size="small"
            startIcon={<img src="/img/chevron-backward.png" />}
            onClick={handleBack}
            disabled={activeStep === 0} />
        }
      />
    </Container>
  );
}

export default CarouselContainer;
