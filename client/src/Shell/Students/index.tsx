import {
  Grid, Paper, Skeleton, Stack, Typography
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { Link, useLocation } from 'react-router-dom';
import { Student } from '../../../../common/view-models/student';
import { useFetch } from '../../hooks';

const Students = () => {
  const [students, isLoading, error] = useFetch<Student[]>('students');
  const location = useLocation();

  if (isLoading) return <Skeleton><Typography variant='h6' /></Skeleton>;

  if (error) return <div>Error</div>;

  return (
    <Grid container sx={{ overflow: 'auto' }} padding={2} spacing={2}>
      {students?.map(student => (
        <Grid item key={student._id} xs={3}>
          <Link to={`/students/${student._id}`} state={{ backgroundLocation: location }}>
            <Paper sx={{ p: 1 }}>
              <Stack direction='row' alignItems='center'>
                {student.educational && student.emotional && student.social && <CheckIcon /> }
                <Typography variant='h6'>{student.name}</Typography>
              </Stack>
            </Paper>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};

export default Students;