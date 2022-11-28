import MainClass from "./MainClass"
import { ProfileInfo } from "../../sourseCode/globalTypes"

class ProfileInterface extends MainClass {
   constructor() {
      super("/user");
   }

   public changeUserInfo(userInfo: ProfileInfo) {
      console.log(userInfo)
      return this.put("profile", userInfo);
   }


}

export default new ProfileInterface();
