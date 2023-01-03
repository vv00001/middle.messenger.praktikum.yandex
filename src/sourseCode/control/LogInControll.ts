import LoginInterface from "../Interfaces/LoginInterface";
import {LoginData,SignupType} from '../globalTypes'
import store from '../../mypracticum/Store';
import router from "../../mypracticum/Router";

export class LogInControll {
  public signin({ ...rest }: LoginData) {
    LoginInterface.signin({ ...rest })
    .then(() => {
      router.go("/messenger");
    })
    .catch(()=>{
      console.log("error")
    })
  }
  public getProfile() {
    LoginInterface.getProfile()
    .then(({ response }: any) => {
      store.set({ userInfo: JSON.parse(response) });
    })
    .catch(()=>{
      console.log("error")
    })
  }
  public exit() {
    LoginInterface.exit()
    .then(() => {
      router.go("/");
    })
  }
  public signup({ ...rest }: SignupType) {
    LoginInterface.signup({ ...rest })
    .then(() => {
      router.go("/messenger");
    })
  }
  public check(){
    LoginInterface.getProfile()
    .then(()=>{
      router.go("/messenger");
    })
    .catch(()=>{
      // .catch(e=>{
      router.go("/");
    })
  }
}
export default new LogInControll();
