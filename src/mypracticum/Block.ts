import EventBus from "./EventBus"
import Handlebars from "handlebars"

import {v4 as makeUUID} from 'uuid'
interface BlockMeta<P = any> {
  props: P
}


type Events = Values<typeof Block.EVENTS>
interface HTMLElementWithRefs extends HTMLElement {
  refs: { [key: string]: HTMLElementWithRefs }
  setProps: ({}) => void
}
export default  class Block <P=any>{
  static EVENTS = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_RENDER: "flow:render",
    FLOW_CDU:"flow:component-did-update"
  } as const;

  _element: Nullable<HTMLElement> = null;
  _meta:BlockMeta;

  static componentName: string
  public id = makeUUID(8);
  props: P
  children: { [id: string]: Block } = {}
  /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
  eventBus: () => EventBus<Events>
  state: any = {}
  protected refs: { [key: string]: HTMLElementWithRefs } = {}
    constructor(props?:P) {
    const eventBus = new EventBus<Events>();



    this._meta = {
      props
    };
    this.getStateFromProps(props)
    this._children=this._makePropsProxy(this.children);
    this.props = this._makePropsProxy(props || ({} as P));
    this.state = this._makePropsProxy(this.state);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT,this.props);
  }

  _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU,this._componentDidUpdate.bind(this));
  }

  _createResources() {
    this._element = this._createDocumentElement("div");
  }
  getStateFromProps(props: any): void {
    this.state = {}
  }
  init() {
    this._createResources();
    
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER,this.props);
  }

  _componentDidMount() {
    this.componentDidMount();
  }

  componentDidMount(props: P) {}


  _componentDidUpdate(oldProps:P, newProps:P) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if(!response){
      return;
    }
    this._render();
  }

  componentDidUpdate(oldProps:P, newProps:P) {
    return true;
  }

  setProps = (nextProps:P) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props as {}, nextProps);
  };
  setState = (nextState: any) => {
    if (!nextState) {
      return;
    }

    Object.assign(this.state, nextState);
  }
  get element() {
    return this._element;
  }

  _render() {
    const fragment = this._compile();

    this._removeEvents();
    const newElement = fragment.firstElementChild;

    this._element.replaceWith(newElement);

    this._element = newElement as HTMLElement;
    this._addEvents();
  }

  render(): string {return""}

  getContent() : HTMLElement{
    return this.element;
  }


  _makePropsProxy=(props:any):any=> {
      return new Proxy(props as unknown as object, {
        get(target: Record<string, unknown>, prop: string) {
          const value = target[prop];
          return typeof value === "function" ? value.bind(target) : value;
        },
        set:(target: Record<string>, prop: string, value:unknown)=> {
          target[prop] = value;
          
          this.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
          return true;
        },
        deleteProperty() {
          throw new Error("Нет доступа");
        }
      }) as unknown as P;
  }

  _createDocumentElement(tagName:string) {
    return document.createElement(tagName);
  }

  show() {
    this.getContent().style.display="block";
  }

  hide() {
    this.getContent().style.display="none";
  }
  private _compile(): DocumentFragment {
    const fragment = document.createElement("template")   
    const template = Handlebars.compile(this.render())
    fragment.innerHTML = template({ ...this.state, ...this.props, children: this.children, refs: this.refs })
    Object.entries(this.children).forEach(([id, component]) => {

      const stub = fragment.content.querySelector(`[data-id="${id}"]`)
      if (!stub) {
        return
      }
      const stubChilds = stub.childNodes.length ? stub.childNodes : []
      const content = component.getContent()
      stub.replaceWith(content)
      const layoutContent = content.querySelector("[data-layout='1']")
      if (layoutContent && stubChilds.length) {
        layoutContent.append(...stubChilds)
      }
    })    
    return fragment.content
  }

  private _addEvents() {
    const events: Record<string, () => void> = (this.props as any).events
    if (!events) {
      return;
    }
    Object.entries(events).forEach(([event, listener]) => {
      this._element.addEventListener(event, listener)
    })
  }
  private _removeEvents() {
    const events: Record<string, () => void> = (this.props as any).events

    if (!events || !this._element) {
      return
    }

    Object.entries(events).forEach(([event, listener]) => {
      this._element.removeEventListener(event, listener)
    })
  }
}