import * as React from "react";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import img_1 from "../img/homeLogo.png";
import img_2 from "../img/homeLogo.png";
import img_3 from "../img/homeLogo.png";
import Box from "@mui/material/Box";
import { Theme } from "@mui/material/styles";
import Slide from "@mui/material/Slide";
import { Paper } from "@mui/material";

const icon = (
  <Paper sx={{ m: 1 }} elevation={4}>
    <Box component="svg" sx={{ width: 100, height: 100 }}>
      <Box
        component="polygon"
        sx={{
          fill: (theme: Theme) => theme.palette.common.white,
          stroke: (theme) => theme.palette.divider,
          strokeWidth: 1,
        }}
        points="0,100 50,00, 100,100"
      ></Box>
    </Box>
  </Paper>
);

export function Recommendations() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const [imgs, setImgs] = React.useState([img_1, img_2, img_3]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <>
      <Slide
        direction="down"
        in={true}
        mountOnEnter
        unmountOnExit
        timeout={1000 * 2}
      >
        {
          <img
            src={`${imgs[activeStep]}`}
            alt="ילדים"
            style={{
              width: "100%",
              maxWidth: "100%",
              borderRadius: "8px",
            }}
          />
        }
      </Slide>
      <MobileStepper
        style={{ borderRadius: "8px" }}
        variant="dots"
        steps={3}
        position="static"
        activeStep={activeStep}
        // sx={{ maxWidth: 400, flexGrow: 1 }}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
            Next
            <KeyboardArrowLeft />
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </>
  );
}
