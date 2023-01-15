import Block from "../../mypracticum/Block"
import "./register.css"
import router from "../../mypracticum/Router"
import LogInControll from "../../sourseCode/control/LogInControll"
import {SignupType} from '../../sourseCode/globalTypes';

import {validate} from "../../sourseCode/validate"

export class Register extends Block {
  constructor(){
    super()
    this.setProps({
      onSubmit: () => {
        let login = this.element.querySelector("input[name='login']") as HTMLInputElement
        let secondName= this.element.querySelector("input[name='secondName']") as HTMLInputElement
        let mail= this.element.querySelector("input[name='mail']") as HTMLInputElement
        let profileName= this.element.querySelector("input[name='profileName']") as HTMLInputElement
        let password= this.element.querySelector("input[name='password']") as HTMLInputElement
        let password_repeat= this.element.querySelector("input[name='password_repeat']") as HTMLInputElement
        let phone= this.element.querySelector("input[name='phone']") as HTMLInputElement
        let messageErrorlogin = validate(login.value,"login")
        const signData={
          password: password.value,
          email: mail.value,
          login: login.value,
          first_name: profileName.value,
          second_name: secondName.value,
          phone:phone.value
        }
        if(!messageErrorlogin  &&!
          validate(secondName.value,"secondName") &&!
          validate(profileName.value,"profileName") &&!
          validate(mail.value,"mail")  &&!
          validate(password.value,"password")  &&!
          validate(password_repeat.value,"repeateNewPassword") &&!
          validate(phone.value,"phone")){
            LogInControll.signup(signData as SignupType);
        }
        else
        console.log("исправьте ошибки выделенные красным цветом, пожалуйста. Проверка на совпадение паролей в разработке")
      },
      toLogIn:()=>{
        router.go("/")
      }
    })
  }
   render():string {
   return `
   <main class="register">
    <form class="register__profile">
      {{{Title firstLine="Регистрация"}}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="login"
        classes="input__text-field"
        placeholder="Логин"
        errorClass="error"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="mail"
        classes="input__text-field"
        placeholder="Почта"
        errorClass="error"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="profileName"
        classes="input__text-field"
        placeholder="Имя"
        errorClass="error"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="secondName"
        classes="input__text-field"
        placeholder="Фамилия"
        errorClass="error"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="password"
        classes="input__text-field"
        placeholder="Пароль"
        errorClass="error"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="password_repeat"
        classes="input__text-field"
        placeholder="Повторите пароль"
        errorClass="error"
      }}}
      {{{mainInput
        onInput=onInput
        onFocus=onFocus
        type="text"
        name="phone"
        classes="input__text-field"
        placeholder="Телефон"
        errorClass="error"
      }}}
      {{{Button textBtn="Сохранить" classes="button button__edit_pro" onClick=onSubmit }}}
      {{{Button textBtn="Вход" classes="button button__edit_pro" onClick=toLogIn}}}
      </form>
    </main>
  `
  }
}
