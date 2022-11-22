import { Block } from "../mypracticum/Block";

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