import { Schema, model } from 'mongoose';
import { Student } from '../../../../common/view-models/student';
import { Gender } from '../../../../common/enums/gender';

const schema = new Schema<Student>({
  name: {
    type: String,
    required: true,
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
  parentAName: {
    type: String,
    required: true,
  },
  parentAPhoneNumber: {
    type: String,
    required: true,
  },
  parentAEmail: {
    type: String,
    required: true,
  },
  parentBName: {
    type: String,
    required: false,
  },
  parentBPhoneNumber: {
    type: String,
    required: false,
  },
  parentBEmail: {
    type: String,
    required: false,
  },
  requestedFriends: {
    type: [String],
    required: true,
  },
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

export default model('Student', schema, 'students');