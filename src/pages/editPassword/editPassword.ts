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
   
      let newPasswordValue=newPassword.value
      let repeateNewPasswordValue=repeateNewPassword.value   

      if(!validate(oldPassword.value) &&!validate(newPasswordValue) &&!validate(repeateNewPasswordValue)){
         if(newPasswordValue== repeateNewPasswordValue)
            console.log("отправка пока 1 пример но отрпавиться фсе что есть ", newPasswordValue);
            else
            console.log("пасворды одинаковые пожалуйста, зато без запар с цифрами и заглавными, пока без запар");
      }else
         console.log("исправьте ошибки выделенные красным цветом, пожалуйста") 
      }
   })
   
}
   render():string {
   return `
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

`
}
}
/*
<ul class="edit-profile">
  {{> buttonBack/buttonBack href="./profile.hbs"}}
  <li class="edit-profile__main">
    <form class="edit-password__form">
      {{> editAvatar/editAvatar}}
      <ul class="edit-password__list">
        {{> inputProfile/inputProfile type="password" helperText="Почта" value="1234"}}
        {{> inputProfile/inputProfile type="password" helperText="Логин" value="12345"}}
        {{> inputProfile/inputProfile type="password" helperText="Имя" value="12345"}}
        {{> button/button typeBtn="submit" textBtn="Сохранить" classes="button_page_edit-password"}}
      </ul>
    </form>
  </li>
</ul>
{{> popup/popup title="Загрузите файл" textBtn="Поменять" classesPopup="popup_change-avatar" isDefault=false}}
*/