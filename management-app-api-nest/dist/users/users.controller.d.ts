import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    addUser(res: any, createUserDto: UserDto): Promise<any>;
    getAllUser(res: any): Promise<any>;
    getAllTeacher(res: any): Promise<any>;
    getUser(res: any, userID: any): Promise<any>;
    updateUser(res: any, userID: any, createUserDto: UserDto): Promise<any>;
    deleteUser(res: any, userID: any): Promise<any>;
    uploadAvatar(userId: any, file: any, req: any, res: any): Promise<any>;
    getAvatar(fileId: any, res: any): Promise<any>;
}
