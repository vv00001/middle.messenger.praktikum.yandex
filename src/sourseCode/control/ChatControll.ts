import ChatInterface from '../Interfaces/ChatInterface';
import store from '../../mypracticum/Store';
import { MainType,AddUserType,CreateChat,ChatIdToken,DelChat } from '../globalTypes';

export class ChatControll {
  public getChats() {
    ChatInterface.getChats()
    .then(({ response }: any) => {
      store.set({allChat: JSON.parse(response)})
    })
  }
  public getChatToken({ ...rest }: ChatIdToken) {
    return ChatInterface
      .getChatToken({ ...rest })
      .then(({ response }: any) => JSON.parse(response))
  }

  public createChat({ title }: CreateChat) {
    ChatInterface.createChat({title})
    .then(({ response }: any) => {
      const state = store.get() as MainType;
      const newChat = {
        avatar: "",
        id: JSON.parse(response).id,
        title: title,
        unread_count: 0,
        created_by: 0,
      };
      state.allChat?.push(newChat);
      store.set({ allChat: state.allChat });
    })
  }
  public addUser({ users, chatId }: AddUserType) {
    ChatInterface.addUser({ users, chatId })
    .then(() => {
      console.log("добавлен участник чата")
    })
  }
  public delUser ({ users, chatId }: AddUserType) {
    ChatInterface.delUser({ users, chatId })
    .then(() => {
      console.log("участник чата удален из чата")
    })
  }
  public delChat({ ...rest }: DelChat){
    ChatInterface.delChat({...rest})
    .then(()=>{
      console.log("чат удален, удаление из списка чата произойдет при следующем открытии страницы чата (конечно у нас одна страница, вот такое юзерфрендли)")
    })
  }
}
export default new ChatControll();
