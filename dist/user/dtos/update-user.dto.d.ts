import { UserRoleEnum } from "../entities/user-role.enum";
export declare class UpdateUserDto {
    username: string;
    password: string;
    roles: UserRoleEnum;
    email: string;
}
