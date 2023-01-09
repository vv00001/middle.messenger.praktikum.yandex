import MainClass from './MainClass';
import {LoginData,SignupType} from '../globalTypes';

export class LoginInterface extends MainClass {
  constructor() {
    super('/auth');
  }
  public signin({ ...rest }: LoginData) {
    return this.post('signin', { ...rest });
  }
  public getProfile() {
    return this.get('user');
  }
  public exit() {
    return this.post('logout', {});
  }
  public signup({ ...rest }: SignupType) {
    return this.post('signup', { ...rest });
  }
}
export default new LoginInterface();
