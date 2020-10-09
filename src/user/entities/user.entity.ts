
import { Exclude } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { UserRoleEnum } from "./user-role.enum";

@Entity('user')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    username: string;
    
    @Exclude()
    @Column()
    password: string;  

    @Column({
        nullable: true
    })
    email: string;

    @Column({
        type: 'enum',
        enum: UserRoleEnum, 
        default: UserRoleEnum.USER
    })
    roles: UserRoleEnum;
}
