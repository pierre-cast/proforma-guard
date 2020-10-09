import { UserRoleEnum } from "./user-role.enum";
export declare class UserEntity {
    id: number;
    username: string;
    password: string;
    email: string;
    roles: UserRoleEnum;
}
