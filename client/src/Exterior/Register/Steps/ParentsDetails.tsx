import { Grid } from '@mui/material';
import { TextInput } from '../../../components/form';

const ParentsDetails = () => (
  <Grid container>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='parentA.name' label='הורה א' fullWidth autoFocus margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='parentB.name' label='הורה ב' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='parentA.idNumber' label='תעודת זהות' fullWidth margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='parentB.idNumber' label='תעודת זהות' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='parentA.email' label='מייל' fullWidth margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='parentB.email' label='מייל' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='parentA.phoneNumber' label='מספר טלפון' fullWidth margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='parentB.phoneNumber' label='מספר טלפון' fullWidth margin='normal' />
      </Grid>
    </Grid>
  </Grid>
);

export default ParentsDetails;