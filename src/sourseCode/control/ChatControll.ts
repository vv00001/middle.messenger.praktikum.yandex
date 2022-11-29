import ChatInterface from '../Interfaces/ChatInterface';
import store from '../../mypracticum/Store';
import { MainType } from '../globalTypes';

interface ChatsType {
  avatar: null | string;
  created_by: number;
  id: number;
  last_message?: LastMessage;
  title: string;
  unread_count: number;
}


export class ChatControll {

  public getChats() {
    ChatInterface.getChats()
    .then(({ response }: any) => {
      store.set({allChat: JSON.parse(response)})
    })
  }
  public getChatToken({ ...rest }: number) {
    return ChatInterface
      .getChatToken({ ...rest })
      .then(({ response }: any) => JSON.parse(response))
  }
  public createChat({ title }: string) {
    console.log(title)
    ChatInterface.createChat({title})
    .then(({ response }: any) => {
       const state = store.get() as ChatsType;
//nameChat
      const newChat = {
        avatar: null,
        id: JSON.parse(response).id,
        title: title,
        unread_count: 0,
        created_by: 0,
      };

      state.allChat?.push(newChat);

      store.set({ allChat: state.allChat });
    })
  }

}
export default new ChatControll();
