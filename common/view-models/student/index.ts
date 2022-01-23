import { Gender } from '../../enums/gender';
import {BaseViewModel} from "../base-view-model";
import { StudentParent } from './student-parent';
import { StudentParameters } from './student-parameters';
import { BasicStudentInfo } from './basic-student-info';

export interface Student extends BasicStudentInfo {
  idNumber: string,
  city: string,
  gender: Gender,
  phoneNumber: string,
  parentA: StudentParent
  parentB?: StudentParent,
  parameters: StudentParameters,
  requestedFriends?: [string]
}