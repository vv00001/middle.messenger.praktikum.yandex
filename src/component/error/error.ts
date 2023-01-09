import Block from "../../mypracticum/Block"
import "./error.css"
export interface Error {
   errorMes?:string
   errorClass?:string
}
export class Error extends Block {
  static componentName = "Error"
  constructor({errorMes,errorClass}: Error) {
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
