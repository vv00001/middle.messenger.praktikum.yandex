import { input } from "../../component/input/input"
import Block from "../../mypracticum/Block"
import { NotFoundPage } from "../notFound/notFound"
import { validate } from "../../sourseCode/validate"
import "./login.css"

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
      <a class="signin__link" href="./notFound">Нет аккаунта?</a>
    </form>
    </main>
    `
  }
}