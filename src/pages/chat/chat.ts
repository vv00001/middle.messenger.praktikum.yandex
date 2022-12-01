import Block from "../../mypracticum/Block"
import store from "../../mypracticum/Store"
import router from "../../mypracticum/Router"
import ChatControll from "../../sourseCode/control/ChatControll"
import "./chat.css"
import {validate} from "../../sourseCode/validate"
import MessageControll from "../../sourseCode/control/MessageControll"
import { MainType, CreateChat,SearchUser} from "../../sourseCode/globalTypes"
import  ProfileControll  from "../../sourseCode/control/ProfileControll"
import LogInControll from "../../sourseCode/control/LogInControll"


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
    LogInControll.getProfile();

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
        router.go("/profile")
      },
      addChat:()=>{
        const input=document.querySelector(".chat__create_chat") as HTMLFormElement;
        const title=input.value as CreateChat
        console.log({title})
        ChatControll.createChat({title});

        store.on("update", () => {
          const state = store.get() as MainType;
          this.setState({ allChat: state.allChat });
        });
      },
      // serchUser:()=>{
      //   const input=document.querySelector(".input__footer-User") as HTMLFormElement;
      //   const login=input.value as SearchUser
      //   console.log({login})

      //   const t=ProfileControll
      //   console.log(t)
      //   if(input.value!=""){
      //     ProfileControll.searchUser({
      //       login: login,
      //     } as SearchUser);
      //   }else{
      //     console.log("---------------")
      //   }
      // }
      addUser:()=>{
          console.log(99991)
          const input=document.querySelector(".input__footer-User") as HTMLFormElement;
          const login=input.value as SearchUser
          console.log({login})
  
          if(input.value!=""){
            ProfileControll.searchUser({
              login: login,
            } as SearchUser);
          }else{
            console.log("---------------")
          }
        }
    }
  }
  render() {
    const {
      allChat=[],
      userInfo=[],
      messages=[]
    }=this.props;

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
                    chat.last_message ? chat.last_message.content : ""
                    // chat.last_message ? chat.last_message.content : null
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
        <input class="chat__create_chat" type="text" placeholder="Создать чат" />  
        {{{Button classes="button__footer-btn-send" onClick=addChat }}}
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
      <input class="input__footer-User" type="text" placeholder="Ник пользователя удалить/добавить Результат работы прошу проследить в консоль логе на Ф12" />  
      {{{Button classes="button__footer-btn-addUser" textBtn = "add" onClick=addUser }}}
      {{{Button classes="button__footer-btn-deleteUser" textBtn="delete" onClick=deleteUser }}}
      </li>
    </ul>
    </main>
    `
  }
}
