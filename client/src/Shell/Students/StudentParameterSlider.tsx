import { Grid, Slider, Typography } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

const marks = [
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3'
  }, {
    value: 4,
    label: '4'
  }, {
    value: 5,
    label: '5'
  },
];

interface StudentParameterSliderProps {
  label: string
  setField: Dispatch<SetStateAction<number>>,
  field: number
}

const StudentParameterSlider = ({ label, setField, field }: StudentParameterSliderProps) => {
  const handleSliderChange = (event: Event, newValue: number) => {
    setField(newValue);
  };

  return (
    <Grid container justifyContent='space-between'>
      <Grid item xs={4}>
        <Typography variant='h6'>{label}</Typography>
      </Grid>
      <Grid item xs={8}>
        <Slider
          aria-label={label}
          defaultValue={1}
          step={1}
          marks={marks}
          min={1}
          max={5}
          value={field}
          onChange={(e, newValue) => handleSliderChange(e, newValue as number)}
        />
      </Grid>
    </Grid>
  );
};

export default StudentParameterSlider;