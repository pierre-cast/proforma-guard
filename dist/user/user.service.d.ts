import { Repository } from 'typeorm';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UserSubscribeDto } from './dtos/userSubscribeDto';
import { UserEntity } from './entities/user.entity';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<UserEntity>);
    getAllUser(): Promise<UserEntity[]>;
    getFreeUsers(): Promise<UserEntity[]>;
    getMyUserProfile(id: number): Promise<UserEntity[]>;
    getUserById(id: number): Promise<UserEntity>;
    getUserByName(username: string): Promise<UserEntity>;
    updateUser(id: number, user: UpdateUserDto): Promise<UserEntity>;
    removeUser(id: number): Promise<void>;
    subscribe(userData: UserSubscribeDto): Promise<UserEntity>;
}
