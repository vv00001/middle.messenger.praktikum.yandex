import { MainType } from "./globalTypes";

export const mainState: MainType = {
  userInfo: {
    login: '',
    email: '',
    display_name: '',
    first_name: '',
    second_name: '',
    phone: ''
  },
  allChat: [
    {
      avatar: null,
      created_by: 0,
      id: 0,
      title: '',
      unread_count: 0,
    },
  ],
  users: ''
};
