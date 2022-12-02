import  ProfileInterface  from "../Interfaces/ProfileInterface";
import store from '../../mypracticum/Store';

import { ProfileInfo,SearchUser,UserPaswordType } from "../../sourseCode/globalTypes"

class ProfileControll {

  public editProfile(userInfo: ProfileInfo) {
    ProfileInterface.changeUserInfo(userInfo)
      .then(({ response }: any) => {
        store.set({ userInfo: JSON.parse(response) });        
      })
  }
  public searchUser({ ...rest }: SearchUser) {
    return ProfileInterface.searchUser({ ...rest })
      .then(({ response }: any) =>
        console.log(response)
      )
  }
  public changeAvatar(avatar:FormData){
    console.log(avatar)
    ProfileInterface.changeAvatar(avatar)
    .then(({ response }: any) => {
      store.set({ userInfo: JSON.parse(response) });   
    })
  }
  public changePassword(userPassword: UserPaswordType) {
    ProfileInterface.changePassword(userPassword)
      .then(() =>
        console.log("userPassword done")
      )
  }
}

export default new ProfileControll();
