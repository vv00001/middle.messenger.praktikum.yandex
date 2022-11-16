import MainClass, {LoginInterface, LoginData} from '../Interfaces/LoginInterface';
import store from '../mypracticum/Store';
import router from "../../mypracticum/Router";

export class LogInControll {
  private readonly aplicationPI: LoginInterface;

  constructor() {
    this.aplicationPI = MainClass;
  }

  async signin(data: LoginData) {
    console.log(data);
    try {
    await this.aplicationPI.signin(data);

    // router.go(;
    console.log(3333333333333333333333333333333333333)
    } catch (e: any) {
    console.error(e);  
    }
  }

}
export default new LogInControll();
