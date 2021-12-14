import { Gender } from '../../enums/gender';
import {BaseViewModel} from "../base-view-model";
import { StudentParent } from './student-parent';
import { StudentParameters } from './student-parameters';

export interface Student extends BaseViewModel {
  idNumber: string,
  name: string,
  city: string,
  gender: Gender,
  phoneNumber: string,
  parentA: StudentParent
  parentB?: StudentParent,
  parameters: StudentParameters,
  requestedFriends?: [string]
}