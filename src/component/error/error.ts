import Block from "../../mypracticum/Block"
import "./error.css"

interface error {

   errorMes?:string
   errorClass:string
}

export class Error extends Block {
   
  static componentName = "Error"
  constructor({errorMes,errorClass}: error) {
    super({errorMes,errorClass})
   }

protected render(): string {
    return `

    <div class="{{errorClass}}">
    {{#if errorMes}}{{errorMes}}{{/if}}
    </div>
   `
   }
}
