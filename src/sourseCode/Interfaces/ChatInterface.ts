import MainClass from './MainClass';

export class ChatInterface extends MainClass {
   constructor() {
      super('/chats' );
   }

   public getChats() {
      console.log(this)
      return this.get('');
   }
   public getChatToken({ chatId }: number) {
      return this.post(`token/${chatId}`, {});
   }
   public createChat({ ...rest }: string) {
      return this.post('', { ...rest });
   }
}

export default new ChatInterface();
