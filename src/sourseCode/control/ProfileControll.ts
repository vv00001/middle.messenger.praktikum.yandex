import  ProfileInterface  from "../Interfaces/ProfileInterface";
import store from '../../mypracticum/Store';

import { ProfileInfo,SearchUser,UserPaswordType } from "../../sourseCode/globalTypes"

class ProfileControll {

  public editProfile(userInfo: ProfileInfo) {
    ProfileInterface.changeUserInfo(userInfo)
      .then(({ response }: any) => {
        store.set({ userInfo: JSON.parse(response) });        
      })
      .catch(()=>{
        
      })
  }
  public searchUser({ ...rest }: SearchUser) {
    return ProfileInterface.searchUser({ ...rest })
      .then(({ response }: any) =>
        console.log("возмите отсюда id и вставте в поле после нажмите Add",response)
      )
      .catch(()=>{
        
      })
  }
  public changeAvatar(avatar:FormData){
    ProfileInterface.changeAvatar(avatar)
    .then(({ response }: any) => {
      store.set({ userInfo: JSON.parse(response) });   
    })
    .catch(()=>{
        
    })
  }
  public changePassword(userPassword: UserPaswordType) {
    ProfileInterface.changePassword(userPassword)
      .then(() =>
        console.log("userPassword done")
      )
      .catch(()=>{
        
      })
  }
}
export default new ProfileControll();
