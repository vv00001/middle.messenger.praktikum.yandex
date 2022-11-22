import Block from "../../mypracticum/Block"
import LogInControll from "../../sourseCode/control/LogInControll";
import store from "../../mypracticum/Store"
import router from "../../mypracticum/Router"
import "./profile.css"

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
      changePassword: () => router.go("/editPassword")
    };
  }



  protected render(): string {
    const { responseInfo = [] } = this.props;
    const { avatar,  email,login, first_name,second_name , display_name,phone  } =
    responseInfo;

      console.log(responseInfo,this.props)
    return `
      <main class="profile">
        <div class="profile__form">
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
            
     </main>
    `
  }
}
