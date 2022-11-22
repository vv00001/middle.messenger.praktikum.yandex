import MainClass from './MainClass';

// export interface ChatData {
//    login: string;
//    password: string;
// }

export class ChatInterface extends MainClass {
   constructor() {
      super('/chats' );
   }

   public getChats() {
      console.log(this)
      return this.get('');
   }
}

export default new ChatInterface();
