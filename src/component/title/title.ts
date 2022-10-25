import Block from "../../mypracticum/Block"
import "./title.css"

interface TitleProps {
  firstLine: string
  secondLine?: string
}

export class Title extends Block {
  static componentName = "Title"
  constructor({ firstLine, secondLine }: TitleProps) {
    super({ firstLine, secondLine })
  }

  protected render(): string {
    return `
    <div class="title">
      <h1 class="title_first">{{firstLine}}</h1>
      <h2 class="title_second">{{secondLine}}</h2>
    </div
    `
  }
}

