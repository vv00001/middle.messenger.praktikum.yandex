import Block from "../../mypracticum/Block";
import "./button_s.css";

interface ButtonProps {
  textBtn?: string;
  onClick?: () => void;
  classes?:string;
}

export class ButtonS extends Block {
  static componentName = "ButtonS"
  constructor({ textBtn, onClick,classes }: ButtonProps) {
    super({classes, textBtn, events: { click: onClick } })
  }

  protected render(): string {
    return `<button class="{{classes}}" 
    type="submit">
    {{textBtn}}</button>  
    `    
  }
}
