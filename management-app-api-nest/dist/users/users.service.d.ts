import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';
import { UserDto } from './dto/user.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findOneByEmail(email: string): Promise<User>;
    getAllUser(): Promise<User[]>;
    getAllTeachers(): Promise<User[]>;
    getUser(userID: any): Promise<User>;
    addUser(createUserDTO: UserDto): Promise<User>;
    updateUser(userID: any, data: any): Promise<User>;
    deleteUser(userID: any): Promise<any>;
}
