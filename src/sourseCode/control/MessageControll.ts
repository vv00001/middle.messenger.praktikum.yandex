import Store from "../../mypracticum/Store";
import { MainType } from "../globalTypes";
const URLS= "wss://ya-praktikum.tech/ws/chats";

class MessageControll {
   chatId!: string | number;
   token!: string;
   socket!: WebSocket | null;
   constructor() {
      this.socket = null;
      this.handleOpen = this.handleOpen.bind(this);
      this.handleMessage = this.handleMessage.bind(this);
      this.handleError = this.handleError.bind(this);
      this.handleClose = this.handleClose.bind(this);
   }

   setListeners() {
      if (this.socket) {
         this.socket.addEventListener('open', this.handleOpen);
         this.socket.addEventListener('message', this.handleMessage);
         this.socket.addEventListener('close', this.handleClose);
         this.socket.addEventListener('error', this.handleError);
      }
   }

   removeListeners() {
      if (this.socket) {
         this.socket.removeEventListener('open', this.handleOpen);
         this.socket.removeEventListener('message', this.handleMessage);
         this.socket.removeEventListener('close', this.handleClose);
         this.socket.removeEventListener('error', this.handleError);
      }
   }
   handleClose() {
      this.removeListeners();
   }
   handleError() {

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
      const messages = JSON.parse(evt.data);
      if (messages.type !== 'pong') {
         if (Array.isArray(messages)) {
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
