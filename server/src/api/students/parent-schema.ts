import { Schema } from 'mongoose';
import { StudentParent } from '../../../../common/view-models/student/student-parent';

const schema = new Schema<StudentParent>({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

export default schema;