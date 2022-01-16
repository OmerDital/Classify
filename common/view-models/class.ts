import { Student } from './student';
import { BaseViewModel } from './base-view-model';

export interface Class extends BaseViewModel{
  number: number,
  students: Student[]
}