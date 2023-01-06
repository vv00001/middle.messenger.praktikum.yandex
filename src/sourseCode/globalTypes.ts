interface LoginData{
  login: string;
  password: string;
}
interface SignupType{
   login: string;
   password: string;
}
interface DelChat{
   chatId: number;
}
interface ChatIdToken{
   chatId: number;
}
interface AddUserType {
   users: number[];
   chatId: number;
}
interface UserPaswordType{
   newPassword: string;
   oldPassword: string;
}
interface CreateChat {
   title: string;
}
interface SearchUser{
   login: string;
}
interface ProfileInfo{
   display_name: string;
   email: string;
   second_name: string;
   login: string;
   first_name: string;
   phone: string;
   id?: number;
}
interface LoginType {
   login: string;
   password: string;
}
interface ChatsType {
   avatar: null | string;
   created_by: number;
   id: number;
   title: string;
   unread_count: number;
}
interface MainType {
   users?: string;
   userInfo?: ProfileInfo;
   allChat:ChatsType[];
   messages?:any;
}
type props = Record<string, any>;
export {
   MainType,
   LoginType,
   AddUserType,
   UserPaswordType,
   CreateChat,
   SearchUser,
   ProfileInfo,
   ChatsType,
   ChatIdToken,
   DelChat,
   LoginData,
   SignupType,
   props
};
