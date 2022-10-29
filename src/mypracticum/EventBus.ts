export type Listener<T extends unknown[] = any[]> = (...args: T) => void;
export default class EventBus <E extends string = string, M extends { [K in E]: unknown[] } = Record<E, any[]>>{
  // constructor() {
  //   this.listeners = {};
  // }
  private listeners: { [key in E]?: Listener<M[E]>[] } = {};
  on(event: E, callback:Listener<M[E]>) {
    //Код здесь
     if(!this.listeners[event]){
       //throw new Error(`Нет события: ${event}`);
    //  throw new Error (11111);
       this.listeners[event]=[];
    }
    this.listeners[event].push(callback);
  }

  off(event: E, callback: Listener<M[E]>) {
    //Код здесь
     if(!this.listeners[event]){
       throw new Error(`Нет события: ${event}`);
    //  throw new Error (11111);
    }
    // this.listeners[event]=this.listeners[event].filter((element)=>{
    //   return (element!=callback)
    this.listeners[event] = this.listeners[event].filter(
      listener => listener !== callback
    );
  }

  emit(event:E, ...args:M[E]) {
    //Код здесь
    if(!this.listeners[event]){
       throw new Error(`Нет события: ${event}`);
    }
    this.listeners[event].forEach(
      function(listener){
      listener(...args);
    });
  }
}
