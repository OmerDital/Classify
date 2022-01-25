import { Schema } from 'mongoose';
import { Gender } from '../../../../common/enums/gender';

const schema = new Schema({
  name: String,
  address: String,
  gender: {
    type: Number,
    enum: [Gender.female, Gender.male],
  }
});

export default schema;