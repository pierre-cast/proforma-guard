import { UserRoleEnum } from "../entities/user-role.enum";
export declare class UserSubscribeDto {
    id: number;
    username: string;
    password: string;
    roles: UserRoleEnum;
    email: string;
}
