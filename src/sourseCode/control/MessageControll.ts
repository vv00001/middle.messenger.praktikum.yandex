import Store from "../../mypracticum/Store";
import { MainType } from "../globalTypes";
const URLS= "wss://ya-praktikum.tech/ws/chats";
// const userId="120127"

class MessageControll {
   chatId!: string | number;
   token!: string;
   socket!: WebSocket | null;
   constructor() {
      this.socket = null;
      this.handleOpen = this.handleOpen.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
   }

   setListeners() {
      if (this.socket) {
         this.socket.addEventListener('open', this.handleOpen);
         this.socket.addEventListener('message', this.handleMessage);
      }
   }

   removeListeners() {
      if (this.socket) {
         this.socket.removeEventListener('open', this.handleOpen);
         this.socket.removeEventListener('message', this.handleMessage);
      }
   }
   handleOpen() {
   if (this.socket) {
      this.getMessages();
      setInterval(() => {
         this.socket?.send(JSON.stringify({ type: 'ping'}));
      }, 5000);
      }
   }
   public connect({ chatId,userId, token }: any) {
      console.log(chatId,token,"connect",userId)
      if (this.chatId !== chatId) {
         this.chatId = chatId;
         this.token = token;
         // const socket = new WebSocket('wss://ya-praktikum.tech/ws/chats/<USER_ID>/<CHAT_ID>/<TOKEN_VALUE>');
         this.socket = new WebSocket(
         `${URLS}/${userId}/${this.chatId}/${this.token}`
         );
         this.setListeners();
      }
   }
   handleMessage(evt: any) {
      console.log(evt)
      const messages = JSON.parse(evt.data);
      if (messages.type !== 'pong') {
         if (Array.isArray(messages)) {
            console.log("handleMessage",messages)
            Store.set({
               messages: messages.reverse(),
            });
         } else {
            const state = Store.get() as MainType;

         Store.set({
            messages: Object.assign(state.messages, { [state.messages.length]: messages }),
         });
         }
      }
   }
   public sendMessage(message: string) {
      if (this.socket) {
        this.socket?.send(JSON.stringify({
            content: message,
            type: "message"
         }));
      }
   }


   public getMessages() {
      if (this.socket) {
         console.log("getMessages")
         this.socket.send(
            JSON.stringify({
               content: "0",
               type: "get old"
            })
         );
      }
   }
}
export default new MessageControll();
