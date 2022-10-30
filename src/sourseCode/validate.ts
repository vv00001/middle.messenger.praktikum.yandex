export function validate (receive:string){
   let checkDone = {answer:""}
//многочисленные и существенные проверки в разработке   
   if (receive.length == 0) {
      checkDone.answer = "Не может быть пустым"     
   } else if (receive.length < 3) {
      checkDone.answer = "от 3 символов"      
   }  else if (!receive.match(/^[a-zA-Z0-9-_]/g)) {//пример регулярного выражения
      checkDone.answer = "только латинские"   
   }


   return checkDone.answer;
}