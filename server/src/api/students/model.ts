import { Schema, model } from 'mongoose';
import { Gender } from '../../../../common/enums/gender';
import ParentSchema from './parent-schema';
import ParametersSchema from './parameters-schema';
import FriendSchema from './friend-schema';

const schema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true
  },
  idNumber: Number,
  address: String,
  gender: {
    type: Number,
    enum: [Gender.female, Gender.male]
  },
  dateOfBirth: Date,
  phoneNumber: String,
  parentA: ParentSchema,
  parentB: ParentSchema,
  requestedFriends: [FriendSchema],
  parameters: ParametersSchema,
  lastSchool: String,
  hatedStudent: FriendSchema,
});

export default model('Student', schema, 'students');