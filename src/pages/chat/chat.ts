
import Block from "../../mypracticum/Block"

import "./chat.css"
import {validate} from "../../sourseCode/validate"

export class Chat extends Block {
  constructor() {
    super()
    this.setProps({
      
      onSubmit: () => {
        console.log("проверки для чата нет в разработке")
        
      }
    })
  }
  render() {
    return `
    <ul class="chat">
    <li class="chat__main chat__main_left">
      <a class="chat__profile page__link-profile" href="#">
        <span class="chat__link-text">Профиль</span>
      </a>
      
      <ul class="chat__list">
      {{{ listItem 
         userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar= "#"
      }}}
      {{{ listItem 
        userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar= "#"
      }}}
      {{{ listItem 
        userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar= "#"
        }}}
      </ul>
    </li>
      <li class="chat__main chat__main-dialog">
      <div class="chat__header">
        <div class="chat__inner">        
          <p class="chat__user-name">Вадим</p>
        </div>
      </div>
      

      <ul class="chat__messages">
        {{{ message text="1111111111111111111" time="11:11" isRead=false}}}
        {{{ message text="1111111111111111111" time="11:11" owner=true}}}
        {{{ message text="1111111111111111111" time="11:11" isRead=false}}}
    </ul>

    <div class="chat__footer">
    <form class="chat__footer-form">
      <button class="chat__footer-btn-attach" type="button" aria-label="Прикрепить файл">
        <img
          class="chat__footer-icon"
          src="../image/Group 197.svg"
        />
      </button>
      <input class="chat__footer-input" type="text" placeholder="Ваше сообщение" />
  
  
      {{{Button classes="button__footer-btn-send" onClick=onSubmit }}}
     
    </form>
    </div>
  
    </li>
  
  
  </ul>
    `
  }
}