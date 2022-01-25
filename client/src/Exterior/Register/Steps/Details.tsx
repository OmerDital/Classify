import { Grid, MenuItem } from '@mui/material';
import { Gender } from '../../../../../common/enums/gender';
import { DateInput, SelectInput, TextInput } from '../../../components/form';
import { getGenderAsString } from '../../../utils/gender-translator';

const Details = () => (
  <Grid container>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='firstName' label='שם פרטי' fullWidth autoFocus margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='lastName' label='שם משפחה' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item xs>
        <SelectInput name='gender' label='מין' fullWidth defaultValue={Gender.male}>
          {/* TODO: object.keys - need to selec twhere to do this */}
          <MenuItem value={Gender.male}>{getGenderAsString(Gender.male)}</MenuItem>
          <MenuItem value={Gender.female}>{getGenderAsString(Gender.female)}</MenuItem>
        </SelectInput>
      </Grid>
      <Grid item xs>
        <DateInput name='dateOfBirth' label='תאריך לידה' />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='idNumber' label='תעודת זהות' fullWidth margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='phoneNumber' label='מספר טלפון' fullWidth margin='normal' />
      </Grid>
    </Grid>
    <Grid container item spacing={2}>
      <Grid item xs>
        <TextInput name='address' label='כתובת' fullWidth margin='normal' />
      </Grid>
      <Grid item xs>
        <TextInput name='lastSchool' label='מוסד לימודים אחרון' fullWidth margin='normal' />
      </Grid>
    </Grid>
  </Grid>
);

export default Details;