import EventBus from './EventBus';
import { mainState } from '../sourseCode/mainState';

class Store<T> extends EventBus {
  state: T | null;

   constructor(defaultState: T | null = null) {
      super();
      this.state = defaultState;
   }

   get() {
      return this.state;
   }

   set(receive: any, action?: string) {
      this.state = { ...this.state, ...receive };
      this.emit(action ? action : 'update');
   }
}
export default new Store(mainState);
