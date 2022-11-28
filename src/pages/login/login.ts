import { input } from "../../component/input/input"
import { Button }from "../../component/button/button"
import Block from "../../mypracticum/Block"
import { validate } from "../../sourseCode/validate"
import "./login.css"
import MainClass from "../../sourseCode/Interfaces/MainClass"
import LogInControll from "../../sourseCode/control/LogInControll"
import router from "../../mypracticum/Router"


export class LoginPage extends Block {
  constructor() {
    super()
    this.setProps({
      loginValue: "",
      passwordValue: "",
      onSubmit: () => {
        let login = this.element.querySelector("input[name='login']") as HTMLInputElement
        let password = this.element.querySelector("input[name='password']") as HTMLInputElement

        let messageErrorlogin = validate(login.value )
        let messageErrorpassword = validate(password.value )
       

        if(!messageErrorlogin && !messageErrorpassword)
        console.log("отправка ", login.value,password.value);
        else
        console.log("исправте ошибки выделеные красным цветом, пожалуйста") 
        const lll={
          login:"qqqqqqqqqqqqqqqqqqq",
          password:"Jjnvo390xkk"
        }
        LogInControll.signin(lll as LoginData);
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
