import Block from "../../mypracticum/Block" 
import "./register.css"
import { input } from "../../component/input/input"
import {validate} from "../../sourseCode/validate"
interface register {
 
}
export class Register extends Block {
  constructor(){
    super()
      this.setProps({
        loginValue: "",
        passwordValue: "",
        onSubmit: () => {
          let login = this.element.querySelector("input[name='login']") as HTMLInputElement  
          let secondname= this.element.querySelector("input[name='secondname']") as HTMLInputElement
          let mail= this.element.querySelector("input[name='mail']") as HTMLInputElement
          let profname= this.element.querySelector("input[name='profname']") as HTMLInputElement
          let password= this.element.querySelector("input[name='password']") as HTMLInputElement
          let password_repeat= this.element.querySelector("input[name='password_repeat']") as HTMLInputElement


          let messageErrorlogin = validate(login.value )
         
  
          if(!messageErrorlogin  &&!validate(secondname.value) &&!validate(profname.value) &&!validate(mail.value)  &&!validate(password.value)  &&!validate(password_repeat.value))
          console.log("отправка пока 1 пример но отрпавиться фсе что есть. Проверка на совпадение паролей в разработке", login.value);
          else
          console.log("исправьте ошибки выделенные красным цветом, пожалуйста. Проверка на совпадение паролей в разработке") 
        }
      })
    
  }
   render():string {
   return `
   <main >
   <form class="edit-profile"> 
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
      name="profname"
      classes="input__text-field"
      placeholder="Имя"
      errorClass="error"
    }}}
    {{{mainInput 
      onInput=onInput 
      onFocus=onFocus
      type="text" 
      name="secondname"
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
      placeholder="Повтарите пароль"
      errorClass="error"
    }}}
    {{{Button textBtn="Сохранить" classes="button button__edit_pro" onClick=onSubmit }}}
    
    </form>
    </main>
  `
  }
}
