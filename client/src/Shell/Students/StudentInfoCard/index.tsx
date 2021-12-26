import { Dispatch, SetStateAction } from 'react';
import {
  Divider, Grid, Typography
} from '@mui/material';
import { Student } from '../../../../../common/view-models/student';
import StudentFields from './StudentFields';
import StudentParameters from './StudentParameters';

interface StudentInfoCardProps {
  student: Student;
  setStudent: Dispatch<SetStateAction<Student | undefined>>
}

const StudentInfoCard = ({ student, setStudent }: StudentInfoCardProps) => (
  <Grid container direction='column'>
    <Grid item alignSelf='center'>
      <Typography variant='h5'>
        שם התלמיד:
        {' '}
        {student.name}
      </Typography>
    </Grid>
    <Grid container justifyContent='space-around' p={2}>
      <StudentFields student={student} />
      <Divider orientation='vertical' flexItem />
      <StudentParameters student={student} setStudent={setStudent} />
    </Grid>
  </Grid>
);

export default StudentInfoCard;