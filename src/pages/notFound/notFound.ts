
import Block from "../../mypracticum/Block"
import "./notFound.css"



export class NotFoundPage extends Block {
  constructor() {
    super()
    
  }
  render(): string {
    return `
    <main class="notFound">
      <div class="notFound__first"
        {{{Title firstLine="404"  secondLine="Не туда попали"}}}
      </div>
    </main>
  `
  }
}
