import { Input } from "../../component/input/input"
import { Button }from "../../component/button/button"
import Block from "../../mypracticum/Block"
import { validate } from "../../sourseCode/validate"
import "./login.css"
import MainClass from "../../sourseCode/Interfaces/MainClass"
import LogInControll from "../../sourseCode/control/LogInControll"
import router from "../../mypracticum/Router"
import {LoginData} from '../../sourseCode/globalTypes';

export class LoginPage extends Block {
  constructor() {
    super()
    this.setProps({
      loginValue: "",
      passwordValue: "",
      onSubmit: () => {
        let loginHTML = this.element.querySelector("input[name='login']") as HTMLInputElement
        let passwordHTML = this.element.querySelector("input[name='password']") as HTMLInputElement

        let messageErrorlogin = validate(loginHTML.value,"login")
        let messageErrorpassword = validate(passwordHTML.value,"password" )


        if(!messageErrorlogin && !messageErrorpassword){
          let login =loginHTML.value
          let password =passwordHTML.value
          if(login!="" && password!=""){
            const sedLogin={
              login:login,
              password:password
            }
            LogInControll.signin(sedLogin as LoginData);
          }
          else{
            console.log("enter plz")
          }
        }
        else
        console.log("исправте ошибки выделеные красным цветом, пожалуйста")

      },
      onRegister:()=>{
        router.go("/register")
      }
    })
  }

  render() {
    return `
  <main class="mainclass">
    <form class="signin">
      {{{Title firstLine="Вход"}}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="login"
        value=loginValue
        classes="input__text-field"
        placeholder="Ваш логин"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus

        name="password"
        value=passwordValue

        type="text"
        classes="input__text-field"
        placeholder="Пароль"
      }}}
      {{{Button textBtn="Войти" classes="button" onClick=onSubmit }}}
      {{{Button textBtn="Нет аккаунта?" classes="button__signup_link" onClick=onRegister }}}
    </form>
    </main>
    `
  }
}
