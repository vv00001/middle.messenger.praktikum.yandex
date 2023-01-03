import Block from "../../mypracticum/Block"
import { Error} from "../error/error"
import { validate } from "../../sourseCode/validate"

interface MainInputProps {
  onInput?: () => void
  onBlur?: () => void
  onFocus?:()=> void
  type?: "text" | "password" | "email"
  placeholder?: string
  value: string
  name?: string
  classes?: string
}

export class MainInput extends Block {
  static componentName = "mainInput"
  constructor({
      placeholder,
      value,
      name,
      classes
    }: MainInputProps) {
    super({
      classes,
      placeholder, value,
      name,
      errorClass:"error",
      onInput: (e: FocusEvent) => {
        const takeInput = e.target as HTMLInputElement
        this.validateDone(takeInput.value,takeInput.name)
      },
      onBlur: (e: FocusEvent) => {
        const takeInput = e.target as HTMLInputElement
        this.validateDone(takeInput.value,takeInput.name)
      },
      onFocus: (e: FocusEvent) => {
        const takeInput = e.target as HTMLInputElement
        this.validateDone(takeInput.value,takeInput.name)}
    })
  }

  protected validateDone(inputValue:string,inputName:string){
    const takeCompinentOndex=Object.entries(this.children)[1][1]

    const messageError = validate(inputValue,inputName)
    if(messageError.length>0){
      takeCompinentOndex.setProps({
        errorClass:"error_show",
        errorMes:messageError
        })
    }else{
      takeCompinentOndex.setProps({
        errorClass:"error_hide",
        errorMes:""
    })
    }
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
        onBlur=onBlur
        onFocus=onFocus
        value=value
    }}}

    {{{Error
      errorClass ="{{errorClass}}"
      errorMes="{{errorMes}}"
      }}}
    </div>
    `
  }
}
