import MainClass, {LoginInterface, LoginData,SignupType} from '../Interfaces/LoginInterface';
import store from '../../mypracticum/Store';
import router from "../../mypracticum/Router";

export class LogInControll {
  private readonly aplicationPI: LoginInterface;

  constructor() {
    this.aplicationPI = MainClass;
  }

  public signin({ ...rest }: LoginData) {
    MainClass.signin({ ...rest })
    .then(() => {
      router.go("/messenger");
    })
    .catch(()=>{
        
    })
  }
  public getProfile() {
    MainClass.getProfile()
    .then(({ response }: any) => {
      store.set({ userInfo: JSON.parse(response) });
    })
    .catch(()=>{
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
  public check(){
    MainClass.getProfile()
    .then(()=>{
      router.go("/messenger");
    })
    .catch(e=>{
      router.go("/");
    })
  }
}
export default new LogInControll();
