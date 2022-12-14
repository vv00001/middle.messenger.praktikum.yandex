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
          console.log("add-users")
        })
        store.on("delete-users", () => {
          console.log("delete-users")
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
          const title=input.value as CreateChat
          ChatControll.createChat({title});

          store.on("update", () => {
            const state = store.get() as MainType;
            this.setState({ allChat: state.allChat });
          });
        }else{
          console.log("?????????????? ???????????????? ????????")
        }
      },
      serchUser:()=>{
        const input=document.querySelector(".input__footer-User") as HTMLFormElement;
        const login=input.value as SearchUser
        if(input.value!=""){
          ProfileControll.searchUser({
            login: login,
          } as SearchUser);
        }else{
          console.log("---------------")
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
            console.log("---------------")
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
      {{{Button classes="button__chat_link" textBtn="?????????????????????????? ??????????????" onClick=goProfile }}}
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
        <div class="chat__create_panel">
          <input class="chat__create_chat" type="text" placeholder="?????????????? ??????"/>
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
        </button>
        <input class="chat__footer-input" type="text" placeholder="???????? ??????????????????" />    
        {{{Button classes="button__footer-btn-send" onClick=sendMessage }}}
        {{{ButtonS classes="button_s__footer-btn-send_zero" onClick=sendMessage }}}
      </form>
      </div>
      <div>
        <input class="input__footer-User" type="text" placeholder="??????????????????/?????????????? ?????????????????? ???????? ???? id. Id ???????????????? ???????????? ???????????? ?????????? ???????????? ???? serchUserIdInF12 ???????????????? ???????????? ???????? id" />  
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
