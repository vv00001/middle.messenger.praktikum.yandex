import Block from "../../mypracticum/Block"

import "./listitem.css"

interface listitemProps {
  userName?: string
  lastMessage?: string;
  time?: string;
  countNotReadMessage?: number;
}
export class ListItem extends Block {
  
  static componentName = "listItem";
  constructor({
    userName,
    lastMessage,
    time,
    countNotReadMessage}:listitemProps){
   super({
    userName,
    lastMessage,
    time,
    countNotReadMessage})
  }
  render() {
    return `
  <li class="list-item">
    <div class="list-item__container">
      <div class="list-item__inner">
        <p class="list-item__user-name">{{this.userName}}</p>
        <p class="list-item__message">{{#unless this.countNotReadMessage}}<span class="list-item__message_bold">Вы:</span>{{/unless}} {{this.lastMessage}}</p>
      </div>
      <div class="list-item__wrap">
        <time class="list-item__time">{{this.time}}</time>
        <p class="list-item__count-message {{#if this.countNotReadMessage}}list-item__count-message_is-show{{/if}}">{{this.countNotReadMessage}}</p>
      </div>
    </div>
  </li>
  
   `}
}
