import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Dialog, Divider, Grid, Paper, Skeleton, Typography
} from '@mui/material';
import StudentParameterSlider from './StudentParameterSlider';
import { Student } from '../../../../common/view-models/student';
import { useFetch } from '../../hooks';
import { getGenderAsString } from '../../utils/gender-translator';
import { axiosInstance } from '../../utils/axios-instance';

const onUpdate = (newStudent: Student) => axiosInstance.put(`api/students/${newStudent._id}`, newStudent);

interface StudentDialogProps {
  open: boolean,
}

const StudentDialog = ({ open }: StudentDialogProps) => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const [student, isLoading] = useFetch<Student>(`students/${id}`);

  const [social, setSocial] = useState(student?.social || 0);
  const [educational, setEducational] = useState(student?.educational || 0);
  const [emotional, setEmotional] = useState(student?.emotional || 0);

  useEffect(() => {
    student?.educational && setEducational(student.educational);
    student?.emotional && setEmotional(student.emotional);
    student?.social && setSocial(student.social);
  }, [student]);


  const onDismiss = () => {
    student && onUpdate({
      ...student, emotional, social, educational
    } as Student);

    navigate(-1);
  };

  return (
    <Dialog
      fullWidth
      maxWidth='lg'
      open={open}
      onClose={onDismiss}
    >
      {isLoading || !student
        ? <Skeleton sx={{ height: 300 }} />
        : (
          <Grid container direction='column'>
            <Grid item alignSelf='center'>
              <Typography variant='h5'>
                שם התלמיד:
                {' '}
                {student.name}
              </Typography>
            </Grid>
            <Grid container justifyContent='space-around' p={2}>
              <Grid container item xs direction='column'>
                <Paper sx={{ height: '170px', width: '200px', alignSelf: 'center' }}>תמונה</Paper>
                <Typography variant='body1' gutterBottom>
                  מין:
                  {' '}
                  {getGenderAsString(student.gender)}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  ת.ז:
                  {' '}
                  {student.idNumber}
                </Typography>
                <Typography variant='body1' gutterBottom>
                  יישוב:
                  {' '}
                  {student.city}
                </Typography>
                <Typography variant='body1'>
                  מספר טלפון:
                  {' '}
                  {student.phoneNumber}
                </Typography>
              </Grid>
              <Divider orientation='vertical' flexItem />
              <Grid container item xs direction='column' p={2}>
                <Typography variant='h6' gutterBottom sx={{ textDecoration: 'underline' }}>דירוג על פי המדדים הבאים</Typography>
                <Grid container direction='column'>
                  <StudentParameterSlider label='לימודי' setField={setEducational} field={educational} />
                  <StudentParameterSlider label='חברתי' setField={setSocial} field={social} />
                  <StudentParameterSlider label='התנהגותי' setField={setEmotional} field={emotional} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
    </Dialog>
  );
};

export default StudentDialog;