import Block from "../../mypracticum/Block";
import './avatar.css';

interface AvatarProps {
   avatar: string;
}

const yandex= "https://ya-praktikum.tech/api/v2/resources"
export class Avatar extends Block {
  static componentName = "Avatar"
   constructor({ ...rest }: AvatarProps) {
      super({...rest });
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
         avatar !== 'undefined' && avatar !== 'null'? `${yandex}${avatar}`:""
      }"
       alt="Уставновите аватар в Изменить данные" />
      </div>
      `
   }
}

// avatar !== 'undefined' && avatar !== 'null'