import {BaseViewModel} from '../base-view-model';

interface LoginViewModel extends BaseViewModel {
  username: string,
  password: string
};

export default LoginViewModel;