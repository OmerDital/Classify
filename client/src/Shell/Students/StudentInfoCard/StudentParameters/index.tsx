import { Dispatch, SetStateAction } from 'react';
import { Grid, Typography } from '@mui/material';
import StudentParameterSlider from './StudentParameterSlider';
import { Student } from '../../../../../../common/view-models/student';

type StudentParameter = 'emotional' | 'social' | 'educational';

interface StudentParametersProps {
  student: Student;
  setStudent: Dispatch<SetStateAction<Student | undefined>>
}

const StudentParameters = ({ student, setStudent } : StudentParametersProps) => {
  const onParameterChange = (newValue: number, field: StudentParameter) => {
    const newStudent = { ...student };
    newStudent.parameters[field] = newValue;
    setStudent(newStudent);
  };

  const sliders = [
    { label: 'לימודי', parameter: student.parameters.educational || 0, onSliderChange: (newValue: number) => onParameterChange(newValue, 'educational') },
    { label: 'חברתי', parameter: student.parameters.social || 0, onSliderChange: (newValue: number) => onParameterChange(newValue, 'social') },
    { label: 'התנהגותי', parameter: student.parameters.emotional || 0, onSliderChange: (newValue: number) => onParameterChange(newValue, 'emotional') }
  ];

  return (
    <Grid container item xs direction='column' p={2}>
      <Typography variant='h6' gutterBottom sx={{ textDecoration: 'underline' }}>
        דירוג על פי המדדים
        הבאים
      </Typography>
      <Grid container direction='column'>
        {sliders.map(slider => (
          <StudentParameterSlider
            key={slider.label}
            label={slider.label}
            parameter={slider.parameter}
            onSliderChange={slider.onSliderChange}
          />
        ))}
      </Grid>
    </Grid>
  );
};

export default StudentParameters;