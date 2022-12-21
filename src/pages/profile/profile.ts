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
      toChat:()=>router.go("/messenger")      
    };
  }
  
  protected render(): string {
    const { userInfo = [] } = this.props;
    const { avatar,  email,login, first_name,second_name , display_name,phone  } =
    userInfo;
    return `
      <main class="profile">
        <div class="profile__form">
          {{{Avatar avatar="${avatar}"}}}
          <div class ="profile__title">
          {{{Title firstLine="${
            display_name ? display_name : "Пройдите в изменить данные"                  
          }"}}}
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
              <p class="profile__form__span__value">"${
                display_name ? display_name : "Пройдите в изменить данные"                  
              }"</p>
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
