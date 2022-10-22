class EventBus {
   constructor() {
     this.listeners = {};
   }
 
   on(event, callback) {
     //Код здесь
      if(!this.listeners[event]){
        //throw new Error(`Нет события: ${event}`);
     //  throw new Error (11111);
        this.listeners[event]=[];
     }
     this.listeners[event].push(callback);
   }
 
   off(event, callback) {
     //Код здесь
      if(!this.listeners[event]){
        throw new Error(`Нет события: ${event}`);
     //  throw new Error (11111);
     }
     this.listeners[event]=this.listeners[event].filter((element)=>{
       return (element!=callback)
     })
   }
 
   emit(event, ...args) {
     //Код здесь
     console.log("emit")
     if(!this.listeners[event]){
        throw new Error(`Нет события: ${event}`);
     //  throw new Error (11111);
     }
     this.listeners[event].forEach(
       function(listener){
       listener(...args);
     });
   }
 }
