import { input } from "../../component/input/input"
import Block from "../../mypracticum/Block"
import { NotFoundPage } from "../notFound/notFound"
import "./login.css"

export class LoginPage extends Block {
  constructor() {
    super()
    // console.log({input})
    this.setProps({
      loginValue: "",
      passwordValue: ""
      
    })
  }

  render() {
    return `    
  <main >
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