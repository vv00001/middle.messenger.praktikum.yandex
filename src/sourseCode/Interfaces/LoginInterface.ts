import MainClass from './MainClass';

export interface LoginData {
  login: string;
  password: string;
}

export class LoginInterface extends MainClass {
  constructor() {
    super('/auth');
  }

  public signin({ ...rest }: SigninType) {
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
