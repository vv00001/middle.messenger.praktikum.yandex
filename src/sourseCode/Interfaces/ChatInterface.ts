import MainClass from './MainClass';
import {AddUserType,CreateChat,ChatIdToken,DelChat} from "../globalTypes"

export class ChatInterface extends MainClass {
   constructor() {
      super('/chats' );
   }
   public getChats() {
      return this.get('');
   }
   public getChatToken({ chatId }: ChatIdToken) {
      return this.post(`token/${chatId}`, {});
   }
   public createChat({ ...rest }: CreateChat) {
      return this.post('', { ...rest });
   }
   public addUser({ ...rest }: AddUserType) {
      return this.put('users', { ...rest });
   }
   public delUser({ ...rest }: AddUserType) {
      return this.delete('users', { ...rest });
   }
   public delChat({...rest}:DelChat){
      return this.delete('',{...rest});
   }
}

export default new ChatInterface();
