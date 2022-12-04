import Block from "../../mypracticum/Block"
import LogInControll from "../../sourseCode/control/LogInControll";
import store from "../../mypracticum/Store"
import router from "../../mypracticum/Router"
import "./profile.css"
import { Avatar }from "../../component/Avatar/avatar"
import ProfileControll from "../../sourseCode/control/ProfileControll";

export class Profile extends Block {
  constructor() {
    super()
    LogInControll.getProfile();

    store.on("update", () => {
      this.setProps(store.get());
    });
  }


  getStateFromProps() {
    this.state = {
      exit: (evt: Event) => {
        evt.preventDefault();
        LogInControll.exit();
      },
      changeData: () => router.go("/settings"),
      changePassword: () => router.go("/editPassword"),
      Avatar:(evt:Event)=>{        
        const input=document.querySelector(".input-file__input") as HTMLFormElement;
        const jjj= input.files;
        if(jjj[0]){
          let formData = new FormData()
          console.log(jjj[0])
          formData.append("avatar", jjj[0])
          ProfileControll.changeAvatar(formData)        
        }else{
          console.log("Сначало выберете на кнопку ниже файл")
        }
      },
      toChat:()=>router.go("/messenger"),
      
    };
  }
  
  protected render(): string {
    const { userInfo = [] } = this.props;
    const { avatar,  email,login, first_name,second_name , display_name,phone  } =
    userInfo;

      console.log(userInfo,this.props)
    return `
      <main class="profile">
        <div class="profile__form">
        {{{Avatar avatar="${avatar}" onClick=Avatar}}}
        <span >Выбор файла затем клик по круглой картинке высылает файл на сервер, замена тут после нового захода на эту страницу</span>
        <input class="input-file__input" type="file" name="avatar" accept="image/*" />
            <div class ="profile__title">
            {{{Title firstLine="${display_name}"}}}
            </div>
            <form class="profile__form">
            <div class="profile__form__span">
                <label class="profile__form__span__label">Почта</label>
                <p>"${email}"</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Логин</label>
                <p class="profile__form__span__value">"${login}"</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Имя</label>
                <p class="profile__form__span__value">"${first_name}"</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Фамилия</label>
                <p class="profile__form__span__value">"${second_name}"</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Имя в чате</label>
                <p class="profile__form__span__value">"${display_name}"</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Телефон</label>
                <p class="profile__form__span__value">"${phone}"</p>
            </div>
            </form>

            <div class="profile__form__span">
                {{{Button classes="button__profile_link" textBtn="Изменить данные" onClick=changeData }}}
            </div>
            <div class="profile__form__span">
                {{{Button classes="button__profile_link" textBtn="Изменить пароль" onClick=changePassword }}}
            </div>
            <div class="profile__form__span">
                {{{Button classes="button__profile_link" textBtn="Выйти" onClick=exit }}}      
            </div>
            <div class="profile__form__span">
                {{{Button classes="button__profile_link" textBtn="Вернуться в чат" onClick=toChat }}}
            </div>
            
     </main>
    `
  }
}
