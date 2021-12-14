import { Schema } from 'mongoose';
import { StudentParameters } from '../../../../common/view-models/student/student-parameters';

const schema = new Schema<StudentParameters>({
  emotional: {
    type: Number,
    required: false,
  },
  social: {
    type: Number,
    required: false,
  },
  educational: {
    type: Number,
    required: false,
  },
});

export default schema;