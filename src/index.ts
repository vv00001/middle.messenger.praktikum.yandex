import { renderDOM, registerComponent } from "./mypracticum"
import Router from "../src/mypracticum/Router"
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
import Avatar from "./component/avatar"
import ButtonS from "./component/button_s"
import LogInControll from "./sourseCode/control/LogInControll"

registerComponent(Error)
registerComponent(Input)
registerComponent(Button)
registerComponent(MainInput)
registerComponent(Title)
registerComponent(ListItem)
registerComponent(Message)
registerComponent(Avatar)
registerComponent(ButtonS)

window.addEventListener('DOMContentLoaded', async () => {
  Router
  .use("/", LoginPage)
  .use("/messenger",Chat)
  .use("/profile",Profile)
  .use("/settings",EditProfile)
  .use("/editPassword",EditPassword)
  .use("/register",Register)
  .use("/404",NotFoundPage)
  .use("/500",ServerError)
  Router.start();
  LogInControll.check()
});
