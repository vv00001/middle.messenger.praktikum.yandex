
import Block from "../../mypracticum/Block"
import "./message.css"

interface MessageProps {
  owner?: boolean
  text: string
  time?: string
  srcImg?: string
  isRead?:boolean
}

export class Message extends Block {
  static componentName = "message"
  constructor({ owner, text, time, srcImg, isRead }: MessageProps) {
    super({ owner, text, time, srcImg, isRead });
  }
  protected render(): string {
    return `
    <main">
    <li class="message {{#unless this.owner}}message_is-not-owner{{/unless}} {{#if this.srcImg}}message_is-img{{/if}}">
    {{#if this.text}}

      <p class="message__text {{#if this.owner}}message__text_is-me{{/if}}{{#unless this.owner}}message__text_is-friend{{/unless}}">
        {{this.text}}
        {{#unless this.owner}}
          <time class="message__time {{#unless this.isRead}}message__time_is-not-read{{/unless}}{{#if this.isRead}}message__time_is-read{{/if}}">{{this.time}}</time>
        {{/unless}}
        {{#if this.owner}}

          <time class="message__time">{{this.time}}</time>
        {{/if}}
      </p>
    {{/if}}
    {{#if this.srcImg}}
      <img class="message__img" src={{this.srcImg}} alt="Прикрепленное фото пользователем" />
      {{#unless this.owner}}
        <time class="message__time message__time_is-img {{#unless this.isRead}}message__time_is-not-read{{/unless}}{{#if this.isRead}}message__time_is-read{{/if}}">{{this.time}}</time>
      {{/unless}}
      {{#if this.owner}}
        <time class="message__time message__time_is-img">{{this.time}}</time>
      {{/if}}
    {{/if}}
  </li>
    `
  }
}
