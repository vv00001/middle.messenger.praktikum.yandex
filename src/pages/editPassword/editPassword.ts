import Block from "../../mypracticum/Block" 
import "./editPassword.css"
import { input } from "../../component/input/input"
import {validate} from "../../sourseCode/validate"

export class EditPassword extends Block {
  constructor(){
   super()
   this.setProps({
      onSubmit: () => {
      let oldPassword = this.element.querySelector("input[name='oldPassword']") as HTMLInputElement  
      let newPassword= this.element.querySelector("input[name='newPassword']") as HTMLInputElement
      let repeateNewPassword= this.element.querySelector("input[name='repeateNewPassword']") as HTMLInputElement
   
      if(oldPassword && newPassword && repeateNewPassword){
         let newPasswordValue=newPassword.value
         let repeateNewPasswordValue=repeateNewPassword.value   

         if(!validate(oldPassword.value) &&!validate(newPasswordValue) &&!validate(repeateNewPasswordValue)){
            if(newPasswordValue== repeateNewPasswordValue)
               console.log("отправка ", newPasswordValue);
               else
               console.log("пасворды одинаковые пожалуйста");
         }else
            console.log("исправьте ошибки выделенные красным цветом, пожалуйста") 
         }
      }
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
                     
                  </ul>
               </form>
            </li>
         </ul>
      </main>
   `
   }
}