import Block from "../../mypracticum/Block"
import store from "../../mypracticum/Store"
import router from "../../mypracticum/Router"
import ChatControll from "../../sourseCode/control/ChatControll"
import "./chat.css"
import MessageControll from "../../sourseCode/control/MessageControll"
import { MainType, SearchUser} from "../../sourseCode/globalTypes"
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
  getStateFromProps(): void {
    this.state={
      chatItemId:0,
      chooseChat:(evt: Event)=>{
          const element = evt.currentTarget as HTMLElement;
          const chatItemId = element.getAttribute("chat_id");
          this.setState({ chatItemId });
          const state = store.get() as MainType;
          const { userInfo } = state;
        if (chatItemId) {
          ChatControll.getChatToken({ chatId: Number(chatItemId) })
          .then(({ token }) =>{
            MessageControll.connect({
              userId: userInfo?.id,
              chatId: Number(chatItemId),
              token,
            })
          });
        }
        store.on("add-users", () => {
        })
        store.on("delete-users", () => {
        })
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
        if(input.value!=""){
          const title=input.value
          ChatControll.createChat({title});
          store.on("update", () => {
            const state = store.get() as MainType;
            this.setState({ allChat: state.allChat });
          });
        }else{
          console.log("введите название чата")
        }
      },
      serchUser:()=>{
        const input=document.querySelector(".input__footer-User") as HTMLFormElement;
        const login=input.value
        if(input.value!=""){
          ProfileControll.searchUser({login});
        }else{
          console.log("введите первую букву логина зарегистрированного в сервисе пользователя для получения идентификаторов всех логинов начинающихся на вами указанную букву")
        }
      },
      addUser:()=>{
        const input=document.querySelector(".input__footer-User") as HTMLFormElement;
        if(this.state.chatItemId!=0){
          if(input.value!=""){
            const login=input.value as SearchUser
            let send=Number(login)
            ChatControll.addUser({
              users: [send],
              chatId: Number(this.state.chatItemId),
            });
          }else{
            console.log("для добавления участника чата введите цифровой идентификатор полученный из сервиса поиск зарегистрированных пользователей (кнопка SearchUser)")
          }
        }
      },
      deleteUser:()=> {
        const input=document.querySelector(".input__footer-User") as HTMLFormElement;
        const login=input.value as SearchUser
        let send=Number(login)
        if(input.value!=""){
          ChatControll.delUser({
            users: [send],
            chatId: Number(this.state.chatItemId),
          });
        }else{
          console.log("для удаления участника чата введите цифровой идентификатор такого участника, который вы записали на бумажке когда участника добавляли")
        }
      },
      deleteChat:()=>{
        ChatControll.delChat({ chatId: this.state.chatItemId });
      }
    }
  }
  render() {
    const {
      allChat=[],
      messages=[]
    }=this.props;
    return `
    <main>
      <ul class="chat">
      <li class="chat__main chat__main_left">
      {{{Button classes="button__chat_link" textBtn="Редактировать профиль" onClick=goProfile }}}
        <ul class="chat__list">
        ${
          allChat &&Object.values(allChat)?.map(
              (chat: any) =>{
                return`
                {{{listItem
                  id="${chat.id}"
                  userName="${chat.title}"
                  lastMessage="${
                    chat.last_message ? chat.last_message.content : ""
                  }"
                  srcAvatar= "${chat.avatar}"
                  time="${chat.last_message ? chat.last_message.time : null}"
                  countNotReadMessage="${chat.unread_count}"
                  onClick=chooseChat
                }}}`;
              }
            )
          .join('')
        }
        </ul>
        <div class="chat__create_panel">
          <input class="chat__create_chat" type="text" placeholder="Создать чат"/>
          {{{Button classes="button__plus" onClick=addChat }}}
        </div>
      </li>
        <li class="chat__main chat__main-dialog">
        <div class="chat__inner">
          <ul class="chat__messages">
            ${messages.map((message: MessageToChat) => {
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
      {{{Button classes="button__footer-btn-User" textBtn="Удалить этот чат" onClick=deleteChat }}}
        <input class="chat__footer-input" type="text" placeholder="Ваше сообщение" />
        {{{Button classes="button__footer-btn-send" onClick=sendMessage }}}
        {{{ButtonS classes="button_s__footer-btn-send_zero" onClick=sendMessage }}}
      </form>
      </div>
      <div>
        <input class="input__footer-User" type="text" placeholder="Добовлять/удалять участника чата по id. Id получить ввести первую букву логина на serchUserIdInF12 получить список всех id" />
      </div>
      <div class="chat__footer-button">
        {{{Button classes="button__footer-btn-User" textBtn = "add" onClick=addUser }}}
        {{{Button classes="button__footer-btn-User" textBtn="delete" onClick=deleteUser }}}
        {{{Button classes="button__footer-btn-User" textBtn="serchUserIdInF12" onClick=serchUser }}}
      </div>
      </li>
    </ul>
    </main>
    `
  }
}
