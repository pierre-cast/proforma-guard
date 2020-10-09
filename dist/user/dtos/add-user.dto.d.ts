import { UserRoleEnum } from "../entities/user-role.enum";
export declare class AddUserDto {
    username: string;
    password: string;
    roles: UserRoleEnum;
    email: string;
}
