import Block from "../../mypracticum/Block"
import store from "../../mypracticum/Store"
import router from "../../mypracticum/Router"
import ChatControll from "../../sourseCode/control/ChatControll"
import "./chat.css"
import {validate} from "../../sourseCode/validate"
import MessageControll from "../../sourseCode/control/MessageControll"
import MainType from "../../sourseCode/globalTypes"



interface MessageToChat{
  content: string;
  is_read: boolean;
  time: string;
}


export class Chat extends Block {
  constructor() {
    super()
    ChatControll.getChats();
    MessageControll.getMessages();


    store.on("update", () => {
      this.setProps(store.get());
    });
  }
  getStateFromProps(props: any): void {
    this.state={
      chooseChat:(evt: Event)=>{
          const element = evt.currentTarget as HTMLElement;
          const chatItemId = element.getAttribute("chat_id");  

          this.setState({ chatItemId });
  
          const state = store.get() as MainType;
          const { userInfo } = state;  
        if (chatItemId) {
          ChatControll.getChatToken({ chatId: Number(chatItemId) })
          .then(({ token }) =>{
            console.log({token},userInfo?.id,chatItemId)
            MessageControll.connect({
              userId: userInfo?.id,
              chatId: Number(chatItemId),
              token,
            })
          });
        }
      },
      sendMessage: (evt: Event) => {
        evt.preventDefault();
        const input=document.querySelector(".chat__footer-input") as HTMLFormElement;
        MessageControll.sendMessage(input.value);
        input.value = '';
        store.on("update", ()=>{
          this.setProps(store.get());
        })
      },
      goProfile:()=>{
        console.log(44444213122141)
        router.go("/profile")
      }
    }
  }
  render() {
    const {
      allChat=[],
      userInfo=[],
      messages=[]
    }=this.props;

    // console.log(allChat,this.props,userInfo)
    console.log("message",messages)
    return `
    <main>
      <ul class="chat">
      <li class="chat__main chat__main_left">
      {{{Button classes="button__chat_link" textBtn="Профиль" onClick=goProfile }}}
      
        
        
        <ul class="chat__list">
    
        ${
          allChat &&Object.values(allChat)?.map(
              (chat: any) =>{
                console.log(chat.title)
                return`
                {{{listItem
        
                  id="${chat.id}"
                  userName="${chat.title}"
                  lastMessage="${
                    chat.last_message ? chat.last_message.content : null
                  }"
                  
                  srcAvatar= "#"
                  
                  time="${chat.last_message ? chat.last_message.time : null}"
                  countNotReadMessage="${chat.unread_count}"
                  onClick=chooseChat

                }}}`;
              }
            )
            .join('')
  
        }
        </ul>
      </li>
        <li class="chat__main chat__main-dialog">
        <div class="chat__header">
          <div class="chat__inner">        
            <p class="chat__user-name">Вадим</p>
          </div>
        </div>
        

        <div class="chat__inner">
          <ul class="chat__messages">
            ${console.log(messages),
              messages.map((message: MessageToChat) => {             
                return `
                  {{{message
                    text="${message.content}"
                    time="${message.time}"
                    isRead=${message.is_read}
                  }}}`;
              })
            .join('')}
          </ul>
        </div>
      <div class="chat__footer">
      <form class="chat__footer-form">
        <button class="chat__footer-btn-attach" type="button" aria-label="Прикрепить файл">
          <img
            class="chat__footer-icon"
            src="../../image/Group 202.svg"
            alt="Прикрепить файл"
          />
        </button>
        <input class="chat__footer-input" type="text" placeholder="Ваше сообщение" />    
        {{{Button classes="button__footer-btn-send" onClick=sendMessage }}}
      
      </form>
      </div>    
      </li>    
    </ul>
    </main>
    `
  }
}
