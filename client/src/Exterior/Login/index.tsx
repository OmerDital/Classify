import { useForm, FormProvider } from 'react-hook-form';
import {
  Container, Stack, Avatar, Typography, Box, Button, FormControlLabel, Grid, Link
} from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import { TextInput, CheckboxInput } from '../../components/form';

interface LoginValues {
  username: string,
  password: string
}

const Login = () => {
  const methods = useForm<LoginValues>();

  const onSubmit = data => {
    // TODO: Authenticate
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <Container maxWidth='xs' sx={{ pt: 5 }}>
        <Stack alignItems='center'>
          <Avatar sx={{ bgcolor: 'primary.main', m: 1 }}>
            <LockOutlined />
          </Avatar>
          <Typography variant='h4'>
            התחבר/י לClassify
          </Typography>
          <Box component='form' onSubmit={methods.handleSubmit(onSubmit)} sx={{ mt: 1 }}>
            <TextInput name='username' label='שם משתמש' fullWidth autoFocus autoComplete='username' margin='normal' />
            <TextInput name='password' label='סיסמא' textType='password' fullWidth autoComplete='current-password' margin='normal' />
            <FormControlLabel label='זכור אותי' control={<CheckboxInput name='remember' />} />
            <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>התחבר/י</Button>
          </Box>
          <Grid container>
            <Grid item xs>
              {/* TODO: create forget password service */}
              <Link href='/register' variant='body2'>
                שכחתי את הסיסמא
              </Link>
            </Grid>
            <Grid item>
              <Link href='/register' variant='body2'>
                ליצירת חשבון חדש
              </Link>
            </Grid>
          </Grid>
        </Stack>
      </Container>
    </FormProvider>
  );
};

export default Login;