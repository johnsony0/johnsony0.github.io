import React, {useState} from 'react';
import { Box, Button, Paper, Step, StepContent, StepLabel, Stepper, Typography } from '@mui/material';

const steps = [
  {
    label: 'Happy Twentieth Birthday!!!',
    description: 
    `Hiiiii, congrats at turning 20, and 
    here's to more birthdays together 
    🍾🍾🍾. To the love of my life, 
    I hope today will be the best day 
    in your life but next year 
    will be even better >:3. `,
  },
  {
    label: '(^-^)/ 🎉',
    description:
    `This bit will just be a bit of poems, 
    IDK what else to write 😭: 
  
    He found my crying,\n
    He crew too,\n
    We both crode...\n`,
  },
  {
    label: '⸜(｡˃ ᵕ ˂ )⸝♡🎂',
    description: 
    `Now that you've made it here you can 
    unwrap your present!!!`,
  },
];

export const MiddleSequence = ({randomSound,handlePresent}) => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    randomSound();
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    randomSound();
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    randomSound();
    setActiveStep(0);
  };

  return (
    <Box
      sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      width: '100vw'
    }}
    >
      <Box 
        sx={{ 
          maxWidth: 400
        }}
      >
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel
              >
                {step.label}
              </StepLabel>
              <StepContent>
                <pre>{step.description}</pre>
                <Box sx={{ mb: 2 }}>
                  {index === steps.length - 1 ? (
                    <Button
                      variant="primary"
                      onClick={handlePresent}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      🎁
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Continue
                    </Button>
                  )}
                  <Button
                    variant="primary"
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button variant="primary" onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </Box>
  )
}

export default MiddleSequence;