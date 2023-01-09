import Block from "../../mypracticum/Block"
import "./listItem.css"

interface ListItemProps {
  userName?: string
  lastMessage?: string;
  time?: string;
  countNotReadMessage?: number;
  onClick: () => void;
}
export class ListItem extends Block {

  static componentName = "listItem";
  constructor({onClick, ...receive}:ListItemProps){
    super({
      events:{click:onClick},
      ...receive
    })

  }
  protected getStateFromProps(props: any): void {
    this.state = {
      userName: props.userName,
      countNotReadMessage:props.countNotReadMessage,
      time:props.time,
      lastMessage:props.lastMessage,
      id:props.id
    }
  }
  render() {
    const {
      id
    } = this.state;

    return `
  <li class="list-item" chat_id="${id}">
    <div class="list-item__container">
    <div class="list-item__avatar"></div>
      <div class="list-item__inner">
        <p class="list-item__user-name">{{this.userName}}</p>
        <p class="list-item__message">{{#unless this.countNotReadMessage}}<span class="list-item__message_bold">Вы:</span>{{/unless}} {{this.lastMessage}}</p>
      </div>
      <div class="list-item__wrap">
        <p class="list-item__count-message {{#if this.countNotReadMessage}}list-item__count-message_is-show{{/if}}">{{this.countNotReadMessage}}</p>
      </div>
    </div>
  </li>
   `}
}
