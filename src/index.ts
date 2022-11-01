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
  document.getElementById("chat").onclick = function()  {
    removeMy();
    renderDOM(new Chat())
  }
  document.getElementById("loginPage").onclick = function()  {
    removeMy();
    renderDOM(new LoginPage())
  }
  document.getElementById("editPassword").onclick = function()  {
    removeMy();renderDOM(new EditPassword())
  }
  document.getElementById("editProfile").onclick = function()  {
    removeMy();renderDOM(new EditProfile())
  }
  document.getElementById("notFound").onclick = function()  {
    removeMy();renderDOM(new NotFoundPage())
  }
  document.getElementById("profile").onclick = function()  {
    removeMy();renderDOM(new Profile())
  }
  document.getElementById("serverError").onclick = function()  {
    removeMy();renderDOM(new ServerError())
  }
  document.getElementById("register").onclick = function()  {
    removeMy();renderDOM(new Register())
  }  
})
function removeMy(){
  const myUl=document.getElementById('myul');  
  while (myUl.firstChild) {
    myUl.removeChild(myUl.firstChild);
  }
}
