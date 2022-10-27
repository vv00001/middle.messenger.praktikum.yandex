import { renderDOM, registerComponent } from "./mypracticum"

import { LoginPage } from "./pages/login/login"
import { NotFoundPage } from "./pages/notFound/notFound"
import { Chat } from "./pages/chat/chat"




import MainInput from "./component/mainInput"
import Input from     "./component/input"
import Button from    "./component/button"
import ListItem from "./component/listItem"
import Message from "./component/message"

import Title from "./component/title/"
registerComponent(Input);
registerComponent(Button);
registerComponent(MainInput);
registerComponent(Title);
registerComponent(ListItem);
registerComponent(Message);

document.addEventListener("DOMContentLoaded", () => {
   // renderDOM(new LoginPage())
  //  renderDOM(new NotFoundPage())
   renderDOM(new Chat())
 })
 