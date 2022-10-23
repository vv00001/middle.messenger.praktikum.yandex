
import Block from "../../mypracticum/Block"

export class NotFoundPage extends Block {
  constructor() {
    super()
  
  }
  render(): string {
    return `
            <main class="error-page">
                <div class="error-page__container">
                    <h1>404</h1>
                    <h2>Не туда попали</h2>
                    {{{Button textBtn="Назад к чатам" classes="button_disable" onClick=onClick}}}
                </div>
            </main>
         `
  }
}
