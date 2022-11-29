import  ProfileInterface  from "../Interfaces/ProfileInterface";
import store from '../../mypracticum/Store';

import { ProfileInfo,SearchUser } from "../../sourseCode/globalTypes"

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
        //store.setState({ users: response }, StoreEvents.ADD_USERS)
        console.log(response)
      )
  }

}

export default new ProfileControll();
