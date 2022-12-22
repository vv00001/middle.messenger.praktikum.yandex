import MainClass from './MainClass';

export class ChatInterface extends MainClass {
   constructor() {
      super('/chats' );
   }

   public getChats() {
      return this.get('');
   }
   public getChatToken({ chatId }: number) {
      return this.post(`token/${chatId}`, {});
   }
   public createChat({ ...rest }: string) {
      return this.post('', { ...rest });
   }
   public addUser({ ...rest }: AddUser) {
      return this.put('users', { ...rest });
   }
   public delUser({ ...rest }: AddUser) {
      return this.delete('users', { ...rest });
   }
   public delChat({...rest}:string){
      return this.delete('',{...rest});
   }
}

export default new ChatInterface();
