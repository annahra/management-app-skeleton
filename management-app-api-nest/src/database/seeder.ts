import { UserDto } from './../users/dto/user.dto';
import { UsersService } from '../users/users.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Seeder {
  constructor(
    private readonly usersService: UsersService,
  ) {}
  
  async seed() {
    let user = await this.usersService.findOneByEmail('saimon@devdactic.com');

    if (!user) {
      let admin: UserDto = {
        first_name: 'Simon',
        last_name: 'Grimm',
        email: 'saimon@devdactic.com',
        password: '123456',
        role: 'PRINCIPAL'
      }
      return this.usersService.addUser(admin);
    }
  }
}