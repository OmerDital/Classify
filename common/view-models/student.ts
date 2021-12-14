import { Gender } from '../enums/gender';
import {BaseViewModel} from "./base-view-model";

export interface Student extends BaseViewModel {
  idNumber: string,
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