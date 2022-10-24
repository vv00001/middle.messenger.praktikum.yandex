import { renderDOM, registerComponent } from "./mypracticum"

import { LoginPage } from "./pages/login/login"
import { NotFoundPage } from "./pages/notFound/notFound"

// import Input  from "./component/input"
import Button from "./component/button"

// registerComponent(Input);
registerComponent(Button);

document.addEventListener("DOMContentLoaded", () => {
   renderDOM(new LoginPage())
   // renderDOM(new NotFoundPage())
 })
 
 