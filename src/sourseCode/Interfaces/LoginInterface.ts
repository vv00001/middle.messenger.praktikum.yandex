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
}

export default new LoginInterface();
