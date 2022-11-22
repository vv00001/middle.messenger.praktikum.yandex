import MainClass, {LoginInterface, LoginData} from '../Interfaces/LoginInterface';
import store from '../mypracticum/Store';
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

}
export default new LogInControll();
