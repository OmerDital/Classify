import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import {
  Container, Stack, Avatar, Typography, Box, Button, Stepper, Step, StepLabel
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import steps from './Steps';
import RegisterValues from '../../../../common/view-models/register';
import useMutate from '../../hooks/use-mutate';

const Register = () => {
  const [activeStep, setActiveStep] = useState(0);
  const methods = useForm<RegisterValues>();
  const [mutate] = useMutate('students', 'register', 'post');

  const onSubmit = data => {
    // TODO: Authenticate
    console.log(data);
    mutate(data);
  };

  return (
    <FormProvider {...methods}>
      <Container maxWidth='xs' sx={{ pt: 5 }}>
        <Stack alignItems='center'>
          <Avatar sx={{ bgcolor: 'primary.main', m: 1 }}>
            <LockOutlined />
          </Avatar>
          <Typography variant='h4'>
            צור חשבון חדש
          </Typography>
          <Box component='form' onSubmit={methods.handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <Stepper activeStep={activeStep}>
              {steps.map(({ label }) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            {steps.map(({ Component, label }, index) => (
              <Box key={label} sx={{ display: activeStep === index ? 'block' : 'none' }}>
                <Component />
              </Box>
            ))}
            {activeStep === (steps.length - 1)
              ? <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>התחבר/י</Button>
              : (
                <Button
                  fullWidth
                  variant='contained'
                  sx={{ mt: 3, mb: 2 }}
                  onClick={e => {
                    e.preventDefault();
                    setActiveStep(x => (x + 1));
                  }}
                >
                  הבא
                </Button>
              )}
          </Box>
        </Stack>
      </Container>
    </FormProvider>
  );
};

export default Register;