import Block from "../../mypracticum/Block" 
import "./editPassword.css"
import { input } from "../../component/input/input"
import {validate} from "../../sourseCode/validate"
import ProfileControll from "../../sourseCode/control/ProfileControll"
import {UserPaswordType} from "../../sourseCode/globalTypes"
import router from "../../mypracticum/Router"

export class EditPassword extends Block {
  constructor(){
   super()
   this.setProps({
      onSubmit: () => {
         let oldPasswordHTML = this.element.querySelector("input[name='oldPassword']") as HTMLInputElement  
         let newPasswordHTML= this.element.querySelector("input[name='newPassword']") as HTMLInputElement
         let repeateNewPassword= this.element.querySelector("input[name='repeateNewPassword']") as HTMLInputElement
      
         if(oldPasswordHTML && newPasswordHTML && repeateNewPassword){
            let newPassword=newPasswordHTML.value
            let repeateNewPasswordValue=repeateNewPassword.value   
            let oldPassword=oldPasswordHTML.value
            if(!validate(oldPassword) &&!validate(newPassword) &&!validate(repeateNewPasswordValue)){
               if(newPassword== repeateNewPasswordValue){                  
                  console.log("отправка ", newPassword);
                  ProfileControll.changePassword({
                     newPassword,
                     oldPassword
                  } as UserPaswordType);
               }else
                  console.log("пасворды одинаковые пожалуйста");
            }else
               console.log("исправьте ошибки выделенные красным цветом, пожалуйста") 
         }
      },
      toChat:()=>router.go("/messenger")
   })
   }
   render():string {
   return `
      <main class="mainpage">
         <ul class="edit-profile">
            <li class="edit-profile__main">
               <form class="edit-password__form">         
                  {{{Title firstLine="Смена пароля"}}}
                  <ul class="edit-password__list">
                  {{{mainInput 
                     onInput=onInput 
                     onFocus=onFocus
                     type="text" 
                     name="oldPassword"
                     classes="input__text-field"
                     placeholder="Текущий пароль"
                     errorClass="error"
                  }}}
                  {{{mainInput 
                     onInput=onInput 
                     onFocus=onFocus
                     type="text" 
                     name="newPassword"
                     classes="input__text-field"
                     placeholder="Новый пароль"
                     errorClass="error"
                  }}}
                  {{{mainInput 
                     onInput=onInput 
                     onFocus=onFocus
                     type="text" 
                     name="repeateNewPassword"
                     classes="input__text-field"
                     placeholder="Повторите новый пароль"
                     errorClass="error"
                  }}}
                  {{{Button textBtn="Сохранить" classes="button button__edit_password" onClick=onSubmit }}}
                  {{{Button classes="button button__edit_pro" textBtn="Вернуться в чат" onClick=toChat }}}
                  </ul>
               </form>
            </li>
         </ul>
      </main>
   `
   }
}
