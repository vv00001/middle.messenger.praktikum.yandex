
import Block from "../../mypracticum/Block"

import "./chat.css"

export class Chat extends Block {
  constructor() {
    super()
  }
  render() {
    return `
    <ul class="chat">
       <li class="chat_main chat_main_left">
          <a class="chat__profile page__link-profile" href="./profile.hbs">
             <span class="chat__link-text">Профиль</span>
          </a>
          <ul class="chat__list">
           
          </ul>
       </li>
          <li class="chat_main chat_main-dialog">
          <div class="chat__header">
             <div class="chat__inner">
             <p class="chat__user-name">Вадим</p>
             </div>
          </div>
          <p style="height: 75%;"</p>
          
       <div class="chat__footer">
       <form class="chat__footer-form">
          <button class="chat__footer-btn-attach" type="button" aria-label="Прикрепить файл">
             <img
             class="chat__footer-icon"
             src="../image/Group 197.svg"
             />
          </button>
          <input class="chat__footer-input" type="text" placeholder="Ваше сообщение" />
    
    
          <button class="chat__footer-btn-send" type="submit" aria-label="Отправить сообщение">
             <img
             src="../image/Group 202.svg"
             />
          </button>
       </form>
       </div>
    
       </li>
    
    
       </ul>
    
      `
   }
}



/*

         {{> avatar/avatar srcAvatar="#" userName="Вадим"}}
      {{> searchChat/searchChat}}


      
  {{> listItem/listItem 
            userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar= "#"
         }}
         {{> listItem/listItem 
         userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar="#"
         }}
         {{> listItem/listItem 
         userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar="#"
         }}
         {{> listItem/listItem 
         userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar="#"
         }}
         {{> listItem/listItem 
         userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar="#"
         }}
         {{> listItem/listItem 
         userName= "Андрей" lastMessage= "djfljeri" time= "11:11" countNotReadMessage= 2 srcAvatar="#"
         }}
         
<main">
    <h1>404</h1>
            <h2>Не туда попали</h2>
              </div>
        </main>
*/