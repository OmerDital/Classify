import { Grid } from '@mui/material';
import { Class } from '../../../../../common/view-models/class';
import ClassCard from './ClassCard';

const ClassesList = ({ classes }: { classes: Class[] }) => (
  <Grid container spacing={2} justifyContent='center' alignItems='center' p={2}>
    {classes.map(x => (
      <Grid item container justifyContent='center' key={x._id} xs={3}>
        <ClassCard classProp={x} />
      </Grid>
    ))}
  </Grid>
);

export default ClassesList;