import { Block } from "../mypracticum/Block";
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
}
interface LoginType {
   login: string;
   password: string;
}

interface MainType {
   users?: string;
}


export {
   MainType,
   LoginType
};
