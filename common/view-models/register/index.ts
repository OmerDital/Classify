import { Gender } from '../../enums/gender';
import {BaseViewModel} from '../base-view-model';
import {StudentParent} from '../student/student-parent';
import {AnotherStudent} from '../student/another-student';

interface RegisterViewModel extends BaseViewModel {
  firstName: string,
  lastName: string,
  gender: Gender,
  dateOfBirth: Date,
  idNumber: number,
  phoneNumber: number,
  address: string,
  lastSchool: string,
  parentA: StudentParent,
  parentB: StudentParent,
  friendA: AnotherStudent,
  friendB: AnotherStudent,
  friendC: AnotherStudent,
  hatedStudent: AnotherStudent,
}

export default RegisterViewModel;