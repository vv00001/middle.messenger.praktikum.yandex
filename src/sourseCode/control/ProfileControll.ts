import  ProfileInterface  from "../Interfaces/ProfileInterface";
import store from '../../mypracticum/Store';

import { ProfileInfo } from "../../sourseCode/globalTypes"

class ProfileControll {

  public editProfile(userInfo: ProfileInfo) {
    ProfileInterface.changeUserInfo(userInfo)
      .then(({ response }: any) => {
        store.set({ userInfo: JSON.parse(response) });        
      })
  }


}

export default new ProfileControll();
