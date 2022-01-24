import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Dialog, Skeleton } from '@mui/material';
import { Student } from '../../../../common/view-models/student';
import { useFetch } from '../../hooks';
import StudentInfoCard from './StudentInfoCard';
import useMutate from '../../hooks/use-mutate';

interface StudentInfoDialogProps {
  open: boolean,
}

const StudentInfoDialog = ({ open }: StudentInfoDialogProps) => {
  const navigate = useNavigate();
  const { id } = useParams<'id'>();
  const [student, isLoading] = useFetch<Student>(['students', id], `students/${id}`);
  const [mutate] = useMutate(['students', id], `students/${id}`, 'put');

  const [updatedStudent, setUpdatedStudent] = useState<Student>();

  useEffect(() => {
    setUpdatedStudent(student);
  }, [student]);

  const onUpdate = (newStudent: Student) => mutate(newStudent);

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