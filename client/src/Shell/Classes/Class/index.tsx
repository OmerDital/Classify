import {
  Card, Grid, Stack, Typography
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import { useParams } from 'react-router-dom';
import { Class } from '../../../../../common/view-models/class';
import { useFetch } from '../../../hooks';
import ClassDetails from './ClassDetails';
import { useAlert } from '../../../providers/Alert';

const SpecificClass = () => {
  const { classId } = useParams();
  const [currentClass, , isError] = useFetch<Class>(['classes', classId], `classes/${classId}`);

  if (isError) {
    const { error: alertError } = useAlert();
    alertError('משהו השתבש, אנא נסה שוב מאוחר יותר');
  }

  return (
    <Grid container p={2}>
      {currentClass && <ClassDetails classProp={currentClass} item xs={3} /> }
      <Grid container item xs={5} flexWrap='wrap' mx='10%' rowSpacing={2}>
        {currentClass?.students.map(({ _id, firstName, lastName }) => (
          <Grid item key={_id} xs={6}>
            <Card sx={{ p: '6px', mx: 1, width: '80%' }}>
              <Stack direction='row' spacing={1}>
                <ImageIcon />
                <Typography variant='body2'>{`${firstName} ${lastName}`}</Typography>
              </Stack>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default SpecificClass;