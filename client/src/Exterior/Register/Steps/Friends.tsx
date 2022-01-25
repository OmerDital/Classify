import { Grid } from '@mui/material';
import { TextInput } from '../../../components/form';

const Friends = () => (
  <Grid container>
    <Grid container spacing={2}>
      <Grid item xs>
        <TextInput name='friendA.name' label='חבר א' fullWidth autoFocus margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='friendA.address' label='מקום מגורים' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs>
        <TextInput name='friendB.name' label='חבר ב' fullWidth autoFocus margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='friendB.address' label='מקום מגורים' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs>
        <TextInput name='friendC.name' label='חבר ג' fullWidth autoFocus margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='friendC.address' label='מקום מגורים' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container spacing={2}>
      <Grid item xs>
        <TextInput name='hatedStudent.name' label='אסור להיות עם...' fullWidth autoFocus margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='hatedStudent.address' label='מקום מגורים' fullWidth margin='normal' />
      </Grid>
    </Grid>
  </Grid>
);

export default Friends;