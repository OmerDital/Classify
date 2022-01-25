import { Grid, Paper, Typography } from '@mui/material';
import { Student } from '../../../../../common/view-models/student';
import { getGenderAsString } from '../../../utils/gender-translator';

interface StudentInfoField {
  label: string;
  value: 'gender' | 'idNumber' | 'address' | 'phoneNumber';
}

const infoFields = [
  { label: 'מין', value: 'gender' },
  { label: 'תז', value: 'idNumber' },
  { label: 'כתובת', value: 'address' },
  { label: 'מספר טלפון', value: 'phoneNumber' },
] as StudentInfoField[];

const StudentFields = ({ student }: { student: Student }) => (
  <Grid container item xs direction='column'>
    <Paper sx={{ height: '170px', width: '200px', alignSelf: 'center' }}>תמונה</Paper>
    {infoFields.map(field => (
      <Typography key={field.label} variant='body1' gutterBottom>
        {field.label}
        {': '}
        {field.value === 'gender' ? getGenderAsString(student.gender) : student[field.value]}
      </Typography>
    ))}
  </Grid>
);

export default StudentFields;