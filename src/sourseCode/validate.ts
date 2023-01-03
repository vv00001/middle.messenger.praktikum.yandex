enum AnswerMessage {
   FromThreeCharts = "от 3 символов",
   FromUpperCharts="С заглавной",
   WithOutNumber="без цифр",
   Simbol="специальные символы не допускаются",
   NoSpace="без пробела",
   NoSpacePone="Номер телефона не может содержать пробелы",
   OnlyLatinoParty="только латинские",
   FromEight="от 8 символов",
   FromTen="Номер телефона должен содержать от 10 символов",
   NoVoidBoötes ="Не может быть пустым",
   LessThenFifteen="Номер телефона должен содержать до 15 символов",
   LessThenTwenty="не больше 20 символов",
   LessThenForty= "не больше 40 символов",
   MoreThenOne= "мимимум 1 символ",
   AtPlease="не забудьте @",
   ComPlease="нет точки в почте",
   NeedNumber= "хотя бы одну цифру",
   UpperCharts="хотя бы заглавную букву",
   ThisNotMail="это не почта",
   FormPlusPhone="Начните с плюса, пока можно много плюсов но все наладится",
   WithOutCharts= "Номер телефона не может содержать буквы"

}

export function validate (receive:string,nameInput:string){
   let checkDone = {answer:""}

   if (nameInput == "profileName" ||
      nameInput == "secondName"||
      nameInput == "chatname") {
      if (!receive.match(/^[A-ZА-Я]/g)){
      checkDone.answer = AnswerMessage.FromUpperCharts
      }else if (receive.length < 3) {
         checkDone.answer = AnswerMessage.FromThreeCharts
      } else if (receive.match(/\d+/g)) {
         checkDone.answer = AnswerMessage.WithOutNumber
      }  else if (receive.match(/\s/g)) {
         checkDone.answer = AnswerMessage.NoSpace
      } else if (!receive.match(/^[a-zA-ZА-Яа-я0-9-]{0,}$/g)) {
         checkDone.answer =AnswerMessage.Simbol
      }
   }
   if(nameInput=="login"){
      if (receive.length == 0) {
         checkDone.answer =AnswerMessage.NoVoidBoötes
      } else if (receive.length < 3) {
         checkDone.answer = AnswerMessage.FromThreeCharts
      }  else if (!receive.match(/^[a-zA-Z0-9-_]/g)) {
         checkDone.answer = AnswerMessage.OnlyLatinoParty
      } else if (receive.length > 20) {
         checkDone.answer = AnswerMessage.LessThenTwenty
      } else if (!receive.match(/[a-zA-Zа-я]+/g)) {
         checkDone.answer =AnswerMessage.MoreThenOne
      }  else if (receive.match(/\s/g)) {
         checkDone.answer = AnswerMessage.NoSpace
      }else if (!receive.match(/^[a-zA-Z0-9-_]{3,20}$/g)) {
         checkDone.answer = AnswerMessage.Simbol
      }
   }
   if (nameInput == "mail") {//исключение лишних точек и лишних @ в разработке
      if (receive.length < 3) {
         checkDone.answer = AnswerMessage.FromThreeCharts
      }else if (receive.match(/\s/g)) {
         checkDone.answer = AnswerMessage.NoSpace
      }  else if (!receive.match(/^[a-zA-Z0-9-_]/g)) {
         checkDone.answer =  AnswerMessage.OnlyLatinoParty
      } else if (!receive.match(/^[a-zA-Z0-9-_@.]{0,}$/g)) {
         checkDone.answer = AnswerMessage.Simbol
      } else if (!receive.match(/[@]/g)) {
         checkDone.answer = AnswerMessage.AtPlease
      } else if (!receive.match(/[.]/g)) {
         checkDone.answer =AnswerMessage.ComPlease
      } else if (receive.match(/[.]/g) && !receive.match(/\w+[.]\w+/g)) {
         checkDone.answer =AnswerMessage.ThisNotMail
      }
   }

   if(nameInput=="password"||
      nameInput=="oldPassword"||
      nameInput=="newPassword"||
      nameInput=="repeateNewPassword"){
      if (!receive.match(/^[a-zA-Z0-9-_]/g)) {
         checkDone.answer = AnswerMessage.OnlyLatinoParty
      } else if (receive.length > 40) {
         checkDone.answer =AnswerMessage.LessThenForty
      } else if (!receive.match(/\d+/g)) {
         checkDone.answer = AnswerMessage.NeedNumber
      } else if (!receive.match(/[A-ZА-Я]+/g)) {
         checkDone.answer = AnswerMessage.UpperCharts
      } else if (receive.length < 8) {
         checkDone.answer =AnswerMessage.FromEight
      }
   }

   if (nameInput =="phone") {
      if (!receive.match(/^[+]/g)) {
         checkDone.answer = AnswerMessage.FormPlusPhone
      }else if (receive.length < 10) {
         checkDone.answer =AnswerMessage.FromTen
      } else if (receive.match(/\s/g)) {
        checkDone.answer = AnswerMessage.NoSpacePone
      } else if (receive.match(/[A-Za-zА-Яа-я]+/g)) {
        checkDone.answer =AnswerMessage.WithOutCharts
      } else if (receive.length > 15) {
        checkDone.answer =AnswerMessage.LessThenfifteen
      }
   }
   return checkDone.answer;
}
