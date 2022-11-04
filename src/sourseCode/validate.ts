export function validate (receive:string,nameInput:string){
   console.log(receive,nameInput)
   let checkDone = {answer:""}
   
   if (nameInput == "profileName" ||
      nameInput == "secondName"||
      nameInput == "chatname") {
      if (!receive.match(/^[A-ZА-Я]/g)){
      checkDone.answer = "С заглавной"
      }else if (receive.length < 3) {
         checkDone.answer = "от 3 символов"  
      } else if (receive.match(/\d+/g)) {
         checkDone.answer = "без цифр"
      }  else if (receive.match(/\s/g)) {
         checkDone.answer = "без пробела"
      } else if (!receive.match(/^[a-zA-ZА-Яа-я0-9-]{0,}$/g)) {
         checkDone.answer = "специальные символы не допускаются"
      }
   }
   if(nameInput=="login"){
      console.log(nameInput)
      if (receive.length == 0) {
         checkDone.answer = "Не может быть пустым"        
      } else if (receive.length < 3) {
         checkDone.answer = "от 3 символов"      
      }  else if (!receive.match(/^[a-zA-Z0-9-_]/g)) {//пример регулярного выражения
         checkDone.answer = "только латинские"   
      } else if (receive.length > 20) {
         checkDone.answer = "не больше 20 символов"
      } else if (!receive.match(/[a-zA-Zа-я]+/g)) {
         checkDone.answer = "мимимум 1 символ"
      }  else if (receive.match(/\s/g)) {
         checkDone.answer = "без пробела"
      }else if (!receive.match(/^[a-zA-Z0-9-_]{3,20}$/g)) {
         checkDone.answer = "специальные символы не допускаются"
      }
   }
   if (nameInput == "mail") {//исключение лишних точек и лишних @ в разработке
      if (receive.length < 3) {
         checkDone.answer = "от 3 символов" 
      }else if (receive.match(/\s/g)) {
         checkDone.answer = "без пробела"
      }  else if (!receive.match(/^[a-zA-Z0-9-_]/g)) {//пример регулярного выражения
         checkDone.answer = "только латинские"  
      } else if (!receive.match(/^[a-zA-Z0-9-_@.]{0,}$/g)) {
         checkDone.answer = "специальные символы не допускаются"        
      } else if (!receive.match(/[@]/g)) {
         checkDone.answer = "не забудьте @"
      } else if (!receive.match(/[.]/g)) {
         checkDone.answer = "нет точки в почте"        
      } else if (receive.match(/[.]/g) && !receive.match(/\w+[.]\w+/g)) {
         checkDone.answer = "это не почта"        
      }
   }

   if(nameInput=="password"||
      nameInput=="oldPassword"||
      nameInput=="newPassword"||
      nameInput=="repeateNewPassword"){
      if (!receive.match(/^[a-zA-Z0-9-_]/g)) {//пример регулярного выражения
         checkDone.answer = "только латинские"      
      } else if (receive.length > 40) {
         checkDone.answer = "не больше 40 символов"
      } else if (!receive.match(/\d+/g)) {
         checkDone.answer = "хотя бы одну цифра"
      } else if (!receive.match(/[A-ZА-Я]+/g)) {
         checkDone.answer = "хотя бы заглавную букву"
      } else if (receive.length < 8) {
         checkDone.answer = "от 8 символов"   
      }
   }
   
   if (nameInput =="phone") {
      if (!receive.match(/^[+]/g)) {
         checkDone.answer = "Начните с плюса, пока можно много плюсов но все наладится"
      }else if (!receive.match(/\d+/g)) {
         checkDone.answer = "хотя бы одну цифра"
      }else if (receive.length < 10) {
         checkDone.answer = "Номер телефона должен содержать от 10 символов"          
      } else if (receive.match(/\s/g)) {
        checkDone.answer = "Номер телефона не может содержать пробелы"        
      } else if (receive.match(/[A-Za-zА-Яа-я]+/g)) {
        checkDone.answer = "Номер телефона не может содержать буквы"      
      } else if (receive.length > 15) {
        checkDone.answer = "Номер телефона должен содержать до 15 символов"        
      }
   }
   return checkDone.answer;
}
