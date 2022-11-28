import Block from "../../mypracticum/Block" 
import "./editProfile.css"
import { input } from "../../component/input/input"
import {validate} from "../../sourseCode/validate"
import ProfileControll from "../../sourseCode/control/ProfileControll"
import { ProfileInfo } from "../../sourseCode/globalTypes"


export class EditProfile extends Block {
  constructor(){
    super()
      this.setProps({
        loginValue: "",
        passwordValue: "",
        onSubmit: () => {
          let login = this.element.querySelector("input[name='login']") as HTMLInputElement  
          let phone= this.element.querySelector("input[name='phone']") as HTMLInputElement
          let chatname= this.element.querySelector("input[name='chatname']") as HTMLInputElement
          let secondName= this.element.querySelector("input[name='secondName']") as HTMLInputElement
          let profileName= this.element.querySelector("input[name='profileName']") as HTMLInputElement
          let mail= this.element.querySelector("input[name='mail']") as HTMLInputElement


          let messageErrorlogin = validate(login.value )
         
  
          if(!messageErrorlogin &&!validate(phone.value) &&!validate(chatname.value) &&!validate(secondName.value) &&!validate(profileName.value) &&!validate(mail.value)){
            ProfileControll.editProfile({
              first_name: profileName.value,
              second_name: secondName.value,
              display_name: chatname.value,
              login:login.value,
              email:mail.value,
              phone:phone.value,
            } as ProfileInfo);
          }
          else
          console.log("исправьте ошибки выделенные красным цветом, пожалуйста") 
        }
      })
    
  }
   render():string {
   return `
   <main class="mainclass">
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
        name="chatname"
        classes="input__text-field"
        placeholder="Имя в чате"
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
      
      </form>
    </main>
  `
  }
}
