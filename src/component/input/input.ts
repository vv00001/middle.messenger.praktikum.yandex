import Block from "../../mypracticum/Block"
import './input.css';


interface InputProps {
   onInput?: () => void;
   onBlur?: () => void;
   onFocus?: () => void;
   name: string;
   type: InputType;
   maxlength?: string;
   minlength?: string;
}


