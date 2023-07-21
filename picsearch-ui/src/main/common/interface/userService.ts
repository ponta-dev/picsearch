import type { UserInfo } from "./userInfo";

export interface UserService {
    login(userId: string, password: string): UserInfo;
}