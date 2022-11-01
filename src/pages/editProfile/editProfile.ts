import Block from "../../mypracticum/Block" 
import "./editProfile.css"
import { input } from "../../component/input/input"
import {validate} from "../../sourseCode/validate"
interface editProfile {
 
}
export class EditProfile extends Block {
  constructor(){
    super()
      this.setProps({
        loginValue: "",
        passwordValue: "",
        onSubmit: () => {
          let login = this.element.querySelector("input[name='login']") as HTMLInputElement  
          let telephon= this.element.querySelector("input[name='telephon']") as HTMLInputElement
          let chatname= this.element.querySelector("input[name='chatname']") as HTMLInputElement
          let secondname= this.element.querySelector("input[name='secondname']") as HTMLInputElement
          let profname= this.element.querySelector("input[name='profname']") as HTMLInputElement
          let mail= this.element.querySelector("input[name='mail']") as HTMLInputElement


          let messageErrorlogin = validate(login.value )
         
  
          if(!messageErrorlogin &&!validate(telephon.value) &&!validate(chatname.value) &&!validate(secondname.value) &&!validate(profname.value) &&!validate(mail.value))
          console.log("отправка пока 1 пример но отрпавиться фсе что есть ", login.value);
          else
          console.log("исправьте ошибки выделенные красным цветом, пожалуйста") 
        }
      })
    
  }
   render():string {
   return `
   <main>
   <form class="edit-profile"> 
     {{{Title firstLine="Изменение профиля"}}}
     
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
      name="login"
      classes="input__text-field"
      placeholder="Логин"
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
      name="chatname"
      classes="input__text-field"
      placeholder="Имя в чате"
      errorClass="error"
    }}}
    {{{mainInput 
      onInput=onInput 
      onFocus=onFocus
      type="text" 
      name="telephon"
      classes="input__text-field"
      placeholder="Телефон"
      errorClass="error"
    }}}
    {{{Button textBtn="Сохранить" classes="button button__edit_pro" onClick=onSubmit }}}
    
    </form>
    </main>
  `
  }
}
