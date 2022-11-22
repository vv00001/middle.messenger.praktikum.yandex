import ChatInterface from '../Interfaces/ChatInterface';
import store from '../../mypracticum/Store';

export class ChatControll {

  public getChats() {
    ChatInterface.getChats()
    .then(({ response }: any) => {
      //console.log(response)
      let hhh= JSON.parse(response);
      console.log(hhh)
      store.set({allChat: JSON.parse(response)})
    })
  }

}
export default new ChatControll();
