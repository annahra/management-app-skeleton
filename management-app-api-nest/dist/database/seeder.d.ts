import { UsersService } from '../users/users.service';
export declare class Seeder {
    private readonly usersService;
    constructor(usersService: UsersService);
    seed(): Promise<import("../users/interfaces/user.interface").User>;
}
