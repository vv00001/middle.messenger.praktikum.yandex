import { Route } from './RouterWithBock';
import {BlockClass} from "../sourseCode/globalTypes"
class Router {
    static __instance: Router;
    private routes: Array<Route> = [];
    private history: History = window.history;
    private _currentRoute: Route | null = null;
    private _rootQuery:string;
   constructor(rootQuery:string) {
       if (Router.__instance) {
           return Router.__instance;
        }

       this.routes = [];
       this.history = window.history;
       this._currentRoute = null;
       this._rootQuery = rootQuery;

       Router.__instance = this;
    }

    use<P>(pathname:string, block: BlockClass<P>) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

   start() {
        window.onpopstate = ((event: Event) => {
          const target = <Window>event.currentTarget;
          this._onRoute(target.location.pathname);
        }).bind(this);
        this._onRoute(window.location.pathname)
    }

   _onRoute(pathname:string) {
       const route = this.getRoute(pathname);
       if (!route) {
        return;
      }
       if (this._currentRoute && this._currentRoute!= route) {
           this._currentRoute.leave();
       }

       this._currentRoute = route;
       route.render();
    }

   go(pathname:string) {
     this.history.pushState({},"",pathname);

     this._onRoute(pathname);
    }

   back() {
     this.history.back();
    }

   forward() {
     this.history.forward()
    }

   getRoute(pathname:string){
    return this.routes.find(route => route.match(pathname));
   }
   getRouters() {
    return this.routes;
  }
}
export default new Router('#app');
