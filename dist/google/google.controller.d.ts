import { GoogleService } from './google.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: GoogleService);
    googleAuth(req: any): Promise<void>;
    googleAuthRedirect(req: any): "No user from google" | {
        message: string;
        user: any;
    };
}
