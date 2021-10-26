import { Schema, model } from 'mongoose';

enum Gender {
  male = 1,
  female,
}

interface User {
  id: string,
  name: string,
  city: string,
  gender: Gender,
  phoneNumber: string,
  parentAName: string,
  parentAPhoneNumber: string,
  parentAEmail: string,
  parentBName?: string,
  parentBPhoneNumber?: string,
  parentBEmail?: string,
  emotional?: number,
  educational?: number,
  social?: number,
  requestedFriends?: [string]
}

const schema = new Schema<User>({
  id: {
    type: String,
    required: true,
  },
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
