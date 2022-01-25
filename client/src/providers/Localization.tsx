import { FC } from 'react';
import { LocalizationProvider } from '@mui/lab';
import MomentAdapter from '@mui/lab/AdapterMoment';
import 'moment/locale/he';
// not working :( - checkkkkkkk
const Localization: FC = ({ children }) => <LocalizationProvider dateAdapter={MomentAdapter} locale='he'>{children}</LocalizationProvider>;

export default Localization;