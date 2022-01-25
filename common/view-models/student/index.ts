import { Gender } from '../../enums/gender';
import { StudentParent } from './student-parent';
import { StudentParameters } from './student-parameters';
import { BasicStudentInfo } from './basic-student-info';

export interface Student extends BasicStudentInfo {
  idNumber: string,
  address: string,
  gender: Gender,
  phoneNumber: string,
  parentA: StudentParent
  parentB?: StudentParent,
  parameters: StudentParameters,
  requestedFriends?: [string]
}