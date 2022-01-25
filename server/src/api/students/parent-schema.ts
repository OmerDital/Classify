import { Schema } from 'mongoose';
import { StudentParent } from '../../../../common/view-models/student/student-parent';

const schema = new Schema<StudentParent>({
  name: String,
  phoneNumber: String,
  email: String,
  idNumber: Number,
});

export default schema;