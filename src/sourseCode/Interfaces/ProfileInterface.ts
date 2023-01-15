import MainClass from "./MainClass"
import { ProfileInfo,SearchUser,UserPaswordType } from "../../sourseCode/globalTypes"

class ProfileInterface extends MainClass {
   constructor() {
      super("/user");
   }

   public changeUserInfo(userInfo: ProfileInfo) {
      return this.put("profile", userInfo);
   }
   public searchUser({ login }: SearchUser) {
     return this.post("search", {login});
   }
   public changeAvatar(avatar: FormData) {
      return this.put('profile/avatar', avatar, {});
   }
   public changePassword(userPassword: UserPaswordType) {
      return this.put('password', userPassword);
   }
}

export default new ProfileInterface();
