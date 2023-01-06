import  Block  from "./Block"

interface BlockClass<P> extends Function {
    new (props: P): Block<P>;
    componentName?: string;
}

type props = Record<string, any>;
function isEqual(first: string, second: string): boolean {
    return first === second;
}
class Route<P = any> {

  private _pathname: string;
  private _blockClass: BlockClass<any>;
  private _block: Block | null = null;
  private _props: props;

  constructor(pathname: string, view: BlockClass<P>, props: props) {

       this._pathname = pathname;
       this._blockClass = view;
       this._block = null;
       this._props = props;
    }

   navigate(pathname:string) {
       if (this.match(pathname)) {
           this._pathname = pathname;
           this.render();
        }
    }

   leave() {
       if (this._block) {
           this._block.hide();
        }
    }

   match(pathname:string) {
        return isEqual(pathname, this._pathname);
    }

   render() {
    //    if (!this._block) {
       if (!0) {
           this._block = new this._blockClass({ ...this._props });
           render(this._props.rootQuery, this._block);
           return;
        }

       this._block.show();
    }
}

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
}

function render(takeSelector: string, block: Block) {
    const root = document.querySelector(takeSelector);

    if (root === null) {
        throw new Error(`not takeSelector "${takeSelector}"`);
    }
    root.innerHTML = '';
    root.append(block.getContent()!);

    return root;
}
export default new Router('#app');
