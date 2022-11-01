import Block from "../../mypracticum/Block";
import "./button.css";

interface ButtonProps {
  textBtn?: string;
  onClick?: () => void;
  classes?:string;
}

export class Button extends Block {
  constructor({ textBtn, onClick,classes }: ButtonProps) {
    super({classes, textBtn, events: { click: onClick } })
  }

  protected render(): string {
    return `<button class="{{classes}}" type="button">{{textBtn}}</button>`
    
  }
}

