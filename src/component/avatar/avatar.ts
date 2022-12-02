import Block from "../../mypracticum/Block";
import './avatar.css';


interface AvatarProps {
   avatar: string;
   onClick: () => void;
}
const yandex= "https://ya-praktikum.tech/api/v2/resources"

export class Avatar extends Block {
  static componentName = "Avatar"
   constructor({ onClick, ...rest }: AvatarProps) {
      super({ events: { click: onClick }, ...rest });
   }
   protected getStateFromProps(props: AvatarProps): void {
      this.state = {
         avatar: props.avatar
      };
   }
   
   protected render(): string {
      const { avatar } = this.state;
      return `
      <div class="avatar">
      <img class="avatar__img" src="${
           `${yandex}${avatar}`
       }" alt="Аватар по умолчанию" />
      </div>
      `;
   }
}
