import Block from "../../mypracticum/Block" 
import "./editProfile.css"
import { input } from "../../component/input/input"
import {validate} from "../../sourseCode/validate"
import ProfileControll from "../../sourseCode/control/ProfileControll"
import { ProfileInfo } from "../../sourseCode/globalTypes"
import LogInControll from "../../sourseCode/control/LogInControll";
import store from "../../mypracticum/Store"
import router from "../../mypracticum/Router"

export class EditProfile extends Block {
  constructor(){
    super()
    LogInControll.getProfile();

    store.on("update", () => {
      this.setProps(store.get());
    });
    this.setProps({
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

          const input=document.querySelector(".edit-profile__file_input") as HTMLFormElement;
          const receivePhoto= input.files;
          if(receivePhoto[0]){
            let formData = new FormData()
            formData.append("avatar", receivePhoto[0])
            ProfileControll.changeAvatar(formData)        
          }else{
            console.log("Сначала выберете на кнопку ниже файл или это замена данных без замены аватара")
          }
        }
        else{
          console.log("исправьте ошибки выделенные красным цветом, пожалуйста")
        }
      },
      toChat:()=>router.go("/messenger")        
    })
    
  }
   render():string {
    const {userInfo=[]}=this.props;
   return `
   <main class="mainclass">
    <form class="edit-profile"> 
      {{{Title firstLine="Изменение профиля"}}}
      <div class ="edit-profile__avatar">
        {{{Avatar avatar="${userInfo.avatar}"}}}  
        
      </div>
      <label class="edit-profile__input-file">
        Сменить аватар
        <input class="edit-profile__file_input" type="file" name="avatar" accept="image/*" />
      </label>
      {{{mainInput 
        onInput=onInput
        onFocus=onFocus
        type="text" 
        name="mail"
        classes="input__text-field"
        placeholder="Почта"
        errorClass="error"
        value="${userInfo.email}"
      }}}
      {{{mainInput 
        onInput=onInput 
        onFocus=onFocus
        type="text" 
        name="login"
        classes="input__text-field"
        placeholder="Логин"
        errorClass="error"
        value="${userInfo.login}"
      }}}
      {{{mainInput 
        onInput=onInput 
        onFocus=onFocus
        type="text" 
        name="profileName"
        classes="input__text-field"
        placeholder="Имя"
        errorClass="error"
        value="${userInfo.first_name}"
      }}}
      {{{mainInput 
        onInput=onInput 
        onFocus=onFocus
        type="text" 
        name="secondName"
        classes="input__text-field"
        placeholder="Фамилия"
        errorClass="error"
        value="${userInfo.second_name}"
      }}}
      {{{mainInput 
        onInput=onInput 
        onFocus=onFocus
        type="text" 
        name="chatname"
        classes="input__text-field"
        placeholder="Имя в чате"
        errorClass="error"
        value="${
          userInfo.display_name ? userInfo.display_name : "Тут можно ввести имя в чате"                  
        }"
      }}}
      {{{mainInput 
        onInput=onInput 
        onFocus=onFocus
        type="text" 
        name="phone"
        classes="input__text-field"
        placeholder="Телефон"
        errorClass="error"
        value="${userInfo.phone}"
      }}}
      {{{Button textBtn="Сохранить" classes="button button__edit_pro" onClick=onSubmit }}}
      {{{Button classes="button button__edit_pro" textBtn="Вернуться в чат" onClick=toChat }}}
      </form>
    </main>
  `
  }
}
