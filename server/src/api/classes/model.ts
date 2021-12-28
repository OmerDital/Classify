import { model, Schema } from 'mongoose';
import { Class } from '../../../../common/view-models/class';

const schema = new Schema<Class>({
  number: {
    type: Number,
    required: true
  },
  students: [{ type: Schema.Types.ObjectId, ref: 'Student' }]
});

export default model('Class', schema, 'classes');