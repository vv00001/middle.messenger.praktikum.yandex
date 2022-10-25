import Block from "../../mypracticum/Block"
import "./mainInput.css"

interface mainInputProps {
  onInput?: () => void
  onFocus?: () => void
  onBlur?: () => void
  type?: "text" | "password" | "email"
  placeholder?: string
  value: string
  name?: string
  classes?: string
}

export class MainInput extends Block {
  static componentName = "mainInput"
  constructor(props: mainInputProps) {
    super({      
      ...props
    })
  }

  protected render(): string {
    return `
    <div class="input {{divClassName}}">
    {{{Input
        name="{{name}}" 
        type="{{type}}"
        classes="{{classes}}"
        placeholder="{{placeholder}}" 
        onInput=onInput 
        onFocus=onFocus 
        onBlur=onBlur 
        value=value
    }}}
    </div>
    `
  }
}