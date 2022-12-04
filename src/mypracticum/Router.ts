import { Block } from "./Block"

function isEqual(first: string, second: string): boolean {
    return first === second;
  }
 class Route {
   constructor(pathname, view, props) {
       this._pathname = pathname;
       this._blockClass = view;
       this._block = null;
       this._props = props;
    }

   navigate(pathname) {
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

   match(pathname) {
        return isEqual(pathname, this._pathname);
    }

   render() {
    console.log(this._block)
    //    if (!this._block) {
       if (!0) {
        console.log(this._props.rootQuery)
           this._block = new this._blockClass();
           render(this._props.rootQuery, this._block);
           return;
        }

       this._block.show();
    }
}

class Router {
   constructor(rootQuery) {
       if (Router.__instance) {
           return Router.__instance;
        }

       this.routes = [];
       this.history = window.history;
       this._currentRoute = null;
       this._rootQuery = rootQuery;

       Router.__instance = this;
    }

    use(pathname, block) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);
        return this;
    }

   start() {
        window.onpopstate =(event=>{
        this. _onRoute(event.currentTarget.location.pathname)
        }).bind(this);
        
        this._onRoute(window.location.pathname)
    }

   _onRoute(pathname) {
       const route = this.getRoute(pathname);

       if (this._currentRoute && this._currentRoute!= route) {
           this._currentRoute.leave();
       }

       this._currentRoute = route;
       route.render(route, pathname);
    }

   go(pathname) {
    console.log("this.go",pathname)
     this.history.pushState({},"",pathname);
     
     this._onRoute(pathname);
    }

   back() {
    console.log("this.back")
     this.history.back();
    }

   forward() {
     this.history.forward()
    }

   getRoute(pathname){
    return this.routes.find(route => route.match(pathname));
   }
}

function render(takeSelector: string, block: Block) {
    console.log(takeSelector)
    const root = document.querySelector(takeSelector);
  
    if (root === null) {
        throw new Error(`not takeSelector "${takeSelector}"`);
    }
  
    root.innerHTML = '';
  
    console.log(block);
    root.append(block.getContent()!);
  
    return root;
}
export default new Router('#app');
