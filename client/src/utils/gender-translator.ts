import { Gender } from '../../../common/enums/gender';

export const getGenderAsString = (gender: Gender) => (gender === Gender.female ? 'נקבה' : 'זכר');