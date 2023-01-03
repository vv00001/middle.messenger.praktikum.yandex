import { Block } from "./src/mypracticum/Block"
declare global {
    // module "uuid";
  //  declare module '*';

   export type Values<T extends Record<string, unknown>> = T[Keys<T>]
   export type Nullable<T> = T | null
}
