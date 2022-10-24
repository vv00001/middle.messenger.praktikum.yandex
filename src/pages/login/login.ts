import { input } from "../../component/input/input"
import Block from "../../mypracticum/Block"



export class LoginPage extends Block {
   constructor() {
     super()
     this.setProps({
       loginVal: "",
       passwordVal: ""


     })
   }


  render() {
    console.log(44444)
    return `
    <main>
    <div>
      {{{Button textBtn="Назад к чатам" classes="button_disable" onClick=onClick}}}
    </div>
    <h1>404</h1>
    <h2>Не туда попали</h2>
    </main>
    `
  }
}
