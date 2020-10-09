import { UpdateUserDto } from './dtos/update-user.dto';
import { UserSubscribeDto } from './dtos/userSubscribeDto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getMyUserProfile(user: any): Promise<UserEntity[]>;
    getFreeUsers(): Promise<UserEntity[]>;
    getUserById(id: number): Promise<UserEntity>;
    getAllUser(): Promise<UserEntity[]>;
    addUser(addUserDto: UserSubscribeDto): Promise<UserEntity>;
    updateUser(updateUserDto: UpdateUserDto, id: number): Promise<UserEntity>;
    removeUser(id: number): Promise<void>;
}
