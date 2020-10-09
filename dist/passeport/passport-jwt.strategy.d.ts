import { Strategy } from 'passport-jwt';
import { PayloadInterface } from 'src/interfaces/payload.interface';
import { UserService } from 'src/user/user.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userService;
    constructor(userService: UserService);
    validate(payload: PayloadInterface): Promise<{
        id: number;
        username: string;
        email: string;
        roles: import("../user/entities/user-role.enum").UserRoleEnum;
    }>;
}
export {};
