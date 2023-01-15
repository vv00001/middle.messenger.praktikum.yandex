import  Block  from "./Block"
import {BlockClass} from "../sourseCode/globalTypes"

type props = Record<string, any>;
function isEqual(first: string, second: string): boolean {
    return first === second;
}

export class Route<P = any> {
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
      this._block = new this._blockClass({ ...this._props });
      render(this._props.rootQuery, this._block);
      return;
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
