import Block from "../../mypracticum/Block"
import './input.css';

interface InputProps {
  onInput?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  name?: string
  type?: "text" | "password" | "email"
  placeholder?: string
  value?: string
  classes?: string
}

export class Input extends Block {
  static componentName = 'Input';
  constructor({ onInput, onFocus, onBlur, ...props }: InputProps) {
    super({ ...props, events: { input: onInput, focus: onFocus, blur: onBlur } })
  }

  protected render(): string {
    return `
    <input name="{{name}}" value="{{value}}" class="{{classes}}" type="{{type}}" placeholder="{{placeholder}}">
    `
  }
}
