import MainClass from "./MainClass"
import { ProfileInfo,SearchUser } from "../../sourseCode/globalTypes"

class ProfileInterface extends MainClass {
   constructor() {
      super("/user");
   }

   public changeUserInfo(userInfo: ProfileInfo) {
      console.log(userInfo)
      return this.put("profile", userInfo);
   }
   public searchUser({ login }: SearchUser) {
     return this.post("search", {login});
   }
   public changeAvatar(avatar: FormData) {
      console.log(avatar)
      return this.put('profile/avatar', avatar, {});
   }
}

export default new ProfileInterface();
