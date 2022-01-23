import { Card, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Class } from '../../../../../common/view-models/class';

const ClassCard = ({ classProp } : { classProp: Class }) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ width: '50%', cursor: 'pointer' }} onClick={() => navigate(`/classes/${classProp._id}`)}>
      <CardContent>
        <Typography variant='h4' color='primary' fontWeight='bold'>
          {classProp.number}
          X
        </Typography>
        <Typography variant='h4'>
          מחנך:
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ClassCard;