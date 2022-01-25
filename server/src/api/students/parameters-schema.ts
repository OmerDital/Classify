import { Schema } from 'mongoose';
import { StudentParameters } from '../../../../common/view-models/student/student-parameters';

const schema = new Schema<StudentParameters>({
  emotional: Number,
  social: Number,
  educational: Number,
});

export default schema;