import Block from "../../mypracticum/Block"

import "./profile.css"

export class Profile extends Block {
  constructor() {
    super()
  
  }

  protected render(): string {
    return `
      <main class="profile">
        <div class="profile__form">
            <div class ="profile__title">
            {{{Title firstLine="Иван"}}}
            </div>
            <form class="profile__form">
            <div class="profile__form__span">
                <label class="profile__form__span__label">Почта</label>
                <p>googool@google.com</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Логин</label>
                <p class="profile__form__span__value">ivanivanov</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Имя</label>
                <p class="profile__form__span__value">Иван</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Фамилия</label>
                <p class="profile__form__span__value">Иванов</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Имя в чате</label>
                <p class="profile__form__span__value">Иван</p>
            </div>
            <div class="profile__form__span">
                <label class="profile__form__span__label">Телефон</label>
                <p class="profile__form__span__value">+7 (909) 967 30 3</p>
            </div>
            </form>

            <div class="profile__form__span">
                <a class="profile__link" href="#">Изменить данные</a>
            </div>
            <div class="profile__form__span">
                <a class="profile__link" href="#">Изменить пароль</a>
            </div>
            <div class="profile__form__span">
                <a class="profile__link" href="#">Выйти</a>
            </div>
            
            
     </main>
    `
  }
}