import { renderDOM, registerComponent } from "./mypracticum"

import { LoginPage } from "./pages/login/login"
import { NotFoundPage } from "./pages/notFound/notFound"
import { Chat } from "./pages/chat/chat"
import { EditProfile} from "./pages/editProfile/editProfile"
import { Register } from "./pages/register/register"
import { Profile } from "./pages/profile/profile"
import { EditPassword } from "./pages/editPassword/editPassword"
import { ServerError} from "./pages/serverError/serverError"

import Error from "./component/error"

import MainInput from "./component/mainInput"
import Input from "./component/input"
import Button from "./component/button"
import ListItem from "./component/listItem"
import Message from "./component/message"

import Title from "./component/title/"
registerComponent(Error);
registerComponent(Input);
registerComponent(Button);
registerComponent(MainInput);
registerComponent(Title);
registerComponent(ListItem);
registerComponent(Message);
document.addEventListener("DOMContentLoaded", () => {
  renderDOM(new LoginPage())
  //  renderDOM(new NotFoundPage())
   // renderDOM(new Register())
   // renderDOM(new Chat())
//   renderDOM(new EditProfile())
//   renderDOM(new Profile())
//   renderDOM(new EditPassword())
//   renderDOM1(new ServerError())
})
