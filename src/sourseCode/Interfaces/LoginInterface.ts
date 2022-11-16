import MainClass from './MainClass';

export interface LoginData {
  login: string;
  password: string;
}

export class LoginInterface extends MainClass {
  constructor() {
    super('/auth');
  }

  signin(data: LoginData) {
    return this.https.post('/signin', data);
  }

  read(): Promise<User> {
    return this.https.get('/user');
  }
}

export default new LoginInterface();
