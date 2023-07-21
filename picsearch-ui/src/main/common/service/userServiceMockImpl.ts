import type { UserInfo } from "../interface/userInfo";
import type { UserService } from "../interface/userService";
import { UserInfoData } from "../mockdata/userInfoData";

export class UserServiceMockImpl implements UserService {
    login(userId: string, password: string): UserInfo {
        return UserInfoData[0];
    }

}