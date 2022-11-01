
import Block from "../../mypracticum/Block"
import "./serverError.css"



export class ServerError extends Block {
  constructor() {
    super()
    
  }
  render(): string {
    return `
    <main class="serverError">
      <div class="serverError__first"
        {{{Title firstLine="500"  secondLine="Мы уже ремонтируем"}}}
      </div>
    </main>
  `
  }
}
