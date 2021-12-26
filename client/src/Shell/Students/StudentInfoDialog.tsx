import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog, Skeleton } from '@mui/material';
import { Student } from '../../../../common/view-models/student';
import { useFetch } from '../../hooks';
import { axiosInstance } from '../../utils/axios-instance';
import StudentInfoCard from './StudentInfoCard';

const onUpdate = (newStudent: Student) => axiosInstance.put(`api/students/${newStudent._id}`, newStudent);

interface StudentInfoDialogProps {
  open: boolean,
}

const StudentInfoDialog = ({ open }: StudentInfoDialogProps) => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const [student, isLoading] = useFetch<Student>(`students/${id}`);

  const [updatedStudent, setUpdatedStudent] = useState<Student>();

  useEffect(() => {
    setUpdatedStudent(student);
  }, [student]);


  const onDismiss = () => {
    updatedStudent && onUpdate(updatedStudent);

    navigate(-1);
  };

  return (
    <Dialog
      fullWidth
      maxWidth='lg'
      open={open}
      onClose={onDismiss}
    >
      {isLoading || !updatedStudent
        ? <Skeleton sx={{ height: 300 }} />
        : <StudentInfoCard student={updatedStudent} setStudent={setUpdatedStudent} />}
    </Dialog>
  );
};

export default StudentInfoDialog;