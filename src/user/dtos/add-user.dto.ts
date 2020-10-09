import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { UserRoleEnum } from "../entities/user-role.enum";

export class AddUserDto {
    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;  

    @IsNotEmpty()
    @IsString()
    roles: UserRoleEnum; 
    
    @IsOptional()
    @IsEmail()
    email: string;
}
