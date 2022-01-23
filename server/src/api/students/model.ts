import { Schema, model } from 'mongoose';
import { Student } from '../../../../common/view-models/student';
import { Gender } from '../../../../common/enums/gender';
import ParentSchema from './parent-schema';
import ParametersSchema from './parameters-schema';

const schema = new Schema<Student>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true,
  },
  gender: {
    type: Number,
    enum: [Gender.female, Gender.male],
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  parentA: {
    type: ParentSchema,
    required: true
  },
  parentB: {
    type: ParentSchema,
    required: false
  },
  requestedFriends: {
    type: [String],
    required: true,
  },
  parameters: {
    type: ParametersSchema,
    required: true
  }
});

export default model('Student', schema, 'students');