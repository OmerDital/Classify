import {
  Card, CardContent, Grid, GridProps, Typography
} from '@mui/material';
import { Class } from '../../../../../common/view-models/class';

interface ClassDetailsProps extends GridProps{
  classProp: Class
}

const ClassDetails = ({ classProp, ...gridProps } : ClassDetailsProps) => (
  <Grid container direction='column' p={2} {...gridProps}>
    <Typography variant='h4' color='primary' gutterBottom>
      {`כתה ${classProp?.number} X`}
    </Typography>
    <Typography variant='h4' color='primary' gutterBottom>
      מחנך\ת:
    </Typography>
    <Card>
      <CardContent>
        <Typography variant='body1'>מספר בנות:</Typography>
        <Typography variant='body1'>מספר בנים:</Typography>
        <Typography variant='body1'>יישוב</Typography>
        <Typography variant='body1'>קשב לימודי</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default ClassDetails;