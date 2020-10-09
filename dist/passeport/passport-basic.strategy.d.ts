import { AuthService } from "src/auth/auth.service";
declare const BasicStrat_base: new (...args: any[]) => any;
export declare class BasicStrat extends BasicStrat_base {
    private authService;
    constructor(authService: AuthService);
    validate(username: string, password: string): Promise<import("../user/entities/user.entity").UserEntity>;
}
export {};
