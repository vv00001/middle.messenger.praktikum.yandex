import Block from "../../mypracticum/Block"
import { Error} from "../error/error"
import { validate } from "../../sourseCode/validate"

interface mainInputProps {
  onInput?: () => void
  onBlur?: () => void
  onFocus?:()=> void
  type?: "text" | "password" | "email"
  placeholder?: string
  value: string
  name?: string
  classes?: string
  errorMes?:string
  errorClass:string}

export class MainInput extends Block {
      
  static componentName = "mainInput"
  constructor({
    placeholder,
    value,
    name,
    classes,
    errorMes,
    errorClass}: mainInputProps) {
    super({
      classes,
      placeholder, value,
      name,     
      errorClass:"error",
      onInput: (e: FocusEvent) => {
        
        const takeInput = e.target as HTMLInputElement
        const messageError = validate(takeInput.value )

        let fff=this._children;
        let hhh=Object.entries(fff);

        if(messageError){
          hhh[1][1].setProps({        
            errorClass:"error_show",
            errorMes:messageError
          })
        }else{
          hhh[1][1].setProps({        
            errorClass:"error_hide",
            errorMes:""
          })
        }
      },
      onBlur: (e: FocusEvent) => {
        const takeInput = e.target as HTMLInputElement
        const messageError = validate(takeInput.value )

        let fff=this._children;
        let hhh=Object.entries(fff);

        if(messageError){        
          hhh[1][1].setProps({
            errorClass:"error_show",
            errorMes:messageError
          })
        }else{
          hhh[1][1].setProps({        
            errorClass:"error_hide",
            errorMes:""
          })
        }
      },
      onFocus: (e: FocusEvent) => {
        const takeInput = e.target as HTMLInputElement
        const messageError = validate(takeInput.value )

        let fff=this._children;
        let hhh=Object.entries(fff);

        if(messageError){        
          hhh[1][1].setProps({
            errorClass:"error_show",
            errorMes:messageError
          })
        }else{
          hhh[1][1].setProps({        
            errorClass:"error_hide",
            errorMes:""
          })
        }
      }
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