import MainClass, {LoginInterface, LoginData,SignupType} from '../Interfaces/LoginInterface';
import store from '../../mypracticum/Store';
import router from "../../mypracticum/Router";

export class LogInControll {
  private readonly aplicationPI: LoginInterface;

  constructor() {
    this.aplicationPI = MainClass;
  }

  public signin({ ...rest }: LoginData) {
    console.log({...rest})
    MainClass.signin({ ...rest })
    .then(() => {
      router.go("/messenger");
    })
  }
  public getProfile() {
    MainClass.getProfile()
    .then(({ response }: any) => {
      console.log(response)
      store.set({ responseInfo: JSON.parse(response) });
    })
  }
  public exit() {
    MainClass.exit()
    .then(() => {
      router.go("/");
    })
  }
  public signup({ ...rest }: SignupType) {
    MainClass.signup({ ...rest })
    .then(() => {
      router.go("/messenger");
    })
  }

}
export default new LogInControll();
